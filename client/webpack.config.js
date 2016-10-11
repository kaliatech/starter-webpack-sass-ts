
const webpack = require("webpack");

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var node_dir = __dirname + '/node_modules';
//var node_dir = './node_modules';

module.exports = {
 entry: ['./src/app.ts'],
 output: {
  path: '../client-dist/js/',
  publicPath: "/static/js",
  filename: 'app.bundle.js',
  library: 'app'
 },
 externals: {
     // require("jquery") is external and available
     //  on the global var jQuery
     "jquery": "jQuery",
     "firebaseui": "firebaseui"
//     "bootstrap": "bootstrap"
 }, 
 resolve: {
  // Add `.ts` and `.tsx` as a resolvable extension.
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js'],
  alias: {
    'wolfy87-eventemitter': node_dir + '/wolfy87-eventemitter/EventEmitter.js',
  }
 },
 module: {
  loaders: [
    // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
    {
      //test: /(\.tsx?)|(\.js)$/,
      test: /\.tsx?$/,
      loader: 'ts-loader'
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015'] 
      }
    }
   // {
   //   test: require.resolve("HomePage"),
   //   loader: "expose?HomePage" 
   // }
   // {
   //   test: /\.scss$/,
   //   loaders: ["style", "css", "sass"]
   // }   
   
   // // Prevent different versions of jquery from being pulled in by other libraries
   // {
   //  test: /jquery\.js/,
   //  loader: 'null-loader',
   //  exclude: './node_modules/jquery/'
   // }   
  ]
 },
 devServer: { 
  proxy: {
     '**' : 'http://localhost:8080' //java or node server port
  }, 
 },
 plugins: [
      // new webpack.ProvidePlugin({
      //     $: "jquery",
      //     jQuery: "jquery"
      // }),
    new BrowserSyncPlugin(
      // BrowserSync options 
      {
        // browse to http://localhost:3000/ during development 
        host: '0.0.0.0',
        port: 8082, //browser sync port
        ui: {
          port: 8083
        },
        // proxy the Webpack Dev Server endpoint 
        // (which should be serving on http://localhost:3100/) 
        // through BrowserSync 
        proxy: 'http://localhost:8081/', //webpack-dev-server port
        reloadDelay: 1000,
        //files: ["index.html", "css/main.css", "client/css/main.css", "app/js/*.js"]        
        files: [//"../server-springboot/src/main/resources/templates/index.ftl",
                "../server-springboot/target/classes/templates/**/*.ftl",
                "../server-nodeexpress/app.js",
                "../server-nodeexpress/templates/**/*",
                "../client-dist/css/**/*",
                "app/js/*.js"]        
      },
      // plugin options 
      {
        // prevent BrowserSync from reloading the page 
        // and let Webpack Dev Server take care of this 
        reload: false
      }
    )      
  ] 
};