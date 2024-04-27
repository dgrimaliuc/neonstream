import config from "../../../config";
import { getYear } from "../../../utils";
import { createDoc, parseStrDoc, parseDoc } from "../../../utils/docUtils";
import { cleanTitle, containsTitle, equalYears, isPartOf, parsePlaylist, req } from "../utils";

export class Rezka2 {
  #headers = {
    // Origin: window.location.origin,
    "bypass-origin-check": "Ignore",
  };
  extract = {};
  object = null;
  select_title = "";
  corsProxy = config.proxy.cors;
  // corsProxy = "http://usecors.nodeapp.workers.dev/";
  proxyResource = config.proxy.cors;
  // proxyResource = "http://usecors.nodeapp.workers.dev/";
  searchUrl = "https://hdrezka.ag/engine/ajax/search.php";
  choice = {
    season: 0,
    voice: 0,
    voice_name: "",
  };

  #orig = () => this.object.original_title || this.object.original_name;

  constructor(object) {
    this.object = object;
  }

  // #embed = this.host + '/';
  #streamUrl = "https://hdrezka.ag/ajax/get_cdn_series/?t=";
  // #embedResource = this.proxyResource + this.host + '/';

  async #extractSearchItems(links, query) {
    if (links && links.length) {
      var is_sure = links.length === 1;
      let orig = this.#orig();
      var items = links.map(function (l) {
        var link = parseStrDoc(l, "a");
        var enty = parseStrDoc(l, ".enty");
        var title = enty.textContent.trim() || "";
        var alt_titl = link.textContent.trim() || "";
        var orig_title = "";
        var year;
        var found = alt_titl.match(/\((.*,\s*)?\b(\d{4})(\s*-\s*[\d.]*)?\)/);

        if (found) {
          if (found[1]) {
            var found_alt = found[1].match(/^([^а-яА-ЯёЁ]+),/);
            if (found_alt) orig_title = found_alt[1].trim();
          }

          year = parseInt(found[2]);
        }

        return {
          year,
          title,
          orig_title,
          link: link.href || "",
        };
      });
      var cards = items;

      console.log("Results", cards);

      if (cards.length) {
        if (orig) {
          var tmp = cards.filter(c => {
            return (
              equalYears(c.year, query.search_year) &&
              (containsTitle(c.orig_title, orig) || isPartOf(c.orig_title, orig))
            );
          });

          if (tmp.length) {
            cards = tmp;
            is_sure = true;
          }
        }
      }

      if (cards.length >= 1 && is_sure) {
        return await this.getPage(cards[0].link);
      }
    }
  }

  async search() {
    var search_date =
      this.object.search_date ||
      (!this.object.clarification &&
        (this.object.release_date || this.object.first_air_date || this.object.last_air_date)) ||
      "0000";

    var search_year = getYear(search_date) || "";
    this.select_title = this.#orig() + " " + search_year;
    const query = {
      title: cleanTitle(this.select_title),
      search_year,
    };

    await this.#query_search(query);
    console.log("Extract", this.extract);
    return this.extract;
  }

  async #query_search(query) {
    const id = this.object.imdb_id || this.object.external_ids.imdb_id;

    var queryData = `q=${encodeURIComponent("+" + id)}`;

    let response = await req(`${this.corsProxy}${this.searchUrl}?${queryData}`, {
      headers: this.#headers,
    });

    response = response.replace(/\n/g, "");
    let links = response.match(/<li><a href=.*?<\/li>/g);

    await this.#extractSearchItems(links, query);
  }

  async getPage(url) {
    const response = await req(`${this.corsProxy}${url}`, {
      headers: this.#headers,
    });
    this.extractData(response);
    await this.getEpisodes();
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
    this.extract.film_id = "";
    this.extract.favs = "";
    str = str.replace(/\n/g, "");
    var translation = str.match(/<h2>В переводе<\/h2>:<\/td>\s*(<td>.*?<\/td>)/);
    var cdnSeries = str.match(
      /\.initCDNSeriesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/
    );
    var cdnMovie = str.match(
      /\.initCDNMoviesEvents\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,/
    );
    var devVoiceName;

    if (translation) {
      devVoiceName = createDoc(translation[1]).body.textContent.trim();
    }

    if (!devVoiceName) devVoiceName = "Оригинал";
    var defVoice, defSeason, defEpisode;

    if (cdnSeries) {
      this.extract.is_series = true;
      this.extract.film_id = cdnSeries[1];
      defVoice = {
        name: devVoiceName,
        id: cdnSeries[2],
      };
      defSeason = {
        name: "Сезон " + cdnSeries[3],
        id: cdnSeries[3],
      };
      defEpisode = {
        name: "Серия " + cdnSeries[4],
        season_id: cdnSeries[3],
        episode_id: cdnSeries[4],
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
      parseDoc(select, ".b-translator__item", true).forEach(function (el) {
        var title = (el.title || el.textContent || "").trim();
        parseDoc(el, "img", true).forEach(innerEl => {
          var lang = (innerEl.title || innerEl.alt || "").trim();
          if (lang && title.indexOf(lang) === -1) title += " (" + lang + ")";
        });

        extract.voice.push({
          name: title,
          id: el.getAttribute("data-translator_id"),
          is_camrip: el.getAttribute("data-camrip"),
          is_ads: el.getAttribute("data-ads"),
          is_director: el.getAttribute("data-director"),
        });
      });
    }

    if (!this.extract.voice.length && defVoice) {
      this.extract.voice.push(defVoice);
    }

    if (this.extract.is_series) {
      var seasons = str.match(/(<ul id="simple-seasons-tabs".*?<\/ul>)/);

      if (seasons) {
        var _select = createDoc(seasons[1]);

        parseDoc(_select, ".b-simple_season__item", true).forEach(el => {
          this.extract.season.push({
            name: el.textContent,
            id: el.getAttribute("data-tab_id"),
          });
        });
      }

      if (!this.extract.season.length && defSeason) {
        this.extract.season.push(defSeason);
      }

      var episodes = str.match(/(<div id="simple-episodes-tabs".*?<\/div>)/);

      if (episodes) {
        var _select2 = createDoc(episodes[1]);

        parseDoc(_select2, ".b-simple_episode__item", true).forEach(el => {
          this.extract.episode.push({
            name: el.textContent,
            season_id: el.getAttribute("data-season_id"),
            episode_id: el.getAttribute("data-episode_id"),
          });
        });
      }

      if (!this.extract.episode.length && defEpisode) {
        this.extract.episode.push(defEpisode);
      }
    }

    var favs = str.match(/<input type="hidden" id="ctrl_favs" value="([^"]*)"/);
    if (favs) this.extract.favs = favs[1];
    var blocked = str.match(/class="b-player__restricted__block_message"/);
    if (blocked) this.extract.blocked = true;
  }

  filterVoice() {
    var voice = this.extract.is_series
      ? this.extract.voice.map(v => {
          return v.name;
        })
      : [];
    if (!voice[this.choice.voice]) this.choice.voice = 0;

    if (this.choice.voice_name) {
      var inx = voice.indexOf(this.choice.voice_name);
      if (inx === -1) this.choice.voice = 0;
      else if (inx !== this.choice.voice) {
        this.choice.voice = inx;
      }
    }
  }

  async getEpisodes() {
    if (this.extract.is_series) {
      this.filterVoice();

      if (this.extract.voice[this.choice.voice]) {
        var translator_id = this.extract.voice[this.choice.voice].id;
        var data = this.extract.voice_data[translator_id];

        if (data) {
          this.extract.season = data.season;
          this.extract.episode = data.episode;
        } else {
          var url = this.#streamUrl + Date.now();
          var postdata = "id=" + encodeURIComponent(this.extract.film_id);
          postdata += "&translator_id=" + encodeURIComponent(translator_id);
          postdata += "&favs=" + encodeURIComponent(this.extract.favs);
          postdata += "&action=get_episodes";
          let ob = this;
          return await this.#network_call(url, { body: postdata }, json => {
            ob.extractEpisodes(json, translator_id);
          });
        }
      }
    }
  }

  extractEpisodes(json, translator_id) {
    var data = {
      season: [],
      episode: [],
    };

    if (json.seasons) {
      var select = createDoc("<ul>" + json.seasons + "</ul>");
      parseDoc(select, ".b-simple_season__item", true).forEach(el => {
        data.season.push({
          name: el.textContent,
          id: el.getAttribute("data-tab_id"),
        });
      });
    }

    if (json.episodes) {
      var _select3 = createDoc("<div>" + json.episodes + "</div>");

      parseDoc(_select3, ".b-simple_episode__item", true).forEach(el => {
        data.episode.push({
          translator_id,
          name: el.textContent,
          season_id: el.getAttribute("data-season_id"),
          episode_id: el.getAttribute("data-episode_id"),
        });
      });
    }

    this.extract.voice_data[translator_id] = data;
    this.extract.season = data.season;
    this.extract.episode = data.episode;
  }

  async getStream(element, error) {
    var url = this.#streamUrl + Date.now();
    var postdata = "id=" + encodeURIComponent(this.extract.film_id);

    if (this.extract.is_series) {
      postdata += "&translator_id=" + encodeURIComponent(element.translator_id);
      postdata += "&season=" + encodeURIComponent(element.season_id);
      postdata += "&episode=" + encodeURIComponent(element.episode_id);
      postdata += "&favs=" + encodeURIComponent(this.extract.favs);
      postdata += "&action=get_stream";
    } else {
      postdata += "&translator_id=" + encodeURIComponent(element.id);
      postdata += "&is_camrip=" + encodeURIComponent(element.is_camrip);
      postdata += "&is_ads=" + encodeURIComponent(element.is_ads);
      postdata += "&is_director=" + encodeURIComponent(element.is_director);
      postdata += "&favs=" + encodeURIComponent(this.extract.favs);
      postdata += "&action=get_movie";
    }
    const ob = this;
    return await this.#network_call(url, { body: postdata }, async function (json) {
      if (json.url) {
        var video = ob.#decode(json.url),
          file = "",
          quality = false;
        var items = await ob.extractItems(video);

        if (items && items.length) {
          file = items[0].file;
          quality = {};
          items.forEach(function (item) {
            quality[item.label] = item.file;
          });
          var preferably = (localStorage.getItem("video_quality_default") || "1080") + "p";
          if (quality[preferably]) file = quality[preferably];
          else if (preferably === "1440p" && quality["2K"]) file = quality["2K"];
          else if (preferably === "2160p" && quality["4K"]) file = quality["4K"];
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
    if (data.charAt(0) !== "#") return data;

    var enc = function enc(str) {
      return btoa(
        encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
          return String.fromCharCode("0x" + p1);
        })
      );
    };

    var dec = function dec(str) {
      return decodeURIComponent(
        atob(str)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    };

    var trashList = [
      "$$!!@$$@^!@#$$@",
      "@@@@@!##!^^^",
      "####^!!##!@@",
      "^^^!@##!!##",
      "$$#!!@#!@##",
    ];
    var x = data.substring(2);
    trashList.forEach(function (trash) {
      x = x.replace("//_//" + enc(trash), "");
    });

    try {
      x = dec(x);
    } catch (e) {
      x = "";
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
        var link = links && links.length > 0 ? links[0].replace("http://", "https://") : "";

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
        var link = item.links[0] || "";

        link.replace("http://", "https://");

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
      method: "POST",
      ...options,
      headers: {
        ...options.headers,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      responseType: "json",
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
