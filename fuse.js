const { FuseBox, CSSPlugin,
        PostCSSPlugin, UglifyJSPlugin }         = require("fuse-box");

const colorFunction                             = require("postcss-color-function");
const autoprefixer = require('autoprefixer');

const fuse = FuseBox.init({
    homeDir:    "src",
    output:     "dist/$name.js",
    cache:      false,
    log:        true,
    debug:      true,
    // hash:       true
    plugins : [
        [
            PostCSSPlugin(
                [ colorFunction, autoprefixer ]
            ),
            CSSPlugin({
                group: "bundle.css"
            })
        ],
        UglifyJSPlugin()
    ]
});
fuse.bundle("app")
    .instructions(`>index.ts`);

fuse.run();