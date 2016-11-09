import {AppContext} from "../AppContext.ts";
import {FirebaseService} from "./FirebaseService.ts";

import * as EventEmitter from "wolfy87-eventemitter";

declare var firebase: any;
declare var firebaseui: any;

export class AuthService {

  user: any;
  
  eventEmitter: EventEmitter;
  
  private firebaseApp:firebase.app.App;

  private initAuth:boolean = true;

  constructor(private firebaseSrvc:FirebaseService) {
    this.firebaseApp = firebaseSrvc.firebaseApp;
    this.eventEmitter = new EventEmitter();
  
    // //if user in memory is null then try loading out of local storage
    // if (this.user == null) {
    //   this.user = sessionStorage.getItem('loggedInUser');
      
    // }
  }

  isAuthenticated() {
    return this.user != null;
  }

  signout() {
    this.firebaseApp.auth().signOut().then(function () {
      this.eventEmitter.emitEvent("signoff");
    }.bind(this));
  }
  
  init() {
    this.initFirebaseAuth();
  }


  private setUser(user:any) {
      console.log("setUser", user);
      this.user = user;
      if (this.user == null) {
        this.eventEmitter.emitEvent("signoff");
        sessionStorage.setItem('loggedInUser', null);
      }
      else {
        sessionStorage.setItem('loggedInUser', user);
        this.eventEmitter.emitEvent("signin");
      }
  }
  
  private initFirebaseAuth() {
    let self = this;


    // FirebaseUI config.
    var uiConfig = {
      'signInSuccessUrl': 'https://starter-webpack-sass-ts-kaliatech.c9users.io:8080/',
      'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        //'tosUrl': '<your-tos-url>',
        'callbacks': {
          'signInSuccess': function(currentUser, credential, redirectUrl) {
            console.log("signInSuccess");
            // Do something.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return false;
           }        
        }
        
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(this.firebaseApp.auth());
    // The start method will wait until the DOM is loaded.
    console.log("initAuth");
    ui.start('#firebaseui-auth-container', uiConfig);

    // if (this.firebaseApp.auth().currentUser == null) {
    //   this.setUser(null);
    // }
    // else {
    //   this.setUser(this.firebaseApp.auth().currentUser);
    // }

    //TODO: Initialize even before authStateChange?, but only do once if signed in
    //this.setUser(this.firebaseApp.auth().currentUser);

    this.firebaseApp.auth().onAuthStateChanged(function(user) {
      console.log("onAuthStateChanged", user);
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var providerData = user.providerData;
        // user.getToken().then(function(accessToken) {
        //   // document.getElementById('sign-in-status').textContent = 'Signed in';
        //   // document.getElementById('sign-in').textContent = 'Sign out';
        //   // document.getElementById('account-details').textContent = JSON.stringify({
        //   //   displayName: displayName,
        //   //   email: email,
        //   //   emailVerified: emailVerified,
        //   //   photoURL: photoURL,
        //   //   uid: uid,
        //   //   accessToken: accessToken,
        //   //   providerData: providerData
        //   // }, null, '  ');

        // //TODO: maybe check here and only set/emit if user is different?          

       
  

        // });
      console.log("displayName", user.displayName);
        
      self.setUser(user);
      
      return false;
        
      }
      else {
        // User is signed out.
        // document.getElementById('sign-in-status').textContent = 'Signed out';
        // document.getElementById('sign-in').textContent = 'Sign in';
        // document.getElementById('account-details').textContent = 'null';

        
        self.setUser(null);
      }
    }, function(error) {
      console.log("Error:" + error);
    });
  };
  
  


}
