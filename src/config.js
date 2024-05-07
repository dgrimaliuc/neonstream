const CORST_PORT = 4000;

// Backup proxy
// 'https://cors557.deno.dev/';
// 'https://cors.nb557.workers.dev:8443/';
// 'https://cors.kp556.workers.dev:8443/';

const config = {
  dev: {
    proxy: {
      cors: `http://localhost:${CORST_PORT}/`,
    },
  },
  prod: {
    proxy: {
      cors: 'https://usecors.nodeapp.workers.dev/',
    },
  },
};

export default config[window.location.host.includes('localhost') ? 'dev' : 'prod'];
