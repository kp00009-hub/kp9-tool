const path = require("path")

module.exports = {
    entry:path.resolve(__dirname,'src/index.js'),
    output:{
        path:__dirname + "/dist",
        filename:'index.js',
        library: {
          name: 'tool',
          type: 'umd',
          auxiliaryComment: 'Test Comment',
        },
    },
    mode:'production',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env'],
                    plugins: ['@babel/plugin-proposal-object-rest-spread']
                  }
                }
              }
              
        ]
    }
}