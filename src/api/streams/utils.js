import { parse } from 'hls-parser';

export async function req(url, options) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Could not fetch data.');
  }
  const contentType = response.headers.get('content-type');
  const responseType = contentType.split(';')[0] || 'text';

  switch (options?.responseType || responseType) {
    default:
    case 'text':
      return await response.text();
    case 'json':
      return await response.json();
  }
}

export function cleanTitle(str) {
  return str.replace(/[\s.,:;’'`!?]+/g, ' ').trim();
}

export function containsTitle(actualTitle, expectedTitle) {
  if (!actualTitle || !expectedTitle) {
    return false;
  }
  // Remove
  console.log(actualTitle, expectedTitle);
  return actualTitle.toLowerCase().includes(expectedTitle.toLowerCase());
}

export function equalTitle(actualTitle, expectedTitle) {
  if (!actualTitle || !expectedTitle) {
    return false;
  }
  return actualTitle.toLowerCase() === expectedTitle.toLowerCase();
}

export function proxyStream(url, name) {
  if (url) {
    if (name === 'rezka2')
      return url.replace('//stream.voidboost.cc/', '//prx-ams.ukrtelcdn.net/');
    return 'https://apn.watch/' + url;
  }

  return url;
}

export function parsePlaylist(str) {
  var pl = [];

  try {
    if (str.charAt(0) === '[') {
      str
        .substring(1)
        .split(',[')
        .forEach(function (item) {
          if (item.endsWith(',')) item = item.substring(0, item.length - 1);
          var label_end = item.indexOf(']');

          if (label_end >= 0) {
            var label = item.substring(0, label_end);

            if (item.charAt(label_end + 1) === '{') {
              item
                .substring(label_end + 2)
                .split(';{')
                .forEach(function (voice_item) {
                  if (voice_item.endsWith(';'))
                    voice_item = voice_item.substring(0, voice_item.length - 1);
                  var voice_end = voice_item.indexOf('}');

                  if (voice_end >= 0) {
                    var voice = voice_item.substring(0, voice_end);
                    pl.push({
                      label: label,
                      voice: voice,
                      links: voice_item
                        .substring(voice_end + 1)
                        .split(' or ')
                        .filter(function (link) {
                          return link;
                        }),
                    });
                  }
                });
            } else {
              pl.push({
                label: label,
                links: item.substring(label_end + 1).split(' or '),
              });
            }
          }
        });
      pl = pl.filter((item) => item.links.length > 0);
    }
  } catch (e) {}

  return pl;
}

export async function getStreamDuration(url) {
  try {
    const response = await fetch(url);
    const text = await response.text();
    const playlist = parse(text);

    if (!playlist.segments.length || !playlist.targetDuration) return 0;

    if (!playlist.segments.length === 1) {
      return playlist.segments[0].duration;
    } else {
      const partDuration =
        playlist.targetDuration * playlist.segments.length - 1;
      return (
        partDuration + playlist.segments[playlist.segments.length - 1].duration
      );
    }
  } catch (e) {
    return 0;
  }
}
