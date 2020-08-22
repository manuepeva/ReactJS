const path = require('path');

module.exports = {
    mode: "development",
    devtool: "none",
    entry: "./src/index.js",
    output: {
        filename: "test.js",
        path: path.resolve(__dirname, "laNovel")
    },
    module: {
        rules: [
            {
                test: /\jsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css$/,
                use: ["css-loader"]
            },
        ],
    },


};  