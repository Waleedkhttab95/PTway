(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-up-sign-up-module"],{

/***/ "./src/app/sign-up/sign-up.component.css":
/*!***********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-nav{\n    margin-left: auto;\n    margin-right: auto;\n    display: block;\n}\n.custom-ml{\n    margin-right: auto !important;\n}\n.custom-mr{\n    margin-left: auto !important;\n}\n.custom-check-sign .check:before{\n    margin-right: 10px;\n}\n.mat-form-field{\n    text-align: right;\n}\n#tabs .mat-tab-label {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n}\n::ng-deep .tabs .mat-tab-list .mat-tab-labels {\n    display: table;\n    margin-left: auto;\n    margin-right: auto;\n}\n.mat-form-field{\n    width: 100%;\n    margin-right: 6%;\n}\n.mat-option{\n    text-align: right;\n}\n.mat-option:hover {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n    background: #3f51b5!important;\n    color: #fff !important;\n}\n::ng-deep .mat-form-field-empty.mat-form-field-label {\n    font-family: 'Cairo', 'Changa';\n}\n::ng-deep .mat-tab-label{\n    font-family: 'Cairo', 'Changa';\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/*!************************************************!*\
  !*** ./src/app/sign-up/sign-up.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\n  <div class=\"page-header register-page header-filter\" filter-color=\"black\" style=\"background-image: url('./assets/img/register.jpg'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-10 ml-auto mr-auto\">\n          <div class=\"card card-signup\">\n            <h2 class=\"card-title text-center\">التسجيل</h2>\n            <mat-tab-group animationDuration=\"0ms\" class=\"tabs\">\n              <mat-tab label=\"عضو\" class=\"custom-label\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto custom-ml\">\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-rose\">\n                          <i class=\"material-icons\">timeline</i>\n                        </div>\n                        <div class=\"description tab-pane active\" id=\"link1\">\n                          <h4 class=\"info-title\">Marketing</h4>\n                          <p class=\"description\">\n                            We've created the marketing campaign of the website. It was a very interesting\n                            collaboration.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                          <i class=\"material-icons\">group</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Built Audience</h4>\n                          <p class=\"description\">\n                            There is also a Fully Customizable CMS Admin Dashboard for this product.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto custom-mr\">\n                      <div class=\"social text-center\">\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                          <i class=\"fa fa-google\"></i>\n                        </button>\n                        <h4 class=\"mt-3\"> or be classical </h4>\n                      </div>\n                      <form class=\"form\" (ngSubmit)=\"userRegistreing()\" [formGroup]=\"userRegistrForm\">\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"الاسم الاول...\" name=\"firstName\" formControlName=\"firstName\"\n                                [errorStateMatcher]=\"matcher\" type=\"text\">\n                              <mat-error *ngIf=\"firstName.hasError('text') && !firstName.hasError('required')\">\n                                يجب عليك ادخال الاسم الاول بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"firstName.hasError('required')\">\n                                يجب عليك ادخال <strong>الاسم الاول</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">tag_faces</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"الاسم الاخير...\" name=\"lastName\" formControlName=\"lastName\"\n                                [errorStateMatcher]=\"matcher\" type=\"text\">\n                              <mat-error *ngIf=\"lastName.hasError('text') && !lastName.hasError('required')\">\n                                يجب عليك ادخال الاسم الاخير بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"lastName.hasError('required')\">\n                                يجب عليك ادخال <strong>الاسم الاخير</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">mail</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"البريد الإلكتروني...\" name=\"email\" formControlName=\"email\"\n                                [errorStateMatcher]=\"matcher\" type=\"email\">\n                              <mat-error *ngIf=\"email.hasError('email') && !userEmail.hasError('required')\">\n                                يجب عليك ادخال البريد الإلكتروني بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"email.hasError('required')\">\n                                يجب عليك ادخال <strong>البريد الإلكتروني</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">lock_outline</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"كلمة المرور...\" name=\"password\" formControlName=\"password\"\n                                [errorStateMatcher]=\"matcher\" type=\"password\">\n                              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                                يجب عليك ادخال كلمة المرور بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"password.hasError('required')\">\n                                يجب عليك ادخال <strong>كلمة المرور</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" formControlName=\"agrreTerms\" name=\"agrreTerms\"\n                             [errorStateMatcher]=\"matcher\" type=\"checkbox\" value=\"\">\n                             <mat-error *ngIf=\"agrreTerms.hasError('check') && !agrreTerms.hasError('required')\">\n                              يجب عليك ادخال كلمة المرور بالشكل الصحيح\n                            </mat-error>\n                            <span class=\"form-check-sign custom-check-sign\">\n                              <span class=\"check\"></span>\n                            </span>\n                            I agree to the\n                            <a (click)=\"fromVal()\" id=\"agrreBtn\">terms and conditions</a>\n                          </label>\n                        </div>\n                        <div class=\"text-center\">\n                          <button class=\"btn btn-primary btn-round mt-4\" id=\"submitBtn\"\n                           [disabled]=\"userRegistrForm.invalid\" type=\"submit\" name=\"submit\">Get Started</button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </mat-tab>\n              <mat-tab label=\"شركة / منظمة\">\n                <div class=\"card-body\">\n                  <div class=\"row\">\n                    <div class=\"col-md-5 ml-auto custom-ml\">\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-rose\">\n                          <i class=\"material-icons\">timeline</i>\n                        </div>\n                        <div class=\"description tab-pane active\" id=\"link1\">\n                          <h4 class=\"info-title\">Marketing</h4>\n                          <p class=\"description\">\n                            We've created the marketing campaign of the website. It was a very interesting\n                            collaboration.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-info\">\n                          <i class=\"material-icons\">group</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Built Audience</h4>\n                          <p class=\"description\">\n                            There is also a Fully Customizable CMS Admin Dashboard for this product.\n                          </p>\n                        </div>\n                      </div>\n                      <div class=\"info info-horizontal\">\n                        <div class=\"icon icon-primary\">\n                          <i class=\"material-icons\">code</i>\n                        </div>\n                        <div class=\"description\">\n                          <h4 class=\"info-title\">Fully Coded in HTML5</h4>\n                          <p class=\"description\">\n                            We've developed the website with HTML5 and CSS3. The client has access to the code using\n                            GitHub.\n                          </p>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-5 mr-auto custom-mr\">\n                      <div class=\"social text-center\">\n                        <button mat-raised-button class=\"btn btn-just-icon btn-round btn-google\">\n                          <i class=\"fa fa-google\"></i>\n                        </button>\n                        <h4 class=\"mt-3\"> or be classical </h4>\n                      </div>\n                      <form class=\"form\" (ngSubmit)=\"companyRegistreing()\" [formGroup]=\"companyRegistrForm\">\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">face</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"اسم الجهة...\" name=\"companyName\" formControlName=\"companyName\"\n                                [errorStateMatcher]=\"matcher\" type=\"text\">\n                              <mat-error *ngIf=\"companyName.hasError('text') && !companyName.hasError('required')\">\n                                يجب عليك ادخال اسم الجهة بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"email.hasError('required')\">\n                                يجب عليك ادخال <strong>اسم الجهة</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">mail</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"البريد الإلكتروني...\" name=\"email\" formControlName=\"email\"\n                                [errorStateMatcher]=\"matcher\" type=\"email\">\n                              <mat-error *ngIf=\"email.hasError('email') && !email.hasError('required')\">\n                                يجب عليك ادخال البريد الإلكتروني بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"email.hasError('required')\">\n                                يجب عليك ادخال <strong>البريد الإلكتروني</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <mat-form-field>\n                              <mat-select placeholder=\"نشاط العمل...\" name=\"CompanySpecialist\" formControlName=\"CompanySpecialist\"\n                                [errorStateMatcher]=\"matcher\">\n                                <mat-option *ngFor=\"let CompanySpecialist of CompanySpecialists\" [value]=\"CompanySpecialist.value\"\n                                  class=\"options\">\n                                  {{CompanySpecialist.viewValue}}\n                                </mat-option>\n                              </mat-select>\n                              <mat-error *ngIf=\"CompanySpecialist.hasError('required')\">\n                                يجب عليك اختيار <strong>نشاط العمل</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <mat-form-field>\n                              <mat-select placeholder=\"القطاع...\" name=\"sector\" formControlName=\"sector\"\n                                [errorStateMatcher]=\"matcher\">\n                                <mat-option *ngFor=\"let sector of sectors\" [value]=\"sector.value\" class=\"options\">\n                                  {{sector.viewValue}}\n                                </mat-option>\n                              </mat-select>\n                              <mat-error *ngIf=\"sector.hasError('required')\">\n                                يجب عليك اختيار <strong>القطاع</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-group has-default\">\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\">\n                                <i class=\"material-icons\">lock_outline</i>\n                              </span>\n                            </div>\n                            <mat-form-field>\n                              <input matInput placeholder=\"كلمة المرور...\" name=\"password\" formControlName=\"password\"\n                                [errorStateMatcher]=\"matcher\" type=\"password\">\n                              <mat-error *ngIf=\"password.hasError('password') && !password.hasError('required')\">\n                                يجب عليك ادخال كلمة المرور بالشكل الصحيح\n                              </mat-error>\n                              <mat-error *ngIf=\"email.hasError('required')\">\n                                يجب عليك ادخال <strong>كلمة المرور</strong>\n                              </mat-error>\n                            </mat-form-field>\n                          </div>\n                        </div>\n                        <div class=\"form-check\">\n                          <label class=\"form-check-label\">\n                            <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                            <span class=\"form-check-sign custom-check-sign\">\n                              <span class=\"check\"></span>\n                            </span>\n                            I agree to the\n                            <a href=\"#something\">terms and conditions</a>.\n                          </label>\n                        </div>\n                        <div class=\"text-center\">\n                          <button class=\"btn btn-primary btn-round mt-4\" [disabled]=\"companyRegistrForm.invalid\" type=\"submit\" name=\"submit\">Get Started</button>\n                        </div>\n                      </form>\n                    </div>\n                  </div>\n                </div>\n              </mat-tab>\n            </mat-tab-group>\n          </div>\n        </div>\n      </div>\n    </div>\n    <footer class=\"footer \">\n      <div class=\"container\">\n        <nav class=\"pull-left\">\n          <ul>\n            <li>\n              <a href=\"https://www.creative-tim.com\">\n                Ptway TEAM\n              </a>\n            </li>\n            <li>\n              <a href=\"https://creative-tim.com/about-us\">\n                من نحن\n              </a>\n            </li>\n            <li>\n              <a href=\"http://blog.creative-tim.com\">\n                سياسة الخصوصية\n              </a>\n            </li>\n            <li>\n              <a href=\"https://www.creative-tim.com/license\">\n                الشروط والأحكام\n              </a>\n            </li>\n          </ul>\n        </nav>\n        <div class=\"copyright pull-right\">\n          <p class=\"text-left\">جميع الحقوق محفوظة © 2019 PTWay.net</p>\n        </div>\n      </div>\n    </footer>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sign-up/sign-up.component.ts ***!
  \**********************************************/
/*! exports provided: MyErrorStateMatcher, SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyErrorStateMatcher", function() { return MyErrorStateMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sign_up_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sign-up.service */ "./src/app/sign-up/sign-up.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(rest, authService, route, router, fb) {
        this.rest = rest;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        // isDis = false;
        this.firstName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.lastName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.Email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.Password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.agrreTerms = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.companyName = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
        ]);
        this.password = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
        ]);
        this.CompanySpecialist = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.sector = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required
        ]);
        this.matcher = new MyErrorStateMatcher();
        this.test = new Date();
        this.isLoading = false;
        this.selectTheme = 'primary';
        this.CompanySpecialists = [];
        this.sectors = [];
    }
    SignUpComponent.prototype.getsectors = function () {
        var _this = this;
        this.sectors = [];
        this.rest.getsectors().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.sectors.push({ value: data[key]._id, viewValue: data[key].sectorName });
            }
            console.log(_this.sectors);
        });
    };
    SignUpComponent.prototype.getspecialization = function () {
        var _this = this;
        this.CompanySpecialists = [];
        this.rest.getspecialization().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.CompanySpecialists.push({ value: data[key]._id, viewValue: data[key].specialistName });
            }
            console.log(_this.CompanySpecialists);
        });
    };
    SignUpComponent.prototype.userRegistreing = function () {
        console.log(this.userRegistrForm.value);
        this.authService.createUser(this.userRegistrForm.value.firstName, this.userRegistrForm.value.lastName, this.userRegistrForm.value.email, this.userRegistrForm.value.password);
    };
    SignUpComponent.prototype.companyRegistreing = function () {
        console.log(this.companyRegistrForm.value);
        this.authService.createCompany(this.companyRegistrForm.value.companyName, this.companyRegistrForm.value.email, this.companyRegistrForm.value.CompanySpecialist, this.companyRegistrForm.value.sector, this.companyRegistrForm.value.password);
    };
    SignUpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkAgreeBtn();
        this.getsectors();
        this.getspecialization();
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('register-page');
        body.classList.add('off-canvas-sidebar');
        this.userRegistrForm = this.fb.group({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            agrreTerms: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ])
        });
        this.companyRegistrForm = this.fb.group({
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
            ]),
            CompanySpecialist: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            sector: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].nullValidator,
            ])
        });
        this.authStatusSub = this.authService.getAuthStatusListener().subscribe(function (authStatus) {
            _this.isLoading = false;
        });
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('register-page');
        body.classList.remove('off-canvas-sidebar');
        this.authStatusSub.unsubscribe();
    };
    SignUpComponent.prototype.checkAgreeBtn = function () {
        // let agreeBtn =(document.getElementById('submitBtn'));
        // agreeBtn.click;
        // // agreeBtn.disabled = false;
        // console.log(agreeBtn);
        //   document.querySelector('#agrreBtn').addEventListener('click', () => {
        //     alert("The button was clicked.");
        //  });
    };
    SignUpComponent.prototype.fromVal = function () {
        var agreeBtn = (document.getElementById('agrreBtn'));
        agreeBtn.click;
        // agreeBtn.disabled = false;
        console.log(agreeBtn);
    };
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.css */ "./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [_sign_up_service__WEBPACK_IMPORTED_MODULE_4__["SignUpService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sign-up/sign-up.module.ts ***!
  \*******************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _sign_up_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sign-up.routing */ "./src/app/sign-up/sign-up.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// import { FlexLayoutModule } from '@angular/flex-layout';

var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_sign_up_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_sign_up_routing__WEBPACK_IMPORTED_MODULE_6__["SignUpRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_4__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.routing.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.routing.ts ***!
  \********************************************/
/*! exports provided: SignUpRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutes", function() { return SignUpRoutes; });
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sign-up.component */ "./src/app/sign-up/sign-up.component.ts");

var SignUpRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _sign_up_component__WEBPACK_IMPORTED_MODULE_0__["SignUpComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.service.ts ***!
  \********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from "http-status-codes";
// import { ToastsManager, Toast, ToastOptions } from "ng6-toastr";
var BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var SignUpService = /** @class */ (function () {
    // private showError(message: string) {
    //   this.toastManager.error(message, SignUpService.DEFAULT_ERROR_TITLE, { dismiss: 'controlled' }).then((toast: Toast) => {
    //     let currentToastId: number = toast.id;
    //     this.toastManager.onClickToast().subscribe(clickedToast => {
    //       if (clickedToast.id === currentToastId) {
    //         this.toastManager.dismissToast(toast);
    //         window.location.reload();
    //       }
    //     });
    //   });
    // }
    // private job: SignUpData[] = [];
    // private jobsUpdated = new Subject<{ posts: SignUpData[], jobCount: number }>();
    function SignUpService(http, router) {
        this.http = http;
        this.router = router;
    }
    // static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
    // static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";
    SignUpService.prototype.handleError = function (error) {
        // console.error(error);
        // let httpErrorCode = error.httpErrorCode;
        // switch (httpErrorCode) {
        //   case UNAUTHORIZED:
        //     this.router.navigateByUrl("/sign0in");
        //     break;
        //   case FORBIDDEN:
        //     this.router.navigateByUrl("/error-message");
        //     break;
        //   case BAD_REQUEST:
        //     this.showError(error.message);
        //     break;
        //   default:
        //     this.showError(SignUpService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
        // }
    };
    SignUpService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SignUpService.prototype.getsectors = function () {
        return this.http.get(BackUrl + '/getsectors').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    SignUpService.prototype.getspecialization = function () {
        return this.http.get(BackUrl + '/getspec').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    SignUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpService);
    return SignUpService;
}());



/***/ })

}]);
//# sourceMappingURL=sign-up-sign-up-module.js.map