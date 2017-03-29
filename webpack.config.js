var path = require('path');

module.exports = function(env) {
    var config = {
        entry: './src/main.tsx',
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'public')
        },
        resolve: {
            extensions: [
                '.ts',
                '.tsx',
                '.js',
                '.jsx'
            ]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                }
            ]
        }
    };

    if (env != 'prod') {
        config.module.rules.push({
            enforce: 'pre',
            test: /(\.jsx?$|\.tsx?$)/,
            use: 'source-map-loader'
        });

        config.devtool = 'inline-source-map';

        config.devServer = {
            contentBase: path.join(__dirname, 'public'),
            compress: true,
            port: 9000
        };
    }

    return config;
};