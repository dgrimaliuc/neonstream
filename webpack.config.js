const path = require('path');

module.exports = {
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss', '.css'],
  },
};
