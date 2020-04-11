var webpack = require("webpack");
var path = require("path");

module.exports = {
		mode: "production",
		// many errors in webpack compiling depend on this address line: entry 
		entry: "/Users/ShervinGhermez/Desktop/rest-test/app/index.jsx",
		output: {
			path:"/Users/ShervinGhermez/Desktop/rest-test/server/public/react",
			filename: "bundle.js",
			publicPath: "public",
		},
		devServer:{
			inline: true,
			contentBase:'./',
			port: 3000,
		},



module: {
  rules: [
    {
      test: /\.m?jsx$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env','@babel/preset-react']
        }
      }
    },{
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
  ]
}



}
