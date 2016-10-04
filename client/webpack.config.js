const webpack = require("webpack");

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
 entry: ['./src/app.ts'],
 output: {
  path: './assets/',
  publicPath: "/assets/",
  filename: 'app.bundle.js'
 },
 resolve: {
  // Add `.ts` and `.tsx` as a resolvable extension.
  extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js']
 },
 module: {
  loaders: [
   // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
   {
    test: /\.tsx?$/,
    loader: 'ts-loader'
   }
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
      new webpack.ProvidePlugin({
          $: "jquery",
          jQuery: "jquery"
      }),
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
                "../server-nodeexpress/templates/*.*",
                "css/main.css",
                "client/css/main.css",
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