import config from '../../../config';
import { getYear, isObjEmpty } from '../../../utils';
import { createDoc, parseStrDoc, parseDoc } from '../../../utils/docUtils';
import { getTranslations } from '../../props';
import {
  cleanTitle,
  containsTitle,
  equalYears,
  isInYearRange,
  isPartOf,
  parsePlaylist,
  req,
} from '../utils';

export class Rezka2 {
  #headers = {};
  extract = {};
  object = null;
  select_title = '';
  corsProxy = config.proxy.cors;
  proxyResource = config.proxy.cors;
  searchUrl = 'https://hdrezka.ag/engine/ajax/search.php';

  #orig = () => this.object.original_title || this.object.original_name;
  #ru_title = () => {
    const translations = getTranslations(this.object);
    return translations.data.name || translations.title;
  };
  #alt_title = () => this.object.title || this.object.name;

  constructor(object, extract) {
    this.object = object;
    if (extract) {
      this.extract = extract;
    }
  }

  #streamUrl = 'https://hdrezka.ag/ajax/get_cdn_series/?t=';

  #parseLinks(links) {
    return links.map(function (l) {
      var link = parseStrDoc(l, 'a');
      var enty = parseStrDoc(l, '.enty');
      var title = enty.textContent.trim() || '';
      var alt_titl = link.textContent.trim() || '';
      var orig_title = '';
      var year;
      var found = alt_titl.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)?\)/);
      var type = link.href.match(/(animation|films|series|cartoons)/g)[0];

      if (found) {
        if (found[1]) {
          var found_alt = found[1].match(/^([^а-яА-ЯёЁ]+),/);
          if (found_alt) orig_title = found_alt[1].trim();
        }

        year = parseInt(found[2]);
      }

      return {
        year,
        type,
        title,
        orig_title,
        link: link.href || '',
        film_id: link.href ? /\/(\d+)/g.exec(link.href)[1] : '',
      };
    });
  }

  combineItems(items1, items2) {
    const commonArr = items1.concat(items2);
    const films = commonArr.reduce((a, b) => {
      a[b.film_id] = b;
      return a;
    }, {});
    return Object.values(films);
  }

  #extractSearchItems = async (links, query, searchAll) => {
    if (links && links.length) {
      let orig = this.#orig();
      let alt_title = this.#alt_title();
      let ru_title = this.#ru_title();
      var items = this.#parseLinks(links);

      const tvSeasons = items
        .map(c => {
          return { ...c, season: `${c.title}${c.orig_title}`.match(/(TV|ТВ)-\d+/) };
        })
        .filter(it => it.season !== null);
      const isMultiSeasonSeries = tvSeasons.length > 0;

      if (isMultiSeasonSeries && searchAll) {
        const maxYear = Math.max(...tvSeasons.map(c => c.year));
        const lastDate = getYear(this.object.last_air_date || new Date().toISOString());
        const yearsToSearch = Array.from(
          { length: lastDate - maxYear },
          (_, i) => i + maxYear + 1,
        ).join(' ');
        const { links } = await this.#base_search(`${query.title} ${yearsToSearch}`);
        const extraItems = this.#parseLinks(links);
        items = this.combineItems(items, extraItems);
        console.log('TV', items);
      }
      var cards = items;

      console.log('Results', cards);

      if (cards.length && (orig || alt_title || ru_title)) {
        cards = cards.filter(c => {
          return (
            this.validateYear(c.year, query) &&
            this.validateType(c.type, query) &&
            this.validateTitle(c, [ru_title, alt_title, orig])
          );
        });
      }
      if (cards.length === 1 || !isMultiSeasonSeries) {
        return await this.getPage(cards[0].link);
      } else if (cards.length >= 1) {
        let season_number = this.object.season_number ?? 0;
        if (this.object.number_of_episodes) {
          this.extract.seasons = Object.groupBy(cards, c => {
            const meta = /(TV|ТВ)-(\d+)/g.exec(`${c.orig_title} ${c.title}`);
            return meta ? meta[2] : null;
          });
          delete this.extract.seasons.null;
        }

        if (this.object.season_number !== 0 && isObjEmpty(this.extract.seasons)) {
          return await this.getPage(cards[0].link);
        } else {
          if (this.extract.seasons && !this.object.season_number) {
            season_number = 1;
          }
          let season_card = this.extract.seasons[season_number];
          if (!season_card) return; // Season not found
          return await this.getPage(season_card[0].link);
        }
      }
    }
  };

  validateYear(found, query) {
    return this.object.number_of_episodes
      ? isInYearRange(found, query.first_air_date, query.last_air_date)
      : equalYears(found, query.search_year);
  }

  validateType(found, query) {
    if (query.type === 'tv') {
      query.type = 'series';
    } else if (query.type === 'movie') {
      query.type = 'films';
    }

    return found === query.type;
  }
  validateTitle(c, titles) {
    return titles.some(title => {
      return containsTitle(c.orig_title, title) || isPartOf(c.orig_title, title);
    });
  }

  async search() {
    var movie_search_date = this.object.search_date || this.object.release_date;
    var search_year = this.object.media_type === 'tv' ? '' : ' ' + getYear(movie_search_date);

    this.select_title = this.#ru_title() + search_year;
    const query = {
      title: cleanTitle(this.select_title),
      type: this.object.media_sub_type || this.object.media_type,
      search_year,
      first_air_date: this.object.first_air_date ? getYear(this.object.first_air_date) : null,
      last_air_date: this.object.last_air_date ? getYear(this.object.last_air_date) : null,
    };

    await this.#query_search(query);
    console.log('Extract', this.extract);
    return this.extract;
  }

  async #base_search(q) {
    var queryData = `q=${encodeURIComponent(q)}`;

    let response = await req(`${this.corsProxy}${this.searchUrl}?${queryData}`, {
      headers: this.#headers,
    });

    response = response.replace(/\n/g, '');
    let links = response.match(/<li><a href=.*?<\/li>/g);
    let searchAll = response.match(/<a class="b-search__live_all".*?<\/a>/);
    return { links, searchAll };
  }

  async #query_search(query) {
    // const id = this.object.imdb_id || this.object.external_ids.imdb_id;
    const { links, searchAll } = await this.#base_search(query.title);

    await this.#extractSearchItems(links, query, searchAll);
  }

  async getPage(url) {
    const response = await req(`${this.corsProxy}${url}`, {
      headers: this.#headers,
    });
    this.extractData(response);
  }

  /**
   * Get film info
   * @param {String} str
   */
  extractData(str) {
    this.extract.voice = [];
    this.extract.season = [];
    this.extract.episode = [];
    this.extract.voice_data = {};
    this.extract.is_series = false;
    this.extract.film_id = '';
    this.extract.favs = '';
    str = str.replace(/\n/g, '');
    var translation = str.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
    var cdnSeries = str.match(
      /\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/,
    );
    var cdnMovie = str.match(
      /\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/,
    );
    var devVoiceName;

    if (translation) {
      devVoiceName = createDoc(translation[1]).body.textContent.trim();
    }

    if (!devVoiceName) devVoiceName = 'Оригинал';
    var defVoice;

    if (cdnSeries) {
      this.extract.is_series = true;
      this.extract.film_id = cdnSeries[1];
      defVoice = {
        name: devVoiceName,
        id: cdnSeries[2],
      };
    } else if (cdnMovie) {
      this.extract.film_id = cdnMovie[1];
      defVoice = {
        name: devVoiceName,
        id: cdnMovie[2],
        is_camrip: cdnMovie[3],
        is_ads: cdnMovie[4],
        is_director: cdnMovie[5],
      };
    }

    var voices = str.match(/(<ul id="translators-list".*?<\/ul>)/);

    if (voices) {
      var select = createDoc(voices[1]);
      let extract = this.extract;
      parseDoc(select, '.b-translator__item', true).forEach(function (el) {
        var title = (el.title || el.textContent || '').trim();
        parseDoc(el, 'img', true).forEach(innerEl => {
          var lang = (innerEl.title || innerEl.alt || '').trim();
          if (lang && title.indexOf(lang) === -1) title += ' (' + lang + ')';
        });

        extract.voice.push({
          name: title,
          id: el.getAttribute('data-translator_id'),
          is_camrip: el.getAttribute('data-camrip'),
          is_ads: el.getAttribute('data-ads'),
          is_director: el.getAttribute('data-director'),
        });
      });
    }

    if (!this.extract.voice.length && defVoice) {
      this.extract.voice.push(defVoice);
    }

    var favs = str.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
    if (favs) this.extract.favs = favs[1];
    var blocked = str.match(/class="b-player__restricted__block_message"/);
    if (blocked) this.extract.blocked = true;
  }

  async getStream(element, error) {
    var url = this.#streamUrl + Date.now();
    var postdata = 'id=' + encodeURIComponent(this.extract.film_id);

    if (this.extract.is_series) {
      postdata += '&translator_id=' + encodeURIComponent(element.id);
      postdata += '&season=' + encodeURIComponent(element.season_number);
      postdata += '&episode=' + encodeURIComponent(element.episode_number);
      postdata += '&favs=' + encodeURIComponent(this.extract.favs);
      postdata += '&action=get_stream';
    } else {
      postdata += '&translator_id=' + encodeURIComponent(element.id);
      postdata += '&is_camrip=' + encodeURIComponent(element.is_camrip);
      postdata += '&is_ads=' + encodeURIComponent(element.is_ads);
      postdata += '&is_director=' + encodeURIComponent(element.is_director);
      postdata += '&favs=' + encodeURIComponent(this.extract.favs);
      postdata += '&action=get_movie';
    }
    const ob = this;
    return await this.#network_call(url, { body: postdata }, async function (json) {
      if (json.url) {
        var video = ob.#decode(json.url),
          file = '',
          quality = false;
        var items = await ob.extractItems(video);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
          var preferably = (localStorage.getItem('video_quality_default') || '1080') + 'p';
          if (quality[preferably]) file = quality[preferably];
          else if (preferably === '1440p' && quality['2K']) file = quality['2K'];
          else if (preferably === '2160p' && quality['4K']) file = quality['4K'];
        }

        if (file) {
          element.stream = file;
          element.qualitys = quality;
          element.subtitles = ob.parseSubtitles(json.subtitle);
          return element;
        } else error && error();
      }
    });
  }

  #decode(data) {
    if (data.charAt(0) !== '#') return data;

    var enc = function enc(str) {
      return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
          return String.fromCharCode('0x' + p1);
        }),
      );
    };

    var dec = function dec(str) {
      return decodeURIComponent(
        atob(str)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join(''),
      );
    };

    var trashList = [
      '$$!!@$$@^!@#$$@',
      '@@@@@!##!^^^',
      '####^!!##!@@',
      '^^^!@##!!##',
      '$$#!!@#!@##',
    ];
    var x = data.substring(2);
    trashList.forEach(function (trash) {
      x = x.replace('//_//' + enc(trash), '');
    });

    try {
      x = dec(x);
    } catch (e) {
      x = '';
    }

    return x;
  }

  /**
   * Получить потоки
   * @param {String} str
   * @returns array
   */
  async extractItems(str) {
    if (!str) return [];

    try {
      var items = parsePlaylist(str).map(item => {
        var int_quality = NaN;
        var quality = item.label.match(/(\d\d\d+)p/);

        if (quality) {
          int_quality = parseInt(quality[1]);
        } else {
          quality = item.label.match(/(\d+)K/);

          if (quality) {
            int_quality = parseInt(quality[1]) * 1000;
          }
        }

        var links = item.links.filter(url => /\.m3u8$/i.test(url));

        if (!links.length) links = item.links;
        var link = links && links.length > 0 ? links[0].replace('http://', 'https://') : '';

        return {
          label: item.label,
          quality: int_quality,
          file: link,
        };
      });
      items.sort((a, b) => {
        if (b.quality > a.quality) return 1;
        if (b.quality < a.quality) return -1;
        if (b.label > a.label) return 1;
        if (b.label < a.label) return -1;
        return 0;
      });
      return items;
    } catch (e) {}

    return [];
  }

  parseSubtitles(str) {
    var subtitles = [];

    if (str) {
      subtitles = parsePlaylist(str).map(item => {
        var link = item.links[0] || '';

        link.replace('http://', 'https://');

        return {
          label: item.label,
          url: link,
        };
      });
    }

    return subtitles.length ? subtitles : false;
  }

  #network_call = async (url, options, callback, error) => {
    const response = await req(`${this.proxyResource}${url}`, {
      method: 'POST',
      ...options,
      headers: {
        ...options.headers,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      responseType: 'json',
    });
    try {
      if (callback) {
        return await callback(response);
      }
    } catch (e) {
      error();
    }
  };
}
