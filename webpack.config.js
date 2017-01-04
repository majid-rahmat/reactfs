module.exports = {
    entry: "./index.jsx",
    output: {
        path: __dirname,
        filename: "./bundled/bundle.js"
    },
module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
}
};