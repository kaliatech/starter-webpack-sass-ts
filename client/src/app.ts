import testModel = require('./shared/TestModel.ts');

import $ = require("jquery");

import Firebase = require('firebase');
//import "firebase";
//import "firebase";

//import fbimport = require("firebase");

//declare var Firebase: any;
//import * from "firebase";
//import "firebase"
console.log("Firebase", Firebase.SDK_VERSION);
//var fb = new Firebase("test");
//console.log("fb", fb);
///.initializeApp();
console.log("fb", "Etfs");

let rootRef = Firebase.initializeApp('https://chimaney-001.firebaseio.com');

//let fb = new Firebase("Test");

// let fb = new Firebase("Test");

// var config = {
// apiKey: "<API_KEY>",
// authDomain: "<PROJECT_ID>.firebaseapp.com",
// databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
// storageBucket: "<BUCKET>.appspot.com"
// };
// fb.initializeApp(config);


// console.log("rootRef", fb);


//import bootstrap = require('bootstrap');
console.log(testModel);

//$("h1").html("test2");

$("#test-btn").on('click', function(evt) {
    alert("here5");
});