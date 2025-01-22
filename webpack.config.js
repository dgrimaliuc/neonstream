const path = require('path');

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      components: path.resolve(__dirname, 'src/components'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
  },
};
