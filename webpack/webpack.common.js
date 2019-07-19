const Path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const fs = require('fs')

function generateHtmlPlugins (templateDir, lang) {
  const templateFiles = fs.readdirSync(Path.resolve(__dirname, templateDir + '/' + lang));
  return templateFiles.map(item => {
    // Split names and extension
    const parts = item.split('.');
    const name = parts[0];
    const extension = parts[1];
    const directory = name;
    return new HtmlWebpackPlugin({
      filename: `${lang}/${directory}/index.html`,
      template: Path.resolve(__dirname, `${templateDir}/${lang}/${name}.${extension}`)
    });
  });
}

// We will call the function like this:
const htmlPluginsEn = generateHtmlPlugins('../src/templates/views', 'en');
const htmlPluginsFr = generateHtmlPlugins('../src/templates/views', 'fr');

module.exports = {
  entry: {
    app: Path.resolve(__dirname, '../src/scripts/index.js'),
    styles: Path.resolve(__dirname, '../src/styles/index.scss'),
  },
  output: {
    path: Path.join(__dirname, '../docs'),
    filename: 'js/[name].js',
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([
      { from: Path.resolve(__dirname, '../public'), to: '.' },
      { from: Path.resolve(__dirname, '../assets'), to: 'assets' },
    ]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: Path.resolve(__dirname, '../src/templates/views/en/dismissed_narratives.pug'),
    }),
  ].concat(htmlPluginsEn).concat(htmlPluginsFr),
  resolve: {
    alias: {
      '~': Path.resolve(__dirname, '../src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],
      },
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto',
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
          },
        },
      },
    ],
  },
};
