(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-in-sign-in-module"],{

/***/ "./src/app/sign-in/sign-in.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-input{\r\n    width: 90%;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-message{\r\n    text-align: center;\r\n    color: brown;\r\n    font-weight: bold;\r\n}\r\n::ng-deep .mat-form-field-empty.mat-form-field-label {\r\n    font-family: 'Cairo', 'Changa';\r\n}\r\n.custom-div{\r\n    margin-bottom: 8%;\r\n}\r\n.fake-link {\r\n    color: #00263E;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n   font-size: 19px\r\n}\r\n@media screen and (max-width: 767px) {\r\n    .custom-fotter{\r\n        float: none;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        display: inline-block;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-in/sign-in.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n  <div class=\"page-header login-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/login.jpg'); background-size: cover; background-position: top center;\">\r\n    <!--   you can change the color of the filter page using: data-color=\"blue | purple | green | orange | red | rose \" -->\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-4 col-md-6 col-sm-6 ml-auto mr-auto\">\r\n          <form class=\"form\" (ngSubmit)=\"userlogin(loginForm)\" #loginForm=\"ngForm\">\r\n            <div class=\"card card-login card-hidden\">\r\n              <div class=\"card-header card-header-primary text-center\">\r\n                <h4 class=\"card-title\">تسجيل الدخول</h4>\r\n                <div class=\"social-line\">\r\n                  <a href=\"#pablo\" class=\"btn btn-just-icon btn-link btn-white\">\r\n                    <i class=\"fa fa-google\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <p class=\"card-description text-center\">تسجيل دخول كـ {{signAs}}</p>\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group custom-input\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">email</i>\r\n                      </span>\r\n                    </div>\r\n                    <mat-form-field>\r\n                      <input matInput type=\"email\" name=\"email\" ngModel placeholder=\"البريد الإلكتروني\" #emailInput=\"ngModel\"\r\n                        required email>\r\n                      <mat-error *ngIf=\"emailInput.invalid\">Please Enter valid Email</mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </span>\r\n                <span class=\"bmd-form-group\">\r\n                  <div class=\"input-group custom-input\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\">\r\n                        <i class=\"material-icons\">lock_outline</i>\r\n                      </span>\r\n                    </div>\r\n                    <mat-form-field>\r\n                      <input type=\"password\" matInput name=\"password\" ngModel #passwordInput=\"ngModel\" required\r\n                        placeholder=\"كلمة المرور\">\r\n                      <mat-error *ngIf=\"passwordInput.invalid\">Please Enter a valid Password</mat-error>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </span>\r\n              </div>\r\n              <!-- <h5 class=\"custom-message\">username or password are not coorect</h5> -->\r\n              <div class=\"card-footer justify-content-center\">\r\n                <button type=\"submit\" name=\"submit\" [disabled]=\"loginForm.invalid\" class=\"btn btn-info btn-link btn-lg\">Lets Go</button>\r\n              </div>\r\n              <div class=\"custom-div\">\r\n                <div class=\"text-center p-t-115\">\r\n                  <span class=\"\" (click)=\"userMood()\" id=\"userMood\"> عضو   /   </span>\r\n                  <span class=\"fake-link\" (click)=\"companyMood()\" id=\"companyMood\">شركة </span>\r\n                </div>\r\n                <div class=\"text-center p-t-115\">\r\n                  <span class=\"txt1\"> لاتملك حساب شخصي؟ </span>\r\n                  <a class=\"txt2\" [routerLink]=\"['/sign-up']\">قم بالتسجيل </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <footer class=\"footer \">\r\n      <div class=\"container\">\r\n        <nav class=\"pull-left\">\r\n          <ul>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com\">\r\n                Ptway TEAM\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://creative-tim.com/about-us\">\r\n                من نحن\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"http://blog.creative-tim.com\">\r\n                سياسة الخصوصية\r\n              </a>\r\n            </li>\r\n            <li>\r\n              <a href=\"https://www.creative-tim.com/license\">\r\n                الشروط والأحكام\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </nav>\r\n        <div class=\"copyright pull-right custom-fotter\">\r\n          <p class=\"text-left\">جميع الحقوق محفوظة © 2019 PTWay.net</p>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-in/sign-in.component.ts ***!
  \**********************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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




var SignInComponent = /** @class */ (function () {
    function SignInComponent(element, authService, route, router, fb) {
        this.element = element;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.isLoading = false;
        this.test = new Date();
        this.submitted = false;
        this.mood = true;
        this.signAs = "عضو";
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    SignInComponent.prototype.userlogin = function (form) {
        if (form.invalid) {
            return;
        }
        if (this.mood == true) {
            this.authService.login(form.value.email, form.value.password);
        }
        else {
            this.authService.companyLogin(form.value.email, form.value.password);
        }
    };
    SignInComponent.prototype.ngOnInit = function () {
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
    SignInComponent.prototype.sidebarToggle = function () {
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
    SignInComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        body.classList.remove('off-canvas-sidebar');
        this.authStatusSub.unsubscribe();
    };
    SignInComponent.prototype.companyMood = function () {
        this.mood = false;
        this.signAs = "شركة";
        var activeLink = document.getElementById('userMood');
        var link = document.getElementById('companyMood');
        activeLink.className = 'fake-link';
        link.classList.remove('fake-link');
    };
    SignInComponent.prototype.userMood = function () {
        this.mood = true;
        this.signAs = "عضو";
        var activeLink = document.getElementById('companyMood');
        var link = document.getElementById('userMood');
        activeLink.className = 'fake-link';
        link.classList.remove('fake-link');
    };
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-in/sign-in.module.ts ***!
  \*******************************************/
/*! exports provided: SignInModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInModule", function() { return SignInModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sign_in_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-in.routing */ "./src/app/sign-in/sign-in.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { FlexLayoutModule } from '@angular/flex-layout';

var SignInModule = /** @class */ (function () {
    function SignInModule() {
    }
    SignInModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sign_in_component__WEBPACK_IMPORTED_MODULE_2__["SignInComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sign_in_routing__WEBPACK_IMPORTED_MODULE_6__["SignInRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], SignInModule);
    return SignInModule;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.routing.ts":
/*!********************************************!*\
  !*** ./src/app/sign-in/sign-in.routing.ts ***!
  \********************************************/
/*! exports provided: SignInRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInRoutes", function() { return SignInRoutes; });
/* harmony import */ var _sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-in.component */ "./src/app/sign-in/sign-in.component.ts");

var SignInRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _sign_in_component__WEBPACK_IMPORTED_MODULE_0__["SignInComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=sign-in-sign-in-module.js.map