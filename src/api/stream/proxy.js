import { req } from './utils';

export async function getMyIp() {
  const { ip } = await req('https://api.ipify.org/?format=json');
  return ip;
}

let ip = null;

export async function getProxy(name) {
  if (ip === null) {
    ip = await getMyIp();
  }

  var proxy1 =
    (window.location.protocol === 'https:' ? 'https://' : 'http://') +
    'prox.lampa.stream/';
  var proxy2 = 'https://cors.nb557.workers.dev:8443/';
  var proxy3 = 'https://cors557.deno.dev/';

  var user_proxy2 = proxy2 + (ip ? 'ip' + ip + '/' : '');
  var user_proxy3 = proxy3 + (ip ? 'ip' + ip + '/' : '');
  var alt_proxy = !!localStorage.getItem('online_mod_proxy_other')
    ? user_proxy2
    : proxy1;

  if (name === 'filmix')
    return window.location.protocol === 'https:' ? user_proxy2 : '';
  if (name === 'svetacdn') return '';
  if (name === 'allohsacdn') return user_proxy3;

  if (name === 'rezka') return alt_proxy;
  if (name === 'rezka2') return user_proxy2;
  if (name === 'kinobase') return user_proxy3;
  if (name === 'cdnmovies') return user_proxy3;
  if (name === 'videodb') return user_proxy2;
  if (name === 'zetflix') return user_proxy2;
  if (name === 'redheadsound') return user_proxy2;
  if (name === 'anilibria') return alt_proxy;
  if (name === 'kodik') return user_proxy3;
  if (name === 'kinopub') return user_proxy2;

  return '';
}
