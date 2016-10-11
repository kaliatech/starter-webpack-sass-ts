import $ = require("jquery");

import * as pages from './pages/index.ts';

import {AppContext} from './shared/AppContext.ts';
import {AuthService} from './shared/services/AuthService.ts';

// Can use this to export classe outside of webpack modules
//export {HomePage as HomePageTest} from "./pages/HomePage.ts";

export let appCtx = new AppContext();

export function route(routeName) {
    //console.log('route:' + routeName);
    let page:pages.Page;

    if (routeName == "/") {
        page = new pages.HomePage(appCtx);
    }
    page.init();    
}



//import bootstrap = require('bootstrap');
//console.log(testModel);
//$("h1").html("test2");

$("#test-btn").on('click', function(evt) {
    console.log("click");
    // let page = new HomePage();
    // page.init();
});