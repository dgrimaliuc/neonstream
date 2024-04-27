const CORST_PORT = 4000;

const config = {
  dev: {
    proxy: {
      cors: `http://localhost:${CORST_PORT}/`,
    },
  },
  prod: {
    proxy: {
      cors: "https://usecors.nodeapp.workers.dev/",
    },
  },
};

export default config[window.location.host.includes("localhost") ? "dev" : "prod"];
