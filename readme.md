Starter project for doing UI development using Sass, Bootstrap, and TypeScript. Uses webpack for building JS artifacts.  Includes hot reloading and automatic browser-sync.  Includes both node.js/express and springboot backend choices. Everything can be run in Cloud9.

Work-in-progress. 

ports
-------
backend server: 8080
webpack-dev-server: 8081
browser-sync: 8082
browser-sync: 8083 (not accessible in cloud9)

Developer will typically use port 8082.  Browser-sync will proxy to webpack-dev-server running on 8081.  Webpack-dev-server will proxy to backend server on 8080. In production configuration, webpack-dev-server and browser-sync will not be used.


node-express startup
--------
Currently executed in independent terminals.  Will eventually be combined in to a single gulp command.

cd server-nodeexpress
npm run server

cd client
npm run webpack:server

cd client
npm run sass:watch