// This worked, but notyet  clear how to make it work with firebaseui
//import Firebase = require('firebase');

import {AppContext} from "../AppContext";

declare var firebase: any;
declare var firebaseui: any;

export class FirebaseService {

  firebaseApp: firebase.app.App;

  constructor(appCtx:AppContext) {
    
    console.log("Firebase", firebase.SDK_VERSION);

    //let rootRef = Firebase.initializeApp('https://chimaney-001.firebaseio.com');        

    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyAClo-kboFfSei69qZa2M9d0vDo-_nJQV4",
      authDomain: "chimaney-001.firebaseapp.com",
      databaseURL: "https://chimaney-001.firebaseio.com",
      storageBucket: "chimaney-001.appspot.com",
      messagingSenderId: "539464576855"
    };
    //this.firebaseApp = Firebase.initializeApp(config);
    this.firebaseApp = firebase.initializeApp(config);

    // this.firebaseApp.database().ref("test1").once('value').then(function(snapshot) {
    //     //var username = snapshot.val().username;
    //     var test1 = snapshot.val();
    //     console.log("test1:" + test1);
    // });
  }


}

//import "firebase";
//import "firebase";

//import fbimport = require("firebase");

//declare var Firebase: any;
//import * from "firebase";
//import "firebase"

//var fb = new Firebase("test");
//console.log("fb", fb);
///.initializeApp();

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
