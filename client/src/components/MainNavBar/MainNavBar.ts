import $ = require("jquery");
import {AppContext} from "../../shared/AppContext.ts";
import {FirebaseService} from "../../shared/services/FirebaseService.ts";
import {AuthService} from "../../shared/services/AuthService.ts";

export class MainNavbar {

  constructor(private firebaseSrvc  : FirebaseService,
              private authSrvc      : AuthService) {

    if (this.authSrvc.isAuthenticated()) {
      $('nav .auth').removeClass('hidden');
    }
    else {
      $('nav .noauth').removeClass('hidden');
    }

    $('.login-btn').on('click', function (e) {
      e.preventDefault();
      $('#login-modal').modal();
    });

    authSrvc.eventEmitter.on("signoff", function (e) {
      console.log("MainCavBar.on(signoff)", e, this);
    }.bind(this));

  }  
}