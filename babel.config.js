module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                modules: "commonjs", // принудительно преобразуем import в require
                targets: {
                    browsers: ["> 0.25%", "not dead"],
                },
            },
        ],
    ],
};
