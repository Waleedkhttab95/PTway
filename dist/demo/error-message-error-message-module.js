(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-message-error-message-module"],{

/***/ "./src/app/error-message/error-message.component.css":
/*!***********************************************************!*\
  !*** ./src/app/error-message/error-message.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\n    position: relative;\n    height: 100vh;\n  }\n  \n  #notfound .notfound {\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound {\n    max-width: 520px;\n    width: 100%;\n    line-height: 1.4;\n    text-align: center;\n  }\n  \n  .notfound .notfound-404 {\n    position: relative;\n    height: 200px;\n    margin: 0px auto 20px;\n    z-index: -1;\n  }\n  \n  .notfound .notfound-404 h1 {\n    font-family: 'Montserrat', sans-serif;\n    font-size: 236px;\n    font-weight: 200;\n    margin: 0px;\n    color: #211b19;\n    text-transform: uppercase;\n    position: absolute;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n  }\n  \n  .notfound .notfound-404 h2 {\n    font-family: 'Cairo';\n    font-size: 28px;\n    font-weight: 400;\n    text-transform: uppercase;\n    color: #211b19;\n    background: #fff;\n    padding: 10px 5px;\n    margin: auto;\n    display: inline-block;\n    position: absolute;\n    bottom: 0px;\n    left: 0;\n    right: 0;\n  }\n  \n  .notfound a {\n    font-family: 'Cairo';\n    display: inline-block;\n    font-weight: 700;\n    text-decoration: none;\n    color: #fff;\n    text-transform: uppercase;\n    padding: 13px 23px;\n\n    font-size: 18px;\n    transition: 0.2s all;\n  }\n  \n  .notfound a:hover {\n    \n  }\n  \n  @media only screen and (max-width: 767px) {\n    .notfound .notfound-404 h1 {\n      font-size: 148px;\n    }\n  }\n  \n  @media only screen and (max-width: 480px) {\n    .notfound .notfound-404 {\n      height: 148px;\n      margin: 0px auto 10px;\n    }\n    .notfound .notfound-404 h1 {\n      font-size: 86px;\n    }\n    .notfound .notfound-404 h2 {\n      font-size: 16px;\n    }\n    .notfound a {\n      padding: 7px 15px;\n      font-size: 14px;\n    }\n  }\n  "

/***/ }),

/***/ "./src/app/error-message/error-message.component.html":
/*!************************************************************!*\
  !*** ./src/app/error-message/error-message.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\n  <div class=\"notfound\">\n    <div class=\"notfound-404\">\n      <h2> لايمكنك اضافة عرض عمل قبل ان تقوم باضافة مشروع</h2>\n    </div>\n    <a [routerLink]=\"['/add-project']\" class=\"btn-primary\">اضافة مشروع</a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/error-message/error-message.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/error-message/error-message.component.ts ***!
  \**********************************************************/
/*! exports provided: ErrorMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageComponent", function() { return ErrorMessageComponent; });
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

var ErrorMessageComponent = /** @class */ (function () {
    function ErrorMessageComponent() {
    }
    ErrorMessageComponent.prototype.ngOnInit = function () {
    };
    ErrorMessageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-message',
            template: __webpack_require__(/*! ./error-message.component.html */ "./src/app/error-message/error-message.component.html"),
            styles: [__webpack_require__(/*! ./error-message.component.css */ "./src/app/error-message/error-message.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorMessageComponent);
    return ErrorMessageComponent;
}());



/***/ }),

/***/ "./src/app/error-message/error-message.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/error-message/error-message.module.ts ***!
  \*******************************************************/
/*! exports provided: ErrorMessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageModule", function() { return ErrorMessageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _error_message_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-message.component */ "./src/app/error-message/error-message.component.ts");
/* harmony import */ var _error_message_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-message.routing */ "./src/app/error-message/error-message.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ErrorMessageModule = /** @class */ (function () {
    function ErrorMessageModule() {
    }
    ErrorMessageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_error_message_component__WEBPACK_IMPORTED_MODULE_2__["ErrorMessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_error_message_routing__WEBPACK_IMPORTED_MODULE_3__["ErrorMessageRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], ErrorMessageModule);
    return ErrorMessageModule;
}());



/***/ }),

/***/ "./src/app/error-message/error-message.routing.ts":
/*!********************************************************!*\
  !*** ./src/app/error-message/error-message.routing.ts ***!
  \********************************************************/
/*! exports provided: ErrorMessageRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorMessageRoutes", function() { return ErrorMessageRoutes; });
/* harmony import */ var _error_message_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-message.component */ "./src/app/error-message/error-message.component.ts");

var ErrorMessageRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _error_message_component__WEBPACK_IMPORTED_MODULE_0__["ErrorMessageComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=error-message-error-message-module.js.map