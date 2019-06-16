const path = require("path");

/**
 * Webpack config for bundling our Javascript and SASS
 */
const config = {
    watch: true,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: []
    }
};

module.exports = config;