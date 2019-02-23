(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-job-add-job-module"],{

/***/ "./src/app/add-job/add-job.component.css":
/*!***********************************************!*\
  !*** ./src/app/add-job/add-job.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-job/add-job.component.html":
/*!************************************************!*\
  !*** ./src/app/add-job/add-job.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  add-job works!\n</p>\n"

/***/ }),

/***/ "./src/app/add-job/add-job.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-job/add-job.component.ts ***!
  \**********************************************/
/*! exports provided: AddJobComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobComponent", function() { return AddJobComponent; });
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

var AddJobComponent = /** @class */ (function () {
    function AddJobComponent() {
    }
    AddJobComponent.prototype.ngOnInit = function () {
    };
    AddJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job',
            template: __webpack_require__(/*! ./add-job.component.html */ "./src/app/add-job/add-job.component.html"),
            styles: [__webpack_require__(/*! ./add-job.component.css */ "./src/app/add-job/add-job.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddJobComponent);
    return AddJobComponent;
}());



/***/ }),

/***/ "./src/app/add-job/add-job.module.ts":
/*!*******************************************!*\
  !*** ./src/app/add-job/add-job.module.ts ***!
  \*******************************************/
/*! exports provided: AddJobModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobModule", function() { return AddJobModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _add_job_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-job.component */ "./src/app/add-job/add-job.component.ts");
/* harmony import */ var _add_job_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-job.routing */ "./src/app/add-job/add-job.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AddJobModule = /** @class */ (function () {
    function AddJobModule() {
    }
    AddJobModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_add_job_component__WEBPACK_IMPORTED_MODULE_2__["AddJobComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_add_job_routing__WEBPACK_IMPORTED_MODULE_3__["AddJobRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], AddJobModule);
    return AddJobModule;
}());



/***/ }),

/***/ "./src/app/add-job/add-job.routing.ts":
/*!********************************************!*\
  !*** ./src/app/add-job/add-job.routing.ts ***!
  \********************************************/
/*! exports provided: AddJobRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddJobRoutes", function() { return AddJobRoutes; });
/* harmony import */ var _add_job_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-job.component */ "./src/app/add-job/add-job.component.ts");

var AddJobRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _add_job_component__WEBPACK_IMPORTED_MODULE_0__["AddJobComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=add-job-add-job-module.js.map