(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-cv-edit-cv-module"],{

/***/ "./src/app/edit-cv/edit-cv.component.css":
/*!***********************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\n    margin-left: 15px;\n    float: right;\n}\n.custom-title{\n    text-align: right;\n}\n.mat-form-field{\n    text-align: right;\n}\n.mat-option{\n    text-align: right;\n}\n.mat-option.mat-selected:hover{\n    background-color: #3f51b5 !important;\n}\n.mat-option:hover {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n    background: #3f51b5!important;\n    color: #fff !important;\n}\n.mat-option.mat-selected:not(.mat-option-multiple) {\n    background-color: #3f51b5 !important;\n    color: #fff !important;\n}\n.mat-option.mat-selected:not(.mat-option-multiple) {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n}\n.custom-card{\n    margin-left: auto;\n    margin-right: auto;\n}\n.custom-label{\n    float: right;\n}"

/***/ }),

/***/ "./src/app/edit-cv/edit-cv.component.html":
/*!************************************************!*\
  !*** ./src/app/edit-cv/edit-cv.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8 custom-card\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">portrait</i>\n            </div>\n            <h4 class=\"card-title custom-title\">تعديل السيرة الذاتية</h4>\n          </div>\n          <div class=\"col-md-8 custom-card\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"postuserinfo()\" [formGroup]=\"userResumeForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- مكان الأقامة</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"country\" name=\"country\">\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n                          {{country.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"city\" name=\"city\">\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                          {{city.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label class=\"bmd-label-floating custom-label\">- الحالة الدراسية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"study_status\" name=\"study_status\">\n                        <mat-option *ngFor=\"let study_status of study_statuses\" [value]=\"study_status.value\">\n                          {{study_status.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label class=\"bmd-label-floating custom-label\">- الشهادة التي تحملها</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"study_degree\" name=\"study_degree\">\n                        <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\n                          {{study_degree.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <label class=\"bmd-label-floating custom-label\">- المرحلة الدراسية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"education_degree\" name=\"education_degree\">\n                        <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\n                          {{study_degree.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الجنس</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"gender\" name=\"gender\">\n                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n                          {{gender.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- رقم الجوال</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"tel\" formControlName=\"mobile\" name=\"mobile\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- تاريخ الميلاد</label>\n                    <mat-form-field>\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"\" formControlName=\"birthDate\"\n                        name=\"birthDate\">\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\n                      <mat-datepicker #picker></mat-datepicker>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المستوى التعليمي</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"Education_level\" name=\"Education_level\">\n                        <mat-option *ngFor=\"let study_degree of study_degrees\" [value]=\"study_degree.value\">\n                          {{study_degree.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- التخصص العام</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"text\" formControlName=\"public_Major\"\n                        name=\"public_Major\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- التخصص الدقيق</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"text\" formControlName=\"spicifc_Major\"\n                        name=\"spicifc_Major\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- اللغات</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" [formControl]=\"languages\" name=\"languages\" multiple>\n                        <mat-option *ngFor=\"let language of languageList\" [value]=\"language\">{{language}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- مهارات العمل</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" [formControl]=\"skills\" multiple>\n                        <mat-option *ngFor=\"let skill of skillList\" [value]=\"skill\">{{skill}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المهارات الشخصية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" [formControl]=\"personal_Skills\" name=\"personal_Skills\"\n                        multiple>\n                        <mat-option *ngFor=\"let personal_Skill of personal_SkillList\" [value]=\"personal_Skill\">{{personal_Skill}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الهوايات</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" [formControl]=\"hoppies\" name=\"hoppies\" multiple>\n                        <mat-option *ngFor=\"let hoppy of hoppyList\" [value]=\"hoppy\">{{hoppy}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الحالة الآجتماعية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"\" formControlName=\"social_Status\" name=\"social_Status\">\n                        <mat-option *ngFor=\"let social_Status of social_Statuss\" [value]=\"social_Status.value\">\n                          {{social_Status.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الموقع الشخصي</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"personal_web\"\n                        name=\"personal_web\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- facebook link</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"facebook\"\n                        name=\"facebook\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- twitter link</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"twitter\"\n                        name=\"twitter\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- instagram link</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"instagram\"\n                        name=\"instagram\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- linkedin link</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"\" type=\"url\" formControlName=\"linkedin\"\n                        name=\"linkedin\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <label class=\"bmd-label-floating custom-label\">- الوصف الشخصي</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <textarea matInput placeholder=\"\" formControlName=\"about\" name=\"about\"></textarea>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"card-footer\">\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\">حفظ</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest.service */ "./src/app/rest.service.ts");
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




var EditCvComponent = /** @class */ (function () {
    function EditCvComponent(rest, route, router, fb) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.selectTheme = 'primary';
        this.countries = [
            { value: 'SA', viewValue: 'المملكة العربية السعودية' },
            { value: 'UAE', viewValue: 'الامارات العربية المتحدة' },
            { value: 'OMAN', viewValue: 'عمان' },
            { value: 'KWUIT', viewValue: 'الكويت' },
            { value: 'SYRIA', viewValue: 'سوريا' },
            { value: 'JORDAN', viewValue: 'الآردن' },
        ];
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
            { value: 'HS', viewValue: 'الثانوية العامية' },
            { value: 'BHO', viewValue: 'البكالريويس' },
            { value: 'MASTER', viewValue: 'المساتر' },
        ];
        this.genders = [
            { value: 'male', viewValue: 'ذكر' },
            { value: 'female', viewValue: 'انثى' },
        ];
        this.cities = [
            { value: 'الرياض', viewValue: 'الرياض' },
            { value: 'الدمام', viewValue: 'الدمام' },
            { value: 'جدة', viewValue: 'جدة' },
            { value: 'القصيم', viewValue: 'القصيم' },
            { value: 'مكة المكرمة', viewValue: 'مكة المكرمة' },
            { value: 'المدينة المنورة', viewValue: 'المدينة المنورة' },
        ];
        this.languages = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.languageList = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الايطالية'];
        this.skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.skillList = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم'];
        this.personal_Skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.personal_SkillList = ['الإلقاء', 'التعبير'];
        this.hoppies = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.hoppyList = ['القراءة', 'الكتابة'];
        this.social_Statuss = [
            { value: 'اعزب', viewValue: 'اعزب' },
            { value: 'متزوج', viewValue: 'متزوج' },
        ];
    }
    EditCvComponent.prototype.postuserinfo = function () {
        var _this = this;
        console.log(this.userResumeForm.value);
        this.rest.postuserinfo(this.userResumeForm.value).subscribe(function (result) {
            _this.router.navigate(['/dashboard/']);
        }, function (err) {
            console.log(err);
        });
    };
    EditCvComponent.prototype.ngOnInit = function () {
        this.userResumeForm = this.fb.group({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            study_status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            study_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            education_degree: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            birthDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            Education_level: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            public_Major: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            spicifc_Major: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            languages: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            personal_Skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            hoppies: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            social_Status: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            about: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            personal_web: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    EditCvComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-cv',
            template: __webpack_require__(/*! ./edit-cv.component.html */ "./src/app/edit-cv/edit-cv.component.html"),
            styles: [__webpack_require__(/*! ./edit-cv.component.css */ "./src/app/edit-cv/edit-cv.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
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