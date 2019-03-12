(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./acceptance-list/acceptance-list.module": [
		"./src/app/acceptance-list/acceptance-list.module.ts",
		"common",
		"acceptance-list-acceptance-list-module"
	],
	"./add-company-info/add-company-info.module": [
		"./src/app/add-company-info/add-company-info.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"add-company-info-add-company-info-module"
	],
	"./add-job/add-job.module": [
		"./src/app/add-job/add-job.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"add-job-add-job-module"
	],
	"./add-project/add-project.module": [
		"./src/app/add-project/add-project.module.ts",
		"common",
		"add-project-add-project-module"
	],
	"./add-user-info/add-user-info.module": [
		"./src/app/add-user-info/add-user-info.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"add-user-info-add-user-info-module"
	],
	"./candidates-list/candidates-list.module": [
		"./src/app/candidates-list/candidates-list.module.ts",
		"common",
		"candidates-list-candidates-list-module"
	],
	"./company-profile/company-profile.module": [
		"./src/app/company-profile/company-profile.module.ts",
		"company-profile-company-profile-module"
	],
	"./dashboard/dashboard.module": [
		"./src/app/dashboard/dashboard.module.ts",
		"dashboard-dashboard-module"
	],
	"./edit-company-profile/edit-company-profile.module": [
		"./src/app/edit-company-profile/edit-company-profile.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"edit-company-profile-edit-company-profile-module"
	],
	"./edit-cv/edit-cv.module": [
		"./src/app/edit-cv/edit-cv.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"edit-cv-edit-cv-module"
	],
	"./error-message/error-message.module": [
		"./src/app/error-message/error-message.module.ts",
		"error-message-error-message-module"
	],
	"./job-offer-check/job-offer-check.module": [
		"./src/app/job-offer-check/job-offer-check.module.ts",
		"job-offer-check-job-offer-check-module"
	],
	"./job-offer-preview/job-offer-preview.module": [
		"./src/app/job-offer-preview/job-offer-preview.module.ts",
		"job-offer-preview-job-offer-preview-module"
	],
	"./job-offer/job-offer.module": [
		"./src/app/job-offer/job-offer.module.ts",
		"job-offer-job-offer-module"
	],
	"./my-cv/my-cv.module": [
		"./src/app/my-cv/my-cv.module.ts",
		"add-company-info-add-company-info-module~add-job-add-job-module~add-user-info-add-user-info-module~e~f721b707",
		"common",
		"my-cv-my-cv-module"
	],
	"./my-offers/my-offers.module": [
		"./src/app/my-offers/my-offers.module.ts",
		"my-offers-my-offers-module~my-projects-my-projects-module",
		"common",
		"my-offers-my-offers-module"
	],
	"./my-projects/my-projects.module": [
		"./src/app/my-projects/my-projects.module.ts",
		"my-offers-my-offers-module~my-projects-my-projects-module",
		"common",
		"my-projects-my-projects-module"
	],
	"./offers-list/offers-list.module": [
		"./src/app/offers-list/offers-list.module.ts",
		"offers-list-offers-list-module"
	],
	"./sign-in/sign-in.module": [
		"./src/app/sign-in/sign-in.module.ts",
		"sign-in-sign-in-module"
	],
	"./sign-up/sign-up.module": [
		"./src/app/sign-up/sign-up.module.ts",
		"sign-up-sign-up-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            var body = document.getElementsByTagName('body')[0];
            var modalBackdrop = document.getElementsByClassName('modal-backdrop')[0];
            if (body.classList.contains('modal-open')) {
                body.classList.remove('modal-open');
                modalBackdrop.remove();
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: MaterialModule, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _app_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/auth/auth.company.guard */ "./src/app/auth/auth.company.guard.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sidebar/sidebar.module */ "./src/app/sidebar/sidebar.module.ts");
/* harmony import */ var _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.module */ "./src/app/shared/footer/footer.module.ts");
/* harmony import */ var _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/navbar/navbar.module */ "./src/app/shared/navbar/navbar.module.ts");
/* harmony import */ var _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./shared/fixedplugin/fixedplugin.module */ "./src/app/shared/fixedplugin/fixedplugin.module.ts");
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./layouts/user/user.component */ "./src/app/layouts/user/user.component.ts");
/* harmony import */ var _layouts_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layouts/registration/registration.component */ "./src/app/layouts/registration/registration.component.ts");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth-interceptor */ "./src/app/auth-interceptor.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"]
            ],
            declarations: [],
        })
    ], MaterialModule);
    return MaterialModule;
}());

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_20__["AppRoutes"]),
                MaterialModule,
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                _sidebar_sidebar_module__WEBPACK_IMPORTED_MODULE_11__["SidebarModule"],
                _shared_navbar_navbar_module__WEBPACK_IMPORTED_MODULE_13__["NavbarModule"],
                _shared_footer_footer_module__WEBPACK_IMPORTED_MODULE_12__["FooterModule"],
                _shared_fixedplugin_fixedplugin_module__WEBPACK_IMPORTED_MODULE_14__["FixedpluginModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_15__["AdminLayoutComponent"],
                _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_16__["AuthLayoutComponent"],
                _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_17__["UserComponent"],
                _layouts_registration_registration_component__WEBPACK_IMPORTED_MODULE_18__["RegistrationComponent"]
            ],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"], multi: true },
                _app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"], _app_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_7__["Auth_company_Guard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutes", function() { return AppRoutes; });
/* harmony import */ var _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layouts/admin/admin-layout.component */ "./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/auth/auth-layout.component */ "./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layouts/user/user.component */ "./src/app/layouts/user/user.component.ts");
/* harmony import */ var _layouts_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/registration/registration.component */ "./src/app/layouts/registration/registration.component.ts");
/* harmony import */ var _app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app/auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/auth.company.guard */ "./src/app/auth/auth.company.guard.ts");






var AppRoutes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }, {
        path: '',
        component: _layouts_admin_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        children: [
            {
                path: 'dashboard',
                loadChildren: './dashboard/dashboard.module#DashboardModule'
            }, {
                path: 'add-project',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './add-project/add-project.module#AddProjectModule'
            }, {
                path: 'add-job',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './add-job/add-job.module#AddJobModule'
            }, {
                path: 'my-projects',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './my-projects/my-projects.module#MyProjectsModule'
            }, {
                path: 'job-offer-check',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './job-offer-check/job-offer-check.module#JobOfferCheckModule'
            }, {
                path: 'job-offer-preview',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './job-offer-preview/job-offer-preview.module#JobOfferPreviewModule'
            }, {
                path: 'my-offers',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './my-offers/my-offers.module#MyOffersModule'
            }, {
                path: 'candidates-list',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './candidates-list/candidates-list.module#CandidatesListModule'
            }, {
                path: 'acceptance-list',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './acceptance-list/acceptance-list.module#AcceptanceListModule'
            }, {
                path: 'error-message',
                loadChildren: './error-message/error-message.module#ErrorMessageModule'
            }, {
                path: 'company-profile',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
            }, {
                path: 'edit-company-profile',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './edit-company-profile/edit-company-profile.module#EditCompanyProfileModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_auth_auth_layout_component__WEBPACK_IMPORTED_MODULE_1__["AuthLayoutComponent"],
        children: [
            {
                path: 'sign-up',
                loadChildren: './sign-up/sign-up.module#SignUpModule'
            }, {
                path: 'sign-in',
                loadChildren: './sign-in/sign-in.module#SignInModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_user_user_component__WEBPACK_IMPORTED_MODULE_2__["UserComponent"],
        children: [
            {
                path: 'my-cv',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './my-cv/my-cv.module#MyCvModule'
            }, {
                path: 'offers-list',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './offers-list/offers-list.module#OffersListModule'
            }, {
                path: 'edit-cv',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './edit-cv/edit-cv.module#EditCvModule'
            }, {
                path: 'job-offer',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './job-offer/job-offer.module#JobOfferModule'
            }
        ]
    }, {
        path: '',
        component: _layouts_registration_registration_component__WEBPACK_IMPORTED_MODULE_3__["RegistrationComponent"],
        children: [
            {
                path: 'add-company-info',
                canActivate: [_auth_auth_company_guard__WEBPACK_IMPORTED_MODULE_5__["Auth_company_Guard"]],
                loadChildren: './add-company-info/add-company-info.module#AddCompanyInfoModule'
            }, {
                path: 'add-user-info',
                canActivate: [_app_auth_auth_guard__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]],
                loadChildren: './add-user-info/add-user-info.module#AddUserInfoModule'
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/auth-interceptor.ts":
/*!*************************************!*\
  !*** ./src/app/auth-interceptor.ts ***!
  \*************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
        console.log(authRequest);
        return next.handle(authRequest);
    };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.company.guard.ts":
/*!********************************************!*\
  !*** ./src/app/auth/auth.company.guard.ts ***!
  \********************************************/
/*! exports provided: Auth_company_Guard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth_company_Guard", function() { return Auth_company_Guard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Auth_company_Guard = /** @class */ (function () {
    function Auth_company_Guard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    Auth_company_Guard.prototype.canActivate = function (route, state) {
        this.authService.autoAuthUser();
        var isAuth = this.authService.getIsAuth();
        var isCompany = this.authService.getIsCompany();
        console.log(isCompany);
        if (!isAuth && isCompany !== 'true') {
            this.router.navigate(['/sign-in']);
        }
        return isAuth;
    };
    Auth_company_Guard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], Auth_company_Guard);
    return Auth_company_Guard;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        this.authService.autoAuthUser();
        var isAuth = this.authService.getIsAuth();
        var isCompany = this.authService.getIsCompany();
        console.log(isCompany);
        // tslint:disable-next-line: triple-equals
        if (!isAuth || isCompany == 'true') {
            this.router.navigate(['/sign-in']);
        }
        return isAuth;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth = false;
        this.isCompany = "false";
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (firstName, lastName, email, password) {
        var _this = this;
        var authData = { firstName: firstName, lastName: lastName, email: email, password: password };
        this.http.post(BackUrl + '/userRegistreing', authData)
            .subscribe(function () {
            _this.router.navigate(['/add-user-info']);
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.createCompany = function (companyName, email, CompanySpecialist, sector, password) {
        var _this = this;
        var authData = { companyName: companyName, email: email, CompanySpecialist: CompanySpecialist, sector: sector, password: password };
        this.http.post(BackUrl + '/companyRegistreing', authData, { observe: 'response' })
            .subscribe(function (response) {
            console.log(response);
            var token = response.headers.get('x-auth-token');
            if (token) {
                _this.token = token;
                _this.isAuth = true;
                _this.isCompany = "true";
                _this.authStatusListener.next(true);
                _this.saveAuthData(token, _this.userId, _this.isCompany);
                _this.router.navigate(['/add-company-info']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(BackUrl + '/login', authData)
            .subscribe(function (response) {
            console.log(response);
            var token = response.token;
            if (token) {
                _this.token = token;
                _this.isAuth = true;
                _this.isCompany = 'false';
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                _this.saveAuthData(token, _this.userId, _this.isCompany);
                _this.router.navigate(['/my-cv']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.companyLogin = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(BackUrl + '/com_login', authData)
            .subscribe(function (response) {
            console.log(response);
            var token = response.token;
            if (token) {
                _this.token = token;
                _this.isAuth = true;
                _this.isCompany = "true";
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                _this.saveAuthData(token, _this.userId, _this.isCompany);
                _this.router.navigate(['/dashboard']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        this.token = this.getAuthData().token;
        this.isAuth = true;
        this.isCompany = this.getAuthData().isCompany;
        this.authStatusListener.next(true);
        this.userId = this.getAuthData().userId;
    };
    AuthService.prototype.logOut = function () {
        this.token = null;
        this.isAuth = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.isCompany = null;
        this.clearData();
        this.router.navigate(['/sign-in']);
    };
    AuthService.prototype.saveAuthData = function (token, userId, isCompany) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
        localStorage.setItem('isCompany', isCompany);
    };
    AuthService.prototype.clearData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('isCompany');
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuth;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getIsCompany = function () {
        return this.isCompany;
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('userId');
        var isCompany = localStorage.getItem('isCompany');
        if (!token) {
            return;
        }
        return {
            token: token,
            userId: user,
            isCompany: isCompany
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/*!***********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\">\r\n    <div class=\"sidebar\" data-color=\"white\" data-background-color=\"blue\" data-image=\"./assets/img/sidebar-1.jpg\">\r\n        <app-sidebar-cmp></app-sidebar-cmp>\r\n        <div class=\"sidebar-background\" style=\"background-image: url(assets/img/sidebar-1.jpg)\"></div>\r\n    </div>\r\n    <div class=\"main-panel\">\r\n        <app-navbar-cmp></app-navbar-cmp>\r\n        <router-outlet></router-outlet>\r\n        <div *ngIf=\"!isMap()\">\r\n            <app-footer-cmp></app-footer-cmp>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/layouts/admin/admin-layout.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_md_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../md/md.module */ "./src/app/md/md.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(router, location) {
        this.router = router;
        this.yScrollStack = [];
        this.location = location;
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var elemMainPanel = document.querySelector('.main-panel');
        var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (event.url != _this.lastPoppedUrl)
                    _this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                if (event.url == _this.lastPoppedUrl) {
                    _this.lastPoppedUrl = undefined;
                    window.scrollTo(0, _this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            elemMainPanel.scrollTop = 0;
            elemSidebar.scrollTop = 0;
        });
        var html = document.getElementsByTagName('html')[0];
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            html.classList.add('perfect-scrollbar-on');
        }
        else {
            html.classList.add('perfect-scrollbar-off');
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.navbar.sidebarClose();
        });
        this.navItems = [
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Dashboard', iconClass: 'fa fa-dashboard' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-bell-o',
                numNotifications: 5,
                dropdownItems: [
                    { title: 'Notification 1' },
                    { title: 'Notification 2' },
                    { title: 'Notification 3' },
                    { title: 'Notification 4' },
                    { title: 'Another Notification' }
                ]
            },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarRight,
                title: '',
                iconClass: 'fa fa-list',
                dropdownItems: [
                    { iconClass: 'pe-7s-mail', title: 'Messages' },
                    { iconClass: 'pe-7s-help1', title: 'Help Center' },
                    { iconClass: 'pe-7s-tools', title: 'Settings' },
                    'separator',
                    { iconClass: 'pe-7s-lock', title: 'Lock Screen' },
                    { iconClass: 'pe-7s-close-circle', title: 'Log Out' }
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Search', iconClass: 'fa fa-search' },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Account' },
            {
                type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft,
                title: 'Dropdown',
                dropdownItems: [
                    { title: 'Action' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    { title: 'Another action' },
                    { title: 'Something' },
                    'separator',
                    { title: 'Separated link' },
                ]
            },
            { type: _md_md_module__WEBPACK_IMPORTED_MODULE_2__["NavItemType"].NavbarLeft, title: 'Log out' }
        ];
    };
    AdminLayoutComponent.prototype.ngAfterViewInit = function () {
        this.runOnRouteChange();
    };
    AdminLayoutComponent.prototype.isMap = function () {
        if (this.location.prepareExternalUrl(this.location.path()) === '/maps/fullscreen') {
            return true;
        }
        else {
            return false;
        }
    };
    AdminLayoutComponent.prototype.runOnRouteChange = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var elemMainPanel = document.querySelector('.main-panel');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemMainPanel);
            ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["default"](elemSidebar);
            ps.update();
        }
    };
    AdminLayoutComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        __metadata("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AdminLayoutComponent.prototype, "navbar", void 0);
    AdminLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./admin-layout.component.html */ "./src/app/layouts/admin/admin-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-primary navbar-transparent navbar-absolute\" color-on-scroll=\"500\">\r\n  <div class=\"container\">\r\n    <div class=\"navbar-wrapper\">\r\n      <a class=\"navbar-brand-logo d-none d-sm-none d-md-block\">\r\n        <strong>Pt</strong>way\r\n        <img src=\"../../../assets/img/32X32.png\">\r\n      </a>\r\n      <a class=\"navbar-brand-logo  d-block d-sm-block d-md-none\">\r\n        <strong>Pt</strong>way\r\n        <img src=\"../../../assets/img/32X32.png\">\r\n      </a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/sign-up']\">\r\n            <i class=\"material-icons\">person_add</i> التسجيل\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/sign-in']\">\r\n            <i class=\"material-icons\">fingerprint</i> تسجيل الدخول\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layouts/auth/auth-layout.component.ts ***!
  \*******************************************************/
/*! exports provided: AuthLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthLayoutComponent", function() { return AuthLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthLayoutComponent = /** @class */ (function () {
    function AuthLayoutComponent(router, element) {
        this.router = router;
        this.element = element;
        this.mobile_menu_visible = 0;
        this.sidebarVisible = false;
    }
    AuthLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
        });
    };
    AuthLayoutComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    AuthLayoutComponent.prototype.sidebarClose = function () {
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
    };
    ;
    AuthLayoutComponent.prototype.sidebarToggle = function () {
        var body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
            var $layer = document.createElement('div');
            $layer.setAttribute('class', 'close-layer');
            if (body.querySelectorAll('.wrapper-full-page')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            else if (body.classList.contains('off-canvas-sidebar')) {
                document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
            }
            setTimeout(function () {
                $layer.classList.add('visible');
            }, 100);
            $layer.onclick = function () {
                body.classList.remove('nav-open');
                this.mobile_menu_visible = 0;
                $layer.classList.remove('visible');
                this.sidebarClose();
            }.bind(this);
            body.classList.add('nav-open');
        }
        else {
            document.getElementsByClassName("close-layer")[0].remove();
            this.sidebarClose();
        }
    };
    AuthLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__(/*! ./auth-layout.component.html */ "./src/app/layouts/auth/auth-layout.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/registration/registration.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layouts/registration/registration.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layouts/registration/registration.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layouts/registration/registration.component.ts ***!
  \****************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, element) {
        this.router = router;
        this.element = element;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/layouts/registration/registration.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/layouts/user/user.component.css":
/*!*************************************************!*\
  !*** ./src/app/layouts/user/user.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\r\n    display: inline-flex;\r\n}"

/***/ }),

/***/ "./src/app/layouts/user/user.component.html":
/*!**************************************************!*\
  !*** ./src/app/layouts/user/user.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-primary\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand-logo\" href=\"#\">\r\n      <strong>Pt</strong>way\r\n      <img src=\"../../assets/img/32X32.png\">\r\n    </a>\r\n    <button class=\"navbar-toggler\" type=\"button\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/my-cv']\">السيرة الذاتية <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" href=\"#pablo\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n            aria-expanded=\"false\">\r\n            <i class=\"material-icons\">notifications</i>قائمة العروض\r\n            <span class=\"notification\"></span>\r\n            <p>\r\n              <span class=\"d-lg-none d-md-block\">Some Actions</span>\r\n            </p>\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"navbarDropdownMenuLink\" \r\n          *ngFor=\"let c of content\">\r\n            <a class=\"dropdown-item\" (click)=\"onClick(id)\" [routerLink]=\"['/offers-list']\">{{c}}</a>\r\n            <!-- <a class=\"dropdown-item\" (click)=\"onClick(id[1])\" href=\"#\">{{content[1]}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"onClick(id[2])\" href=\"#\">{{content[2]}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"onClick(id[3])\" href=\"#\">{{content[3]}}</a>\r\n            <a class=\"dropdown-item\" (click)=\"onClick(id[4])\" href=\"#\">{{content[4]}}</a> -->\r\n            <a class=\"dropdown-item\" [routerLink]=\"['/offers-list']\"> -- عرض جميع الأعلانات --</a>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/edit-cv']\">تعديل السيرة الذاتية</a>\r\n        </li>\r\n        <li class=\"nav-item\" routerLinkActive=\"active\">\r\n          <a class=\"nav-link\" [routerLink]=\"['/sign-up']\">تسجيل خروج</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/layouts/user/user.component.ts":
/*!************************************************!*\
  !*** ./src/app/layouts/user/user.component.ts ***!
  \************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_my_cv_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/my-cv/user.service */ "./src/app/my-cv/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(router, element, userService) {
        this.router = router;
        this.element = element;
        this.userService = userService;
        this.id = [];
        this.content = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUnreadNotification().subscribe(function (res) {
            console.log(res);
            _this.count = res.count;
        });
        this.userService.getLastNotification().subscribe(function (res) {
            for (var i = 0; i < _this.count; i++) {
                _this.id.push(res.id[i]);
                _this.content.push(res.content[i].job_Name);
            }
        });
    };
    UserComponent.prototype.onClick = function (id) {
        console.log(id);
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/layouts/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.css */ "./src/app/layouts/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], src_app_my_cv_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.css":
/*!****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.html":
/*!*****************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"header\">\r\n    <h4 class=\"title\">{{ title }}</h4>\r\n    <p class=\"category\">{{ subtitle }}</p>\r\n  </div>\r\n  <div class=\"content\">\r\n    <div [attr.id]=\"chartId\" class=\"ct-chart {{ chartClass }}\"></div>\r\n\r\n    <div class=\"footer\">\r\n      <div class=\"legend\">\r\n        <span *ngFor=\"let item of legendItems\">\r\n          <i [ngClass]=\"item.imageClass\"></i> {{ item.title }}\r\n        </span>\r\n      </div>\r\n      <hr *ngIf=\"withHr\">\r\n      <div class=\"stats\">\r\n        <i [ngClass]=\"footerIconClass\"></i> {{ footerText }}\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/md/md-chart/md-chart.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-chart/md-chart.component.ts ***!
  \***************************************************/
/*! exports provided: ChartType, MdChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartType", function() { return ChartType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdChartComponent", function() { return MdChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartType;
(function (ChartType) {
    ChartType[ChartType["Pie"] = 0] = "Pie";
    ChartType[ChartType["Line"] = 1] = "Line";
    ChartType[ChartType["Bar"] = 2] = "Bar";
})(ChartType || (ChartType = {}));
var MdChartComponent = /** @class */ (function () {
    function MdChartComponent() {
    }
    MdChartComponent_1 = MdChartComponent;
    MdChartComponent.prototype.ngOnInit = function () {
        this.chartId = "md-chart-" + MdChartComponent_1.currentId++;
    };
    MdChartComponent.prototype.ngAfterViewInit = function () {
        switch (this.chartType) {
            case ChartType.Pie:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Pie"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Line:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Line"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
            case ChartType.Bar:
                new chartist__WEBPACK_IMPORTED_MODULE_1__["Bar"]("#" + this.chartId, this.chartData, this.chartOptions, this.chartResponsive);
                break;
        }
    };
    var MdChartComponent_1;
    MdChartComponent.currentId = 1;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "chartClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], MdChartComponent.prototype, "chartType", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdChartComponent.prototype, "chartOptions", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "chartResponsive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerIconClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdChartComponent.prototype, "footerText", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MdChartComponent.prototype, "legendItems", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], MdChartComponent.prototype, "withHr", void 0);
    MdChartComponent = MdChartComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-chart',
            template: __webpack_require__(/*! ./md-chart.component.html */ "./src/app/md/md-chart/md-chart.component.html"),
            styles: [__webpack_require__(/*! ./md-chart.component.css */ "./src/app/md/md-chart/md-chart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MdChartComponent);
    return MdChartComponent;
}());



/***/ }),

/***/ "./src/app/md/md-table/md-table.component.html":
/*!*****************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  <div class=\"content table-responsive\">\r\n    <table class=\"table\">\r\n      <tbody>\r\n          <tr *ngFor=\"let row of data.dataRows\">\r\n            <!-- <td *ngFor=\"let cell of row\">{{ cell }}</td> -->\r\n            <td>\r\n                <div class=\"flag\">\r\n                    <img src=\"./assets/img/flags/{{row[0]}}.png\" alt=\"\">\r\n                </div>\r\n            </td>\r\n            <td>\r\n                {{row[1]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[2]}}\r\n            </td>\r\n            <td class=\"text-right\">\r\n                {{row[3]}}\r\n            </td>\r\n          </tr>\r\n      </tbody>\r\n    </table>\r\n\r\n  </div>\r\n"

/***/ }),

/***/ "./src/app/md/md-table/md-table.component.ts":
/*!***************************************************!*\
  !*** ./src/app/md/md-table/md-table.component.ts ***!
  \***************************************************/
/*! exports provided: MdTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdTableComponent", function() { return MdTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MdTableComponent = /** @class */ (function () {
    function MdTableComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "title", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "subtitle", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MdTableComponent.prototype, "cardClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MdTableComponent.prototype, "data", void 0);
    MdTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-md-table',
            template: __webpack_require__(/*! ./md-table.component.html */ "./src/app/md/md-table/md-table.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], MdTableComponent);
    return MdTableComponent;
}());



/***/ }),

/***/ "./src/app/md/md.module.ts":
/*!*********************************!*\
  !*** ./src/app/md/md.module.ts ***!
  \*********************************/
/*! exports provided: NavItemType, MdModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemType", function() { return NavItemType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MdModule", function() { return MdModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./md-table/md-table.component */ "./src/app/md/md-table/md-table.component.ts");
/* harmony import */ var _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./md-chart/md-chart.component */ "./src/app/md/md-chart/md-chart.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavItemType;
(function (NavItemType) {
    NavItemType[NavItemType["Sidebar"] = 1] = "Sidebar";
    NavItemType[NavItemType["NavbarLeft"] = 2] = "NavbarLeft";
    NavItemType[NavItemType["NavbarRight"] = 3] = "NavbarRight"; // Right-aligned link on navbar in desktop mode, shown above sidebar items on collapsed sidebar in mobile mode
})(NavItemType || (NavItemType = {}));
var MdModule = /** @class */ (function () {
    function MdModule() {
    }
    MdModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ],
            exports: [
                _md_table_md_table_component__WEBPACK_IMPORTED_MODULE_3__["MdTableComponent"],
                _md_chart_md_chart_component__WEBPACK_IMPORTED_MODULE_4__["MdChartComponent"]
            ]
        })
    ], MdModule);
    return MdModule;
}());



/***/ }),

/***/ "./src/app/my-cv/user.service.ts":
/*!***************************************!*\
  !*** ./src/app/my-cv/user.service.ts ***!
  \***************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';
var UserService = /** @class */ (function () {
    function UserService(http, router, auth) {
        this.http = http;
        this.router = router;
        this.auth = auth;
    }
    UserService.prototype.addUserInfo = function (data) {
        var _this = this;
        this.http
            .post(BackUrl + '/postuserinfo', data).subscribe(function (response) {
            _this.router.navigate(['/my-cv']);
        });
    };
    UserService.prototype.getUserInfo = function () {
        console.log(this.auth.getUserId());
        return this.http
            .get(BackUrl + '/getuserinfo');
    };
    UserService.prototype.getUser = function () {
        return this.http
            .get(BackUrl + '/currentuser');
    };
    UserService.prototype.getUnreadNotification = function () {
        console.log(this.auth.getUserId());
        return this.http
            .get(BackUrl + '/get/unread/notification');
    };
    UserService.prototype.getLastNotification = function () {
        return this.http
            .get(BackUrl + '/get/lastnotifcation');
    };
    UserService.prototype.getAllNotification = function () {
        return this.http
            .get(BackUrl + '/get/allnotifications');
    };
    UserService.prototype.getSpicificNotification = function (id) {
        return this.http
            .get(BackUrl + '/get/notification?notiId=' + id);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.css":
/*!**************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.html":
/*!***************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Fixed Plugin configurator, used just for Demo Purpose -->\r\n<div class=\"fixed-plugin\">\r\n    <div class=\"dropdown show-dropdown\">\r\n        <a href=\"#\" data-toggle=\"dropdown\" aria-expanded=\"true\">\r\n            <i class=\"fa fa-cog fa-2x\"> </i>\r\n        </a>\r\n        <ul class=\"dropdown-menu\">\r\n            <li class=\"header-title\"> Sidebar Filters</li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger active-color\">\r\n                  <div class=\"ml-auto mr-auto\">\r\n                    <span class=\"badge filter badge-purple\" data-color=\"purple\"></span>\r\n                    <span class=\"badge filter badge-azure active\" data-color=\"azure\"></span>\r\n                    <span class=\"badge filter badge-green\" data-color=\"green\"></span>\r\n                    <span class=\"badge filter badge-orange\" data-color=\"orange\"></span>\r\n                    <span class=\"badge filter badge-danger\" data-color=\"danger\"></span>\r\n                    <span class=\"badge filter badge-rose\" data-color=\"rose\"></span>\r\n                  </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"header-title\">Sidebar Background</li>\r\n            <li class=\"adjustments-line\">\r\n                <a href=\"javascript:void(0)\" class=\"switch-trigger background-color\">\r\n                    <div class=\"ml-auto mr-auto\">\r\n                        <span class=\"badge filter badge-white\" data-color=\"white\"></span>\r\n                        <span class=\"badge filter badge-black\" data-color=\"black\"></span>\r\n                        <span class=\"badge filter badge-danger\" data-color=\"red\"></span>\r\n                        <span class=\"badge filter badge-primary active\" data-color=\"blue\"></span>\r\n                    </div>\r\n                    <div class=\"clearfix\"></div>\r\n                </a>\r\n            </li>\r\n            <li class=\"adjustments-line\">\r\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                  <p>Sidebar Mini</p>\r\n                  <label class=\"ml-auto\">\r\n                    <div class=\"togglebutton switch-sidebar-mini\">\r\n                      <label>\r\n                          <input type=\"checkbox\">\r\n                              <span class=\"toggle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </label>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"ripple-container\"></div>\r\n              </a>\r\n            </li>\r\n            <li class=\"adjustments-line\">\r\n              <a href=\"javascript:void(0)\" class=\"switch-trigger\">\r\n                  <p>Sidebar Images</p>\r\n                  <label class=\"switch-mini ml-auto\">\r\n                    <div class=\"togglebutton switch-sidebar-image\">\r\n                      <label>\r\n                          <input type=\"checkbox\" checked=\"\">\r\n                            <span class=\"toggle\"></span>\r\n                      </label>\r\n                    </div>\r\n                  </label>\r\n                  <div class=\"clearfix\"></div>\r\n                  <div class=\"ripple-container\"></div>\r\n              </a>\r\n            </li>\r\n            <li class=\"header-title\">Images</li>\r\n            <li class=\"active\">\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-1.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-2.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-3.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a class=\"img-holder switch-trigger\" href=\"javascript:void(0)\">\r\n                    <img src=\"./assets/img/sidebar-4.jpg\" alt=\"\" />\r\n                </a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.component.ts ***!
  \*************************************************************/
/*! exports provided: FixedpluginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginComponent", function() { return FixedpluginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var md = {
    misc: {
        navbar_menu_visible: 0,
        active_collapse: true,
        disabled_collapse_init: 0,
    }
};
var FixedpluginComponent = /** @class */ (function () {
    function FixedpluginComponent() {
    }
    FixedpluginComponent.prototype.ngOnInit = function () {
        // fixed plugin
        var $sidebar = $('.sidebar');
        var $sidebar_img_container = $sidebar.find('.sidebar-background');
        //
        var $full_page = $('.full-page');
        //
        var $sidebar_responsive = $('body > .navbar-collapse');
        var window_width = $(window).width();
        var fixed_plugin_open = $('.sidebar .sidebar-wrapper .nav li.active a p').html();
        if (window_width > 767 && fixed_plugin_open === 'Dashboard') {
            if ($('.fixed-plugin .dropdown').hasClass('show-dropdown')) {
                $('.fixed-plugin .dropdown').addClass('open');
            }
        }
        $('.fixed-plugin a').click(function (event) {
            // Alex: if we click on switch, stop propagation of the event,
            // so the dropdown will not be hide, otherwise we set the  section active
            if ($(this).hasClass('switch-trigger')) {
                if (event.stopPropagation) {
                    event.stopPropagation();
                }
                else if (window.event) {
                    window.event.cancelBubble = true;
                }
            }
        });
        $('.fixed-plugin .active-color span').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-color', new_color);
            }
            if ($full_page.length !== 0) {
                $full_page.attr('filter-color', new_color);
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.attr('data-color', new_color);
            }
        });
        $('.fixed-plugin .background-color span').click(function () {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
            var new_color = $(this).data('color');
            if ($sidebar.length !== 0) {
                $sidebar.attr('data-background-color', new_color);
            }
        });
        $('.fixed-plugin .img-holder').click(function () {
            var $full_page_background = $('.full-page-background');
            $(this).parent('li').siblings().removeClass('active');
            $(this).parent('li').addClass('active');
            var new_image = $(this).find('img').attr('src');
            if ($sidebar_img_container.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                $sidebar_img_container.fadeOut('fast', function () {
                    $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                    $sidebar_img_container.fadeIn('fast');
                });
            }
            if ($full_page_background.length !== 0 && $('.switch-sidebar-image input:checked').length !== 0) {
                var new_image_full_page_1 = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $full_page_background.fadeOut('fast', function () {
                    $full_page_background.css('background-image', 'url("' + new_image_full_page_1 + '")');
                    $full_page_background.fadeIn('fast');
                });
            }
            if ($('.switch-sidebar-image input:checked').length === 0) {
                new_image = $('.fixed-plugin li.active .img-holder').find('img').attr('src');
                var new_image_full_page = $('.fixed-plugin li.active .img-holder').find('img').data('src');
                $sidebar_img_container.css('background-image', 'url("' + new_image + '")');
                $full_page_background.css('background-image', 'url("' + new_image_full_page + '")');
            }
            if ($sidebar_responsive.length !== 0) {
                $sidebar_responsive.css('background-image', 'url("' + new_image + '")');
            }
        });
        $('.switch-sidebar-image input').change(function () {
            var $full_page_background = $('.full-page-background');
            var $input = $(this);
            if ($input.is(':checked')) {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar_img_container.fadeIn('fast');
                    $sidebar.attr('data-image', '#');
                }
                if ($full_page_background.length !== 0) {
                    $full_page_background.fadeIn('fast');
                    $full_page.attr('data-image', '#');
                }
                var background_image = true;
            }
            else {
                if ($sidebar_img_container.length !== 0) {
                    $sidebar.removeAttr('data-image');
                    $sidebar_img_container.fadeOut('fast');
                }
                if ($full_page_background.length !== 0) {
                    $full_page.removeAttr('data-image', '#');
                    $full_page_background.fadeOut('fast');
                }
                var background_image = false;
            }
        });
        $('.switch-sidebar-mini input').change(function () {
            var $body = $('body');
            var $input = $(this);
            if (md.misc.sidebar_mini_active === true) {
                $('body').removeClass('sidebar-mini');
                md.misc.sidebar_mini_active = false;
            }
            else {
                setTimeout(function () {
                    $('body').addClass('sidebar-mini');
                    $('.sidebar .collapse').css('height', 'auto');
                    md.misc.sidebar_mini_active = true;
                }, 300);
            }
            // we simulate the window Resize so the charts will get updated in realtime.
            var simulateWindowResize = setInterval(function () {
                window.dispatchEvent(new Event('resize'));
            }, 180);
            // we stop the simulation of Window Resize after the animations are completed
            setTimeout(function () {
                clearInterval(simulateWindowResize);
            }, 1000);
        });
    };
    FixedpluginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-fixedplugin',
            template: __webpack_require__(/*! ./fixedplugin.component.html */ "./src/app/shared/fixedplugin/fixedplugin.component.html"),
            styles: [__webpack_require__(/*! ./fixedplugin.component.css */ "./src/app/shared/fixedplugin/fixedplugin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FixedpluginComponent);
    return FixedpluginComponent;
}());



/***/ }),

/***/ "./src/app/shared/fixedplugin/fixedplugin.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/fixedplugin/fixedplugin.module.ts ***!
  \**********************************************************/
/*! exports provided: FixedpluginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedpluginModule", function() { return FixedpluginModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fixedplugin.component */ "./src/app/shared/fixedplugin/fixedplugin.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FixedpluginModule = /** @class */ (function () {
    function FixedpluginModule() {
    }
    FixedpluginModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]],
            exports: [_fixedplugin_component__WEBPACK_IMPORTED_MODULE_2__["FixedpluginComponent"]]
        })
    ], FixedpluginModule);
    return FixedpluginModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer \">\r\n  <div class=\"container\">\r\n    <nav class=\"pull-left\">\r\n      <ul>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com\">\r\n            Ptway TEAM\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://creative-tim.com/about-us\">\r\n            من نحن\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"http://blog.creative-tim.com\">\r\n            سياسة الخصوصية\r\n          </a>\r\n        </li>\r\n        <li>\r\n          <a href=\"https://www.creative-tim.com/license\">\r\n            الشروط والأحكام\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <div class=\"copyright pull-right\">\r\n        <p class=\"text-left\">جميع الحقوق محفوظة © 2019 PTWay.net</p>\r\n    </div>\r\n  </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer-cmp',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/shared/footer/footer.component.html")
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/footer/footer.module.ts ***!
  \************************************************/
/*! exports provided: FooterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterModule", function() { return FooterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.component */ "./src/app/shared/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = /** @class */ (function () {
    function FooterModule() {
    }
    FooterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]]
        })
    ], FooterModule);
    return FooterModule;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav #navbar class=\"navbar navbar-expand-lg navbar-transparent  navbar-absolute\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"navbar-wrapper\">\r\n      <div class=\"navbar-minimize\">\r\n        <button mat-raised-button (click)=\"minimizeSidebar()\" class=\"btn btn-just-icon btn-white btn-fab btn-round\">\r\n          <i class=\"material-icons text_align-center visible-on-sidebar-regular\">more_vert</i>\r\n          <i class=\"material-icons design_bullet-list-67 visible-on-sidebar-mini\">view_list</i>\r\n        </button>\r\n      </div>\r\n      <a class=\"navbar-brand\" href=\"{{getPath()}}\"> {{getTitle()}}</a>\r\n    </div>\r\n    <button mat-button class=\"navbar-toggler btn-no-ripple\" type=\"button\" (click)=\"sidebarToggle()\">\r\n      <span class=\"sr-only\">Toggle navigation</span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n      <span class=\"navbar-toggler-icon icon-bar\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse justify-content-end\" id=\"navigation\"></div>\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var misc = {
    navbar_menu_visible: 0,
    active_collapse: true,
    disabled_collapse_init: 0,
};
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, renderer, element, router) {
        this.renderer = renderer;
        this.element = element;
        this.router = router;
        this.mobile_menu_visible = 0;
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.minimizeSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        if (misc.sidebar_mini_active === true) {
            body.classList.remove('sidebar-mini');
            misc.sidebar_mini_active = false;
        }
        else {
            setTimeout(function () {
                body.classList.add('sidebar-mini');
                misc.sidebar_mini_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.hideSidebar = function () {
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('sidebar')[0];
        if (misc.hide_sidebar_active === true) {
            setTimeout(function () {
                body.classList.remove('hide-sidebar');
                misc.hide_sidebar_active = false;
            }, 300);
            setTimeout(function () {
                sidebar.classList.remove('animation');
            }, 600);
            sidebar.classList.add('animation');
        }
        else {
            setTimeout(function () {
                body.classList.add('hide-sidebar');
                // $('.sidebar').addClass('animation');
                misc.hide_sidebar_active = true;
            }, 300);
        }
        // we simulate the window Resize so the charts will get updated in realtime.
        var simulateWindowResize = setInterval(function () {
            window.dispatchEvent(new Event('resize'));
        }, 180);
        // we stop the simulation of Window Resize after the animations are completed
        setTimeout(function () {
            clearInterval(simulateWindowResize);
        }, 1000);
    };
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listTitles = _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["ROUTES"].filter(function (listTitle) { return listTitle; });
        var navbar = this.element.nativeElement;
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
        if (body.classList.contains('sidebar-mini')) {
            misc.sidebar_mini_active = true;
        }
        if (body.classList.contains('hide-sidebar')) {
            misc.hide_sidebar_active = true;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            _this.sidebarClose();
            var $layer = document.getElementsByClassName('close-layer')[0];
            if ($layer) {
                $layer.remove();
            }
        });
    };
    NavbarComponent.prototype.onResize = function (event) {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        body.classList.add('nav-open');
        setTimeout(function () {
            $toggle.classList.add('toggled');
        }, 430);
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        if (body.querySelectorAll('.main-panel')) {
            document.getElementsByClassName('main-panel')[0].appendChild($layer);
        }
        else if (body.classList.contains('off-canvas-sidebar')) {
            document.getElementsByClassName('wrapper-full-page')[0].appendChild($layer);
        }
        setTimeout(function () {
            $layer.classList.add('visible');
        }, 100);
        $layer.onclick = function () {
            body.classList.remove('nav-open');
            this.mobile_menu_visible = 0;
            this.sidebarVisible = false;
            $layer.classList.remove('visible');
            setTimeout(function () {
                $layer.remove();
                $toggle.classList.remove('toggled');
            }, 400);
        }.bind(this);
        body.classList.add('nav-open');
        this.mobile_menu_visible = 1;
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var $toggle = document.getElementsByClassName('navbar-toggler')[0];
        var body = document.getElementsByTagName('body')[0];
        this.toggleButton.classList.remove('toggled');
        var $layer = document.createElement('div');
        $layer.setAttribute('class', 'close-layer');
        this.sidebarVisible = false;
        body.classList.remove('nav-open');
        // $('html').removeClass('nav-open');
        body.classList.remove('nav-open');
        if ($layer) {
            $layer.remove();
        }
        setTimeout(function () {
            $toggle.classList.remove('toggled');
        }, 400);
        this.mobile_menu_visible = 0;
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    NavbarComponent.prototype.getTitle = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        for (var i = 0; i < this.listTitles.length; i++) {
            if (this.listTitles[i].type === "link" && this.listTitles[i].path === titlee) {
                return this.listTitles[i].title;
            }
            else if (this.listTitles[i].type === "sub") {
                for (var j = 0; j < this.listTitles[i].children.length; j++) {
                    var subtitle = this.listTitles[i].path + '/' + this.listTitles[i].children[j].path;
                    if (subtitle === titlee) {
                        return this.listTitles[i].children[j].title;
                    }
                }
            }
        }
        return 'Dashboard';
    };
    NavbarComponent.prototype.getPath = function () {
        return this.location.prepareExternalUrl(this.location.path());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('app-navbar-cmp'),
        __metadata("design:type", Object)
    ], NavbarComponent.prototype, "button", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar-cmp',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/shared/navbar/navbar.component.html")
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.module.ts":
/*!************************************************!*\
  !*** ./src/app/shared/navbar/navbar.module.ts ***!
  \************************************************/
/*! exports provided: NavbarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarModule", function() { return NavbarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    NavbarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]],
            exports: [_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"]]
        })
    ], NavbarModule);
    return NavbarModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"logo\">\r\n    <a class=\"simple-text logo-mini\">\r\n        <div class=\"logo-img\">\r\n            <img src=\"/assets/img/32X32.png\" />\r\n        </div>\r\n    </a>\r\n    <a href=\"https://www.creative-tim.com\" class=\"simple-text logo-normal\">\r\n        <strong>Pt</strong>way\r\n    </a>\r\n</div>\r\n<div class=\"sidebar-wrapper\">\r\n    <div class=\"user\">\r\n        <div class=\"photo\">\r\n            <img src=\"./assets/img/default-avatar.png\" />\r\n        </div>\r\n        <div class=\"user-info\">\r\n            <a data-toggle=\"collapse\" href=\"#collapseExample\" class=\"collapsed\">\r\n                <span>\r\n                    Tania Andrew\r\n                    <b class=\"caret\"></b>\r\n                </span>\r\n            </a>\r\n            <div class=\"collapse\" id=\"collapseExample\">\r\n                <ul class=\"nav\">\r\n                    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['/company-profile']\">\r\n                            <i class=\"material-icons\">perm_identity</i>\r\n                            <span class=\"sidebar-normal\">ملف التعريف</span>\r\n                        </a>\r\n                    </li>\r\n                    <li class=\"nav-item\" routerLinkActive=\"active\">\r\n                        <a class=\"nav-link\" [routerLink]=\"['/edit-company-profile']\">\r\n                            <span class=\"sidebar-mini\">EP</span>\r\n                            <span class=\"sidebar-normal\">تعديل ملف التعريف</span>\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <ul class=\"nav\">\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a [routerLink]=\"['/dashboard']\" class=\"nav-link\">\r\n                <i class=\"material-icons\">dashboard</i>\r\n                <p>لوحة التحكم</p>\r\n            </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a [routerLink]=\"['/add-project']\" class=\"nav-link\">\r\n                <i class=\"material-icons\">add_box</i>\r\n                <p>اضافة مشروع</p>\r\n            </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a [routerLink]=\"['/add-job']\" class=\"nav-link\">\r\n                <i class=\"material-icons\">rate_review</i>\r\n                <p>اضافة عرض عمل</p>\r\n            </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a [routerLink]=\"['/my-projects']\" class=\"nav-link\">\r\n                <i class=\"material-icons\">next_week</i>\r\n                <p>المشاريع الخاصة بي</p>\r\n            </a>\r\n        </li>\r\n        <li routerLinkActive=\"active\" class=\"nav-item\">\r\n            <a (click)=\"logOut()\" [routerLink]=\"['null']\" class=\"nav-link\">\r\n                <i class=\"material-icons\">input</i>\r\n                <p>تسجيل خروج</p>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</div>"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: ROUTES, SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! perfect-scrollbar */ "./node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//Menu Items
var ROUTES = [{
        path: '/dashboard',
        title: 'لوحة التحكم',
        type: 'link',
        icontype: 'dashboard'
    }, {
        path: '/add-project',
        title: 'اضافة مشروع',
        type: 'link',
        icontype: 'next_week'
    }, {
        path: '/add-job',
        title: 'اضافة عرض عمل',
        type: 'link',
        icontype: 'rate_review'
    }, {
        path: '/candidates-list',
        title: 'قائمة المرشحين',
        type: 'link',
        icontype: 'assignment_ind'
    }, {
        path: '/acceptance-list',
        title: 'قائمة المقبولين',
        type: 'link',
        icontype: 'assignment_turned_in'
    }, {
        path: '/widgets',
        title: 'تسجيل خروج',
        type: 'link',
        icontype: 'input'
    }
];
var SidebarComponent = /** @class */ (function (_super) {
    __extends(SidebarComponent, _super);
    function SidebarComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SidebarComponent.prototype.isMobileMenu = function () {
        if ($(window).width() > 991) {
            return false;
        }
        return true;
    };
    ;
    SidebarComponent.prototype.ngOnInit = function () {
        this.menuItems = ROUTES.filter(function (menuItem) { return menuItem; });
    };
    SidebarComponent.prototype.updatePS = function () {
        if (window.matchMedia("(min-width: 960px)").matches && !this.isMac()) {
            var elemSidebar = document.querySelector('.sidebar .sidebar-wrapper');
            var ps = new perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__["default"](elemSidebar, { wheelSpeed: 2, suppressScrollX: true });
        }
    };
    SidebarComponent.prototype.isMac = function () {
        var bool = false;
        if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
            bool = true;
        }
        return bool;
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar-cmp',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}(_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));



/***/ }),

/***/ "./src/app/sidebar/sidebar.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sidebar/sidebar.module.ts ***!
  \*******************************************/
/*! exports provided: SidebarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarModule", function() { return SidebarModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
            declarations: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
            exports: [_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Asus\Documents\GitHub\PTway-Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map