const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");
const withVideos = require("next-videos");
const withCSS = require("@zeit/next-css");
module.exports = withVideos(
  withImages(
    withSass(
      withCSS(
        withTM({
          transpileModules: ["somemodule", "and-another"]
        })
      )
    )
  )
);
