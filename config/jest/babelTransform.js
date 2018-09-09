"use strict";

const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  presets: [
    require.resolve("@babel/preset-react"),
    require.resolve("@babel/preset-env")
  ],
  plugins: [
    require.resolve("babel-plugin-styled-components"),
    require.resolve("@babel/plugin-syntax-dynamic-import")
  ]
});
