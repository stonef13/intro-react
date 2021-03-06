module.exports = {
  mode: 'development',
  entry: './first-component.js',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
