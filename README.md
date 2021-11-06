# Getting started

## Basic configuration

- Create project dir
- Enter to project dir and run

```bash
    $ git init && npm init -y
```

- Add git ignore. Use gitignore.io (easy way)
- Install react and react-dom dependencies

```bash
$ npm i react react-dom
```

- Create project struture folders

- Add babel dependencies

```bash
$ npm install @babel/core @babel/preset-env @babel/preset-react
```

- Add webpack dependencies

```bash
  $ npm install webpack webpack-cli webpack-dev-server
```

- Add Html plugins

```bash
$ npm install babel-loader html-loader html-webpack-plugin
```

### Set babel and webpack configuration

- Create .babelrc and add:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

- Create webpack.config.js and add:

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};
```

## Adding styles

### Adding Sass

```bash
$ npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
```

- Add to webpack the new pluging
