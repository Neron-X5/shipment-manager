const webpackMerge = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = () => {
  let envConfig;

  if (!process.env.NODE_ENV) {
    envConfig = require("./webpack-build-utils/webpack.development");
  } else {
    envConfig = require(`./webpack-build-utils/webpack.${
      process.env.NODE_ENV
    }`);
  }
  return webpackMerge({ mode: process.env.NODE_ENV }, commonConfig, envConfig);
};
