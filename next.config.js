const withImages = require("next-images");
const withSass = require("@zeit/next-sass");
const withTM = require("next-transpile-modules");
const withVideos = require("next-videos");
module.exports = withVideos(
    withImages(
        withSass(
            withTM({
                transpileModules: ["somemodule", "and-another"]
            })
        )
    )
);
