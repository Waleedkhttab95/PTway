(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-pages-module"],{

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




var BackUrl = 'https://ptway-dev.herokuapp.com/api';
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuth = false;
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
            _this.router.navigate(['/pages/register']);
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http.post(BackUrl + '/login', authData)
            .subscribe(function (response) {
            var token = response.token;
            if (token) {
                _this.token = token;
                _this.isAuth = true;
                _this.userId = response.userId;
                _this.authStatusListener.next(true);
                _this.saveAuthData(token, _this.userId);
                _this.router.navigate(['/forms/companyform']);
            }
        }, function (error) {
            _this.authStatusListener.next(false);
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        this.token = this.getAuthData().token;
        this.isAuth = true;
        this.authStatusListener.next(true);
        this.userId = this.getAuthData().userId;
    };
    AuthService.prototype.logOut = function () {
        this.token = null;
        this.isAuth = false;
        this.authStatusListener.next(false);
        this.userId = null;
        this.clearData();
        this.router.navigate(['/']);
    };
    AuthService.prototype.saveAuthData = function (token, userId) {
        localStorage.setItem('token', token);
        localStorage.setItem('userId', userId);
    };
    AuthService.prototype.clearData = function () {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuth;
    };
    AuthService.prototype.getUserId = function () {
        return this.userId;
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem('token');
        var user = localStorage.getItem('userId');
        if (!token) {
            return;
        }
        return {
            token: token,
            userId: user
        };
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/pages/lock/lock.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/lock/lock.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header lock-page header-filter\" style=\"background-image: url('./assets/img/lock.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | green | orange | red | purple\" -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 ml-auto mr-auto\">\n          <div class=\"card card-profile text-center card-hidden\">\n            <div class=\"card-header \">\n              <div class=\"card-avatar\">\n                <a href=\"#pablo\">\n                  <img class=\"img\" src=\"./assets/img/faces/avatar.jpg\">\n                </a>\n              </div>\n            </div>\n            <div class=\"card-body \">\n              <h4 class=\"card-title\">Tania Andrew</h4>\n              <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Enter Password\" type=\"password\">\n              </mat-form-field>\n            </div>\n            <div class=\"card-footer justify-content-center\">\n              <a href=\"#pablo\" class=\"btn btn-rose btn-round\">Unlock</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <footer class=\"footer \">\n    <div class=\"container\">\n      <nav class=\"pull-left\">\n        <ul>\n          <li>\n            <a href=\"https://www.creative-tim.com\">\n              Ptway Comapny\n            </a>\n          </li>\n          <li>\n            <a href=\"https://creative-tim.com/about-us\">\n              About Us\n            </a>\n          </li>\n          <li>\n            <a href=\"http://blog.creative-tim.com\">\n              Blog\n            </a>\n          </li>\n          <li>\n            <a href=\"https://www.creative-tim.com/license\">\n              Licenses\n            </a>\n          </li>\n        </ul>\n      </nav>\n      <div class=\"copyright pull-right\">\n        &copy;\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> بواسطة\n        <a href=\"https://www.creative-tim.com\" target=\"_blank\">شركة Ptway</a> لمستقبل مشرق.\n      </div>\n    </div>\n  </footer>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/lock/lock.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/lock/lock.component.ts ***!
  \**********************************************/
/*! exports provided: LockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockComponent", function() { return LockComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LockComponent = /** @class */ (function () {
    function LockComponent() {
        this.test = new Date();
    }
    LockComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('lock-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
    };
    LockComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('lock-page');
        body.classList.remove('off-canvas-sidebar');
    };
    LockComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-lock-cmp',
            template: __webpack_require__(/*! ./lock.component.html */ "./src/app/pages/lock/lock.component.html")
        })
    ], LockComponent);
    return LockComponent;
}());



/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-input{\n    width: 90%;\n}\n.mat-form-field{\n    text-align: right;\n}"

/***/ }),

/***/ "./src/app/pages/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/login.jpg'); background-size: cover; background-position: top center;\">\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\n          <form class=\"form\" (ngSubmit)=\"userlogin(loginForm)\" #loginForm=\"ngForm\">\n            <div class=\"card card-login card-hidden\">\n              <div class=\"card-header card-header-primary text-center\">\n                <h4 class=\"card-title\">تسجيل الدخول</h4>\n                <div class=\"social-line\">\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                    <i class=\"fa fa-google\"></i>\n                  </a>\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                </div>\n              </div>\n              <div class=\"card-body\">\n                <p class=\"card-description text-center\">Or Be Classical</p>\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group custom-input\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"material-icons\">email</i>\n                      </span>\n                    </div>\n                    <mat-form-field>\n                      <input matInput type=\"email\" name=\"email\" ngModel placeholder=\"البريد الإلكتروني\" #emailInput=\"ngModel\"\n                        required email>\n                      <mat-error *ngIf=\"emailInput.invalid\">Please Enter valid Email</mat-error>\n                    </mat-form-field>\n                  </div>\n                </span>\n                <span class=\"bmd-form-group\">\n                  <div class=\"input-group custom-input\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\">\n                        <i class=\"material-icons\">lock_outline</i>\n                      </span>\n                    </div>\n                    <mat-form-field>\n                      <input type=\"password\" matInput name=\"password\" ngModel #passwordInput=\"ngModel\" required\n                        placeholder=\"كلمة المرور\">\n                      <mat-error *ngIf=\"passwordInput.invalid\">Please Enter a valid Password</mat-error>\n                    </mat-form-field>\n                  </div>\n                </span>\n              </div>\n              <div class=\"card-footer justify-content-center\">\n                <button type=\"submit\" name=\"submit\" class=\"btn btn-info btn-link btn-lg\">Lets Go</button>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Ptway TEAM\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                من نحن\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                سياسة الخصوصية\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                الشروط والأحكام\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          بواسطة <i class=\"material-icons\">favorite</i> شركة\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\"> Ptway</a> لمستقبل مشرق &copy;\n          {{test | date: 'yyyy'}}\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(element, authService, route, router, fb) {
        this.element = element;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.isLoading = false;
        this.test = new Date();
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    LoginComponent.prototype.userlogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        body.classList.add('off-canvas-sidebar');
        var card = document.getElementsByClassName('card')[0];
        setTimeout(function () {
            // after 1000 ms we add the class animated to the login/register card
            card.classList.remove('card-hidden');
        }, 700);
        this.userloginForm = this.fb.group({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    LoginComponent.prototype.sidebarToggle = function () {
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];
        var sidebar = document.getElementsByClassName('navbar-collapse')[0];
        if (this.sidebarVisible == false) {
            setTimeout(function () {
                toggleButton.classList.add('toggled');
            }, 500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        }
        else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
        this.authStatusSub.unsubscribe();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-cmp',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/pages/pages.module.ts":
/*!***************************************!*\
  !*** ./src/app/pages/pages.module.ts ***!
  \***************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _pages_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.routing */ "./src/app/pages/pages.routing.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// import { FlexLayoutModule } from '@angular/flex-layout';





var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(_pages_routing__WEBPACK_IMPORTED_MODULE_5__["PagesRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
            ],
            declarations: [
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _lock_lock_component__WEBPACK_IMPORTED_MODULE_8__["LockComponent"]
            ]
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "./src/app/pages/pages.routing.ts":
/*!****************************************!*\
  !*** ./src/app/pages/pages.routing.ts ***!
  \****************************************/
/*! exports provided: PagesRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutes", function() { return PagesRoutes; });
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register/register.component */ "./src/app/pages/register/register.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lock/lock.component */ "./src/app/pages/lock/lock.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/pages/login/login.component.ts");




var PagesRoutes = [
    {
        path: '',
        children: [{
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
            }, {
                path: 'lock',
                component: _lock_lock_component__WEBPACK_IMPORTED_MODULE_2__["LockComponent"]
            }, {
                path: 'register',
                component: _register_register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]
            }, {
                path: 'pricing',
                component: _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_1__["PricingComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header pricing-page header-filter\" style=\"background-image: url('./assets/img/bg-pricing.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 ml-auto mr-auto text-center\">\n          <h2 class=\"title\">Pick the best plan for you</h2>\n          <h5 class=\"description\">You have Free Unlimited Updates and Premium Support on each package.</h5>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Freelancer</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">weekend</i>\n              </div>\n              <h3 class=\"card-title\">Free</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing \">\n            <h6 class=\"card-category\"> Small Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-rose \">\n                <i class=\"material-icons\">home</i>\n              </div>\n              <h3 class=\"card-title\">29$</h3>\n              <p class=\"card-description\">This is good if your company size is between 2 and 10 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-rose\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Medium Company</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">business</i>\n              </div>\n              <h3 class=\"card-title\">69$</h3>\n              <p class=\"card-description\">This is good if your company size is between 11 and 99 Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-3 col-md-6\">\n          <div class=\"card card-pricing card-plain\">\n            <h6 class=\"card-category\"> Extra Pack</h6>\n            <div class=\"card-body\">\n              <div class=\"card-icon icon-white \">\n                <i class=\"material-icons\">account_balance</i>\n              </div>\n              <h3 class=\"card-title\">159$</h3>\n              <p class=\"card-description\">This is good if your company size is 99+ Persons.</p>\n            </div>\n            <div class=\"card-footer justify-content-center \">\n              <a href=\"#pablo\" class=\"btn btn-round btn-white\">Choose Plan</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Creative Tim\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                About Us\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                Blog\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                Licenses\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          &copy;\n          {{test | date: 'yyyy'}}, made with <i class=\"material-icons\">favorite</i> by\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a> for a better web.\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
        this.test = new Date();
    }
    PricingComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('pricing-page');
        body.classList.add('off-canvas-sidebar');
    };
    PricingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('pricing-page');
        body.classList.remove('off-canvas-sidebar');
    };
    PricingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricing-cmp',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html")
        })
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/register/register.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/register/register.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-nav{\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\n.custom-ml{\n    margin-right: auto !important;\n}\n.custom-mr{\n    margin-left: auto !important;\n}\n.custom-check-sign .check:before{\n    margin-right: 10px;\n}\n.mat-form-field{\n    text-align: right;\n}\n#tabs .mat-tab-label {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n}\n::ng-deep .tabs .mat-tab-list .mat-tab-labels {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n}\n.mat-form-field{\n    width: 100%;\n    margin-right: 6%;\n}\n.mat-option{\n    text-align: right;\n}\n.mat-option:hover {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n    background: #3f51b5!important;\n    color: #fff !important;\n}"

/***/ }),

/***/ "./src/app/pages/register/register.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/register/register.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/register.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">التسجيل</h2>\n            <mat-tab-group animationDuration=\"0ms\" class=\"tabs\">\n              <mat-tab label=\"عضو\" class=\"custom-label\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto custom-ml\">\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-rose\">\n                          <i class=\"material-icons\">timeline</i>\n                        </div>\n                        <div class=\"description tab-pane active\" id=\"link1\">\n                          <h4 class=\"info-title\">Marketing</h4>\n                          <p class=\"description\">\n                            We've created the marketing campaign of the website. It was a very interesting\n                            collaboration.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                          <i class=\"material-icons\">group</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Built Audience</h4>\n                          <p class=\"description\">\n                            There is also a Fully Customizable CMS Admin Dashboard for this product.\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto custom-mr\">\n                      <div class=\"social text-center\">\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                          <i class=\"fa fa-twitter\"></i>\n                        </button>\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                          <i class=\"fa fa-google\"></i>\n                        </button>\n                        <h4 class=\"mt-3\"> or be classical </h4>\n                      </div>\n                      <form class=\"form\" (ngSubmit)=\"userRegistreing()\" [formGroup]=\"userRegistrForm\">\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" formControlName=\"firstName\" name=\"firstName\" class=\"form-control\"\n                              placeholder=\"الاسم الاول...\">\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">tag_faces</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" formControlName=\"lastName\" name=\"lastName\" class=\"form-control\"\n                              placeholder=\"الاسم الثاني...\">\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">mail</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" formControlName=\"email\" name=\"email\" class=\"form-control\" placeholder=\"البريد الإلكتروني...\">\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">lock_outline</i>\n                              </span>\n                            </div>\n                            <input type=\"password\" formControlName=\"password\" name=\"password\" placeholder=\"كلمة المرور...\"\n                              class=\"form-control\">\n                          </div>\n                        </div>\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                            <span class=\"form-check-sign custom-check-sign\">\n                              <span class=\"check\"></span>\n                            </span>\n                            I agree to the\n                            <a href=\"#something\">terms and conditions</a>.\n                          </label>\n                        </div>\n                        <div class=\"text-center\">\n                          <button class=\"btn btn-primary btn-round mt-4\" type=\"submit\" name=\"submit\">Get Started</button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"شركة / منظمة\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto custom-ml\">\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-rose\">\n                          <i class=\"material-icons\">timeline</i>\n                        </div>\n                        <div class=\"description tab-pane active\" id=\"link1\">\n                          <h4 class=\"info-title\">Marketing</h4>\n                          <p class=\"description\">\n                            We've created the marketing campaign of the website. It was a very interesting\n                            collaboration.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                          <i class=\"material-icons\">group</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Built Audience</h4>\n                          <p class=\"description\">\n                            There is also a Fully Customizable CMS Admin Dashboard for this product.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto custom-mr\">\n                      <div class=\"social text-center\">\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\n                          <i class=\"fa fa-twitter\"></i>\n                        </button>\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                          <i class=\"fa fa-google\"></i>\n                        </button>\n                        <h4 class=\"mt-3\"> or be classical </h4>\n                      </div>\n                      <form class=\"form\" (ngSubmit)=\"companyRegistreing()\" [formGroup]=\"companyRegistrForm\">\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" name=\"companyName\" formControlName=\"companyName\" class=\"form-control\"\n                              placeholder=\"اسم الجهة...\">\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">mail</i>\n                              </span>\n                            </div>\n                            <input type=\"text\" class=\"form-control\" formControlName=\"email\" name=\"email\" placeholder=\"البريد الإلكتروني...\">\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <mat-form-field>\n                              <mat-select placeholder=\"نشاط العمل...\" name=\"CompanySpecialist\" formControlName=\"CompanySpecialist\">\n                                <mat-option *ngFor=\"let CompanySpecialist of CompanySpecialists\" [value]=\"CompanySpecialist.value\"\n                                  class=\"options\">\n                                  {{CompanySpecialist.viewValue}}\n                                </mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <mat-form-field>\n                              <mat-select placeholder=\"القطاع...\" name=\"sector\" formControlName=\"sector\">\n                                <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.value\" class=\"options\">\n                                  {{sector.viewValue}}\n                                </mat-option>\n                              </mat-select>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">lock_outline</i>\n                              </span>\n                            </div>\n                            <input type=\"password\" placeholder=\"كلمة المرور...\" name=\"password\" formControlName=\"password\"\n                              class=\"form-control\">\n                          </div>\n                        </div>\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                            <span class=\"form-check-sign custom-check-sign\">\n                              <span class=\"check\"></span>\n                            </span>\n                            I agree to the\n                            <a href=\"#something\">terms and conditions</a>.\n                          </label>\n                        </div>\n                        <div class=\"text-center\">\n                          <button class=\"btn btn-primary btn-round mt-4\" type=\"submit\" name=\"submit\">Get Started</button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Ptway TEAM\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                من نحن\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                سياسة الخصوصية\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                الشروط والأحكام\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          بواسطة <i class=\"material-icons\">favorite</i> شركة\n          <a href=\"https://www.creative-tim.com\" target=\"_blank\"> Ptway</a> لمستقبل مشرق &copy;\n          {{test | date: 'yyyy'}}\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, route, router, fb) {
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.test = new Date();
        this.isLoading = false;
        this.selectTheme = 'primary';
        this.CompanySpecialists = [
            { value: 'التصميم والآبداع', viewValue: 'التصميم والآبداع' },
            { value: 'الهندسة المعمارية', viewValue: 'الهندسة المعمارية' },
            { value: 'امن المعلومات', viewValue: 'امن المعلومات' },
        ];
        this.sectors = [
            { value: 'قطاع حكومي', viewValue: 'قطاع حكومي' },
            { value: 'قطاع خاص', viewValue: 'قطاع خاص' },
            { value: 'جمعية خيرية', viewValue: 'جمعية خيرية' },
        ];
    }
    // userRegistreing() {
    //   console.log(this.userRegistrForm.value);
    //   this.authService.createUser(this.userRegistrForm.value).subscribe((result) => {
    //     this.router.navigate(['/forms/userform/']);
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    // companyRegistreing() {
    //   this.authService.companyRegistreing(this.companyRegistrForm.value).subscribe((result) => {
    //     this.router.navigate(['/forms/companyform/']);
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
        this.userRegistrForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.companyRegistrForm = this.fb.group({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            CompanySpecialist: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
        this.authStatusSub.unsubscribe();
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-cmp',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/pages/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/pages/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ })

}]);
//# sourceMappingURL=pages-pages-module.js.map