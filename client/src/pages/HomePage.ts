import $ = require("jquery");

import bs = require("bootstrap");

import {Page} from './Page.ts';

import {AppContext} from '../shared/AppContext.ts';
import {FirebaseService} from '../shared/services/FirebaseService.ts';

export class HomePage extends Page {


    appCtx: AppContext;
    fbSrvc:FirebaseService
    
    constructor(appCtx: AppContext) {
      super(appCtx);
      this.fbSrvc = appCtx.getFirebaseService();
    }
    
    init() {
        super.init();
        console.log("HomePage.init");
   }
}