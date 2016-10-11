import {AppContext} from "../shared/AppContext.ts";
import {AuthService} from "../shared/services/AuthService.ts";
import {FirebaseService} from "../shared/services/FirebaseService.ts";
import * as nav from "../components/MainNavBar";

export class Page {
  
  firebaseSrvc:FirebaseService
  mainNavbar: nav.MainNavbar;
  authSrvc: AuthService;

  constructor(appCtx: AppContext) {
    this.authSrvc = appCtx.getAuthService();
    this.firebaseSrvc = appCtx.getFirebaseService();
    this.mainNavbar = appCtx.getMainNavbar();
  }

  init() {
    console.log("Page.init");
    this.authSrvc.init();
  }
  
}