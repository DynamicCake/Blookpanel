const path = require('path');
const { merge } = require('webpack-merge');
const common = require("./webpack.common.js")

module.exports = merge(common, {
    mode: "production",
    output: {
        path: path.resolve(__dirname, 'out'),
        filename: 'panel.js'
    },
});

console.log("prod")