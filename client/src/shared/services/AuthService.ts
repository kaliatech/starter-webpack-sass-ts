import {AppContext} from "../AppContext.ts";
import {FirebaseService} from "./FirebaseService.ts";

import * as EventEmitter from "wolfy87-eventemitter";

declare var firebase: any;
declare var firebaseui: any;

export class AuthService {

  user: any;
  
  eventEmitter: EventEmitter;
  
  private firebaseApp:firebase.app.App;

  constructor(private firebaseSrvc:FirebaseService) {
    this.firebaseApp = firebaseSrvc.firebaseApp;
    this.eventEmitter = new EventEmitter();
  }

  isAuthenticated() {
    return this.user != null;
  }

  signout() {

  }
  
  init() {
    this.initFirebaseAuth();
  }

  
  private initFirebaseAuth() {
    // FirebaseUI config.
    var uiConfig = {
      'signInSuccessUrl': 'https://starter-webpack-sass-ts-kaliatech.c9users.io:8082',
      'signInOptions': [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ]
        // Terms of service url.
        //'tosUrl': '<your-tos-url>',
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(this.firebaseApp.auth());
    // The start method will wait until the DOM is loaded.
    console.log("initAuth");
    ui.start('#firebaseui-auth-container', uiConfig);

    if (this.firebaseApp.auth().currentUser == null) {
      this.eventEmitter.emitEvent("signoff");
    }

    this.firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var uid = user.uid;
        var providerData = user.providerData;
        user.getToken().then(function(accessToken) {
          document.getElementById('sign-in-status').textContent = 'Signed in';
          document.getElementById('sign-in').textContent = 'Sign out';
          document.getElementById('account-details').textContent = JSON.stringify({
            displayName: displayName,
            email: email,
            emailVerified: emailVerified,
            photoURL: photoURL,
            uid: uid,
            accessToken: accessToken,
            providerData: providerData
          }, null, '  ');
        });
      }
      else {
        // User is signed out.
        document.getElementById('sign-in-status').textContent = 'Signed out';
        document.getElementById('sign-in').textContent = 'Sign in';
        document.getElementById('account-details').textContent = 'null';
      }
    }, function(error) {
      console.log(error);
    });
  };
  
  


}
