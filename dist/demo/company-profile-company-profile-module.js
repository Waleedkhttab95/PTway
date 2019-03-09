(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-profile-company-profile-module"],{

/***/ "./src/app/company-profile/company-profile.component.css":
/*!***************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-card{\n    margin-left: auto;\n    margin-right: auto;\n  }"

/***/ }),

/***/ "./src/app/company-profile/company-profile.component.html":
/*!****************************************************************!*\
  !*** ./src/app/company-profile/company-profile.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-8 custom-card\">\n        <div class=\"card card-profile\">\n          <div class=\"card-avatar\">\n            <a href=\"#pablo\">\n              <img class=\"img\" src=\"./assets/img/faces/marc.jpg\" />\n            </a>\n          </div>\n          <div class=\"card-body\">\n            <h6 class=\"card-category text-gray\">CEO / Co-Founder</h6>\n            <h4 class=\"card-title\">Alec Thompson</h4>\n            <p class=\"card-description\">\n              Don't be scared of the truth because we need to restart the human foundation in truth And I love you like\n              Kanye loves Kanye I love Rick Owens’ bed design but the back is...\n            </p>\n            <a href=\"#pablo\" class=\"btn btn-primary btn-round\">تعديل</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function CompanyProfileComponent() {
    }
    CompanyProfileComponent.prototype.ngOnInit = function () {
    };
    CompanyProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-company-profile',
            template: __webpack_require__(/*! ./company-profile.component.html */ "./src/app/company-profile/company-profile.component.html"),
            styles: [__webpack_require__(/*! ./company-profile.component.css */ "./src/app/company-profile/company-profile.component.css")]
        }),
        __metadata("design:paramtypes", [])
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