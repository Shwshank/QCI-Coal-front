webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-home></app-home> -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(route, router, ProjectService, toastr, vcr) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ProjectService = ProjectService;
        this.toastr = toastr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vcr);
        this.ProjectService.emitToastMsg.subscribe(function (res) {
            _this.showSuccess(res.msg1, res.msg2);
        });
    }
    AppComponent.prototype.showSuccess = function (msg1, msg2) {
        this.toastr.info(msg1, msg2, { enableHTML: true });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__service_ProjectService__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng2_toastr_custom_option__ = __webpack_require__("../../../../../src/app/ng2-toastr-custom-option.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_smart_table__ = __webpack_require__("../../../../ng2-smart-table/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ngx_echarts__ = __webpack_require__("../../../../ngx-echarts/ngx-echarts.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__service_ZauthGuard__ = __webpack_require__("../../../../../src/app/service/ZauthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_the_table_the_table_component__ = __webpack_require__("../../../../../src/app/home/the-table/the-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_pipes__ = __webpack_require__("../../../../ngx-pipes/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__home_the_contract_the_contract_component__ = __webpack_require__("../../../../../src/app/home/the-contract/the-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__home_info_page_info_page_component__ = __webpack_require__("../../../../../src/app/home/info-page/info-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__home_the_upload_the_upload_component__ = __webpack_require__("../../../../../src/app/home/the-upload/the-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__home_the_summary_the_summary_component__ = __webpack_require__("../../../../../src/app/home/the-summary/the-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__home_the_summary_summary_content_summary_content_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/summary-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__home_the_summary_summary_content_sm1_sm1_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__home_the_summary_summary_content_sm2_sm2_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__home_the_summary_summary_content_sm3_sm3_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__home_the_summary_summary_content_sm4_sm4_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__home_the_summary_summary_content_sm5_sm5_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__home_the_summary_summary_content_d3_sun_brust_d3_sun_brust_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__home_info_page_section1_section1_component__ = __webpack_require__("../../../../../src/app/home/info-page/section1/section1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__home_info_page_section2_section2_component__ = __webpack_require__("../../../../../src/app/home/info-page/section2/section2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__home_the_summary_summary_content_sm6_sm6_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__home_the_summary_summary_content_sm7_sm7_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__home_the_summary_summary_content_sm8_sm8_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_16__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_the_table_the_table_component__["a" /* TheTableComponent */],
            __WEBPACK_IMPORTED_MODULE_21__home_the_contract_the_contract_component__["a" /* TheContractComponent */],
            __WEBPACK_IMPORTED_MODULE_22__home_info_page_info_page_component__["a" /* InfoPageComponent */],
            __WEBPACK_IMPORTED_MODULE_23__home_the_upload_the_upload_component__["a" /* TheUploadComponent */],
            __WEBPACK_IMPORTED_MODULE_24__home_the_summary_the_summary_component__["a" /* TheSummaryComponent */],
            __WEBPACK_IMPORTED_MODULE_25__home_the_summary_summary_content_summary_content_component__["a" /* SummaryContentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__home_the_summary_summary_content_sm1_sm1_component__["a" /* Sm1Component */],
            __WEBPACK_IMPORTED_MODULE_27__home_the_summary_summary_content_sm2_sm2_component__["a" /* Sm2Component */],
            __WEBPACK_IMPORTED_MODULE_28__home_the_summary_summary_content_sm3_sm3_component__["a" /* Sm3Component */],
            __WEBPACK_IMPORTED_MODULE_29__home_the_summary_summary_content_sm4_sm4_component__["a" /* Sm4Component */],
            __WEBPACK_IMPORTED_MODULE_30__home_the_summary_summary_content_sm5_sm5_component__["a" /* Sm5Component */],
            __WEBPACK_IMPORTED_MODULE_31__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_32__home_the_summary_summary_content_d3_sun_brust_d3_sun_brust_component__["a" /* D3SunBrustComponent */],
            __WEBPACK_IMPORTED_MODULE_33__home_info_page_section1_section1_component__["a" /* Section1Component */],
            __WEBPACK_IMPORTED_MODULE_34__home_info_page_section2_section2_component__["a" /* Section2Component */],
            __WEBPACK_IMPORTED_MODULE_35__home_the_summary_summary_content_sm6_sm6_component__["a" /* Sm6Component */],
            __WEBPACK_IMPORTED_MODULE_36__home_the_summary_summary_content_sm7_sm7_component__["a" /* Sm7Component */],
            __WEBPACK_IMPORTED_MODULE_37__home_the_summary_summary_content_sm8_sm8_component__["a" /* Sm8Component */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_12_ngx_echarts__["a" /* NgxEchartsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_20_ngx_pipes__["a" /* NgPipesModule */],
            __WEBPACK_IMPORTED_MODULE_11_ng2_smart_table__["a" /* Ng2SmartTableModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_14__app_routes__["a" /* routes */], { useHash: true })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_13__service_ZauthGuard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_18__service_APIService__["a" /* APIService */],
            __WEBPACK_IMPORTED_MODULE_19__service_ProjectService__["a" /* ProjectService */],
            { provide: __WEBPACK_IMPORTED_MODULE_9_ng2_toastr__["ToastOptions"], useClass: __WEBPACK_IMPORTED_MODULE_10__ng2_toastr_custom_option__["a" /* CustomOption */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_ZauthGuard__ = __webpack_require__("../../../../../src/app/service/ZauthGuard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_the_table_the_table_component__ = __webpack_require__("../../../../../src/app/home/the-table/the-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_the_contract_the_contract_component__ = __webpack_require__("../../../../../src/app/home/the-contract/the-contract.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_info_page_info_page_component__ = __webpack_require__("../../../../../src/app/home/info-page/info-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_the_upload_the_upload_component__ = __webpack_require__("../../../../../src/app/home/the-upload/the-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_the_summary_the_summary_component__ = __webpack_require__("../../../../../src/app/home/the-summary/the-summary.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_the_summary_summary_content_summary_content_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/summary-content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_the_summary_summary_content_sm1_sm1_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_the_summary_summary_content_sm2_sm2_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_the_summary_summary_content_sm3_sm3_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_the_summary_summary_content_sm4_sm4_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_the_summary_summary_content_sm5_sm5_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_the_summary_summary_content_d3_sun_brust_d3_sun_brust_component__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.ts");















var routes = [
    { path: '', pathMatch: 'full', redirectTo: '/home' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    { path: 'd3-sun-brust', component: __WEBPACK_IMPORTED_MODULE_14__home_the_summary_summary_content_d3_sun_brust_d3_sun_brust_component__["a" /* D3SunBrustComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */],
        children: [
            { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_4__home_info_page_info_page_component__["a" /* InfoPageComponent */] },
            { path: 'tracker', component: __WEBPACK_IMPORTED_MODULE_2__home_the_table_the_table_component__["a" /* TheTableComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZauthGuard__["a" /* AuthGuard */]] },
            { path: 'contract', component: __WEBPACK_IMPORTED_MODULE_3__home_the_contract_the_contract_component__["a" /* TheContractComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZauthGuard__["a" /* AuthGuard */]] },
            { path: 'upload', component: __WEBPACK_IMPORTED_MODULE_5__home_the_upload_the_upload_component__["a" /* TheUploadComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZauthGuard__["a" /* AuthGuard */]] },
            { path: 'summary', component: __WEBPACK_IMPORTED_MODULE_6__home_the_summary_the_summary_component__["a" /* TheSummaryComponent */],
                children: [
                    { path: 'psusummary', component: __WEBPACK_IMPORTED_MODULE_7__home_the_summary_summary_content_summary_content_component__["a" /* SummaryContentComponent */], children: [
                            { path: 'sm1', component: __WEBPACK_IMPORTED_MODULE_8__home_the_summary_summary_content_sm1_sm1_component__["a" /* Sm1Component */] },
                            { path: 'sm2', component: __WEBPACK_IMPORTED_MODULE_9__home_the_summary_summary_content_sm2_sm2_component__["a" /* Sm2Component */] },
                            { path: 'sm3', component: __WEBPACK_IMPORTED_MODULE_10__home_the_summary_summary_content_sm3_sm3_component__["a" /* Sm3Component */] },
                            { path: 'sm4', component: __WEBPACK_IMPORTED_MODULE_11__home_the_summary_summary_content_sm4_sm4_component__["a" /* Sm4Component */] },
                            { path: 'sm5', component: __WEBPACK_IMPORTED_MODULE_12__home_the_summary_summary_content_sm5_sm5_component__["a" /* Sm5Component */] },
                        ]
                    }
                ]
            },
            { path: '**', component: __WEBPACK_IMPORTED_MODULE_4__home_info_page_info_page_component__["a" /* InfoPageComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_0__service_ZauthGuard__["a" /* AuthGuard */]] }
        ]
    },
    { path: '**', redirectTo: '/login' }
];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* Remove the navbar's default margin-bottom and rounded borders */\n .navbar {\n   margin-bottom: 0;\n   border-radius: 0;\n }\n\n /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n .row.content {height: 450px}\n\n /* Set gray background color and 100% height */\n .sidenav {\n   padding-top: 20px;\n   background-color: #f1f1f1;\n   height: 100%;\n }\n\n /* Set black background color, white text and some padding */\n footer {\n   background-color: #555;\n   color: white;\n   padding: 15px;\n }\n\n /* On small screens, set height to 'auto' for sidenav and grid */\n @media screen and (max-width: 767px) {\n   .sidenav {\n     height: auto;\n     padding: 15px;\n   }\n   .row.content {height:auto;}\n }\n\n #scroll {\n     position:fixed;\n     right:10px;\n     bottom:10px;\n     cursor:pointer;\n     width:50px;\n     height:50px;\n     background-color:#3498db;\n     text-indent:-9999px;\n     display:none;\n     border-radius:60px;\n     z-index: 100;\n }\n #scroll span {\n     position:absolute;\n     top:50%;\n     left:50%;\n     margin-left:-8px;\n     margin-top:-12px;\n     height:0;\n     width:0;\n     border:8px solid transparent;\n     border-bottom-color:#ffffff;\n }\n #scroll:hover {\n     background-color:#e74c3c;\n     opacity:1;filter:\"alpha(opacity=100)\";\n     -ms-filter:\"alpha(opacity=100)\";\n }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md  navbar-inverse bg-primary \">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" [routerLink]=\"['/home/']\">Home</a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li [routerLinkActive]=\"['active']\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/home/contract']\"> Contract </a></strong>\n      </li>\n      <li [routerLinkActive]=\"['active']\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/home/upload']\"> Upload </a></strong>\n      </li>\n      <li [routerLinkActive]=\"['active']\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/home/tracker']\"> Tracker </a></strong>\n      </li>\n      <!-- <li [routerLinkActive]=\"['active']\">\n        <strong><a class=\"nav-link\" [routerLink]=\"['/home/summary']\"> Summary </a></strong>\n      </li> -->\n    </ul>\n\n  </div>\n\n  <div class=\"nav navbar-nav navbar-right\">\n    <a class=\"navbar-brand\" style=\"color: white; cursor:pointer\" data-toggle=\"modal\" data-target=\"#exampleModal\"> <i class=\"fa fa-user-o\" aria-hidden=\"true\" ></i> </a>\n    <a class=\"navbar-brand\" style=\"color: white; cursor:pointer\" (click)='logout()' > <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i> </a>\n  </div>\n\n</nav>\n\n<a href=\"#\" id=\"scroll\" style=\"display: none;\"><span></span></a>\n\n\n\n<!-- <a [routerLink]=\"['/home/tracker']\">Tracker</a>\n<a [routerLink]=\"['/home/contract']\">Contract</a> -->\n\n\n<div style=\"min-height:900px\" >\n  <router-outlet></router-outlet>\n</div>\n\n<div style=\"margin-top:50px; background-color: #0275d8!important; text-align:center; color:#aecae2; width:100%; height:20px\" >\n    QCI IT Cell - Coal - V2\n</div>\n\n\n<!--Password Modal starts here-->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">User profile</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"height:300px; overflow: auto \">\n        <div class=\"form-group text-center\">\n          <br>\n          <input type=\"password\" class=\"form-control\"  placeholder=\"Current password\" [(ngModel)]='c_pass' required>\n          <br>\n          <input type=\"password\" class=\"form-control\"  placeholder=\"New password\" [(ngModel)]='pass1'  required>\n          <br>\n          <input type=\"password\" class=\"form-control\"  placeholder=\"Confirm password\" [(ngModel)]='pass2'  required>\n          <br>\n\n          <button type=\"button\" class=\"btn btn-primary\"  data-toggle=\"modal\" data-target=\"#inviteModal\" >Invite user</button>\n\n          <div style=\"font-weight:600\">{{passwordmsg}}</div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='updatePassword()' >Update password</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Password Modal ends here-->\n\n<!--Invite Modal starts here-->\n<div class=\"modal fade\" id=\"inviteModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Invite a user</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"height:300px; overflow: auto \">\n        <div class=\"form-group\">\n          <br>\n          <input type=\"email\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"User Email ID\" [(ngModel)]='newEmail' required>\n          <br>\n          <div style=\"font-weight:600\"></div>\n          <br>\n\n          <p> <i> An invitaion email will be sent at new user's email ID following with Coal Dashboard website url and a random password. </i> </p>\n          <br>\n\n          <div *ngIf='justamoment'>Just a moment please...</div>\n\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)='inviteUser()' >Invite User</button>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Invite Modal ends here-->\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(route, router, ProjectService, toastr, vcr) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.ProjectService = ProjectService;
        this.toastr = toastr;
        this.formData = new FormData();
        this.justamoment = false;
        var temp = localStorage.getItem('tracker_graph_current');
        temp = JSON.parse(temp);
        localStorage.setItem('tracker_graph_dis', JSON.stringify(temp));
        this.ProjectService.emitUpdatePassword.subscribe(function (res) {
            _this.c_pass = '';
            _this.pass1 = '';
            _this.pass2 = '';
            _this.passwordmsg = res.message;
        });
        this.ProjectService.emitNewUser.subscribe(function (res) {
            _this.newEmail = '';
            _this.justamoment = false;
            $("#inviteModal").modal('hide');
        });
        // Get Contract related data nad store in local storage
        // ------------------------------------------------------- starts here
        this.ProjectService.emitContractData.subscribe(function (res) {
            // console.log(res);
            localStorage.setItem('contracts', JSON.stringify(res));
        });
        // ------------------------------------------------------- end here
        // Get tracker related data nad store in local storage
        // ------------------------------------------------------- starts here
        this.ProjectService.emitTrackerData.subscribe(function (res) {
            localStorage.setItem('tracker', JSON.stringify(res.data));
            localStorage.setItem('tracker_graph_current', JSON.stringify(res.graph));
            localStorage.setItem('last_date', JSON.stringify(res.last_date));
            // console.log(res);
        });
        // -------------------------------------------------------ends here
        // Get PUS SummaryContentComponent
        // ------------------------------------------------------- starts here
        this.ProjectService.emitSummaryData.subscribe(function (res) {
            localStorage.setItem('summary', JSON.stringify(res.data));
            localStorage.setItem('psuidname', JSON.stringify(res.array));
            // console.log(res);
        });
        // ------------------------------------------------------- ends here
    }
    HomeComponent.prototype.ngOnInit = function () {
        // Get Contract api
        this.ProjectService.getContract(1);
        // Get Tracker api
        var d = new Date();
        var m = d.getMonth();
        m += 1;
        var y = d.getFullYear();
        var month = y + '-' + m;
        this.formData.append('monthdate', month);
        this.ProjectService.getTrackerByDate(this.formData, month);
        // Get PSU Summary
        this.ProjectService.getPsuSummary(1);
        // navigate to summary id = 0
        // this.router.navigate(['/home/summary/psusummary?psu_id=0']);
    };
    HomeComponent.prototype.showSuccess = function (msg1, msg2) {
        this.toastr.info('You are awesome!', 'Success!', { enableHTML: true });
    };
    HomeComponent.prototype.logout = function () {
        this.ProjectService.logout();
    };
    HomeComponent.prototype.updatePassword = function () {
        if (this.pass1 == this.pass2) {
            var formData = new FormData();
            var email = localStorage.getItem('userEmail');
            formData.append('email', email);
            formData.append('c_pass', this.c_pass);
            formData.append('pass1', this.pass1);
            this.ProjectService.updatePassword(formData);
        }
        else {
            this.ProjectService.toast('New passwords dosent match ', 'Opps!');
        }
    };
    HomeComponent.prototype.inviteUser = function () {
        var formData = new FormData();
        formData.append('email', this.newEmail);
        this.ProjectService.addNewUser(formData);
        this.justamoment = true;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/info-page/allscript.js":
/***/ (function(module, exports) {

AOS.init();


/***/ }),

/***/ "../../../../../src/app/home/info-page/info-page.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo{\n  height:30vh;\n  margin:0 auto;\n  margin-top: 8vh;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/info-page/info-page.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/home/info-page/info-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js__ = __webpack_require__("../../../../../src/app/home/info-page/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InfoPageComponent = (function () {
    function InfoPageComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    InfoPageComponent.prototype.ngOnInit = function () {
        localStorage.setItem('contractFlag', '0');
        localStorage.setItem('trackerFlag', '0');
        // navigate to summary id = 0
        this.router.navigate(['home/summary/psusummary'], { queryParams: { psu_id: 0 } });
    };
    InfoPageComponent.prototype.ngOnDestroy = function () { };
    return InfoPageComponent;
}());
InfoPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info-page',
        template: __webpack_require__("../../../../../src/app/home/info-page/info-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/info-page/info-page.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], InfoPageComponent);

var _a, _b;
//# sourceMappingURL=info-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/info-page/section1/section1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/info-page/section1/section1.component.html":
/***/ (function(module, exports) {

module.exports = "<section  class=\"section1\">\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n\n      <div  class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"100\" >\n        <div class=\"text-center heading\" > Volume Signed </div>\n        <div echarts [options]=\"option1\" class=\"demo-chart\" style=\"width:100%; height:100%\" ></div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"200\" >\n        <div class=\"text-center heading\" > Contracts </div>\n        <div style=\"height:90%; overflow-y:auto\">\n          <table class=\"table table-fixed \" style=\"font-size:15px;\">\n          <thead style=\"background-color: #0274d8; color: white\" >\n            <tr>\n              <th class=\"text-center\" style=\"vertical-align: inherit; !important; border-bottom:0px !important\">Subsidiaries</th>\n              <th class=\"text-center\" style=\"vertical-align: inherit; !important; border-bottom:0px !important\">Contracts </th>\n              <th class=\"text-center\"  style=\"vertical-align: inherit; !important; border-bottom:0px !important\" style=\"padding:0; margin:0; border-bottom:0px !important\">Volume signed (mmt)\n                <tr style=\"border-bottom:0px !important\">\n                  <th style=\"border-bottom:0px !important\"><i class=\"fa fa-train fa-2x\" aria-hidden=\"true\"></i></th>\n                  <th style=\"border-bottom:0px !important\"> <i class=\"fa fa-truck fa-2x\" aria-hidden=\"true\"></i> </th>\n                  <th style=\"border-bottom:0px !important\">Total</th>\n                </tr>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n\n            <tr *ngFor=\"let data of option2_tableData; let i = index\">\n              <td class=\"text-center\" >{{data.sub}}</td>\n              <td class=\"text-center\" >{{data.contracts}}</td>\n              <td class=\"text-center\" style=\"padding:0; margin:0\">\n                <tr>\n                  <td class=\"text-center\">{{data.railvolume}}</td>\n                  <td class=\"text-center\">{{data.roadvolume}}</td>\n                  <td class=\"text-center\"> <b> {{data.volume}} </b> </td>\n                </tr>\n              </td>\n            </tr>\n\n          </tbody>\n        </table>\n        </div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"300\" >\n        <div class=\"text-center heading\" > Contract Signed </div>\n        <div echarts [options]=\"option3\" class=\"demo-chart\" style=\"width:100%; height:100%\" ></div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"400\" >\n        <div class=\"text-center heading\" >Sample Collected vs Declared </div>\n        <div echarts [options]=\"option4\" class=\"demo-chart\" style=\"width:100%; height:100%\" ></div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"500\" >\n        <div class=\"text-center heading\" >  Progress Summary </div>\n        <div echarts [options]=\"option5\" class=\"demo-chart\" style=\"width:100%; height:95%\" ></div>\n      </div>\n\n      <div class=\"col-sm-12 col-md-4 col-lg-4 displayGraph1\"  data-aos=\"fade-up\"  data-aos-delay=\"600\" >\n        <div class=\"text-center heading\" > Volume Lifted  </div>\n        <div echarts [options]=\"option6\" class=\"demo-chart\" style=\"width:100%; height:92%\" ></div>\n      </div>\n\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/info-page/section1/section1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section1Component = (function () {
    function Section1Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.sub1 = this.projectService.emitOption1_legends.subscribe(function (res) {
            _this.option1_legends = res;
        });
        this.sub2 = this.projectService.emitOption1_data1.subscribe(function (res) {
            _this.option1_data1 = res;
        });
        this.sub4 = this.projectService.emitOption1_data2.subscribe(function (res) {
            _this.option1_data2 = res;
            _this.getGraph1();
        });
        this.sub5 = this.projectService.emitOption2_tableData.subscribe(function (res) {
            _this.option2_tableData = res;
        });
        this.sub6 = this.projectService.emitOption3_legends.subscribe(function (res) {
            _this.option3_legends = res;
        });
        this.sub7 = this.projectService.emitOption3_data1.subscribe(function (res) {
            _this.option3_data1 = res;
        });
        this.sub8 = this.projectService.emitOption3_data2.subscribe(function (res) {
            _this.option3_data2 = res;
            _this.getGraph3();
        });
        this.sub9 = this.projectService.emitOption4_legends.subscribe(function (res) {
            _this.option4_legends = res;
        });
        this.sub10 = this.projectService.emitOption4_xAxis.subscribe(function (res) {
            _this.option4_xAxis = res;
        });
        this.sub11 = this.projectService.emitOption4_series.subscribe(function (res) {
            _this.option4_series = res;
            _this.getGraph4();
        });
        this.sub12 = this.projectService.emitOption5_legends.subscribe(function (res) {
            _this.option5_legends = res;
        });
        this.sub13 = this.projectService.emitOption5_data.subscribe(function (res) {
            _this.option5_data = res;
        });
        this.sub14 = this.projectService.emitOption5_series.subscribe(function (res) {
            _this.option5_series = res;
            _this.getGraph5();
        });
        this.sub15 = this.projectService.emitOption6_legends.subscribe(function (res) {
            _this.option6_legends = res;
        });
        this.sub16 = this.projectService.emitOption6_xAxis.subscribe(function (res) {
            _this.option6_xAxis = res;
        });
        this.sub17 = this.projectService.emitOption6_series.subscribe(function (res) {
            _this.option6_series = res;
            _this.getGraph6();
        });
        // this.option1_legends = ['1','2','3','4','5'];
        // this.option1_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
        // this.option1_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]
        // this.option2_tableData = [
        //   {sub:"CCL",  contract:"40", rail:'211', road:'21', volume:"440"},
        //   {sub:"MCL",  contract:"40", rail:'211', road:'21', volume:"440"},
        //   {sub:"NCL",  contract:"21", rail:'211', road:'21', volume:"120"},
        //   {sub:"SECL", contract:"36", rail:'211', road:'21', volume:"444"},
        //   {sub:"WCL",  contract:"14", rail:'211', road:'21', volume:"344"},
        // ];
        // this.option3_legends = ['1','2','3'];
        // this.option3_data1 = [ {value:335, name:'1'}, {value:679, name:'2'}, {value:1548, name:'3'}];
        // this.option3_data2 = [ {value:335, name:'a1'}, {value:310, name:'a2'}, {value:234, name:'a3'}, {value:135, name:'4'}, {value:1048, name:'5'}, {value:251, name:'6'}, {value:147, name:'7'}, {value:102, name:'8'}]
        // this.option4_legends = ['CCL','MCL','NCL'];
        // this.option4_xAxis = ['data1','data2','data3','data4','data5'];
        // this.option4_series = [
        //     {
        //         name:'CCL',
        //         type:'bar',
        //         data:[320, 332, 301, 334, 390, 330, 320]
        //     },
        //     {
        //         name:'MCL',
        //         type:'bar',
        //         data:[120, 132, 101, 134, 90, 230, 210]
        //     },
        //     {
        //         name:'NCL',
        //         type:'bar',
        //         data:[220, 182, 191, 234, 290, 330, 310]
        //     },
        // ]
        // this.option5_legends = ['A', 'B', 'C'];
        // this.option5_data = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
        // this.option5_series = [
        //     {
        //       type: 'bar',
        //       data: [1, 2, 3, 4, 3, 5, 1],
        //       coordinateSystem: 'polar',
        //       name: 'A',
        //       stack: 'a'
        //   }, {
        //       type: 'bar',
        //       data: [2, 4, 6, 1, 3, 2, 1],
        //       coordinateSystem: 'polar',
        //       name: 'B',
        //       stack: 'a'
        //   }, {
        //       type: 'bar',
        //       data: [1, 2, 3, 4, 1, 2, 5],
        //       coordinateSystem: 'polar',
        //       name: 'C',
        //       stack: 'a'
        //   }
        // ]
        // this.option6_legends = ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他'];
        // this.option6_xAxis = ['周一','周二','周三','周四','周五'];
        // this.option6_series = [
        //
        //     {
        //         name:'邮件营销',
        //         type:'bar',
        //         stack: '广告',
        //         data:[120, 132, 101, 134, 90]
        //     },
        //     {
        //         name:'联盟广告',
        //         type:'bar',
        //         stack: '广告',
        //         data:[220, 182, 191, 234, 290]
        //     },
        //
        // ];
    }
    Section1Component.prototype.ngOnInit = function () {
        // this.projectService.getData();
        this.projectService.getTempData();
        this.color = ['#0274d8', '#da534e', '#8bc34a', '#ff9800', '#797979', '#e91e63', '#009688', '#3f51b5', '#795548', '#673ab7', '#9c27b0'];
        this.color1 = ['#e91e63', '#009688', '#da534e', '#8bc34a', '#ff9800', '#797979', '#0274d8', '#797979', '#0274d8', '#797979', '#0274d8', '#797979', '#0274d8', '#797979', '#0274d8', '#797979', '#0274d8', '#797979'];
        // this.getGraph2();
        // this.getGraph3();
        // this.getGraph4();
        // this.getGraph5();
        // this.getGraph6();
    };
    Section1Component.prototype.getGraph1 = function () {
        this.option1 = {
            color: this.color1,
            itemStyle: {
                borderWidth: 10,
                borderColor: '#FFF'
            },
            title: {
                subtext: '',
                x: 'center',
                color: 'white'
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: [{
                    orient: 'vertical',
                    x: 'left',
                    data: this.option1_legends
                },
                {
                    orient: 'vertical',
                    x: 'right',
                    data: ['Road', 'Rail']
                }],
            series: [
                {
                    name: 'PSU',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.option1_data1
                },
                {
                    name: 'Mode',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            show: false,
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.option1_data2
                }
            ]
        };
    };
    Section1Component.prototype.getGraph2 = function () { };
    Section1Component.prototype.getGraph3 = function () {
        this.option3 = {
            color: this.color1,
            itemStyle: {
                borderWidth: 10,
                borderColor: '#FFF'
            },
            title: {
                // text: 'Contract Signed',
                subtext: '',
                x: 'center',
            },
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b}: {c} ({d}%)"
            },
            legend: [{
                    orient: 'vertical',
                    x: 'left',
                    data: this.option3_legends
                },
                {
                    orient: 'vertical',
                    x: 'right',
                    data: ['Linkage Auction', 'Special Forward E-auction']
                }],
            series: [
                {
                    name: 'PSU',
                    type: 'pie',
                    selectedMode: 'single',
                    radius: [0, '40%'],
                    label: {
                        normal: {
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.option3_data1
                },
                {
                    name: 'Auction Type',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            show: false,
                            position: 'inner'
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data: this.option3_data2
                }
            ]
        };
    };
    Section1Component.prototype.getGraph4 = function () {
        this.option4 = {
            color: this.color,
            itemStyle: {
                // borderWidth: 10,
                borderColor: '#FFF'
            },
            title: {
                // text: 'Progress summary',
                subtext: '',
                x: 'center',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: this.option4_legends
            },
            grid: {
                left: '1%',
                right: '1%',
                // bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.option4_xAxis
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: this.option4_series
        };
    };
    Section1Component.prototype.getGraph5 = function () {
        this.option5 = {
            color: this.color,
            itemStyle: {
                // borderWidth: 10,
                borderColor: '#FFF'
            },
            title: {
                // text: 'Progress summary',
                subtext: '',
                x: 'center',
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: this.option5_legends
            },
            grid: {
                left: '1%',
                right: '1%',
                // bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.option5_data
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: this.option5_series
        };
    };
    Section1Component.prototype.getGraph6 = function () {
        this.option6 = {
            color: this.color,
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: this.option6_legends
            },
            grid: {
                left: '1%',
                right: '1%',
                bottom: '9%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: this.option6_xAxis
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: this.option6_series
        };
    };
    Section1Component.prototype.ngOnDestroy = function () {
        this.sub1.unsubscribe();
        this.sub2.unsubscribe();
        this.sub4.unsubscribe();
        this.sub5.unsubscribe();
        this.sub6.unsubscribe();
        this.sub7.unsubscribe();
        this.sub8.unsubscribe();
        this.sub9.unsubscribe();
        this.sub10.unsubscribe();
        this.sub11.unsubscribe();
        this.sub12.unsubscribe();
        this.sub13.unsubscribe();
        this.sub14.unsubscribe();
        this.sub15.unsubscribe();
        this.sub16.unsubscribe();
        this.sub17.unsubscribe();
    };
    return Section1Component;
}());
Section1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section1',
        template: __webpack_require__("../../../../../src/app/home/info-page/section1/section1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/info-page/section1/section1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Section1Component);

var _a;
//# sourceMappingURL=section1.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/info-page/section2/section2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/info-page/section2/section2.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"section2\">\n  <div class=\"container-fluid\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-10 cubeGraph\" data-aos=\"fade-up\"  data-aos-delay=\"200\" >\n        <div class=\"text-center heading\" > Location Wise Monthly Lifted &nbsp; &nbsp; &nbsp;\n\n      <span>    <input id=\"month\" type=\"month\" class=\"form-control form-control-2 input-sm to\" (change)=\"newMonth()\" [(ngModel)]=\"month\" style=\"text-center\" min=\"2017-08\"> </span>\n\n       </div>\n      <div echarts [options]=\"options\" class=\"demo-chart\" style=\"width:99%; height:90%\"  data-aos=\"fade-up\"  data-aos-delay=\"700\" ></div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/home/info-page/section2/section2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Section2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section2Component = (function () {
    function Section2Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.month = '2017-11';
        this.sub1 = this.projectService.emitOption7_data1.subscribe(function (res) {
            _this.option7_data1 = res;
        });
        this.sub2 = this.projectService.emitOption7_data2.subscribe(function (res) {
            _this.option7_data2 = res;
        });
        this.sub3 = this.projectService.emitOption7_data3.subscribe(function (res) {
            _this.option7_data3 = res;
            _this.getGraph1();
        });
        // this.option7_data1 = ['12a', '1a', '2a', '3a', '4a', '5a', '6a',
        //     '7a', '8a', '9a','10a','11a',
        //     '12p', '1p', '2p', '3p', '4p', '5p',
        //     '6p', '7p', '8p', '9p', '10p', '11p'];
        //
        // this.option7_data2 = ['Saturday', 'Friday', 'Thursday',
        //         'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
        //
        // this.option7_data3 = [
        //     [0,0,5],[0,1,1],[0,2,0],[0,3,0],[0,4,0],[0,5,0],[0,6,0],[0,7,0],[0,8,0],[0,9,0],[0,10,0],[0,11,2],[0,12,4],[0,13,1],[0,14,1],[0,15,3],[0,16,4],[0,17,6],[0,18,4],[0,19,4],[0,20,3],[0,21,3],[0,22,2],[0,23,5],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,7,0],[1,8,0],[1,9,0],[1,10,5],[1,11,2],[1,12,2],[1,13,6],[1,14,9],[1,15,11],[1,16,6],[1,17,7],[1,18,8],[1,19,12],[1,20,5],[1,21,5],[1,22,7],[1,23,2],[2,0,1],[2,1,1],[2,2,0],[2,3,0],[2,4,0],[2,5,0],[2,6,0],[2,7,0],[2,8,0],[2,9,0],[2,10,3],[2,11,2],[2,12,1],[2,13,9],[2,14,8],[2,15,10],[2,16,6],[2,17,5],[2,18,5],[2,19,5],[2,20,7],[2,21,4],[2,22,2],[2,23,4],[3,0,7],[3,1,3],[3,2,0],[3,3,0],[3,4,0],[3,5,0],[3,6,0],[3,7,0],[3,8,1],[3,9,0],[3,10,5],[3,11,4],[3,12,7],[3,13,14],[3,14,13],[3,15,12],[3,16,9],[3,17,5],[3,18,5],[3,19,10],[3,20,6],[3,21,4],[3,22,4],[3,23,1],[4,0,1],[4,1,3],[4,2,0],[4,3,0],[4,4,0],[4,5,1],[4,6,0],[4,7,0],[4,8,0],[4,9,2],[4,10,4],[4,11,4],[4,12,2],[4,13,4],[4,14,4],[4,15,14],[4,16,12],[4,17,1],[4,18,8],[4,19,5],[4,20,3],[4,21,7],[4,22,3],[4,23,0],[5,0,2],[5,1,1],[5,2,0],[5,3,3],[5,4,0],[5,5,0],[5,6,0],[5,7,0],[5,8,2],[5,9,0],[5,10,4],[5,11,1],[5,12,5],[5,13,10],[5,14,5],[5,15,7],[5,16,11],[5,17,6],[5,18,0],[5,19,5],[5,20,3],[5,21,4],[5,22,2],[5,23,0],[6,0,1],[6,1,0],[6,2,0],[6,3,0],[6,4,0],[6,5,0],[6,6,0],[6,7,0],[6,8,0],[6,9,0],[6,10,1],[6,11,0],[6,12,2],[6,13,1],[6,14,3],[6,15,4],[6,16,0],[6,17,0],[6,18,0],[6,19,0],[6,20,1],[6,21,2],[6,22,2],[6,23,6]
        //   ];
    }
    Section2Component.prototype.ngOnInit = function () {
        this.newMonth();
        // this.projectService.getTempDataTower();
        // this.getGraph1();
    };
    Section2Component.prototype.newMonth = function () {
        console.log(this.month);
        this.projectService.newMonth(this.month);
    };
    Section2Component.prototype.getGraph1 = function () {
        var hours = this.option7_data1;
        var days = this.option7_data2;
        var data = this.option7_data3;
        this.options = {
            tooltip: {},
            visualMap: {
                max: 15500,
                inRange: {
                    color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
                }
            },
            xAxis3D: {
                type: 'category',
                data: hours,
                name: "Location"
            },
            yAxis3D: {
                type: 'value',
                data: days,
                splitNumber: 30,
                name: "Day"
            },
            zAxis3D: {
                type: 'value',
                splitNumber: 10,
                name: "Volume"
            },
            grid3D: {
                boxWidth: 200,
                boxDepth: 180,
                light: {
                    main: {
                        intensity: 1.2
                    },
                    ambient: {
                        intensity: 0.3
                    }
                }
            },
            series: [{
                    type: 'bar3D',
                    data: data.map(function (item) {
                        return {
                            value: [item[1], item[0], item[2]]
                        };
                    }),
                    shading: 'lambert',
                    label: {
                        show: false,
                        textStyle: {
                            fontSize: 16,
                            borderWidth: 1
                        }
                    },
                    itemStyle: {
                        opacity: 0.95
                    },
                    emphasis: {
                        label: {
                            textStyle: {
                                fontSize: 20,
                                color: '#900'
                            }
                        },
                        itemStyle: {
                            color: '#900'
                        }
                    }
                }]
        };
    };
    return Section2Component;
}());
Section2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-section2',
        template: __webpack_require__("../../../../../src/app/home/info-page/section2/section2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/info-page/section2/section2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Section2Component);

var _a;
//# sourceMappingURL=section2.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-contract/the-contract.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tfoot input {\n        width: 100%;\n        padding: 3px;\n        box-sizing: border-box;\n    }\n\ntfoot {\n    display: table-header-group !important;\n}\n\nth, td {\n  width: 10px !important;\n}\ntfoot tr th input {\n  width: 18px !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-contract/the-contract.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='display' class=\"container\"  style=\" overflow-x:auto;\">\n\n\n  <div class=\"row \" style=\"padding-top:20px\" >\n    <div class=\" col-md-4 text-left\">\n      <h2 style=\"margin-bottom:0px; \">Contract</h2>\n      <p style=\"color:grey\"> <i> last updated : {{last_update}} </i></p>\n    </div>\n    <div class=\" col-md-8 text-right\">\n\n      <!-- <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" >\n          <span class=\"btn  btn-file\"><span>Updated contract : </span><input type=\"file\" (change)=\"updated($event);\" accept=\".csv\"/></span>\n      </div> -->\n    </div>\n\n  </div>\n\n  <table class=\"stripe row-border order-column table-responsive \" id=\"example2\" cellspacing=\"0\" width=\"100%\" style=\"font-size:.8rem !important\">\n    <thead  style=\"background-color:#dcefff\">\n      <tr>\n\n        <th>Subsidiary</th>\n        <th>Primary Location</th>\n        <th>Customer-Plant-Mode</th>\n        <th>Contract Signing Date</th>\n        <th>Days</th>\n        <th>Annual QTY</th>\n        <th>Remaining Volume (Metric Tonne)</th>\n        <th>Auction type</th>\n        <th>Commencement Status</th>\n\n      </tr>\n    </thead>\n    <tfoot>\n     <tr>\n\n       <th>Subsidiary</th>\n       <th>Primary Location</th>\n       <th>Customer-Plant-Mode</th>\n       <th>Contract Signing Date</th>\n       <th style=\"opacity:0\">Days</th>\n       <th>Annual QTY</th>\n       <th>Remaining Volume (Metric Tonne)</th>\n       <th>Auction type</th>\n       <th>Commencement Status</th>\n\n     </tr>\n    </tfoot>\n    <tbody>\n\n      <tr *ngFor=\"let track of tracker  ;  let i = index \">\n\n        <td>{{track.d1}}</td>\n        <td>{{track.d2}}</td>\n        <td>{{track.d3}}</td>\n        <td>{{track.d8}}</td>\n        <td class=\"\">\n          <input type=\"number\" name=\"val\"  [(ngModel)]='track.d16' value={{track.d16}}  style=\" width:45px !important\" >\n\n          &nbsp;\n          <i (click)=\"saveDayNo(track.d16,track.d17)\" style=\"cursor:pointer\" class=\"fa fa-floppy-o\" aria-hidden=\"true\"></i>\n\n        </td>\n        <td>{{parseint(track.d7/track.d16)}}</td>\n        <td>{{track.d9}}</td>\n        <td>{{track.d11}}</td>\n        <td>{{track.d14}}</td>\n      </tr>\n\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-contract/the-contract.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheContractComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import './allscript.js';
var TheContractComponent = (function () {
    function TheContractComponent(ProjectService) {
        this.ProjectService = ProjectService;
        this.display = false;
        this.contractFlag = localStorage.getItem('contractFlag');
        if (this.contractFlag === '0') {
            window.location.reload();
            localStorage.setItem('contractFlag', '1');
        }
        else {
            var temp = localStorage.getItem('contracts');
            temp = JSON.parse(temp);
            this.tracker = temp;
            this.display = true;
            // console.log(this.tracker);
            this.ProjectService.emitContractData.subscribe(function (res) {
                // console.log(res);
                localStorage.setItem('contracts', JSON.stringify(res));
            });
        }
    }
    TheContractComponent.prototype.ngOnInit = function () {
        this.last_update = JSON.parse(localStorage.getItem('last_update_contract'));
    };
    TheContractComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('contractFlag', '0');
    };
    TheContractComponent.prototype.parseint = function (data) {
        data = parseInt(data);
        data = +data || 0;
        return data;
    };
    TheContractComponent.prototype.updated = function ($event) {
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        // console.log(file);
        this.formData = new FormData();
        this.formData.append('file', file);
        // console.log(this.formData);
        this.ProjectService.updateContract(this.formData);
    };
    TheContractComponent.prototype.saveDayNo = function (day, id) {
        // console.log(day);
        // console.log(id);
        this.formData = new FormData();
        this.formData.append('cid', id);
        this.formData.append('days', day);
        this.ProjectService.updateContractDays(this.formData);
    };
    return TheContractComponent;
}());
TheContractComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-the-contract',
        template: __webpack_require__("../../../../../src/app/home/the-contract/the-contract.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-contract/the-contract.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], TheContractComponent);

var _a;
//# sourceMappingURL=the-contract.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/allscript.js":
/***/ (function(module, exports) {

$( document ).ready(function() {

  var width = 310,
    height = 220,
    radius = (Math.min(width, height) / 2) - 10;

var formatNumber = d3.format(",d");

var x = d3.scale.linear()
    .range([0, 2 * Math.PI]);

var y = d3.scale.sqrt()
    .range([0, radius]);

// var color = d3.scale.category20c();

var color = d3.scale.ordinal()
.range(["#b9b9b9", "#f0ad4e",  "#469846", "#d9534f",]);

var partition = d3.layout.partition()
    .value(function(d) { return d.size; });

var arc = d3.svg.arc()
    .startAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x))); })
    .endAngle(function(d) { return Math.max(0, Math.min(2 * Math.PI, x(d.x + d.dx))); })
    .innerRadius(function(d) { return Math.max(0, y(d.y)); })
    .outerRadius(function(d) { return Math.max(0, y(d.y + d.dy)); });

var svg = d3.select("#con1").append("svg")
    .attr("width", width)
    .attr("height", height)
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + (height / 2) + ")");

var sun_data = localStorage.getItem('sunbrust');
sun_data = JSON.parse(sun_data);
// console.log(sun_data);

d3.json("./assets/flare.json", function(error, root) {
  if (error) throw error;

  svg.selectAll("path")
      .data(partition.nodes(sun_data))
    .enter().append("path")
      .attr("d", arc)
      .style("fill", function(d) { return color((d.children ? d : d.parent).name); })
      .on("click", click)
    .append("title")
      .text(function(d) { return d.name + "\n" + formatNumber(d.value); });
});

function click(d) {
  svg.transition()
      .duration(750)
      .tween("scale", function() {
        var xd = d3.interpolate(x.domain(), [d.x, d.x + d.dx]),
            yd = d3.interpolate(y.domain(), [d.y, 1]),
            yr = d3.interpolate(y.range(), [d.y ? 20 : 0, radius]);
        return function(t) { x.domain(xd(t)); y.domain(yd(t)).range(yr(t)); };
      })
    .selectAll("path")
      .attrTween("d", function(d) { return function() { return arc(d); }; });
}

d3.select(self.frameElement).style("height", height + "px");


});


/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"overflow-x:hidden !important; overflow-y:hidden !important; path:9px; \"  id=\"con1\"  ></div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return D3SunBrustComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var D3SunBrustComponent = (function () {
    function D3SunBrustComponent() {
    }
    D3SunBrustComponent.prototype.ngOnInit = function () {
    };
    return D3SunBrustComponent;
}());
D3SunBrustComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-d3-sun-brust',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/d3-sun-brust/d3-sun-brust.component.css")]
    }),
    __metadata("design:paramtypes", [])
], D3SunBrustComponent);

//# sourceMappingURL=d3-sun-brust.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n\n  width: 98%;\n  border : 5px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n}\n.mode-text{\n  margin: 3%;\n  font-size: 2rem\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\"   data-aos=\"fade-up\"  data-aos-delay=\"200\" >\n\n  <div class=\" col-md-12\" style=\"\">\n    <div class=\"box-radius text-center\" >\n      <div class=\"text-center\" style=\"background-color: #525252; color:white; height:45px; width:100%; margin:0 !important; font-size:1.6rem\"  >\n        <span> <i class=\"fa fa-arrow-up\" aria-hidden=\"true\"></i> Signed Volume: {{data1}} </span>\n      </div>\n      <br>\n      <span class=\"mode-text\">{{data3}}</span>\n\n      <i class=\"fa fa-train fa-5x\" aria-hidden=\"true\"></i> &nbsp; &nbsp; &nbsp;\n      <i class=\"fa fa-truck fa-5x\" aria-hidden=\"true\"></i>\n\n      <span class=\"mode-text\">{{data4}}</span>\n      <div class=\"progress\" style=\"margin-bottom:4px; background-color:#484848\" >\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]='data5'>\n          <!-- <b>{{data5}}%</b> -->\n        </div>\n      </div>\n\n\n      <div class=\"text-center\" style=\"background-color: #525252; color:white; height:75px; width:100%; margin:0 !important; font-size:1.5rem\"  >\n        <span style=\"font-size:1.2rem\" >Volume Lifted : </span> {{data2}} <br>\n        <i> <span style=\"font-size:.8rem\"> * Data mentioned are in Million Metric Tonne</span></i>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm1Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm1Component = (function () {
    function Sm1Component(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.labels = ['Lifted', 'Remaining'];
        this.display = false;
        this.ProjectService.emitPSUData.subscribe(function (res) {
            // console.log(res.data);
            _this.data1 = res.data[res.id].vol[0][1];
            _this.data2 = res.data[res.id].vol[1][1];
            _this.data3 = res.data[res.id].vol[2][1];
            _this.data4 = res.data[res.id].vol[3][1];
            _this.data5 = res.data[res.id].vol[4][1];
            _this.data6 = res.data[res.id].gradeSunBurst;
            // console.log(this.data6);
            _this.data6 = JSON.stringify(_this.data6);
            localStorage.setItem('sunbrust', _this.data6);
            var summaryFlag = localStorage.getItem('summaryFlag');
            // if(summaryFlag =='1'){
            //   localStorage.setItem('summaryFlag','0');
            //   window.location.reload();
            //
            // }
            if (_this.data1 == 0) {
                _this.display = false;
            }
            else {
                _this.display = true;
                // this.getGraph();
            }
        });
    }
    Sm1Component.prototype.ngOnInit = function () {
    };
    return Sm1Component;
}());
Sm1Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm1',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm1/sm1.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm1Component);

var _a;
//# sourceMappingURL=sm1.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n  width: 98%;\n  border : 5px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n  /*color: #469846;*/\n}\n.text-style1{\n  font-size: 1.4rem;\n  background-color: #469846;\n  color: white;\n  border-radius: 15px;\n}\n.text-style2{\n  font-size: 1.4rem;\n  background-color: #0275D8;\n  color: white;\n  border-radius: 15px;\n}\n.text-style3{\n  font-size: 1.4rem;\n  background-color: #D9534F;\n  color: white;\n  border-radius: 15px;\n}\n.text-style4{\n  font-size: 1.4rem;\n  background-color: #cc9343;\n  color: white;\n  border-radius: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row justify-content-md-center\"   data-aos=\"fade-up\"  data-aos-delay=\"300\" >\n\n  <div class=\"col-12\" >\n    <div class=\"box-radius text-center\">\n      <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem\">\n        Sample Wise Analysis\n      </div>\n      <br>\n      <div  class=\"row justify-content-md-center\" >\n\n        <div class=\"col-6 text-right\" >\n\n            <b> <p>Samples Collected : </p></b>\n            <b> <p>Communicated : </p></b>\n            <b> <p>Dispute Raised : </p></b>\n            <b> <p>Delay in Reports : </p></b>\n\n\n        </div>\n        <div class=\"col-6 text-left\" >\n          <span class=\"text-style1\" > &nbsp; {{data1}} &nbsp; </span><br>\n          <span class=\"text-style2\" > &nbsp; {{data2}} &nbsp; </span><br>\n          <span class=\"text-style3\" > &nbsp; {{data3}} &nbsp; </span> &nbsp; <b> </b> <br>\n          <span class=\"text-style4\" > &nbsp; {{data5}} &nbsp; </span> &nbsp; <b> </b> <br>\n        </div>\n\n      </div>\n\n      <!-- <div class=\"progress\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated  bg-warning\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]='data6'>\n          <b>{{data6}}%</b>\n        </div>\n      </div> -->\n\n      <div class=\"progress\" style=\"background-color: #0275d8 !important;   width: 95% !important;margin: auto;\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated bg-danger\" role=\"progressbar\" aria-valuenow=\"75\" aria-valuemin=\"0\" aria-valuemax=\"100\" [style.width.%]='data4'>\n          <span> <b>{{data4}}%</b></span>\n        </div>\n      </div>\n\n      <br>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm2Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm2Component = (function () {
    function Sm2Component(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.labels = ['Lifted', 'Remaining'];
        this.display = false;
        this.ProjectService.emitPSUData.subscribe(function (res) {
            // console.log(res.data);
            _this.data1 = res.data[res.id].results[0][1];
            _this.data2 = res.data[res.id].results[1][1];
            _this.data3 = res.data[res.id].results[2][1];
            _this.data4 = res.data[res.id].results[3][1];
            _this.data5 = res.data[res.id].slabreak[1][1];
            _this.data6 = res.data[res.id].slabreak[2][1];
            _this.label1 = res.data[res.id].results[0][0];
            _this.label2 = res.data[res.id].results[1][0];
            _this.label3 = res.data[res.id].results[2][0];
            if (_this.data1 == 0) {
                _this.display = false;
            }
            else {
                _this.display = true;
            }
        });
    }
    Sm2Component.prototype.ngOnInit = function () {
    };
    return Sm2Component;
}());
Sm2Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm2',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm2/sm2.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm2Component);

var _a;
//# sourceMappingURL=sm2.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n\n  width: 98%;\n  border : 4px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n  /*color: #469846;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"box-radius text-center\"   data-aos=\"fade-up\"  data-aos-delay=\"400\" >\n  <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem \"  >Total Contracts vs Status</div>\n  <br>\n  <div class=\"row justify-content-md-center\" style=\"overflow:auto\" >\n\n    <div class=\"col-7\" style=\"max-height: 400px; z-index:999 !important\">\n      <div *ngIf='!display'>\n        <h5>Data not available</h5>\n      </div>\n      <canvas [ngClass]=\" display ?'opacityOne':'opacityZero'\" class=\"graph\" #donut  height=\"250\" style=\" z-index:999 !important\" >a</canvas>\n\n\n    </div>\n    <div class=\" col-5\" style=\"height: 450px; overflow:auto\">\n      <!-- <p >Signed Amt. :  {{data1}}</p> -->\n      <b>\n\n      <p class=\"set2\">{{label1}} : {{data1}}</p>\n      <p class=\"set1\">{{label2}} : {{data2}}</p>\n      <p class=\"set3\">{{label3}} : {{data3}}</p>\n      \n      <br>\n\n        <button type=\"button\" class=\"btn \" style=\"width:80%; padding:10px !important\">\n          <i class=\"fa fa-clipboard fa-2x\" aria-hidden=\"true\"> </i>\n          <span style=\"font-size:2rem\" > <b>  {{data4}} </b> </span>\n          <span style=\"font-size:1.4rem\" > <br> Signed <br> Contracts </span>\n        </button>\n\n      </b>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm3Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js__ = __webpack_require__("../../../../chart.js/src/chart.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_chart_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_chart_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm3Component = (function () {
    function Sm3Component(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.labels = ['Lifted', 'Remaining'];
        this.display = false;
        this.ProjectService.emitPSUData.subscribe(function (res) {
            console.log(res.data);
            _this.data1 = res.data[res.id].status[0][1];
            _this.data2 = res.data[res.id].status[1][1];
            _this.data3 = res.data[res.id].status[2][1];
            _this.data4 = res.data[res.id].status[3][1];
            // this.data5 = res.data[res.id].status[4][1];
            _this.label1 = res.data[res.id].status[0][0];
            _this.label2 = res.data[res.id].status[1][0];
            _this.label3 = res.data[res.id].status[2][0];
            _this.label4 = res.data[res.id].status[3][0];
            // this.label5 = res.data[res.id].status[4][0];
            if (_this.data5 == 0) {
                _this.display = false;
            }
            else {
                _this.display = true;
                _this.getGraph();
            }
        });
    }
    Sm3Component.prototype.ngOnInit = function () { };
    Sm3Component.prototype.getGraph = function () {
        this.donutCtx = this.donut.nativeElement.getContext('2d');
        this.myChart = new __WEBPACK_IMPORTED_MODULE_2_chart_js___default.a(this.donutCtx, {
            type: 'doughnut',
            data: {
                labels: [this.label1, this.label2, this.label3],
                datasets: [{
                        data: [this.data1, this.data2, this.data3],
                        backgroundColor: ['#469846', '#0275D8', '#F0AD4E']
                    },
                ]
            },
            options: {
                responsive: true,
                legend: {
                    display: false,
                    position: 'top',
                },
                title: {
                    display: true,
                },
                animation: {
                    animateScale: true,
                    animateRotate: true
                }
            }
        });
    };
    return Sm3Component;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('donut'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object)
], Sm3Component.prototype, "donut", void 0);
Sm3Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm3',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm3/sm3.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _b || Object])
], Sm3Component);

var _a, _b;
//# sourceMappingURL=sm3.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm4/allscript.js":
/***/ (function(module, exports) {

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });


    // $('#tooltip1').tooltip();
    // $('#tooltip2').tooltip();
    // $('#tooltip3').tooltip();

});


/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n\n  width: 98%;\n  border : 4px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n  /*color: #469846;*/\n}\n.text-style-g{\n  font-size: 1.4rem;\n  background-color: #469846;\n  color: white;\n  border-radius: 15px;\n}\n.text-style-r{\n  font-size: 1.4rem;\n  background-color: #d9534f;\n  color: white;\n  border-radius: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"box-radius text-center\"   data-aos=\"fade-up\"  data-aos-delay=\"500\" >\n  <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem\">\n    Grade Variance\n  </div>\n  <br>\n  <div class=\"row justify-content-md-center\" style=\"height:450px; overflow:auto\" >\n    <div class=\"col-12\" style=\"width:400px; margin-top:0px\">\n\n      <!-- <iframe src=\"http://192.168.15.237:4400/#/d3-sun-brust\" scrolling=\"no\" height=\"280\" frameborder=\"0\" style=\" overflow-x:hidden !important; overflow-y:hidden !important; \"></iframe> -->\n      <iframe src=\"http://coal.qcitech.org/#/d3-sun-brust\" scrolling=\"no\" height=\"280\" frameborder=\"0\" style=\" overflow-x:hidden !important; overflow-y:hidden !important; \"></iframe>\n\n    </div>\n\n\n\n    <div class=\"col-4\" style=\"height:150px;  margin:auto; border: 2px solid #d9534f ; border-radius:15px; padding:0 !important; margin-right:0 !important;overflow:auto\"  >\n      <b> Below </b>\n      <i id=\"tooltip1\"  class=\"fa fa-info-circle\" aria-hidden=\"false\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Below grade signifies the result was found to be worse than the declared grade at given locations e.g. G7 was given G8, G9, G10 etc\"></i>\n      <br> <b style=\"font-size: 1.4rem\" > {{dd3}} &nbsp; {{dp3}}% </b> <br> <br>\n\n\n      <span style=\"background-color: #fbebeb; border-radius:15px; border: 1px solid #d9534f\" > &nbsp; -1 : {{data5}} - {{p5}}%  &nbsp; </span> <br>\n      <span style=\"background-color: #efc9c9; border-radius:15px; border: 1px solid #d9534f\" > &nbsp; -2 : {{data6}} - {{p6}}%  &nbsp; </span> <br>\n      <span style=\"background-color: #ff9090; border-radius:15px; border: 1px solid #d9534f\" > &nbsp; -3 ^ : {{data7}} - {{p7}}%  &nbsp;</span>\n    </div>\n\n    <div class=\"col-2\" style=\"height:100px;  margin:auto; background-color: #9dde9d; border-radius:15px; padding:0 !important;overflow:auto; border: 2px solid #469846\" >\n        <b> Same </b>\n        <i  id=\"tooltip2\" class=\"fa fa-info-circle\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Same grade signifies that the result was found to be same as the declared grade\"></i>\n        <br> <b style=\"font-size: 1.1rem\" >  <span style=\"background-color: #fff; border-radius:15px; border: 2px solid #469846\" > &nbsp; {{dd2}} &nbsp;  </span>  <br>\n        {{dp2}}% </b> <br>\n\n      <!-- <span style=\"background-color: white;\" > &nbsp;  {{data4}} &nbsp;  <br> &nbsp;  {{p4}}%  &nbsp; </span> -->\n    </div>\n\n    <div class=\"col-4 \" style=\"height:150px;  margin:auto; border: 2px solid #f0ad4e ; border-radius:15px; padding:0 !important; margin-left:0 !important;overflow:auto\" >\n      <b> Above </b>\n      <i  id=\"tooltip3\" class=\"fa fa-info-circle\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Above grade signifies the result was found to be better than the declared grade at given locations e.g G7 was given G5,G4, G3 etc\"></i>\n      <br> <b style=\"font-size: 1.4rem\" > {{dd1}} &nbsp; {{dp1}}% </b> <br> <br>\n\n      <span style=\"background-color: #fde9c2; border-radius:15px;border: 1px solid #f0ad4e ;\" > &nbsp; 1 : {{data3}} - {{p3}}%  &nbsp;</span> <br>\n      <span style=\"background-color: #f7c86c; border-radius:15px;border: 1px solid #f0ad4e ;\" > &nbsp; 2 : {{data2}} - {{p2}}%  &nbsp; </span> <br>\n      <span style=\"background-color: #f0ad4e; border-radius:15px;border: 1px solid #f0ad4e ;\" > &nbsp; 3 ^ : {{data1}} - {{p1}}%  &nbsp; </span>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm4Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js__ = __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm4/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Sm4Component = (function () {
    function Sm4Component(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.labels = ['Lifted', 'Remaining'];
        this.display = false;
        this.d3 = "./d3-sun-brust";
        this.ProjectService.emitPSUData.subscribe(function (res) {
            // console.log(res.data);
            _this.data1 = res.data[res.id].slipage[0][1];
            _this.data2 = res.data[res.id].slipage[1][1];
            _this.data3 = res.data[res.id].slipage[2][1];
            _this.data4 = res.data[res.id].slipage[3][1];
            _this.data5 = res.data[res.id].slipage[4][1];
            _this.data6 = res.data[res.id].slipage[5][1];
            _this.data7 = res.data[res.id].slipage[6][1];
            _this.label1 = res.data[res.id].slipage[0][0];
            _this.label2 = res.data[res.id].slipage[1][0];
            _this.label3 = res.data[res.id].slipage[2][0];
            _this.label4 = res.data[res.id].slipage[3][0];
            _this.label5 = res.data[res.id].slipage[4][0];
            _this.label6 = res.data[res.id].slipage[5][0];
            _this.label7 = res.data[res.id].slipage[6][0];
            _this.p1 = res.data[res.id].slipage[0][2];
            _this.p2 = res.data[res.id].slipage[1][2];
            _this.p3 = res.data[res.id].slipage[2][2];
            _this.p4 = res.data[res.id].slipage[3][2];
            _this.p5 = res.data[res.id].slipage[4][2];
            _this.p6 = res.data[res.id].slipage[5][2];
            _this.p7 = res.data[res.id].slipage[6][2];
            _this.dd1 = res.data[res.id].slipage2[0][1];
            _this.dd2 = res.data[res.id].slipage2[1][1];
            _this.dd3 = res.data[res.id].slipage2[2][1];
            _this.dp1 = res.data[res.id].slipage2[0][2];
            _this.dp2 = res.data[res.id].slipage2[1][2];
            _this.dp3 = res.data[res.id].slipage2[2][2];
            if (_this.data1 == 0) {
                _this.display = false;
            }
            else {
                _this.display = true;
            }
        });
    }
    Sm4Component.prototype.ngOnInit = function () {
    };
    return Sm4Component;
}());
Sm4Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm4',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm4/sm4.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm4Component);

var _a;
//# sourceMappingURL=sm4.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n\n  width: 98%;\n  border : 4px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n  /*color: #469846;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"box-radius text-center\">\n  <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem \"  >Result Declaration Time</div>\n  <br>\n  <div class=\"row justify-content-md-center\" >\n    <div echarts [options]=\"option8\" style=\"height:100%; width:100%\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm5Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm5Component = (function () {
    function Sm5Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.color = ['#0274d8', '#da534e', '#8bc34a', '#ff9800', '#797979', '#e91e63', '#009688', '#3f51b5', '#795548', '#673ab7', '#9c27b0'];
        this.projectService.emitPSUData.subscribe(function (res) {
            _this.option8_data = res.data[res.id].graph2.data1;
            _this.option8_legends = res.data[res.id].graph2.legends;
            _this.getGraph1();
        });
    }
    Sm5Component.prototype.ngOnInit = function () {
        this.projectService.getData3();
        this.getGraph1();
    };
    Sm5Component.prototype.getGraph1 = function () {
        var piePatternSrc = 'https://www.paychex.com/sites/default/files/irs-delays-2014-tax-season.jpg';
        var bgPatternSrc = 'https://thumbs.dreamstime.com/b/old-book-page-17819080.jpg';
        var piePatternImg = new Image();
        piePatternImg.src = piePatternSrc;
        var bgPatternImg = new Image();
        bgPatternImg.src = bgPatternSrc;
        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    image: piePatternImg,
                },
                borderWidth: 3,
                borderColor: '#235894'
            }
        };
        this.option8 = {
            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            visualMap: {
                show: false,
                min: -220,
                max: 3000,
                inRange: {}
            },
            legend: {
                // orient: 'vertical',
                // x: 'left',
                data: this.option8_legends
            },
            series: [
                {
                    title: {
                        // text: 'Customized Pie',
                        left: 'center',
                        top: 10,
                        textStyle: {
                            color: 'white'
                        }
                    },
                    name: 'Delay',
                    type: 'pie',
                    radius: ['50%', '80%'],
                    center: ['50%', '50%'],
                    data: this.option8_data,
                    // roseType: 'radius',
                    label: {
                        show: false,
                        normal: {
                            show: false,
                            textStyle: {
                                color: 'black'
                            }
                        }
                    },
                    color: this.color,
                    labelLine: {
                        show: false,
                        normal: { show: false,
                            lineStyle: {
                                show: false,
                            },
                            smooth: 0.2,
                            length: 5,
                            length2: 2
                        }
                    },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
    };
    return Sm5Component;
}());
Sm5Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm5',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm5/sm5.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm5Component);

var _a;
//# sourceMappingURL=sm5.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".box-radius{\n\n  width: 98%;\n  border : 4px solid #525252;\n  border-radius: 15px;\n  margin: 4px;\n  /*color: #469846;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"box-radius text-center\">\n  <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem \"  >Refree Challenge</div>\n  <br>\n  <div class=\"row justify-content-md-center\" >\n    <div echarts [options]=\"option9\" style=\"height:80%; width:90%\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm6Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm6Component = (function () {
    function Sm6Component(projectService) {
        var _this = this;
        this.projectService = projectService;
        this.color = ['#0274d8', '#da534e', '#8bc34a', '#ff9800', '#797979', '#e91e63', '#009688', '#3f51b5', '#795548', '#673ab7', '#9c27b0'];
        // this.projectService.emitOption8_data.subscribe(res=>{
        //   this.option9_data = res;
        // });
        this.projectService.emitPSUData.subscribe(function (res) {
            _this.option9_data = res.data[res.id].graph1.data1;
            _this.option9_legends = res.data[res.id].graph1.legends;
            _this.getGraph1();
        });
    }
    Sm6Component.prototype.ngOnInit = function () {
        // this.projectService.getData4();
        // this.getGraph1();
    };
    Sm6Component.prototype.getGraph1 = function () {
        //var piePatternSrc = 'https://cdn3.iconfinder.com/data/icons/files-2/512/sign_contract_file-512.png';
        var piePatternSrc = 'https://us.123rf.com/450wm/carmendorin/carmendorin1308/carmendorin130800202/21689191-grunge-rubber-stamp-with-word-challenge-vector-illustration.jpg?ver=6';
        var bgPatternSrc = 'https://thumbs.dreamstime.com/b/old-book-page-17819080.jpg';
        var piePatternImg = new Image();
        piePatternImg.src = piePatternSrc;
        var bgPatternImg = new Image();
        bgPatternImg.src = bgPatternSrc;
        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    image: piePatternImg,
                    repeat: 'repeat'
                },
                borderWidth: 3,
                borderColor: '#235894'
            }
        };
        this.option9 = {
            color: this.color,
            title: {
                // text: 'Customized Pie',
                left: 'center',
                top: 10,
                textStyle: {
                    color: 'white'
                }
            },
            // legend: {
            //     // orient: 'vertical',
            //     // x: 'left',
            //     data:this.option9_legends
            // },
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            grid: {
                right: '1%',
                bottom: '23%',
                containLabel: true
            },
            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {}
            },
            series: [
                { itemStyle: itemStyle,
                    type: 'pie',
                    radius: '76%',
                    center: ['50%', '50%'],
                    data: this.option9_data,
                    // roseType: 'radius',
                    // itemStyle: {
                    //   borderWidth: 1,
                    //   borderColor: '#FFF'
                    // },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: '#235894'
                            },
                            smooth: .2,
                        }
                    },
                    // itemStyle: {
                    //     normal: {
                    //         color: '#0075d9',
                    //         // shadowBlur: 200,
                    //         shadowColor: 'rgba(0, 0, 0, 0.5)'
                    //     }
                    // },
                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function (idx) {
                        return Math.random() * 200;
                    }
                }
            ]
        };
    };
    return Sm6Component;
}());
Sm6Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm6',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm6/sm6.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm6Component);

var _a;
//# sourceMappingURL=sm6.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"text-center\">\n  <br>\n  <div class=\"row justify-content-md-center\" >\n    <div echarts [options]=\"option10\" style=\"height:100%; width:100%\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm7Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm7Component = (function () {
    function Sm7Component(projectService) {
        // this.projectService.emitOption10_data.subscribe(res=>{
        //   this.option10_data  = res;
        // });
        var _this = this;
        this.projectService = projectService;
        this.projectService.emitPSUData.subscribe(function (res) {
            // console.log(res.data);
            _this.signed = res.data[res.id].vol[0][1];
            _this.lifted = res.data[res.id].vol[1][1];
            _this.option10_data = [(_this.lifted / _this.signed)];
            console.log(_this.option10_data);
            _this.getGraph1();
        });
    }
    Sm7Component.prototype.ngOnInit = function () {
        this.projectService.getData5();
    };
    Sm7Component.prototype.getGraph1 = function () {
        //var piePatternSrc = 'https://cdn3.iconfinder.com/data/icons/files-2/512/sign_contract_file-512.png';
        var piePatternSrc = 'https://media.istockphoto.com/photos/black-coal-picture-id540522616?k=6&m=540522616&s=612x612&w=0&h=qMr18CMuMzFWma1QdcTEpKZ8ezRZZ_xs3dhz2rFflpM=';
        var bgPatternSrc = 'https://thumbs.dreamstime.com/b/old-book-page-17819080.jpg';
        var piePatternImg = new Image();
        piePatternImg.src = piePatternSrc;
        var bgPatternImg = new Image();
        bgPatternImg.src = bgPatternSrc;
        var itemStyle = {
            normal: {
                opacity: 0.7,
                color: {
                    image: piePatternImg,
                    repeat: 'repeat'
                },
                borderWidth: 3,
                borderColor: '#235894'
            }
        };
        this.option10 = {
            series: [{
                    outline: {
                        show: true,
                        borderDistance: 0,
                        itemStyle: {
                            borderColor: '#0274d8',
                            borderWidth: 8
                        }
                    },
                    type: 'liquidFill',
                    radius: '80%',
                    data: this.option10_data,
                    label: {
                        normal: {
                            color: '#da534e',
                            insideColor: '#f0ad4e',
                            fontSize: 50
                        }
                    },
                    itemStyle: itemStyle,
                }]
        };
    };
    return Sm7Component;
}());
Sm7Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm7',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm7/sm7.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm7Component);

var _a;
//# sourceMappingURL=sm7.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"text-center\">\n  <!-- <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem \"  >Grade Variance</div> -->\n  <br>\n  <div class=\"row justify-content-md-center\" >\n    <div echarts [options]=\"option11\" style=\"height:700px; width:90%\"></div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sm8Component; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Sm8Component = (function () {
    function Sm8Component(projectService) {
        // this.projectService.emitOption11_data.subscribe(res=>{
        //   this.option11_data = res;
        // });
        var _this = this;
        this.projectService = projectService;
        this.projectService.emitPSUData.subscribe(function (res) {
            _this.option11_data = res.data[res.id].wordcount;
            console.log(_this.option11_data);
            // for(let i=0; i< this.option11_data.length;i++) {
            //   this.option11_data[i].name = this.option11_data[i].name
            // }
            _this.getGraph1();
        });
    }
    Sm8Component.prototype.ngOnInit = function () {
        this.projectService.getData6();
    };
    Sm8Component.prototype.getGraph1 = function () {
        this.option11 = {
            tooltip: {
                trigger: 'item',
            },
            series: [{
                    type: 'wordCloud',
                    gridSize: 0,
                    sizeRange: [11, 40],
                    rotationRange: [-90, 90],
                    rotationStep: 45,
                    left: 'center',
                    top: 'center',
                    width: '100%',
                    height: '100%',
                    drawOutOfBound: false,
                    textStyle: {
                        normal: {
                            fontWeight: 'bold',
                            color: function () {
                                var color = ['#0274d8', '#da534e', '#f0ad4e', '#f0ad4e', '#8bc34a', '#ff9800', '#797979', '#e91e63', '#3f51b5', '#795548', '#673ab7', '#9c27b0'];
                                var rand = Math.floor(Math.random() * 11) + 0;
                                return color[rand];
                            }
                        },
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: '#333'
                        }
                    },
                    data: this.option11_data
                }]
        };
    };
    return Sm8Component;
}());
Sm8Component = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sm8',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/sm8/sm8.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], Sm8Component);

var _a;
//# sourceMappingURL=sm8.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/summary-content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".height400{\n  max-height: 650px;\n  /*overflow: auto;*/\n}\n.box-radius{\n\n  width: 90%;\n  border : 4px solid #525252;\n  border-radius: 15px;\n  /*margin: 10px;*/\n  /*color: #469846;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/summary-content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" >\n\n  <div id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n\n    <div class=\"row justify-content-md-center\" >\n\n      <div class=\"col-md-9\">\n        <div class=\"row\" >\n\n          <div class=\"col-md-6\" >\n            <app-sm1></app-sm1>\n          </div>\n\n          <div class=\"col-md-6\" >\n            <div class=\"row justify-content-md-center\" >\n              <div  class=\"col-md-12\">\n                <app-sm2></app-sm2>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col-md-6 height400\" >\n            <app-sm3></app-sm3>\n          </div>\n\n          <div class=\"col-md-6 height400\" >\n            <app-sm4></app-sm4>\n          </div>\n\n          <div class=\"col-md-6 height400\" data-aos=\"fade-down\"  data-aos-delay=\"500\" >\n            <app-sm5></app-sm5>\n          </div>\n\n          <div class=\"col-md-6 height400\" data-aos=\"fade-down\"  data-aos-delay=\"500\" >\n            <app-sm6></app-sm6>\n          </div>\n\n        </div>\n      </div>\n\n      <div class=\"col-md-3 box-radius text-center\" data-aos=\"fade-right\"  data-aos-delay=\"500\" style=\"padding:0; margin-top:5px !important; \">\n\n        <div class=\"text-center\"  style=\"height:1.9rem; width:100%; color: white; background-color: #525252; font-size:1.5rem \"  >Total Lifted</div>\n\n        <div class=\"row\">\n\n          <div class=\"col-12\" >\n            <app-sm7></app-sm7>\n          </div>\n\n          <div class=\"col-12\" >\n            <app-sm8></app-sm8>\n          </div>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/summary-content/summary-content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SummaryContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SummaryContentComponent = (function () {
    function SummaryContentComponent(ProjectService, route, router) {
        this.ProjectService = ProjectService;
        this.route = route;
        this.router = router;
    }
    SummaryContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var sub = this.route.queryParams
            .subscribe(function (params) {
            _this.psu_id = params.psu_id;
            // console.log(this.psu_id);
            localStorage.setItem('not_All_Summary', '1');
            _this.ProjectService.emitCSummary.emit(_this.psu_id);
            _this.ProjectService.allPSUData(_this.psu_id);
        });
    };
    return SummaryContentComponent;
}());
SummaryContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-summary-content',
        template: __webpack_require__("../../../../../src/app/home/the-summary/summary-content/summary-content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/summary-content/summary-content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SummaryContentComponent);

var _a, _b, _c;
//# sourceMappingURL=summary-content.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-summary/the-summary.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-summary/the-summary.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div  class=\"row justify-content-md-center text-center\" >\n    <div class=\"col-12 \" style=\"margin: auto; height:200px; \"  >\n      <img data-aos=\"zoom-in\"  data-aos-delay=\"250\"  src=\"../../assets/coalindia.png\" class=\" rounded mx-auto d-block logo \" style=\"  height:30vh;margin:0 auto; margin-top: 8vh;\">\n    </div>\n  </div>\n\n  <h1  class=\"text-center\"  style=\"padding-top:19vh; padding-bottom:1vh\" data-aos=\"zoom-in\" data-aos-delay=\"650\">\n    QCI Coal\n  </h1>\n\n  <div class=\"row justify-content-md-center\" >\n    <div class=\"col-lg-3 col-md-3 col-sm-12\" style=\"padding:10px\" >\n\n      <div class=\"card\" style=\"min-width: 200px; padding:10px\" data-aos=\"fade-up\"  data-aos-delay=\"150\" >\n        <span class=\"text-center\" style=\"font-size:2rem\">\n          <i class=\"fa fa-file-text-o fa-4x\" aria-hidden=\"true\"></i>\n        </span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title text-center\" >PSU Contracts</h4>\n          <div style=\"float: none; margin: 0 auto;\" >\n            <a [routerLink]=\"['/home/contract']\" class=\"btn btn-primary\" >View Details</a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div class=\"col-lg-3 col-md-3 col-sm-12\" style=\"padding:10px\">\n\n      <div class=\"card\" style=\"min-width: 200px; padding:10px\"  data-aos=\"fade-up\"  data-aos-delay=\"200\" >\n        <span class=\"text-center\"  style=\"font-size:2rem\">\n          <i class=\"fa fa-line-chart fa-4x\"></i>\n        </span>\n\n        <div class=\"card-block\">\n          <h4 class=\"card-title text-center\">Tracker</h4>\n          <a [routerLink]=\"['/home/tracker']\" class=\"btn btn-primary\">View Tracker</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3 col-sm-12\" style=\"padding:10px\">\n      <div class=\"card\" style=\"min-width: 200px; padding:10px\"  data-aos=\"fade-up\"  data-aos-delay=\"250\" >\n        <span class=\"text-center\" style=\"font-size:2rem\">\n          <i class=\"fa fa-bar-chart-o fa-4x\"></i>\n        </span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title text-center\">Summary</h4>\n          <a [routerLink]=\"['/home/']\"  class=\"btn btn-primary\">View Summary</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-lg-3 col-md-3 col-sm-12\" style=\"padding:10px\">\n      <div class=\"card\" style=\"min-width: 200px; padding:10px\"  data-aos=\"fade-up\"  data-aos-delay=\"200\" >\n        <span class=\"text-center\" style=\"font-size:2rem\">\n          <i class=\"fa fa-cloud-upload fa-4x\"></i>\n        </span>\n        <div class=\"card-block\">\n          <h4 class=\"card-title text-center\">Upload</h4>\n          <a [routerLink]=\"['/home/upload']\" class=\"btn btn-primary\">Upload Data</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n\n<app-section1 id=\"section1\"  style=\"padding-top:20vh\" ></app-section1>\n<app-section2 id=\"section2\"  style=\"padding-top:20vh\" ></app-section2>\n\n<div class=\"container-fluid\">\n\n\n  <div class=\"row \" style=\"padding-top:15vh; padding-bottom:5vh;\" >\n\n    <div class=\"col-12\" style=\"border-bottom: 6px solid #525252 !important\"  data-aos=\"zoom-in\" data-aos-delay=\"850\"></div>\n    <div class=\"col-12\" style=\"border-bottom: 3px solid #FFF !important\"  ></div>\n    <!-- <div class=\"col-12\" style=\"border-bottom: 6px solid #0274d8 !important\"  data-aos=\"zoom-in\" data-aos-delay=\"650\"></div> -->\n\n    <div class=\"col-12\" style=\"border-bottom: 14px solid #0274d8 !important\"  ></div>\n\n    <div class=\" col-md-8 text-center\" style=\"color:white; background-color:#0274d8\">\n      <h2 style=\"margin-bottom:0px; margin-top:0px \"  id=\"section3\"> PSU Summary - {{CSummary}}</h2>\n      <p style=\"color:grey; margin-bottom:0px\"  style=\"color:white; background-color:#0274d8\"> <i> last updated : {{last_update}} </i></p>\n      <br>\n    </div>\n\n    <div class=\" col-md-4\"  style=\"color:white; background-color:#0274d8\">\n      <div class=\"dropdown\">\n        <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Select subsidiary\n        </button>\n        <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\" style=\"z-index:121\">\n          <a *ngFor='let psu of PSUArray' class=\"dropdown-item\"  (click)=\"psuSummary(psu._id, psu.name)\">{{psu.name}}</a>\n        </div>\n      </div>\n    </div>\n\n    <!-- <div class=\"col-12\" style=\"border-bottom: 6px solid #0274d8 !important\"  data-aos=\"zoom-in\" data-aos-delay=\"650\"></div> -->\n    <div class=\"col-12\" style=\"border-bottom: 3px solid #FFF !important\" ></div>\n    <div class=\"col-12\" style=\"border-bottom: 6px solid #525252 !important\"  data-aos=\"zoom-in\" data-aos-delay=\"850\"></div>\n\n  </div>\n\n  <router-outlet></router-outlet>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-summary/the-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheSummaryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheSummaryComponent = (function () {
    function TheSummaryComponent(router, ProjectService) {
        var _this = this;
        this.router = router;
        this.ProjectService = ProjectService;
        var temp = localStorage.getItem('psuidname');
        temp = JSON.parse(temp);
        this.PSUArray = temp;
        this.ProjectService.emitCSummary.subscribe(function (res) {
            // console.log(res);
            _this.CSummary = _this.PSUArray[res].name;
            // console.log(this.CSummary);
        });
        var flag = localStorage.getItem('not_All_Summary');
        if (flag != '1') {
            //  console.log(flag);
            this.router.navigate(['home/summary/psusummary'], { queryParams: { psu_id: 0 } });
        }
    }
    TheSummaryComponent.prototype.ngOnInit = function () {
        this.last_update = JSON.parse(localStorage.getItem('last_update_tracker'));
    };
    TheSummaryComponent.prototype.psuSummary = function (id, name) {
        localStorage.setItem('summaryFlag', '1');
        this.psu = " - " + name;
        this.router.navigate(['home/summary/psusummary'], { queryParams: { psu_id: id } });
    };
    return TheSummaryComponent;
}());
TheSummaryComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-the-summary',
        template: __webpack_require__("../../../../../src/app/home/the-summary/the-summary.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-summary/the-summary.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__service_ProjectService__["a" /* ProjectService */]) === "function" && _b || Object])
], TheSummaryComponent);

var _a, _b;
//# sourceMappingURL=the-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-table/allscript.js":
/***/ (function(module, exports) {

$(document).ready(function() {

    $('#example tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input style="width:10px !important" type="text" placeholder="" />' );
    } );


    var table = $('#example').DataTable({
        "lengthMenu": [[10, 25, 50, -1, 05], [10, 25, 50, "All", 05]],
        scrollX:  true,
        fixedColumns:   {
            leftColumns: 4,
        }
    });

    $('#example2 tfoot th').each( function () {
        var title = $(this).text();
        $(this).html( '<input style="width:65px" type="text" placeholder="" />' );
    } );


    var table2 = $('#example2').DataTable({

    });


    table2.columns().every( function () {
        var that = this;

        $( 'input', this.footer() ).on( 'keyup change', function () {
            if ( that.search() !== this.value ) {
                that
                    .search( this.value )
                    .draw();
            }
        } );
    } );

    var expandLegend = function() {
        var exp = chart.legend.expanded();
        chart.legend.expanded(!exp);
        chart.update();
    }

    // var histcatexplong = [
    //     {
    //         "key" : "Consumer Discretionary" ,
    //         "values" : [[ 1333166400000 , 0] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     } ,
    //     {
    //         "key" : "Consumer Staples" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     } ,
    //     {
    //         "key" : "Energy1" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     },
    //     {
    //         "key" : "Energy2" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     },{
    //         "key" : "Energy3" ,
    //         "values" : [[ 1333166400000 , 17.429019937289] , [ 1335758400000 , 16.75543633539] , [ 1338436800000 , 16.182906906042]]
    //     }
    //
    // ];



    var histcatexplong = localStorage.getItem('tracker_graph_dis');
    histcatexplong = JSON.parse(histcatexplong);

    var colors = d3.scale.category20();

    var chart;
    nv.addGraph(function() {
        chart = nv.models.stackedAreaChart()
            .useInteractiveGuideline(true)
            .x(function(d) { return d[0] })
            .y(function(d) { return d[1] })
            .controlLabels({stacked: "Stacked"})
            .duration(300);
        chart.xAxis.tickFormat(function(d) { return d3.time.format('%d/%m/%Y')(new Date(d)) });
        chart.yAxis.tickFormat(d3.format('.2f'));
        chart.legend.vers('furious');
        d3.select('#chart1')
            .datum(histcatexplong)
            .transition().duration(1000)
            .call(chart)
            .each('start', function() {
                setTimeout(function() {
                    d3.selectAll('#chart1 *').each(function() {
                        if(this.__transition__)
                            this.__transition__.duration = 1;
                    })
                }, 0)
            });
        nv.utils.windowResize(chart.update);
        return chart;
    });


} );


/***/ }),

/***/ "../../../../../src/app/home/the-table/the-table.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "tfoot input {\n        width: 70%;\n        padding: 3px;\n        box-sizing: border-box;\n    }\n\ntfoot {\n    display: table-header-group !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-table/the-table.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='display' class=\"container-fluid\"  style=\" overflow-x:auto;overflow-y:hidden\">\n\n  <div class=\"row \" style=\"padding-top:10px\" >\n    <div class=\" col-md-6 text-left\">\n      <h2 style=\"margin-bottom:0px; \">Tracker  <span style=\"font-size: 1.2rem\" > {{c_month}} </span> </h2>\n      <p style=\"color:grey\"> <i> last updated : {{last_update}} </i></p>\n      <br>\n    </div>\n\n    <div class=\" col-md-6 \" style=\"float:right\" >\n      <div class=\"form-group row\">\n        <label for=\"example-datetime-local-input\" class=\"col-2 col-form-label text-center\">Select month</label>\n        <div class=\"col-5\">\n          <input class=\"form-control\" type=\"month\" id=\"example-datetime-local-input\"  [(ngModel)]='date2' format=\"dd/MM/yyyy\">\n        </div>\n        <div class=\"3\">\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"searchByDate()\" >Search</button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <div style=\"padding-bottom:0px;\">\n  </div>\n\n  <!-- Nav tabs -->\n  <ul class=\"nav nav-tabs\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#table1\" role=\"tab\">Data Table</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" data-toggle=\"tab\" href=\"#graph1\" role=\"tab\">Graph</a>\n    </li>\n  </ul>\n\n\n  <div class=\"tab-content\" style=\"height:100%; width:100%; \">\n\n    <div class=\"tab-pane active\" id=\"table1\" role=\"tabpanel\">\n      <br>\n      <table class=\"stripe row-border order-column\" id=\"example\"   cellspacing=\"0\" width=\"100%\"   style=\"font-size:.8rem !important\">\n        <thead style=\"background-color:#dcefff\">\n          <tr>\n\n            <th>Subsidiary</th>\n            <th>Location</th>\n            <th>Customer</th>\n            <th>Lifted</th>\n            <th>Days</th>\n            <th>Ideal</th>\n            <th>Status</th>\n            <th>1</th>\n            <th>2</th>\n            <th>3</th>\n            <th>4</th>\n            <th>5</th>\n            <th>6</th>\n            <th>7</th>\n            <th>8</th>\n            <th>9</th>\n            <th>10</th>\n            <th>11</th>\n            <th>12</th>\n            <th>13</th>\n            <th>14</th>\n            <th>15</th>\n            <th>16</th>\n            <th>17</th>\n            <th>18</th>\n            <th>19</th>\n            <th>20</th>\n            <th>21</th>\n            <th>22</th>\n            <th>23</th>\n            <th>24</th>\n            <th>25</th>\n            <th>26</th>\n            <th>27</th>\n            <th>28</th>\n            <th>29</th>\n            <th>30</th>\n            <th>31</th>\n\n\n          </tr>\n        </thead>\n        <tfoot>\n         <tr>\n\n           <th style=\"opacity:0;  cursor:default;\">Subsidiary</th>\n           <th style=\"opacity:0;  cursor:default;\">Location</th>\n           <th style=\"opacity:0;  cursor:default;\">Mode - Customer - Plant</th>\n           <th style=\"opacity:0;  cursor:default;\">Total Lifted</th>\n           <th style=\"opacity:0;  cursor:default;\">Days</th>\n           <th style=\"opacity:0;  cursor:default;\">Total Remaining</th>\n           <th style=\"opacity:0;  cursor:default;\">Status</th>\n           <th style=\"opacity:0;  cursor:default;\">1</th>\n           <th style=\"opacity:0;  cursor:default;\">2</th>\n           <th style=\"opacity:0;  cursor:default;\">3</th>\n           <th style=\"opacity:0;  cursor:default;\">4</th>\n           <th style=\"opacity:0;  cursor:default;\">5</th>\n           <th style=\"opacity:0;  cursor:default;\">6</th>\n           <th style=\"opacity:0;  cursor:default;\">7</th>\n           <th style=\"opacity:0;  cursor:default;\">8</th>\n           <th style=\"opacity:0;  cursor:default;\">9</th>\n           <th style=\"opacity:0;  cursor:default;\">10</th>\n           <th style=\"opacity:0;  cursor:default;\">11</th>\n           <th style=\"opacity:0;  cursor:default;\">12</th>\n           <th style=\"opacity:0;  cursor:default;\">13</th>\n           <th style=\"opacity:0;  cursor:default;\">14</th>\n           <th style=\"opacity:0;  cursor:default;\">15</th>\n           <th style=\"opacity:0;  cursor:default;\">16</th>\n           <th style=\"opacity:0;  cursor:default;\">17</th>\n           <th style=\"opacity:0;  cursor:default;\">18</th>\n           <th style=\"opacity:0;  cursor:default;\">19</th>\n           <th style=\"opacity:0;  cursor:default;\">20</th>\n           <th style=\"opacity:0;  cursor:default;\">21</th>\n           <th style=\"opacity:0;  cursor:default;\">22</th>\n           <th style=\"opacity:0;  cursor:default;\">23</th>\n           <th style=\"opacity:0;  cursor:default;\">24</th>\n           <th style=\"opacity:0;  cursor:default;\">25</th>\n           <th style=\"opacity:0;  cursor:default;\">26</th>\n           <th style=\"opacity:0;  cursor:default;\">27</th>\n           <th style=\"opacity:0;  cursor:default;\">28</th>\n           <th style=\"opacity:0;  cursor:default;\">29</th>\n           <th style=\"opacity:0;  cursor:default;\">30</th>\n           <th style=\"opacity:0;  cursor:default;\">31</th>\n         </tr>\n        </tfoot>\n        <tbody>\n\n          <tr *ngFor=\"let track of tracker  ;  let i = index \">\n\n            <td>{{track.d1}}</td>\n            <td>{{track.d2}}</td>\n            <td>{{track.d3}}</td>\n            <td>{{track.lifted}}</td>\n            <td class=\"\">\n              <input style=\"width: 45px\" type=\"number\" name=\"\"   [(ngModel)]='track.d8' value={{track.d8}}>\n            </td>\n            <td>{{parseint((track.needed*last_date)/track.d8)}}</td>\n\n            <td>\n              <span *ngIf=\"calStatus(track.lifted,(track.needed*last_date),track.d8) == 'Beyond'\" style=\"color:#5f4cad\"> <b>&nbsp;{{calStatus(track.lifted,(track.needed*last_date),track.d8)}}&nbsp; </b> </span>\n              <span *ngIf=\"calStatus(track.lifted,(track.needed*last_date),track.d8) == 'Okay'\" style=\"color:#248c0b\"> <b>&nbsp;{{calStatus(track.lifted,(track.needed*last_date),track.d8)}}&nbsp; </b> </span>\n              <span *ngIf=\"calStatus(track.lifted,(track.needed*last_date),track.d8) == 'Below'\" style=\"color:#ff5722\"> <b>&nbsp;{{calStatus(track.lifted,(track.needed*last_date),track.d8)}}&nbsp;</b>  </span>\n            </td>\n\n            <!-- b5eaa8 -->\n            <td>{{track.d1d}}</td>\n            <td>{{track.d2d}}</td>\n            <td>{{track.d3d}}</td>\n            <td>{{track.d4d}}</td>\n            <td>{{track.d5d}}</td>\n            <td>{{track.d6d}}</td>\n            <td>{{track.d7d}}</td>\n            <td>{{track.d8d}}</td>\n            <td>{{track.d9d}}</td>\n            <td>{{track.d10d}}</td>\n            <td>{{track.d11d}}</td>\n            <td>{{track.d12d}}</td>\n            <td>{{track.d13d}}</td>\n            <td>{{track.d14d}}</td>\n            <td>{{track.d15d}}</td>\n            <td>{{track.d16d}}</td>\n            <td>{{track.d17d}}</td>\n            <td>{{track.d18d}}</td>\n            <td>{{track.d19d}}</td>\n            <td>{{track.d20d}}</td>\n            <td>{{track.d21d}}</td>\n            <td>{{track.d22d}}</td>\n            <td>{{track.d23d}}</td>\n            <td>{{track.d24d}}</td>\n            <td>{{track.d25d}}</td>\n            <td>{{track.d26d}}</td>\n            <td>{{track.d27d}}</td>\n            <td>{{track.d28d}}</td>\n            <td>{{track.d29d}}</td>\n            <td>{{track.d30d}}</td>\n            <td>{{track.d31d}}</td>\n\n\n          </tr>\n\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"tab-pane \" id=\"graph1\" role=\"tabpanel\">\n      <br><br>\n      <style>\n          text {\n              font: 12px sans-serif;\n          }\n          svg {\n              display: block;\n          }\n          html, body, svg {\n              margin: auto;\n              padding: 0px;\n              height: 600px;\n              width: 85vw;\n\n          }\n      </style>\n\n      <body class='with-3d-shadow with-transitions'>\n\n        <div class=\"row justify-content-md-center\" >\n          <div class=\"col-12\" >\n\n            <svg id=\"chart1\"  style=\"padding-left:10px\"  ></svg>\n\n          </div>\n        </div>\n\n      </body>\n\n    </div>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-table/the-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js__ = __webpack_require__("../../../../../src/app/home/the-table/allscript.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__allscript_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__allscript_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TheTableComponent = (function () {
    function TheTableComponent(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.display = false;
        this.formData = new FormData();
        this.searchRefreshflag = false;
        this.trackerFlag = localStorage.getItem('trackerFlag');
        if (this.trackerFlag == 0) {
            window.location.reload();
            localStorage.setItem('trackerFlag', '1');
        }
        else {
            var temp = localStorage.getItem('tracker');
            temp = JSON.parse(temp);
            this.tracker = temp;
            // console.log(this.tracker);
            this.display = true;
            this.ProjectService.emitTrackerData.subscribe(function (res) {
                localStorage.setItem('tracker', JSON.stringify(res.data));
                localStorage.setItem('tracker_graph_current', JSON.stringify(res.graph));
                localStorage.setItem('last_date', JSON.stringify(res.last_date));
                // console.log(res);
                if (_this.searchRefreshflag) {
                    window.location.reload();
                }
            });
        }
        this.last_date = localStorage.getItem('last_date');
    }
    TheTableComponent.prototype.ngOnInit = function () {
        this.last_update = JSON.parse(localStorage.getItem('last_update_tracker'));
        var d = new Date();
        var m = d.getMonth();
        m += 1;
        var y = d.getFullYear();
        this.month = y + '-' + m;
        // console.log(this.month);
        var temp = localStorage.getItem('month_flag');
        if (temp == '1') {
            this.c_month = localStorage.getItem('current_month');
            localStorage.setItem('month_flag', '0');
        }
        else {
            this.c_month = this.month;
        }
        localStorage.setItem('month', this.month);
        this.formData.append('monthdate', this.month);
        this.ProjectService.getTrackerByDate(this.formData, this.month);
        // this.ProjectService.updateTracker();
    };
    TheTableComponent.prototype.ngOnDestroy = function () {
        localStorage.setItem('trackerFlag', '0');
    };
    TheTableComponent.prototype.parseint = function (data) {
        // console.log(data);
        data = parseInt(data);
        data = +data || 0;
        return data;
    };
    TheTableComponent.prototype.searchByDate = function () {
        var formData1 = new FormData();
        this.month = this.date2;
        formData1.append('monthdate', this.month);
        localStorage.setItem('month_flag', '1');
        localStorage.setItem('current_month', this.month);
        // console.log(this.date2);
        this.ProjectService.getTrackerByDate(formData1, this.month);
        //this.ProjectService.getContractByDate(formData);
        this.searchRefreshflag = true;
    };
    TheTableComponent.prototype.calStatus = function (lifted, needed, days) {
        var act = needed / days;
        var diff = act - lifted;
        var per25 = .25;
        if (lifted > (act)) {
            return "Beyond";
        }
        else if (diff < (act * per25)) {
            return 'Okay';
        }
        return "Below";
    };
    return TheTableComponent;
}());
TheTableComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-the-table',
        template: __webpack_require__("../../../../../src/app/home/the-table/the-table.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-table/the-table.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], TheTableComponent);

var _a;
//# sourceMappingURL=the-table.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/the-upload/the-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/the-upload/the-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\"  style=\" overflow-x:auto;overflow-y:hidden\">\n\n  <div class=\"row \" style=\"padding:30px; padding-bottom:0\" >\n\n    <div class=\" col-6 text-left\">\n      <h2 style=\"margin-bottom:0px; \">Uploads</h2>\n    </div>\n    <div class=\"col-6 text-right\"  >\n\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\" style=\"margin-top:5px;\"\n      (click)='openURL(\"https://s3.ap-south-1.amazonaws.com/qci-coal-dashboard/Templates/Contract%20Upload%20Template.csv\")'>\n        Sample contract <i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>\n      </button>\n\n      <button type=\"button\" name=\"button\" class=\"btn btn-primary\"style=\"margin-top:5px;\"\n      (click)='openURL(\"https://s3.ap-south-1.amazonaws.com/qci-coal-dashboard/Templates/Process%20Tracker%20Template.csv\")'>\n        Sample tracker &nbsp; <i class=\"fa fa-cloud-download\" aria-hidden=\"true\"></i>\n      </button>\n\n    </div>\n  </div>\n\n  <div class=\"row justify-content-md-center\" style=\"padding:30px;  padding-bottom:0\" >\n\n    <div class=\" col-md-6 text-center\" style=\"min-width: 200px; padding:20px;\">\n      <span class=\"text-center\" style=\"font-size:2rem\">\n        <i class=\"fa fa-file-text-o fa-5x\"></i>\n      </span> <br><br>\n      <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" >\n          <span class=\"btn  btn-file btn-primary\" style=\"width:100% !important\"><span>Update contract : </span><input type=\"file\" (change)=\"updateContract($event);\" accept=\".csv\"/></span>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 text-center\"  style=\"min-width: 200px; padding:20px;\">\n      <span class=\"\"  style=\"font-size:2rem\">\n        <i class=\"fa fa-line-chart fa-5x\"></i>\n      </span><br><br>\n      <div class=\"fileinput fileinput-new\" data-provides=\"fileinput\" style=\"width:100%\">\n          <span class=\"btn  btn-file  btn-primary\" style=\"width:100% !important\"><span>Update tracker : </span><input type=\"file\" (change)=\"updateTracker($event);\"  accept=\".csv\"/></span>\n      </div>\n    </div>\n\n  </div>\n\n  <div class=\"row justify-content-md-center\" style=\"padding:30px\" >\n\n    <div class=\" col-md-6 text-center\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Contract Tracker</h5>\n        </div>\n        <div class=\"card-block text-center\" style=\"height: 350px; overflow-y:auto\" >\n\n          <table class=\"table-striped table-hover\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" >\n            <thead  style=\"background-color:#dcefff\">\n              <tr>\n                <th  class=\"text-center\">S.no.</th>\n                <th  class=\"text-center\">File name</th>\n                <th  class=\"text-center\">Time</th>\n                <th  class=\"text-center\">Summary</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let contract of contractHistory  ;  let i = index \">\n                <td>{{i+1}}.</td>\n                <td>{{contract.file_original_name}}</td>\n                <td>{{contract.time}}</td>\n                <td style=\"color:#0275d8\">\n                    <i class=\"fa fa-share-square-o\" (click)='pSummary(contract.status)' aria-hidden=\"true\"></i>\n                    &nbsp;&nbsp;\n                    <i class=\"fa fa-download\" aria-hidden=\"true\" (click)='openURL(contract.url)'></i>\n                  <!-- <a class=\"nav-link\" (click)='openURL(\"https://s3.ap-south-1.amazonaws.com/qci-coal-dashboard/Templates/Contract%20Upload%20Template.csv\")'>\n                     <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                  </a> -->\n\n                </td>\n\n              </tr>\n\n            </tbody>\n          </table>\n\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 text-center\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <h5>Daily Tracker</h5>\n        </div>\n        <div class=\"card-block\" style=\"height: 350px; overflow-y:auto\" >\n\n          <table class=\"table-striped table-hover\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\" >\n            <thead  style=\"background-color:#dcefff\">\n              <tr>\n                <th  class=\"text-center\">S.no.</th>\n                <th  class=\"text-center\">File name</th>\n                <th  class=\"text-center\">Time</th>\n                <th  class=\"text-center\">Summary</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let tracker of trackerHistory  ;  let i = index \">\n                <td>{{i+1}}.</td>\n                <td>{{tracker.file_original_name}}</td>\n                <td>{{tracker.time}}</td>\n                <td style=\"color:#0275d8\">\n                    <i class=\"fa fa-share-square-o\" (click)='pSummary(tracker.status)' ></i>\n                    &nbsp;&nbsp;\n                    <i class=\"fa fa-download\" aria-hidden=\"true\" (click)='openURL(tracker.url)'></i>\n                  <!-- <a class=\"nav-link\" (click)='openURL(\"https://s3.ap-south-1.amazonaws.com/qci-coal-dashboard/Templates/Contract%20Upload%20Template.csv\")'>\n                     <i class=\"fa fa-download\" aria-hidden=\"true\"></i>\n                  </a> -->\n\n                </td>\n\n              </tr>\n\n            </tbody>\n          </table>\n\n\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n  <div style=\"padding-bottom:50px;\">\n  </div>\n\n</div>\n\n\n<div class=\"modal fade\" id=\"exampleModal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel1\" aria-hidden=\"true\" >\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel1\">Update summary</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\" style=\"height:300px; overflow: auto \">\n\n        <i class=\"fa fa-arrow-right\" aria-hidden=\"true\"></i>  {{updatedData.name1}} <b>{{updatedData.value1}}</b> <br>\n        <br>\n        <!-- lllllllllllllllllllllllllllllllll -->\n\n        <div id=\"accordion\" role=\"tablist\">\n\n          <div  *ngIf='updatedData.value2.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name2}} #{{updatedData.value2.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value2' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value3.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne3\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name3}} #{{updatedData.value3.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne3\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value3' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value4.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne4\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name4}} #{{updatedData.value4.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne4\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value4' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div *ngIf='updatedData.value5.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne5\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name5}} #{{updatedData.value5.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne5\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value5' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value6.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne6\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name6}} #{{updatedData.value6.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne6\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value6' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value7.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne7\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name7}} #{{updatedData.value7.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne7\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value7' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value8.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne8\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name8}} #{{updatedData.value8.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne8\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value8' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value9.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne9\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name9}} #{{updatedData.value9.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne9\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value9' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n          <div  *ngIf='updatedData.value10.length' class=\"card\">\n            <div class=\"card-header\" role=\"tab\" id=\"headingOne\">\n              <div class=\"mb-0\">\n                <a data-toggle=\"collapse\" href=\"#collapseOne10\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                  {{updatedData.name10}} #{{updatedData.value10.length}}\n                </a>\n              </div>\n            </div>\n\n            <div id=\"collapseOne10\" class=\"collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n              <div class=\"card-body\">\n                <b *ngFor='let cData of updatedData.value10' > <br> <span style=\"margin-left:60px\" > {{cData}}  </span></b> <br>\n              </div>\n            </div>\n          </div>\n\n\n        </div>\n\n\n        <!-- lllllllllllllllllllllllllllllllll -->\n\n         <br>\n\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" >Cancel</button>\n        <div *ngIf='updateFlag' >\n          <button  type=\"button\" class=\"btn btn-success\" (click)='proceed()'   data-dismiss=\"modal\"  >Proceed with update </button>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/the-upload/the-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TheUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TheUploadComponent = (function () {
    function TheUploadComponent(ProjectService) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.formData = new FormData();
        this.updatedData = { 'value2': [], 'value3': [], 'value4': [], 'value5': [], 'value6': [], 'value7': [], 'value8': [], 'value9': [], 'value10': [] };
        this.display = false;
        this.flag = 0;
        this.ProjectService.emitContractMsg.subscribe(function (res) {
            _this.updatedData = res;
            console.log(_this.updatedData);
            _this.display = true;
            $("#exampleModal1").modal('show');
        });
        this.ProjectService.emitUploadHistory.subscribe(function (res) {
            _this.contractHistory = res.contract;
            _this.trackerHistory = res.tracker;
            // console.log(this.contractHistory);
            // console.log(this.trackerHistory);
        });
    }
    ;
    TheUploadComponent.prototype.ngOnInit = function () {
        this.ProjectService.uploadHistory();
    };
    TheUploadComponent.prototype.updateContract = function ($event) {
        this.updateFlag = true;
        // console.log('1');
        this.flag = 1;
        this.formData.delete('file');
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        // console.log(file);
        this.formData = new FormData();
        this.formData.append('file', file);
        // console.log(this.formData);
        // this.ProjectService.updateContract(this.formData);
        this.ProjectService.checkUploadedContracts(this.formData);
    };
    TheUploadComponent.prototype.updateTracker = function ($event) {
        this.updateFlag = true;
        // console.log('2');
        this.flag = 2;
        this.formData.delete('file');
        this.files = $event.target.files || $event.srcElement.files;
        var file = this.files[0];
        // console.log(file);
        this.formData = new FormData();
        this.formData.append('file', file);
        // console.log(this.formData);
        // this.ProjectService.updateTracker(this.formData);
        this.ProjectService.checkUploadedTracker(this.formData);
    };
    TheUploadComponent.prototype.openURL = function (url) {
        window.open(url, '_blank');
    };
    TheUploadComponent.prototype.proceed = function () {
        if (this.flag == 1) {
            this.ProjectService.updateContract(this.formData);
        }
        else if (this.flag == 2) {
            this.ProjectService.updateTracker(this.formData);
        }
        // window.location.reload();
    };
    TheUploadComponent.prototype.pSummary = function (data) {
        this.updateFlag = false;
        this.updatedData = data;
        console.log(this.updatedData);
        this.display = true;
        $("#exampleModal1").modal('show');
    };
    return TheUploadComponent;
}());
TheUploadComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-the-upload',
        template: __webpack_require__("../../../../../src/app/home/the-upload/the-upload.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/the-upload/the-upload.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object])
], TheUploadComponent);

var _a;
//# sourceMappingURL=the-upload.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body {\n\tbackground: #eee !important;\n}\n\n.loginBox{\n     box-shadow: 15px 15px 30px #bdbdbd;\n}\n\n.wrapper {\n\tmargin-top: 150px;\n  margin-bottom: 80px;\n}\n\n.form-signin {\n  max-width: 380px;\n  padding: 15px 35px 45px;\n  margin: 0 auto;\n  background-color: #fff;\n  border: 1px solid rgba(0,0,0,0.1);\n\n  .form-signin-heading,\n\t.checkbox {\n\t  margin-bottom: 30px;\n\t}\n\n\t.checkbox {\n\t  font-weight: normal;\n\t}\n\n\t.form-control {\n\t  position: relative;\n\t  font-size: 16px;\n\t  height: auto;\n\t  padding: 10px;\n\t\t@include box-sizing(border-box);\n\n\t\t&:focus {\n\t\t  z-index: 2;\n\t\t}\n\t}\n\n\tinput[type=\"text\"] {\n\t  margin-bottom: -1px;\n\t  border-bottom-left-radius: 0;\n\t  border-bottom-right-radius: 0;\n\t}\n\n\tinput[type=\"password\"] {\n\t  margin-bottom: 20px;\n\t  border-top-left-radius: 0;\n\t  border-top-right-radius: 0;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" style=\"height:100%\">\n  <form class=\"form-signin loginBox\"  >\n    <div class=\"row justify-content-md-center\" >\n      <div class=\"col-12 align-center\" >\n        <img style=\"margin-left:100px\" src=\"./assets/c1.png\" alt=\"\">\n\n      </div>\n      <div class=\"col-12 align-center\" >\n        <b><p style=\"margin-left:135px\">coal</p></b>\n      </div>\n    </div>\n    <br>\n    <h3 class=\"form-signin-heading\">Dashboard login</h3>\n    <input type=\"text\" class=\"form-control\" name=\"username\" placeholder=\"Email Address\" required=\"\" autofocus=\"\"  [(ngModel)]='email' />\n    <br>\n    <input type=\"password\" class=\"form-control\" name=\"password\" placeholder=\"Password\" required=\"\"  [(ngModel)]='password'/>\n    <br>\n    <label class=\"checkbox\">\n      <input type=\"checkbox\"   value=\"remember-me\" id=\"rememberMe\" name=\"rememberMe\"> Remember me\n    </label>\n\n    <button class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" (click)='login()'>Login</button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__ = __webpack_require__("../../../../../src/app/service/ProjectService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(ProjectService, router) {
        var _this = this;
        this.ProjectService = ProjectService;
        this.router = router;
        this.ProjectService.checkLogin();
        this.ProjectService.emitUserLogin.subscribe(function (res) {
            _this.router.navigate(['home/']);
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var formData = new FormData();
        formData.append('email', this.email);
        formData.append('pwd', this.password);
        this.ProjectService.login(formData);
        localStorage.setItem('userEmail', this.email);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_ProjectService__["a" /* ProjectService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/ng2-toastr-custom-option.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomOption; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CustomOption = (function (_super) {
    __extends(CustomOption, _super);
    function CustomOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.animate = 'flyRight'; // you can override any options available
        _this.newestOnTop = false;
        _this.showCloseButton = true;
        _this.positionClass = 'toast-top-center';
        return _this;
    }
    return CustomOption;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_toastr__["ToastOptions"]));

//# sourceMappingURL=ng2-toastr-custom-option.js.map

/***/ }),

/***/ "../../../../../src/app/service/APIService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var APIService = (function () {
    function APIService(http) {
        this.http = http;
        // projectURL: string = 'http://192.168.15.187:8000';
        this.projectURL = 'http://qcitech.org:8081';
    }
    APIService.prototype.Login = function (data) {
        return this.http.post(this.projectURL + '/login', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdatePassword = function (data) {
        return this.http.post(this.projectURL + '/changepassword', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.CheckUploadedContracts = function (file) {
        return this.http.post(this.projectURL + '/checkuploadcontracts', file).map(function (res) { return res.json(); });
    };
    APIService.prototype.CheckUploadedTracker = function (file) {
        return this.http.post(this.projectURL + '/checkuploadprocesstracker', file).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetUpdatedContract = function (data) {
        return this.http.get(this.projectURL + '/getallcontractsdata').map(function (res) { return res.json(); });
    };
    APIService.prototype.GetTrackerByDate = function (data) {
        // console.log(data);
        return this.http.post(this.projectURL + '/getallcontractsmonthdata', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateContract = function (data) {
        // console.log(data);
        return this.http.post(this.projectURL + '/uploadcontracts', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateTracker = function (data) {
        // console.log(data);
        return this.http.post(this.projectURL + '/uploadprocesstracker', data);
    };
    APIService.prototype.GetAllPSUSummary = function (data) {
        // console.log(data);
        return this.http.get(this.projectURL + '/getsubsidiarysummary', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.UpdateDays = function (data) {
        return this.http.post(this.projectURL + '/savecontractdays', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.UploadHistory = function () {
        return this.http.get(this.projectURL + '/getuploadhistory').map(function (res) { return res.json(); });
    };
    APIService.prototype.AddNewUser = function (data) {
        return this.http.post(this.projectURL + '/adduser', data).map(function (res) { return res.json(); });
    };
    APIService.prototype.GetTempData = function () {
        return this.http.get(this.projectURL + '/gettimewisesummary').map(function (res) { return res.json(); });
    };
    APIService.prototype.GetTempDataTower = function () {
        return this.http.get(this.projectURL + '/getLocationWiseMonthLifting').map(function (res) { return res.json(); });
    };
    APIService.prototype.NewMonth = function (month) {
        var formData = new FormData();
        formData.append('month', month);
        return this.http.post(this.projectURL + '/getLocationWiseMonthLifting', formData).map(function (res) { return res.json(); });
    };
    return APIService;
}());
APIService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], APIService);

var _a;
//# sourceMappingURL=APIService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ProjectService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__APIService__ = __webpack_require__("../../../../../src/app/service/APIService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectService = (function () {
    function ProjectService(APIService, route, router) {
        this.APIService = APIService;
        this.route = route;
        this.router = router;
        this.month = '2017-10';
        this.emitToastMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitContractData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitTrackerData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitPSUData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitPSUArray = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitSummaryData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUserLogin = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitContractMsg = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitCSummary = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUploadHistory = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitUpdatePassword = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitNewUser = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption1_legends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption1_data1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption1_data2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption2_tableData = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption3_legends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption3_data1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption3_data2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption4_legends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption4_xAxis = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption4_series = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption5_legends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption5_data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption5_series = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption6_legends = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption6_xAxis = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption6_series = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption7_data1 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption7_data2 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption7_data3 = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption8_data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption9_data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption10_data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.emitOption11_data = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        var d = new Date();
        var m = d.getMonth();
        m += 1;
        var y = d.getFullYear();
        this.month = y + '-' + m;
    }
    ProjectService.prototype.getTempData = function () {
        var _this = this;
        this.APIService.GetTempData().subscribe(function (res) {
            console.log(res);
            _this.emitOption1_legends.emit(res.graph1.legends);
            _this.emitOption1_data1.emit(res.graph1.data1);
            _this.emitOption1_data2.emit(res.graph1.data2);
            _this.emitOption2_tableData.emit(res.graph2);
            _this.emitOption3_legends.emit(res.graph3.legends);
            _this.emitOption3_data1.emit(res.graph3.data1);
            _this.emitOption3_data2.emit(res.graph3.data2);
            _this.emitOption4_legends.emit(res.graph4.legends);
            _this.emitOption4_xAxis.emit(res.graph4.xAxisdata);
            _this.emitOption4_series.emit(res.graph4.series);
            _this.emitOption5_legends.emit(res.graph5.legends);
            _this.emitOption5_data.emit(res.graph5.angleAxisdata);
            _this.emitOption5_series.emit(res.graph5.series);
            _this.emitOption6_legends.emit(res.graph6.legends);
            _this.emitOption6_xAxis.emit(res.graph6.xAxisdata);
            _this.emitOption6_series.emit(res.graph6.series);
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getTempDataTower = function () {
        var _this = this;
        this.APIService.GetTempDataTower().subscribe(function (res) {
            console.log(res);
            _this.emitOption7_data1.emit(res.y);
            _this.emitOption7_data2.emit(res.x);
            _this.emitOption7_data3.emit(res.z);
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.getData = function () {
        this.emitOption1_legends.emit(['1', '2', '3']);
        this.emitOption1_data1.emit([{ value: 335, name: '1' }, { value: 679, name: '2' }, { value: 1548, name: '3' }]);
        this.emitOption1_data2.emit([{ value: 335, name: 'a1' }, { value: 310, name: 'a2' }, { value: 234, name: 'a3' }, { value: 135, name: '4' }, { value: 1048, name: '5' }, { value: 251, name: '6' }, { value: 147, name: '7' }, { value: 102, name: '8' }]);
        this.emitOption2_tableData.emit([
            { sub: "CCL", contract: "40", rail: '211', road: '21', volume: "440" },
            { sub: "MCL", contract: "40", rail: '211', road: '21', volume: "440" },
            { sub: "NCL", contract: "21", rail: '211', road: '21', volume: "120" },
            { sub: "SECL", contract: "36", rail: '211', road: '21', volume: "444" },
            { sub: "WCL", contract: "14", rail: '211', road: '21', volume: "344" },
        ]);
        this.emitOption3_legends.emit(['1', '2', '3']);
        this.emitOption3_data1.emit([{ value: 335, name: '1' }, { value: 679, name: '2' }, { value: 1548, name: '3' }]);
        this.emitOption3_data2.emit([{ value: 335, name: 'a1' }, { value: 310, name: 'a2' }, { value: 234, name: 'a3' }, { value: 135, name: '4' }, { value: 1048, name: '5' }, { value: 251, name: '6' }, { value: 147, name: '7' }, { value: 102, name: '8' }]);
        this.emitOption4_legends.emit(['CCL', 'MCL', 'NCL']);
        this.emitOption4_xAxis.emit(['data1', 'data2', 'data3', 'data4', 'data5']);
        this.emitOption4_series.emit([
            {
                name: 'CCL',
                type: 'bar',
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'MCL',
                type: 'bar',
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'NCL',
                type: 'bar',
                data: [220, 182, 191, 234, 290, 330, 310]
            },
        ]);
        this.emitOption5_legends.emit(['A', 'B', 'C']);
        this.emitOption5_data.emit(['周一', '周二', '周三', '周四', '周五', '周六', '周日']);
        this.emitOption5_series.emit([
            {
                type: 'bar',
                data: [1, 2, 3, 4, 3, 5, 1],
                coordinateSystem: 'polar',
                name: 'A',
                stack: 'a'
            }, {
                type: 'bar',
                data: [2, 4, 6, 1, 3, 2, 1],
                coordinateSystem: 'polar',
                name: 'B',
                stack: 'a'
            }, {
                type: 'bar',
                data: [1, 2, 3, 4, 1, 2, 5],
                coordinateSystem: 'polar',
                name: 'C',
                stack: 'a'
            }
        ]);
        this.emitOption6_legends.emit(['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']);
        this.emitOption6_xAxis.emit(['周一', '周二', '周三', '周四', '周五']);
        this.emitOption6_series.emit([
            {
                name: '邮件营销',
                type: 'bar',
                stack: '广告',
                data: [120, 132, 101, 134, 90]
            },
            {
                name: '联盟广告',
                type: 'bar',
                stack: '广告',
                data: [220, 182, 191, 234, 290]
            },
        ]);
    };
    ProjectService.prototype.getData2 = function () {
        this.emitOption7_data1.emit(['12a', '1a', '2a', '3a', '4a', '5a', '6a',
            '7a', '8a', '9a', '10a', '11a',
            '12p', '1p', '2p', '3p', '4p', '5p',
            '6p', '7p', '8p', '9p', '10p', '11p']);
        this.emitOption7_data2.emit(['Saturday', 'Friday', 'Thursday',
            'Wednesday', 'Tuesday', 'Monday', 'Sunday']);
        this.emitOption7_data3.emit([
            [0, 0, 5], [0, 1, 1], [0, 2, 0], [0, 3, 0], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 0], [0, 8, 0], [0, 9, 0], [0, 10, 0], [0, 11, 2], [0, 12, 4], [0, 13, 1], [0, 14, 1], [0, 15, 3], [0, 16, 4], [0, 17, 6], [0, 18, 4], [0, 19, 4], [0, 20, 3], [0, 21, 3], [0, 22, 2], [0, 23, 5], [1, 0, 7], [1, 1, 0], [1, 2, 0], [1, 3, 0], [1, 4, 0], [1, 5, 0], [1, 6, 0], [1, 7, 0], [1, 8, 0], [1, 9, 0], [1, 10, 5], [1, 11, 2], [1, 12, 2], [1, 13, 6], [1, 14, 9], [1, 15, 11], [1, 16, 6], [1, 17, 7], [1, 18, 8], [1, 19, 12], [1, 20, 5], [1, 21, 5], [1, 22, 7], [1, 23, 2], [2, 0, 1], [2, 1, 1], [2, 2, 0], [2, 3, 0], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0], [2, 8, 0], [2, 9, 0], [2, 10, 3], [2, 11, 2], [2, 12, 1], [2, 13, 9], [2, 14, 8], [2, 15, 10], [2, 16, 6], [2, 17, 5], [2, 18, 5], [2, 19, 5], [2, 20, 7], [2, 21, 4], [2, 22, 2], [2, 23, 4], [3, 0, 7], [3, 1, 3], [3, 2, 0], [3, 3, 0], [3, 4, 0], [3, 5, 0], [3, 6, 0], [3, 7, 0], [3, 8, 1], [3, 9, 0], [3, 10, 5], [3, 11, 4], [3, 12, 7], [3, 13, 14], [3, 14, 13], [3, 15, 12], [3, 16, 9], [3, 17, 5], [3, 18, 5], [3, 19, 10], [3, 20, 6], [3, 21, 4], [3, 22, 4], [3, 23, 1], [4, 0, 1], [4, 1, 3], [4, 2, 0], [4, 3, 0], [4, 4, 0], [4, 5, 1], [4, 6, 0], [4, 7, 0], [4, 8, 0], [4, 9, 2], [4, 10, 4], [4, 11, 4], [4, 12, 2], [4, 13, 4], [4, 14, 4], [4, 15, 14], [4, 16, 12], [4, 17, 1], [4, 18, 8], [4, 19, 5], [4, 20, 3], [4, 21, 7], [4, 22, 3], [4, 23, 0], [5, 0, 2], [5, 1, 1], [5, 2, 0], [5, 3, 3], [5, 4, 0], [5, 5, 0], [5, 6, 0], [5, 7, 0], [5, 8, 2], [5, 9, 0], [5, 10, 4], [5, 11, 1], [5, 12, 5], [5, 13, 10], [5, 14, 5], [5, 15, 7], [5, 16, 11], [5, 17, 6], [5, 18, 0], [5, 19, 5], [5, 20, 3], [5, 21, 4], [5, 22, 2], [5, 23, 0], [6, 0, 1], [6, 1, 0], [6, 2, 0], [6, 3, 0], [6, 4, 0], [6, 5, 0], [6, 6, 0], [6, 7, 0], [6, 8, 0], [6, 9, 0], [6, 10, 1], [6, 11, 0], [6, 12, 2], [6, 13, 1], [6, 14, 3], [6, 15, 4], [6, 16, 0], [6, 17, 0], [6, 18, 0], [6, 19, 0], [6, 20, 1], [6, 21, 2], [6, 22, 2], [6, 23, 6]
        ]);
    };
    ProjectService.prototype.getData3 = function () {
        this.emitOption8_data.emit([
            { value: 335, name: '1' },
            { value: 310, name: '2' },
            { value: 274, name: '3' },
            { value: 235, name: '4' },
            { value: 400, name: '5' }
        ]);
    };
    ProjectService.prototype.getData4 = function () {
        this.emitOption9_data.emit([
            { value: 335, name: '1' },
            { value: 310, name: '2' },
            { value: 274, name: '3' },
            { value: 235, name: '4' },
            { value: 400, name: '5' }
        ]);
    };
    ProjectService.prototype.getData5 = function () {
        this.emitOption10_data.emit([0.5, 0.4, 0.3]);
    };
    ProjectService.prototype.getData6 = function () {
        this.emitOption11_data.emit([
            {
                name: 'Macys',
                value: 6181
            }, {
                name: 'Amy Schumer',
                value: 4386
            }, {
                name: 'Jurassic World',
                value: 4055
            }, {
                name: 'Charter Communications',
                value: 2467
            }, {
                name: 'Chick Fil A',
                value: 2244
            }, {
                name: 'Planet Fitness',
                value: 1898
            }, {
                name: 'Pitch Perfect',
                value: 1484
            }, {
                name: 'Express',
                value: 1112
            }, {
                name: 'Home',
                value: 965
            }, {
                name: 'Johnny Depp',
                value: 847
            }, {
                name: 'Lena Dunham',
                value: 582
            }, {
                name: 'Lewis Hamilton',
                value: 555
            }, {
                name: 'KXAN',
                value: 550
            }, {
                name: 'Mary Ellen Mark',
                value: 462
            }, {
                name: 'Farrah Abraham',
                value: 366
            }, {
                name: 'Rita Ora',
                value: 360
            }, {
                name: 'Serena Williams',
                value: 282
            }, {
                name: 'NCAA baseball tournament',
                value: 273
            }, {
                name: 'Point Break',
                value: 265
            }
        ]);
    };
    ProjectService.prototype.newMonth = function (month) {
        var _this = this;
        this.APIService.NewMonth(month).subscribe(function (res) {
            console.log(res);
            _this.emitOption7_data1.emit(res.y);
            _this.emitOption7_data2.emit(res.x);
            _this.emitOption7_data3.emit(res.z);
        }, function (err) {
            console.log(err);
        });
    };
    ProjectService.prototype.internetConnection = function () {
        window.addEventListener('online', function () {
            // this.toast('Please refresh','Online!');
        });
        window.addEventListener('offline', function () {
            // this.toast('Some components might not work','Offline!');
        });
    };
    ProjectService.prototype.login = function (data) {
        var _this = this;
        this.APIService.Login(data).subscribe(function (res) {
            console.log(res);
            if (res.success) {
                localStorage.setItem('login', 'true1');
                localStorage.setItem('not_All_Summary', '0');
                _this.emitUserLogin.emit('user');
            }
            else {
                // this.toast('Invalid username or password ', 'Error!');
            }
        }, function (err) {
            console.log(err);
            _this.toast('Invalid username or password ', 'Error!');
        });
    };
    ProjectService.prototype.logout = function () {
        // localStorage.setItem('login','');
        localStorage.removeItem('contractFlag');
        localStorage.removeItem('contracts');
        localStorage.removeItem('login');
        localStorage.removeItem('psuidname');
        localStorage.removeItem('summary');
        localStorage.removeItem('tracker');
        localStorage.removeItem('trackerFlag');
        this.router.navigate(['./login']);
    };
    ProjectService.prototype.updatePassword = function (data) {
        var _this = this;
        this.APIService.UpdatePassword(data).subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.emitUpdatePassword.emit(res);
                _this.toast(res.message, 'Message');
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.addNewUser = function (data) {
        var _this = this;
        this.APIService.AddNewUser(data).subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.emitNewUser.emit(res);
                _this.toast(res.message, 'Message');
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.checkLogin = function () {
        var login = localStorage.getItem('login');
        if (login === 'true1') {
            this.router.navigate(['./home']);
        }
    };
    ProjectService.prototype.allPSUData = function (id) {
        var data = localStorage.getItem('summary');
        data = JSON.parse(data);
        this.emitPSUData.emit({ 'data': data, 'id': id });
        var summaryFlag = localStorage.getItem('summaryFlag');
        if (summaryFlag == '1') {
            localStorage.setItem('summaryFlag', '0');
            window.location.reload();
        }
    };
    ProjectService.prototype.toast = function (msg1, msg2) {
        this.emitToastMsg.emit({ 'msg1': msg1, 'msg2': msg2 });
    };
    ProjectService.prototype.contract = function (data) {
        this.emitContractData.emit(data);
    };
    ProjectService.prototype.tracker = function (data, graph, last_date) {
        this.emitTrackerData.emit({ 'data': data, 'graph': graph, 'last_date': last_date });
    };
    ProjectService.prototype.getContract = function (data) {
        var _this = this;
        this.internetConnection();
        this.APIService.GetUpdatedContract(data).subscribe(function (res) {
            if (res.success) {
                _this.contract(res.contracts_data);
                localStorage.setItem('last_update_contract', JSON.stringify(res.last_updated));
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.checkUploadedContracts = function (file) {
        var _this = this;
        this.APIService.CheckUploadedContracts(file).subscribe(function (res) {
            console.log(res);
            if (res) {
                if (true) {
                    console.log(res.status);
                    _this.emitContractMsg.emit(res.status);
                }
                else { }
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.checkUploadedTracker = function (file) {
        var _this = this;
        this.APIService.CheckUploadedTracker(file).subscribe(function (res) {
            console.log(res);
            if (res) {
                if (true) {
                    console.log(res.status);
                    _this.emitContractMsg.emit(res.status);
                }
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.updateContract = function (data) {
        var _this = this;
        this.APIService.UpdateContract(data).subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.getContract(1);
                _this.toast('Contract updated', 'Success!');
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.updateTracker = function (data) {
        var _this = this;
        this.APIService.UpdateTracker(data).subscribe(function (res) {
            if (res) {
                console.log(res);
                // update Daily tracker data data
                var formData = new FormData();
                formData.append('monthdate', _this.month);
                _this.getTrackerByDate(formData, _this.month);
                _this.toast('Tracker updated', 'Success!');
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.uploadHistory = function () {
        var _this = this;
        this.APIService.UploadHistory().subscribe(function (res) {
            if (res.success) {
                console.log(res);
                _this.emitUploadHistory.emit({ 'contract': res.cu_history, 'tracker': res.ptu_history });
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.getTrackerByDate = function (data, month) {
        var _this = this;
        this.APIService.GetTrackerByDate(data).subscribe(function (res) {
            if (res.success) {
                console.log(res);
                _this.tracker(res.data, res.stacked_area_list, res.last_date);
                localStorage.setItem('last_update_tracker', JSON.stringify(res.last_updated));
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.getPsuSummary = function (data) {
        var _this = this;
        this.APIService.GetAllPSUSummary(data).subscribe(function (res) {
            if (res.success) {
                console.log(res);
                _this.emitSummaryData.emit(res);
                _this.PSUData = res.data;
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    ProjectService.prototype.updateContractDays = function (data) {
        var _this = this;
        this.APIService.UpdateDays(data).subscribe(function (res) {
            if (res.success) {
                _this.getContract(1);
                var formData = new FormData();
                formData.append('monthdate', _this.month);
                _this.getTrackerByDate(formData, _this.month);
                _this.toast('Please refresh', 'Data Updated!');
            }
            else { }
        }, function (err) {
            console.log(err);
            _this.toast('Something went wrong. Please check logs ', 'Error!');
        });
    };
    return ProjectService;
}());
ProjectService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__APIService__["a" /* APIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__APIService__["a" /* APIService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _c || Object])
], ProjectService);

var _a, _b, _c;
//# sourceMappingURL=ProjectService.js.map

/***/ }),

/***/ "../../../../../src/app/service/ZauthGuard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('login') === 'true1') {
            return true;
        }
        this.router.navigate(['/']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=ZauthGuard.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map