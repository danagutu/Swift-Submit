const path = require('path');

module.exports = {
  entry: './firebaseConfig.js', // Path to your Firebase config file
  output: {
    filename: 'firebase-bundle.js',  // Bundled file Webpack will create
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
