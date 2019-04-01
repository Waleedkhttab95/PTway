(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-profile-company-profile-module"],{

/***/ "./src/app/company-profile/company-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n  }\r\n  .custom-h6{\r\n    text-align: right;\r\n  }\r\n  .custom-p{\r\n    text-align: right;\r\n  }"

/***/ }),

/***/ "./src/app/company-profile/company-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 custom-card\">\r\n        <div class=\"card card-profile\">\r\n          <div class=\"card-avatar\">\r\n            <a href=\"#pablo\">\r\n              <img class=\"img\" [src]=\"imagePath\" />\r\n            </a>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <h6 class=\"card-category text-gray\">{{companyName}}</h6>\r\n            <p class=\"category\">&nbsp;</p>\r\n            <button  mat-raised-button class=\"btn btn-just-icon btn-round btn-twitter\">\r\n              <i class=\"fa fa-twitter\"></i>\r\n            </button>\r\n            <button mat-raised-button class=\"btn btn-just-icon btn-round btn-facebook\">\r\n              <i class=\"fa fa-facebook\"> </i>\r\n            </button>\r\n            <button mat-raised-button class=\"btn btn-just-icon btn-round btn-linkedin\">\r\n              <i class=\"fa fa-linkedin\"></i>\r\n            </button>\r\n            <button mat-raised-button class=\"btn btn-just-icon btn-round btn-linkedin\">\r\n              <i class=\"fa fa-instagram\"></i>\r\n            </button>\r\n            <button mat-raised-button class=\"btn btn-just-icon btn-round btn-linkedin\">\r\n              <i class=\"fa fa-globe\"></i>\r\n            </button>\r\n            <h6 class=\"card-category text-bold custom-h6\">- معلومات عامة:</h6>\r\n            <p class=\"card-description custom-p\">\r\n            {{info}}\r\n            </p>\r\n            <h6 class=\"card-category uk-text-bold custom-h6\">- الرؤيا:</h6>\r\n            <p class=\"card-description custom-p\">\r\n            {{vision}}\r\n            </p>\r\n            <h6 class=\"card-category text-bold custom-h6\">- الرسالة:</h6>\r\n            <p class=\"card-description custom-p\">\r\n             {{message}}\r\n            </p>\r\n            <h6 class=\"card-category text-bold custom-h6\">- العنوان:</h6>\r\n            <p class=\"card-description custom-p\">\r\n             {{address}}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/company-profile/company-profile.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.ts ***!
  \**************************************************************/
/*! exports provided: CompanyProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileComponent", function() { return CompanyProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _company_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.service */ "./src/app/company-profile/company.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompanyProfileComponent = /** @class */ (function () {
    function CompanyProfileComponent(companyService, authService) {
        this.companyService = companyService;
        this.authService = authService;
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.companyService.getCompanyInfo().subscribe(function (res) {
            _this.authService.autoAuthUser();
            _this.companyName = _this.authService.getCompanyName();
            _this.country = res.country;
            _this.city = res.city;
            _this.address = res.address;
            _this.info = res.info;
            _this.vision = res.vision;
            _this.message = res.message;
            if (res.personal_web != "null")
                _this.personal_web = res.personal_web;
            if (res.facebook != "null")
                _this.facebook = res.facebook;
            if (res.twitter != "null")
                _this.twitter = res.twitter;
            if (res.instagram != "null")
                _this.instagram = res.instagram;
            if (res.linkedin != "null")
                _this.linkedin = res.linkedin;
            if (res.imagePath != "null")
                _this.imagePath = res.imagePath;
        });
    };
    CompanyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__(/*! ./company-profile.component.html */ "./src/app/company-profile/company-profile.component.html"),
            styles: [__webpack_require__(/*! ./company-profile.component.css */ "./src/app/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_company_service__WEBPACK_IMPORTED_MODULE_1__["CompanyService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CompanyProfileComponent);
    return CompanyProfileComponent;
}());



/***/ }),

/***/ "./src/app/company-profile/company-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/company-profile/company-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: CompanyProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileModule", function() { return CompanyProfileModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _company_profile_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-profile.component */ "./src/app/company-profile/company-profile.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _company_profile_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./company-profile.routing */ "./src/app/company-profile/company-profile.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CompanyProfileModule = /** @class */ (function () {
    function CompanyProfileModule() {
    }
    CompanyProfileModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_company_profile_component__WEBPACK_IMPORTED_MODULE_2__["CompanyProfileComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_company_profile_routing__WEBPACK_IMPORTED_MODULE_5__["CompanyProfileRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], CompanyProfileModule);
    return CompanyProfileModule;
}());



/***/ }),

/***/ "./src/app/company-profile/company-profile.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/company-profile/company-profile.routing.ts ***!
  \************************************************************/
/*! exports provided: CompanyProfileRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyProfileRoutes", function() { return CompanyProfileRoutes; });
/* harmony import */ var _company_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company-profile.component */ "./src/app/company-profile/company-profile.component.ts");

var CompanyProfileRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _company_profile_component__WEBPACK_IMPORTED_MODULE_0__["CompanyProfileComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=company-profile-company-profile-module.js.map