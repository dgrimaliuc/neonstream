const config = {
  dev: {
    api: 'http://localhost:80',
  },
  prod: {
    api: 'https://neon-stream.online',
  },
};

export default config[window.location.host.includes('localhost') ? 'dev' : 'prod'];
