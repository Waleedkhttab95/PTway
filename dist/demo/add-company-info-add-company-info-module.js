(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-company-info-add-company-info-module"],{

/***/ "./src/app/add-company-info/add-company-info.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.mat-option{\r\n    text-align: right;\r\n}\r\n.mat-option.mat-selected:hover{\r\n    background-color: #3f51b5 !important;\r\n}\r\n.mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n    background: #3f51b5!important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background-color: #3f51b5 !important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.custom-label{\r\n    float: right;\r\n}"

/***/ }),

/***/ "./src/app/add-company-info/add-company-info.component.html":
/*!******************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 custom-card\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">supervised_user_circle</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">السيرة الذاتية للشركات / المنظمات</h4>\r\n          </div>\r\n          <div class=\"col-md-8 custom-card\">\r\n            <div class=\"card-body\">\r\n              <form (ngSubmit)=\"postcompanyinfo()\" [formGroup]=\"comapnyResumeForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الدولة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"country\" name=\"country\">\r\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n                          {{country.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"\" formControlName=\"city\" name=\"city\">\r\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\r\n                          {{city.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- العنوان</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"address\" name=\"address\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- معلومات عامة</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"info\" name=\"info\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الرؤيا</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"vision\" name=\"vision\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الرسالة</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <textarea matInput placeholder=\"\" formControlName=\"message\" name=\"message\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الموقع الشخصي</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"personal_web\" name=\"personal_web\"\r\n                        type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- facebook link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"facebook\" name=\"facebook\"\r\n                        type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- twitter link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"twitter\" name=\"twitter\"\r\n                        type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- instagram link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"instagram\" name=\"instagram\"\r\n                        type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- linkedin link</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"\" formControlName=\"linkedin\" name=\"linkedin\"\r\n                        type=\"url\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card-footer\">\r\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\">حفظ</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/add-company-info/add-company-info.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.component.ts ***!
  \****************************************************************/
/*! exports provided: AddCompanyInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyInfoComponent", function() { return AddCompanyInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _add_company_info_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-company-info.service */ "./src/app/add-company-info/add-company-info.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddCompanyInfoComponent = /** @class */ (function () {
    function AddCompanyInfoComponent(rest, route, router, fb) {
        this.rest = rest;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.selectTheme = 'primary';
        this.countries = [];
        this.cities = [];
    }
    AddCompanyInfoComponent.prototype.postcompanyinfo = function () {
        var _this = this;
        console.log(this.comapnyResumeForm.value);
        this.rest.postcompanyinfo(this.comapnyResumeForm.value).subscribe(function (result) {
            _this.router.navigate(['/dashboard/']);
        }, function (err) {
            console.log(err);
        });
    };
    AddCompanyInfoComponent.prototype.getcountry = function () {
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
    AddCompanyInfoComponent.prototype.getcity = function () {
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
    AddCompanyInfoComponent.prototype.ngOnInit = function () {
        this.getcity();
        this.getcountry();
        this.comapnyResumeForm = this.fb.group({
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            info: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            vision: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            personal_web: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            facebook: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            twitter: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            instagram: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            linkedin: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    };
    AddCompanyInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-company-info',
            template: __webpack_require__(/*! ./add-company-info.component.html */ "./src/app/add-company-info/add-company-info.component.html"),
            styles: [__webpack_require__(/*! ./add-company-info.component.css */ "./src/app/add-company-info/add-company-info.component.css")]
        }),
        __metadata("design:paramtypes", [_add_company_info_service__WEBPACK_IMPORTED_MODULE_3__["AddCompanyInfoService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], AddCompanyInfoComponent);
    return AddCompanyInfoComponent;
}());



/***/ }),

/***/ "./src/app/add-company-info/add-company-info.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.module.ts ***!
  \*************************************************************/
/*! exports provided: AddCompanyInfoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyInfoModule", function() { return AddCompanyInfoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_company_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-company-info.component */ "./src/app/add-company-info/add-company-info.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _add_company_info_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-company-info.routing */ "./src/app/add-company-info/add-company-info.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AddCompanyInfoModule = /** @class */ (function () {
    function AddCompanyInfoModule() {
    }
    AddCompanyInfoModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_company_info_component__WEBPACK_IMPORTED_MODULE_2__["AddCompanyInfoComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_add_company_info_routing__WEBPACK_IMPORTED_MODULE_8__["AddCompanyInfoRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_6__["TagInputModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"]
            ]
        })
    ], AddCompanyInfoModule);
    return AddCompanyInfoModule;
}());



/***/ }),

/***/ "./src/app/add-company-info/add-company-info.routing.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.routing.ts ***!
  \**************************************************************/
/*! exports provided: AddCompanyInfoRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyInfoRoutes", function() { return AddCompanyInfoRoutes; });
/* harmony import */ var _add_company_info_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-company-info.component */ "./src/app/add-company-info/add-company-info.component.ts");

var AddCompanyInfoRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _add_company_info_component__WEBPACK_IMPORTED_MODULE_0__["AddCompanyInfoComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/add-company-info/add-company-info.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/add-company-info/add-company-info.service.ts ***!
  \**************************************************************/
/*! exports provided: AddCompanyInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCompanyInfoService", function() { return AddCompanyInfoService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var AddCompanyInfoService = /** @class */ (function () {
    function AddCompanyInfoService(http, router) {
        this.http = http;
        this.router = router;
    }
    AddCompanyInfoService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    AddCompanyInfoService.prototype.getcountry = function () {
        return this.http.get(BackUrl + '/getcountry').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    AddCompanyInfoService.prototype.getcity = function () {
        return this.http.get(BackUrl + '/getcity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    AddCompanyInfoService.prototype.postcompanyinfo = function (data) {
        console.log(data);
        return this.http.post(BackUrl + 'postcompanyinfo', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (data) { return console.log("company succes complete data w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError('postcompanyinfo')));
    };
    AddCompanyInfoService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    AddCompanyInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AddCompanyInfoService);
    return AddCompanyInfoService;
}());



/***/ })

}]);
//# sourceMappingURL=add-company-info-add-company-info-module.js.map