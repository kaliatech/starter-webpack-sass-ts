import $ = require("jquery");
import {AppContext} from "../../shared/AppContext.ts";
import {FirebaseService} from "../../shared/services/FirebaseService.ts";
import {AuthService} from "../../shared/services/AuthService.ts";

export class MainNavbar {

  constructor(private firebaseSrvc  : FirebaseService,
              private authSrvc      : AuthService) {

    // if (this.authSrvc.isAuthenticated()) {
    //   $('nav .auth').removeClass('hidden');
    // }
    // else {
    //   $('nav .noauth').removeClass('hidden');
    // }

    $('.login-btn').on('click', function (e) {
      e.preventDefault();
      $('#login-modal').modal();
    });

    $('.logout-btn').on('click', function (e) {
      e.preventDefault();
      this.authSrvc.signout();
    }.bind(this));

    authSrvc.eventEmitter.on("signin", function () {
      //console.log("MainCavBar.on(signin)");
      
      $('nav .auth').removeClass('hidden');
      $('nav .noauth').addClass('hidden');
      
      $('nav .username').html(authSrvc.user.email);

    }.bind(this));  

    authSrvc.eventEmitter.on("signoff", function () {
      
      $('nav .noauth').removeClass('hidden');
      $('nav .auth').addClass('hidden');
      
    }.bind(this));

  }  
}