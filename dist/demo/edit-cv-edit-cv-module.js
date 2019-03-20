(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-cv-edit-cv-module"],{

/***/ "./src/app/edit-cv/edit-cv.component.css":
/*!***********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.mat-option{\r\n    text-align: right;\r\n}\r\n.mat-option.mat-selected:hover{\r\n    background-color: #3f51b5 !important;\r\n}\r\n.mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n    background: #3f51b5!important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background-color: #3f51b5 !important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.custom-label{\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.html":
/*!************************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-8 custom-card\">\r\n          <div class=\"card\">\r\n            <div class=\"card-header card-header-primary card-header-icon\">\r\n              <div class=\"card-icon\">\r\n                <i class=\"material-icons\">portrait</i>\r\n              </div>\r\n              <h4 class=\"card-title custom-title\">تعديل السيرة الذاتية</h4>\r\n            </div>\r\n            <div class=\"col-md-8 custom-card\">\r\n              <div class=\"card-body\">\r\n                <form  [formGroup]=\"userResumeForm\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-8 col-sm-4\">\r\n                      <div class=\"fileinput fileinput-new text-center\" data-provides=\"fileinput\">\r\n                        <div class=\"fileinput-new thumbnail\">\r\n                          <img [src]=\"imagePreview\"  alt=\"...\">\r\n                        </div>\r\n                        <div class=\"fileinput-preview fileinput-exists thumbnail\"></div>\r\n                        <div>\r\n                          <span class=\"btn btn-primary btn-round btn-file\">\r\n                            <span class=\"fileinput-new\">قم بأختيار الصورة الشخصية</span>\r\n                            <span class=\"fileinput-exists\">استبدال </span>\r\n                            <input type=\"file\" #fileUpload (change)=\"onImagePicked($event)\" />\r\n                          </span>\r\n                          <a href=\"#pablo\" class=\"btn btn-danger btn-round fileinput-exists\" data-dismiss=\"fileinput\">\r\n                            <i class=\"fa fa-times\"></i> حذف\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الأسم الكامل</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"text\" formControlName=\"fullName\" name=\"fullName\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- مكان الأقامة</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"country\" name=\"country\">\r\n                          <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n                            {{country.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- المدينة</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"city\" name=\"city\">\r\n                          <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                            {{city.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الجامعة</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"universty\" name=\"universty\">\r\n                          <mat-option *ngFor=\"let universty of universties\" [value]=\"universty.value\">\r\n                            {{universty.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الشهادة التي تحملها</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"study_degree\" name=\"study_degree\">\r\n                          <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\r\n                            {{study_degree.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <label class=\"bmd-label-floating custom-label\">- المرحلة الدراسية</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"education_degree\" name=\"education_degree\">\r\n                          <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\r\n                            {{study_degree.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الجنس</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"gender\" name=\"gender\">\r\n                          <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                            {{gender.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- رقم الجوال</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"tel\" formControlName=\"mobile\" name=\"mobile\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- تاريخ الميلاد</label>\r\n                      <mat-form-field>\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"\" formControlName=\"birthDate\" name=\"birthDate\">\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- المستوى التعليمي</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"Education_level\" name=\"Education_level\">\r\n                          <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\r\n                            {{study_degree.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- التخصص العام</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"public_Major\" name=\"public_Major\">\r\n                          <mat-option *ngFor=\"let major of majors\" (click)=\"checkspMajor()\" [value]=\"major.value\">\r\n                            {{major.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- التخصص الدقيق</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"spMajor\" name=\"spMajor\">\r\n                          <mat-option *ngFor=\"let spMajor of spMajors\" [value]=\"spMajor.value\">\r\n                            {{spMajor.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- اللغات</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"languages\" name=\"languages\" multiple>\r\n                          <mat-option *ngFor=\"let language of languageList\" [value]=\"language\">{{language}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- مهارات العمل</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" (selectionChange)=\"limitSkils()\" formControlName=\"skills\" name=\"skills\" multiple>\r\n                          <mat-option *ngFor=\"let skill of skillList\" [value]=\"skill\">{{skill}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- المهارات الشخصية</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" (selectionChange)=\"limitPS()\" formControlName=\"personal_Skills\" name=\"personal_Skills\"\r\n                          multiple>\r\n                          <mat-option *ngFor=\"let personal_Skill of personal_SkillList\" [value]=\"personal_Skill\">{{personal_Skill}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الهوايات</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"hoppies\" name=\"hoppies\" multiple>\r\n                          <mat-option *ngFor=\"let hoppy of hoppyList\" [value]=\"hoppy\">{{hoppy}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الحالة الآجتماعية</label>\r\n                      <mat-form-field>\r\n                        <mat-select placeholder=\"\" formControlName=\"social_Status\" name=\"social_Status\">\r\n                          <mat-option *ngFor=\"let social_Status of social_Statuss\" [value]=\"social_Status.value\">\r\n                            {{social_Status.viewValue}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الموقع الشخصي</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"url\" formControlName=\"personal_web\" name=\"personal_web\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- facebook link</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"url\" formControlName=\"facebook\" name=\"facebook\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- twitter link</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"url\" formControlName=\"twitter\" name=\"twitter\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- instagram link</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"url\" formControlName=\"instagram\" name=\"instagram\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                      <label class=\"bmd-label-floating custom-label\">- linkedin link</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <input matInput placeholder=\"\" type=\"url\" formControlName=\"linkedin\" name=\"linkedin\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <label class=\"bmd-label-floating custom-label\">- الوصف الشخصي</label>\r\n                      <mat-form-field class=\"example-full-width\">\r\n                        <textarea matInput placeholder=\"\" maxlength=\"200\" formControlName=\"about\" name=\"about\"></textarea>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col-md-12\">\r\n                      <div class=\"card-footer\">\r\n                        <button mat-raised-button type=\"submit\" (click)='onSubmit()' class=\"btn btn-fill btn-primary\">حفظ</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.ts":
/*!**********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.ts ***!
  \**********************************************/
/*! exports provided: EditCvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCvComponent", function() { return EditCvComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _my_cv_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../my-cv/user.service */ "./src/app/my-cv/user.service.ts");
/* harmony import */ var _add_user_info_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-user-info/mime-type.validator */ "./src/app/add-user-info/mime-type.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditCvComponent = /** @class */ (function () {
    function EditCvComponent(rest, route, router, fb) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.personal_web = '';
        this.facebook = '';
        this.twitter = '';
        this.instagrm = '';
        this.linkedin = '';
        this.selectTheme = 'primary';
        this.countries = [];
        this.cities = [];
        this.majors = [];
        this.universties = [];
        this.spMajors = [];
        this.majorID = "";
        this.study_statuses = [
            { value: 'High-school-first-year', viewValue: 'اول ثانوي' },
            { value: 'High-school-second-year', viewValue: 'ثاني ثانوي' },
            { value: 'High-school-third-year', viewValue: 'ثالث ثانوي' },
            { value: 'University-first-year', viewValue: 'اول جامعة' },
            { value: 'University-second-year', viewValue: 'ثاني جامعة' },
            { value: 'University-third-year', viewValue: 'ثالث جامعة' },
            { value: 'University-forth-year', viewValue: 'رابع جامعة' },
            { value: 'University-fith-year', viewValue: 'خامس جامعة' },
            { value: 'Undergraduate', viewValue: 'خريج' },
        ];
        this.study_degrees = [
            { value: 'HS', viewValue: 'مستوى ثاني' },
            { value: 'BHO', viewValue: 'البكالريويس' },
            { value: 'MASTER', viewValue: 'المساتر' },
        ];
        this.genders = [
            { value: 'male', viewValue: 'ذكر' },
            { value: 'female', viewValue: 'انثى' },
        ];
        this.languages = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.languageList = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الكورية', 'أوردو'];
        this.skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.skillList = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم', 'التعبير', 'التصميم', 'الرسم', 'التصوير'];
        this.personal_Skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.personal_SkillList = ['الإلقاء', 'التعبير', 'التصميم', 'الرسم', 'التصوير'];
        this.hoppies = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.hoppyList = ['القراءة', 'الكتابة'];
        this.social_Statuss = [
            { value: 'اعزب', viewValue: 'اعزب' },
            { value: 'متزوج', viewValue: 'متزوج' },
        ];
    }
    EditCvComponent.prototype.getcountry = function () {
        var _this = this;
        this.countries = [];
        this.rest.getcountry().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
            }
            console.log(_this.countries);
        });
    };
    EditCvComponent.prototype.getcity = function () {
        var _this = this;
        this.cities = [];
        this.rest.getcity().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
            }
            console.log(_this.cities);
        });
    };
    EditCvComponent.prototype.getmajors = function () {
        var _this = this;
        this.majors = [];
        this.rest.getmajors().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.majors.push({ value: data[key]._id, viewValue: data[key].majorName });
                // console.log(this.majorID);
            }
            console.log(_this.majors);
        });
    };
    EditCvComponent.prototype.getuniversty = function () {
        var _this = this;
        this.universties = [];
        this.rest.getuniversty().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.universties.push({ value: data[key]._id, viewValue: data[key].universtyName });
            }
            console.log(_this.universties);
        });
    };
    EditCvComponent.prototype.getspMajors = function (id) {
        var _this = this;
        this.spMajors = [];
        this.rest.getspMajors(id).subscribe(function (data) {
            console.log(data.id);
            for (var key in data) {
                _this.spMajors.push({ value: data[key]._id, viewValue: data[key].majorName });
            }
            console.log(_this.spMajors);
        });
    };
    EditCvComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getcity();
        this.getcountry();
        this.getmajors();
        this.getuniversty();
        this.userResumeForm = this.fb.group({
            // cvImg: new FormControl(),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, { asyncValidators: [_add_user_info_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]] }),
            study_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            fullName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            education_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            universty: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            Education_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            public_Major: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            spMajor: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            personal_Skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            hoppies: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            social_Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            personal_web: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.rest.getUserInfo().subscribe(function (res) {
            _this.city = _this.cities.find(function (x) { return x.viewValue == res.city; }).value;
            _this.country = _this.countries.find(function (x) { return x.viewValue == res.country; }).value;
            _this.study_degree = _this.study_degrees.find(function (x) { return x.viewValue == res.study_degree; }).value;
            //this.gender = this.countries.find(x => x.genders == res.gender ).value
            _this.social = _this.social_Statuss.find(function (x) { return x.viewValue == res.social_Status; }).value;
            _this.universty = _this.universties.find(function (x) { return x.viewValue == res.universty; }).value;
            _this.pMajor = _this.majors.find(function (x) { return x.viewValue == res.public_Major; }).value;
            // this.sMajor = this.spMajors.find(x => x.viewValue == res.spicifc_Major ).value
            console.log(_this.city);
            // the same syntax res. 
            if (res.personal_web != 'null')
                _this.personal_web = res.personal_web;
            if (res.facebook != 'null')
                _this.facebook = res.facebook;
            if (res.twitter != 'null')
                _this.twitter = res.twitter;
            if (res.instagram != 'null')
                _this.instagrm = res.instagram;
            if (res.linkedin != 'null')
                _this.linkedin = res.linkedin;
            _this.userResumeForm.setValue({
                country: _this.country,
                study_degree: _this.study_degree,
                fullName: 'waleed',
                education_degree: [res.education_degree],
                gender: res.gender,
                mobile: res.mobile,
                birthDate: res.birthDate,
                city: _this.city,
                universty: _this.universty,
                Education_level: [res.Education_level],
                public_Major: _this.pMajor,
                spMajor: [res.sMajor],
                languages: [res.languages],
                skills: [res.skills],
                personal_Skills: [res.personal_Skills],
                hoppies: [res.hoppies],
                social_Status: _this.social,
                about: res.about,
                personal_web: res.personal_web,
                facebook: res.facebook,
                twitter: res.twitter,
                instagram: res.instagram,
                linkedin: res.linkedin,
                image: res.imagePath
            });
        });
    };
    EditCvComponent.prototype.onSubmit = function () {
        console.log(this.userResumeForm.value);
        this.rest.updateUserInfo(this.userResumeForm.value);
    };
    EditCvComponent.prototype.checkspMajor = function () {
        this.majorID = this.userResumeForm.value.public_Major;
        console.log(this.majorID);
        this.getspMajors(this.majorID);
    };
    EditCvComponent.prototype.limitPS = function () {
        console.log(this.personal_Skills.value.length);
        console.log(this.personal_Skills.value);
        if (this.personal_Skills.value.length <= 4) {
            this.mySelections = this.personal_Skills.value;
            console.log(this.mySelections);
        }
        else {
            this.personal_Skills.setValue(this.mySelections);
            console.log(this.personal_Skills.value);
        }
    };
    EditCvComponent.prototype.limitSkils = function () {
        console.log(this.skills.value.length);
        console.log(this.skills.value);
        if (this.skills.value.length <= 4) {
            this.mySelectionsFromSkils = this.skills.value;
            console.log(this.mySelectionsFromSkils);
        }
        else {
            this.skills.setValue(this.mySelectionsFromSkils);
            console.log(this.skills.value);
        }
    };
    EditCvComponent.prototype.onImagePicked = function (event) {
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
    EditCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-cv',
            template: __webpack_require__(/*! ./edit-cv.component.html */ "./src/app/edit-cv/edit-cv.component.html"),
            styles: [__webpack_require__(/*! ./edit-cv.component.css */ "./src/app/edit-cv/edit-cv.component.css")]
        }),
        __metadata("design:paramtypes", [_my_cv_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], EditCvComponent);
    return EditCvComponent;
}());



/***/ }),

/***/ "./src/app/edit-cv/edit-cv.module.ts":
/*!*******************************************!*\
  !*** ./src/app/edit-cv/edit-cv.module.ts ***!
  \*******************************************/
/*! exports provided: EditCvModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCvModule", function() { return EditCvModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_cv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-cv.component */ "./src/app/edit-cv/edit-cv.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _edit_cv_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-cv.routing */ "./src/app/edit-cv/edit-cv.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EditCvModule = /** @class */ (function () {
    function EditCvModule() {
    }
    EditCvModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edit_cv_component__WEBPACK_IMPORTED_MODULE_2__["EditCvComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_edit_cv_routing__WEBPACK_IMPORTED_MODULE_8__["EditCvRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], EditCvModule);
    return EditCvModule;
}());



/***/ }),

/***/ "./src/app/edit-cv/edit-cv.routing.ts":
/*!********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.routing.ts ***!
  \********************************************/
/*! exports provided: EditCvRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCvRoutes", function() { return EditCvRoutes; });
/* harmony import */ var _edit_cv_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-cv.component */ "./src/app/edit-cv/edit-cv.component.ts");

var EditCvRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _edit_cv_component__WEBPACK_IMPORTED_MODULE_0__["EditCvComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=edit-cv-edit-cv-module.js.map