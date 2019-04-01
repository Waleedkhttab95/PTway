(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-user-info-add-user-info-module"],{

/***/ "./src/app/add-user-info/add-user-info.component.css":
/*!***********************************************************!*\
  !*** ./src/app/add-user-info/add-user-info.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.mat-option{\r\n    text-align: right;\r\n}\r\n.mat-option.mat-selected:hover{\r\n    background-color: #3f51b5 !important;\r\n}\r\n.mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n    background: #3f51b5!important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background-color: #3f51b5 !important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.custom-label{\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/add-user-info/add-user-info.component.html":
/*!************************************************************!*\
  !*** ./src/app/add-user-info/add-user-info.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 custom-card\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">portrait</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">السيرة الذاتية للأعضاء</h4>\r\n          </div>\r\n          <div class=\"col-md-8 custom-card\">\r\n            <div class=\"card-body\">\r\n              <form (ngSubmit)=\"postuserinfo()\" [formGroup]=\"userResumeForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-8 col-sm-4\">\r\n                    <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                      <div class=\"fileinput-new thumbnail\">\r\n                        <img src=\"./assets/img/image_placeholder.jpg\"  alt=\"...\">\r\n                      </div>\r\n                      <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\r\n                      <div>\r\n                        <span class=\"btn btn-primary btn-round btn-file\">\r\n                          <span class=\"fileinput-new\">قم بأختيار الصورة الشخصية</span>\r\n                          <span class=\"fileinput-exists\">استبدال </span>\r\n                          <input type=\"file\" #fileUpload (change)=\"onImagePicked($event)\" />\r\n                        </span>\r\n                        <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\">\r\n                          <i class=\"fa fa-times\"></i> حذف\r\n                        </a>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col-md-8\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الأسم الكامل</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"text\" formControlName=\"fullName\" name=\"fullName\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- مكان الأقامة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"country\" name=\"country\">\r\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n                          {{country.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"city\" name=\"city\">\r\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                          {{city.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <br>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الجامعة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"universty\" name=\"universty\">\r\n                        <mat-option *ngFor=\"let universty of universties\" [value]=\"universty.value\">\r\n                          {{universty.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الشهادة التي تحملها</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"study_degree\" name=\"study_degree\">\r\n                        <mat-option *ngFor=\"let study_degree of certificate\" [value]=\"study_degree.value\">\r\n                          {{study_degree.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المرحلة الدراسية</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"education_degree\" name=\"education_degree\">\r\n                        <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\" (click)=\"checkspEducation()\">\r\n                          {{study_degree.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- المستوى التعليمي</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"Education_level\" name=\"Education_level\">\r\n                          <mat-option *ngFor=\"let study_degree of study_statuses\" [value]=\"study_degree.value\">\r\n                            {{study_degree.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6\">\r\n                        <label class=\"bmd-label-floating custom-label\">- التخصص العام</label>\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"\" formControlName=\"public_Major\" name=\"public_Major\">\r\n                            <mat-option *ngFor=\"let major of majors\" (click)=\"checkspMajor()\" [value]=\"major.value\">\r\n                              {{major.viewValue}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n                      <div class=\"col-md-6\">\r\n                        <label class=\"bmd-label-floating custom-label\">- التخصص الدقيق</label>\r\n                        <mat-form-field>\r\n                          <mat-select placeholder=\"\" formControlName=\"spMajor\" name=\"spMajor\">\r\n                            <mat-option *ngFor=\"let spMajor of spMajors\" [value]=\"spMajor.value\">\r\n                              {{spMajor.viewValue}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                      </div>\r\n\r\n                      <div class=\"col-md-6\">\r\n                          <label class=\"bmd-label-floating custom-label\">- مهارات العمل</label>\r\n                          <mat-form-field>\r\n                              <mat-select placeholder=\"\" formControlName=\"skills\" name=\"skills\"\r\n                              multiple>\r\n                              <mat-option *ngFor=\"let s of skillList\" [value]=\"s.value\">\r\n                                  {{s.viewValue}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                          </mat-form-field>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                          <label class=\"bmd-label-floating custom-label\">- المهارات الشخصية</label>\r\n                          <mat-form-field>\r\n                          <mat-select placeholder=\"\" formControlName=\"personal_Skills\" name=\"personal_Skills\"\r\n                          multiple>\r\n                          <mat-option *ngFor=\"let s of personal_SkillList\" [value]=\"s.value\">\r\n                              {{s.viewValue}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                        </div>\r\n\r\n\r\n\r\n                  <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- اللغات</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"languages\" name=\"languages\" multiple>\r\n                          <mat-option *ngFor=\"let language of languageList\" [value]=\"language\">{{language}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                 \r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الهوايات</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"hoppies\" name=\"hoppies\" multiple>\r\n                          <mat-option *ngFor=\"let hoppy of hoppyList\" [value]=\"hoppy\">{{hoppy}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n\r\n                  \r\n                  <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الجنس</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"gender\" name=\"gender\">\r\n                          <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                            {{gender.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- تاريخ الميلاد</label>\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"\" formControlName=\"birthDate\" name=\"birthDate\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n               \r\n              \r\n                  <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- رقم الجوال</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"tel\" formControlName=\"mobile\" name=\"mobile\">\r\n                      </mat-form-field>\r\n                    </div>\r\n            \r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الحالة الآجتماعية</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"social_Status\" name=\"social_Status\">\r\n                        <mat-option *ngFor=\"let social_Status of social_Statuss\" [value]=\"social_Status.value\">\r\n                          {{social_Status.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الموقع الشخصي</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"personal_web\" name=\"personal_web\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- facebook link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"facebook\" name=\"facebook\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- twitter link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"twitter\" name=\"twitter\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- instagram link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"instagram\" name=\"instagram\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- linkedin link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"linkedin\" name=\"linkedin\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الوصف الشخصي</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" maxlength=\"200\" formControlName=\"about\" name=\"about\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card-footer\">\r\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\">حفظ</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/add-user-info/add-user-info.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/add-user-info/add-user-info.component.ts ***!
  \**********************************************************/
/*! exports provided: AddUserInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserInfoComponent", function() { return AddUserInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/add-user-info/mime-type.validator.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_cv_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../my-cv/user.service */ "./src/app/my-cv/user.service.ts");
/* harmony import */ var _add_job_job_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../add-job/job.service */ "./src/app/add-job/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddUserInfoComponent = /** @class */ (function () {
    function AddUserInfoComponent(rest, route, router, fb, jobService) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.jobService = jobService;
        this.selectTheme = 'primary';
        this.countries = [];
        this.cities = [];
        this.majors = [];
        this.universties = [];
        this.spMajors = [];
        this.majorID = "";
        this.educationId = "";
        this.study_statuses = [];
        this.study_degrees = [
            { value: 'HS', viewValue: 'الثانوية العامية' },
            { value: 'BHO', viewValue: 'البكالريويس' },
            { value: 'MASTER', viewValue: 'المساتر' },
            { value: 'Undergraduate', viewValue: 'خريج' }
        ];
        this.certificate = [
            { value: 'HS', viewValue: 'الثانوية العامية' },
            { value: 'BHO', viewValue: 'البكالريويس' },
            { value: 'MASTER', viewValue: 'المساتر' }
        ];
        this.genders = [
            { value: 'ذكر', viewValue: 'ذكر' },
            { value: 'انثى', viewValue: 'انثى' },
        ];
        this.languages = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.languageList = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية', 'أوردو'];
        this.skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.skillList = [];
        this.personal_Skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.personal_SkillList = [];
        this.hoppies = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.hoppyList = ['القراءة', 'الكتابة'];
        this.social_Statuss = [
            { value: 'اعزب', viewValue: 'اعزب' },
            { value: 'متزوج', viewValue: 'متزوج' },
        ];
    }
    AddUserInfoComponent.prototype.postuserinfo = function () {
        if (this.userResumeForm.invalid) {
            return;
        }
        this.rest.addUserInfo(this.userResumeForm.value);
    };
    AddUserInfoComponent.prototype.getcountry = function () {
        var _this = this;
        this.countries = [];
        this.rest.getcountry().subscribe(function (data) {
            for (var key in data) {
                _this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
            }
        });
    };
    AddUserInfoComponent.prototype.getcity = function () {
        var _this = this;
        this.cities = [];
        this.rest.getcity().subscribe(function (data) {
            for (var key in data) {
                _this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
            }
        });
    };
    AddUserInfoComponent.prototype.getPersonalskills = function () {
        var _this = this;
        this.personal_SkillList = [];
        this.jobService.getPersonalSkills().subscribe(function (data) {
            for (var key in data) {
                _this.personal_SkillList.push({ value: data[key]._id, viewValue: data[key].skillName });
            }
        });
    };
    AddUserInfoComponent.prototype.getSkills = function () {
        var _this = this;
        this.skillList = [];
        this.jobService.getSkills().subscribe(function (data) {
            for (var key in data) {
                _this.skillList.push({ value: data[key]._id, viewValue: data[key].skillName });
            }
        });
    };
    AddUserInfoComponent.prototype.getmajors = function () {
        var _this = this;
        this.majors = [];
        this.rest.getmajors().subscribe(function (data) {
            for (var key in data) {
                _this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
            }
        });
    };
    AddUserInfoComponent.prototype.getuniversty = function () {
        var _this = this;
        this.universties = [];
        this.rest.getuniversty().subscribe(function (data) {
            for (var key in data) {
                _this.universties.push({ value: data[key]._id, viewValue: data[key].universtyName });
            }
        });
    };
    AddUserInfoComponent.prototype.getspMajors = function (id) {
        var _this = this;
        this.spMajors = [];
        this.rest.getspMajors(id).subscribe(function (data) {
            for (var key in data) {
                _this.spMajors.push({ value: data[key]._id, viewValue: data[key].majorName });
            }
        });
    };
    AddUserInfoComponent.prototype.ngOnInit = function () {
        this.getcity();
        this.getSkills();
        this.getPersonalskills();
        this.getcountry();
        this.getmajors();
        this.getuniversty();
        this.userResumeForm = this.fb.group({
            // cvImg: new FormControl(),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_1__["mimeType"]] }),
            study_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            education_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            universty: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            Education_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            public_Major: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            spMajor: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            personal_Skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            hoppies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            social_Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required] }),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            personal_web: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    AddUserInfoComponent.prototype.checkspMajor = function () {
        this.majorID = this.userResumeForm.value.public_Major;
        this.getspMajors(this.majorID);
    };
    AddUserInfoComponent.prototype.checkspEducation = function () {
        this.study_statuses = [];
        this.educationId = this.userResumeForm.value.education_degree;
        if (this.educationId == "HS") {
            this.study_statuses.push({ value: 'High-school-first-year', viewValue: 'اول ثانوي' }, { value: 'High-school-second-year', viewValue: 'ثاني ثانوي' }, { value: 'High-school-third-year', viewValue: 'ثالث ثانوي' });
        }
        else if (this.educationId == "BHO") {
            this.study_statuses.push({ value: 'University-first-year', viewValue: 'اول جامعة' }, { value: 'University-second-year', viewValue: 'ثاني جامعة' }, { value: 'University-third-year', viewValue: 'ثالث جامعة' }, { value: 'University-forth-year', viewValue: 'رابع جامعة' }, { value: 'University-fith-year', viewValue: 'خامس جامعة' });
        }
        else if (this.educationId == "MASTER") {
            this.study_statuses.push({ value: 'master-first-year', viewValue: 'اول ماستر' }, { value: 'master-second-year', viewValue: 'ثاني ماستر' }, { value: 'master-third-year', viewValue: 'ثالث ماستر' });
        }
    };
    AddUserInfoComponent.prototype.limitPS = function () {
        if (this.personal_Skills.value.length <= 4) {
            this.mySelections = this.personal_Skills.value;
        }
        else {
            this.personal_Skills.setValue(this.mySelections);
        }
    };
    AddUserInfoComponent.prototype.limitSkils = function () {
        if (this.skills.value.length <= 4) {
            this.mySelectionsFromSkils = this.skills.value;
        }
        else {
            this.skills.setValue(this.mySelectionsFromSkils);
        }
    };
    AddUserInfoComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.userResumeForm.patchValue({ image: file });
        this.userResumeForm.get('image').updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    AddUserInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-user-info',
            template: __webpack_require__(/*! ./add-user-info.component.html */ "./src/app/add-user-info/add-user-info.component.html"),
            styles: [__webpack_require__(/*! ./add-user-info.component.css */ "./src/app/add-user-info/add-user-info.component.css")]
        }),
        __metadata("design:paramtypes", [_my_cv_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _add_job_job_service__WEBPACK_IMPORTED_MODULE_5__["JobService"]])
    ], AddUserInfoComponent);
    return AddUserInfoComponent;
}());



/***/ }),

/***/ "./src/app/add-user-info/add-user-info.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/add-user-info/add-user-info.module.ts ***!
  \*******************************************************/
/*! exports provided: AddUserInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserInfoModule", function() { return AddUserInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_user_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-user-info.component */ "./src/app/add-user-info/add-user-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _add_user_info_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-user-info.routing */ "./src/app/add-user-info/add-user-info.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddUserInfoModule = /** @class */ (function () {
    function AddUserInfoModule() {
    }
    AddUserInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_user_info_component__WEBPACK_IMPORTED_MODULE_2__["AddUserInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_add_user_info_routing__WEBPACK_IMPORTED_MODULE_8__["AddUserInfoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], AddUserInfoModule);
    return AddUserInfoModule;
}());



/***/ }),

/***/ "./src/app/add-user-info/add-user-info.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/add-user-info/add-user-info.routing.ts ***!
  \********************************************************/
/*! exports provided: AddUserInfoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserInfoRoutes", function() { return AddUserInfoRoutes; });
/* harmony import */ var _add_user_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-user-info.component */ "./src/app/add-user-info/add-user-info.component.ts");

var AddUserInfoRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _add_user_info_component__WEBPACK_IMPORTED_MODULE_0__["AddUserInfoComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=add-user-info-add-user-info-module.js.map