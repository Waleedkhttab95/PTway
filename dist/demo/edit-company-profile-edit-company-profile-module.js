(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-company-profile-edit-company-profile-module"],{

/***/ "./src/app/edit-company-profile/edit-company-profile.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/edit-company-profile/edit-company-profile.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.mat-option{\r\n    text-align: right;\r\n}\r\n.mat-option.mat-selected:hover{\r\n    background-color: #3f51b5 !important;\r\n}\r\n.mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n    background: #3f51b5!important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background-color: #3f51b5 !important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.custom-label{\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/edit-company-profile/edit-company-profile.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/edit-company-profile/edit-company-profile.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">supervised_user_circle</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">تعديل السيرة الذاتية للشركات</h4>\r\n          </div>\r\n          <div class=\"col-md-8 custom-card\">\r\n            <div class=\"card-body\">\r\n              <form (ngSubmit)=\"postcompanyinfo()\" [formGroup]=\"comapnyResumeForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الدولة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"country\" name=\"country\">\r\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n                          {{country.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"city\" name=\"city\">\r\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                          {{city.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- العنوان</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"address\" name=\"address\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- معلومات عامة</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"info\" name=\"info\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الرؤيا</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"vision\" name=\"vision\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الرسالة</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"message\" name=\"message\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الموقع الشخصي</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"personal_web\" name=\"personal_web\" type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- facebook link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"facebook\" name=\"facebook\" type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- twitter link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"twitter\" name=\"twitter\" type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- instagram link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"instagram\" name=\"instagram\" type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- linkedin link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"linkedin\" name=\"linkedin\" type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card-footer\">\r\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\">حفظ</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/edit-company-profile/edit-company-profile.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/edit-company-profile/edit-company-profile.component.ts ***!
  \************************************************************************/
/*! exports provided: EditCompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyProfileComponent", function() { return EditCompanyProfileComponent; });
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




var EditCompanyProfileComponent = /** @class */ (function () {
    function EditCompanyProfileComponent(rest, route, router, fb) {
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
        this.cities = [
            { value: 'الرياض', viewValue: 'الرياض' },
            { value: 'الدمام', viewValue: 'الدمام' },
            { value: 'جدة', viewValue: 'جدة' },
            { value: 'القصيم', viewValue: 'القصيم' },
            { value: 'مكة المكرمة', viewValue: 'مكة المكرمة' },
            { value: 'المدينة المنورة', viewValue: 'المدينة المنورة' },
        ];
    }
    EditCompanyProfileComponent.prototype.postcompanyinfo = function () {
        var _this = this;
        console.log(this.comapnyResumeForm.value);
        this.rest.postcompanyinfo(this.comapnyResumeForm.value).subscribe(function (result) {
            _this.router.navigate(['/dashboard/']);
        }, function (err) {
            console.log(err);
        });
    };
    EditCompanyProfileComponent.prototype.ngOnInit = function () {
        this.comapnyResumeForm = this.fb.group({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            info: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            vision: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            personal_web: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]()
        });
    };
    EditCompanyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-company-profile',
            template: __webpack_require__(/*! ./edit-company-profile.component.html */ "./src/app/edit-company-profile/edit-company-profile.component.html"),
            styles: [__webpack_require__(/*! ./edit-company-profile.component.css */ "./src/app/edit-company-profile/edit-company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_rest_service__WEBPACK_IMPORTED_MODULE_1__["RestService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EditCompanyProfileComponent);
    return EditCompanyProfileComponent;
}());



/***/ }),

/***/ "./src/app/edit-company-profile/edit-company-profile.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/edit-company-profile/edit-company-profile.module.ts ***!
  \*********************************************************************/
/*! exports provided: EditCompanyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyProfileModule", function() { return EditCompanyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _edit_company_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-company-profile.component */ "./src/app/edit-company-profile/edit-company-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _edit_company_profile_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-company-profile.routing */ "./src/app/edit-company-profile/edit-company-profile.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var EditCompanyProfileModule = /** @class */ (function () {
    function EditCompanyProfileModule() {
    }
    EditCompanyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_edit_company_profile_component__WEBPACK_IMPORTED_MODULE_2__["EditCompanyProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_edit_company_profile_routing__WEBPACK_IMPORTED_MODULE_8__["EditCompanyProfileRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], EditCompanyProfileModule);
    return EditCompanyProfileModule;
}());



/***/ }),

/***/ "./src/app/edit-company-profile/edit-company-profile.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/edit-company-profile/edit-company-profile.routing.ts ***!
  \**********************************************************************/
/*! exports provided: EditCompanyProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCompanyProfileRoutes", function() { return EditCompanyProfileRoutes; });
/* harmony import */ var _edit_company_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-company-profile.component */ "./src/app/edit-company-profile/edit-company-profile.component.ts");

var EditCompanyProfileRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _edit_company_profile_component__WEBPACK_IMPORTED_MODULE_0__["EditCompanyProfileComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=edit-company-profile-edit-company-profile-module.js.map