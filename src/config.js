// Backup proxy
// 'https://cors557.deno.dev/';
// 'https://cors.nb557.workers.dev:8443/';
// 'https://cors.kp556.workers.dev:8443/';

const config = {
  dev: {
    proxy: {
      // cors: `https://188.138.191.203/cors/`,
      cors: `http://localhost:4000/`,
      // cors: 'http://localhost:4040/cors/',
    },
  },
  prod: {
    proxy: {
      // cors: '',
      cors: 'https://188.138.191.203/cors/',
    },
  },
};

export default config[window.location.host.includes('localhost') ? 'dev' : 'prod'];
