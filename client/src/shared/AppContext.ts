import {AuthService} from "./services/AuthService.ts";
import {FirebaseService} from "./services/FirebaseService.ts";
import * as nav from "../components/MainNavBar/index.ts";

export class AppContext {
  
  private authSrvc: AuthService;
  private firebaseSrvc: FirebaseService;
  private mainNavbar: nav.MainNavbar;
  
  getAuthService(): AuthService {
    if (this.authSrvc == null) {
      this.authSrvc = new AuthService(this.getFirebaseService());
    }
    return this.authSrvc;
  }

  getFirebaseService(): FirebaseService {
    if (this.firebaseSrvc == null) {
      this.firebaseSrvc = new FirebaseService(this);
    }
    return this.firebaseSrvc;
  }
  
  getMainNavbar(): nav.MainNavbar {
    if (this.mainNavbar == null) {
      this.mainNavbar = new nav.MainNavbar(this.getFirebaseService(), this.getAuthService());
    }
    return this.mainNavbar;
  }
  

  
}