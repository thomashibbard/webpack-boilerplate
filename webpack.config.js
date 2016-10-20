var path = require('path');
var autoprefixer = require('autoprefixer');
var precss = require('precss');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


const config = {
	//where webpack looks to build js bundles
	'entry': {
		//entry points for bundle
		//eval ltr => shims and polyfills first
		'app': ['babel-polyfill', './source/app']
	},
	//output bundles webpack generates
	'output': {
		//where bundle will be saved
		'path': './build',
		//templated [name] string will be replaced with 'app'
		'filename': '[name]-bundle.js'
	},
	//sourcemaps (etc?)
	'devtool': 'source-map',
	//loaders for static assets
	'module': {
	  'loaders': [
	    {
	      'test': /\.js$/,
	      'exclude': /(node_modules|bower_components)/,
	      'loader': 'babel', // 'babel-loader' is also a valid name to reference
	      'loaders': 'babel?cacheDirectory',
	      // 'include':
	      'query': {
	        'presets': ['react', 'es2015']
	      }
	    }
	    // ,
     //  {
     //    test: /\.scss$/,
     //    include: path.resolve(process.cwd(), 'client/scss'),
     //    loaders: ["style", "css", "sass"]
     //  }
	  ]
	},
	//how require statements are treated in client-side code
	'resolve': {
		'extension': ['', '.js'],
		'modulesDirectories': ['node_modules']
	},

  plugins: [
    new BrowserSyncPlugin({
      // browse to http://localhost:3000/ during development,
      // ./public directory is being served
      'host': 'localhost',
      'port': 3000,
      'proxy': 'http://localhost:5000',
      // server: { baseDir: ['public'] }
    })
  ]
};

module.exports = config;


// module.exports = {
// 	'externals': {
// 		'react': 'React',
// 		'react-dom': 'ReactDOM',
// 	}
// };


