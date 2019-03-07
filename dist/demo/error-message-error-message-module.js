(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["error-message-error-message-module"],{

/***/ "./src/app/error-message/error-message.component.css":
/*!***********************************************************!*\
  !*** ./src/app/error-message/error-message.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#notfound {\r\n    position: relative;\r\n    height: 100vh;\r\n  }\r\n  \r\n  #notfound .notfound {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound {\r\n    max-width: 520px;\r\n    width: 100%;\r\n    line-height: 1.4;\r\n    text-align: center;\r\n  }\r\n  \r\n  .notfound .notfound-404 {\r\n    position: relative;\r\n    height: 200px;\r\n    margin: 0px auto 20px;\r\n    z-index: -1;\r\n  }\r\n  \r\n  .notfound .notfound-404 h1 {\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-size: 236px;\r\n    font-weight: 200;\r\n    margin: 0px;\r\n    color: #211b19;\r\n    text-transform: uppercase;\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  \r\n  .notfound .notfound-404 h2 {\r\n    font-family: 'Cairo';\r\n    font-size: 28px;\r\n    font-weight: 400;\r\n    text-transform: uppercase;\r\n    color: #211b19;\r\n    background: #fff;\r\n    padding: 10px 5px;\r\n    margin: auto;\r\n    display: inline-block;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .notfound a {\r\n    font-family: 'Cairo';\r\n    display: inline-block;\r\n    font-weight: 700;\r\n    text-decoration: none;\r\n    color: #fff;\r\n    text-transform: uppercase;\r\n    padding: 13px 23px;\r\n\r\n    font-size: 18px;\r\n    transition: 0.2s all;\r\n  }\r\n  \r\n  .notfound a:hover {\r\n    \r\n  }\r\n  \r\n  @media only screen and (max-width: 767px) {\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 148px;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 480px) {\r\n    .notfound .notfound-404 {\r\n      height: 148px;\r\n      margin: 0px auto 10px;\r\n    }\r\n    .notfound .notfound-404 h1 {\r\n      font-size: 86px;\r\n    }\r\n    .notfound .notfound-404 h2 {\r\n      font-size: 16px;\r\n    }\r\n    .notfound a {\r\n      padding: 7px 15px;\r\n      font-size: 14px;\r\n    }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/error-message/error-message.component.html":
/*!************************************************************!*\
  !*** ./src/app/error-message/error-message.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"notfound\">\r\n  <div class=\"notfound\">\r\n    <div class=\"notfound-404\">\r\n      <h1>Oops!</h1>\r\n      <h2> لايمكنك اضافة عرض عمل قبل ان تقوم بأضافة مشروع</h2>\r\n    </div>\r\n    <a href=\"#\" class=\"btn-primary\">اضافة مشروع</a>\r\n  </div>\r\n</div>"

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