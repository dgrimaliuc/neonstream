import { req } from './utils';

// Backup proxy
// 'https://cors557.deno.dev/';
// 'https://cors.nb557.workers.dev:8443/';
// 'https://cors.kp556.workers.dev:8443/';

export async function getMyIp() {
  // const ip = await req('https://checkip.amazonaws.com/');
  const response = await req('https://www.cloudflare.com/cdn-cgi/trace');
  const ip = response.match(/ip=.+/g)[0].split('=')[1];
  console.log('ip', ip);
  return ip;
}

export async function getMyIpInAdvanced() {
  const { ip } = await req(
    'https://api.ipdata.co/?api-key=bea8c688db1e057b4708feff075b245f32e20df1b34102836852c940'
  );
  return ip;
}

let ip = null;
export async function getProxy(name) {
  if (ip === null) {
    ip = await getMyIp();
  }

  var proxy = 'https://cors557.deno.dev/';
  var user_proxy2 = proxy + (ip ? 'ip' + ip + '/' : '');

  if (name === 'filmix')
    return window.location.protocol === 'https:' ? user_proxy2 : '';

  if (name === 'rezka') return proxy;
  if (name === 'rezka2') return user_proxy2;

  return '';
}
