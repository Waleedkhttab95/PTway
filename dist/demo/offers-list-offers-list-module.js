(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-list-offers-list-module"],{

/***/ "./src/app/offers-list/offers-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/offers-list/offers-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/offers-list/offers-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/offers-list/offers-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-full-page\">\r\n<mat-spinner style=\"position:fixed;top:50%;left:50%;margin:0 auto;\" mode=\"indeterminate\" *ngIf=\"isLoading\"></mat-spinner>\r\n<div class=\"main-content\" *ngIf=\"!isLoading\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8 custom-card\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">rate_review</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">قائمة العروض </h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"toolbar\">\r\n              <!--        Here you can write extra buttons/actions for the toolbar              -->\r\n            </div>\r\n            <div class=\"material-datatables\">\r\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th>{{ dataTable.headerRow[2] }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                    <td>{{row[0]}}</td>\r\n                    <td><a [routerLink]=\"['/job-offer']\" (click)='onSelect(row[2])'>{{row[1]}}</a></td>\r\n                    <td>\r\n                        <a class=\"btn btn-link btn-success btn-just-icon edit\" (click)=\"onAccepted(row[2])\"><i class=\"material-icons\">done</i></a>\r\n                    </td>\r\n                   \r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end content-->\r\n        </div>\r\n        <!--  end card  -->\r\n      </div>\r\n      <!-- end col-md-12 -->\r\n    </div>\r\n    <!-- end row -->\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/offers-list/offers-list.component.ts":
/*!******************************************************!*\
  !*** ./src/app/offers-list/offers-list.component.ts ***!
  \******************************************************/
/*! exports provided: OffersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersListComponent", function() { return OffersListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _my_cv_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../my-cv/user.service */ "./src/app/my-cv/user.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _add_job_job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-job/job.service */ "./src/app/add-job/job.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OffersListComponent = /** @class */ (function () {
    function OffersListComponent(userService, dataService, jobService) {
        this.userService = userService;
        this.dataService = dataService;
        this.jobService = jobService;
        this.isLoading = false;
        this.dataRows = [];
        this.idRows = [];
        this.count = 0;
    }
    OffersListComponent.prototype.ngAfterViewInit = function () {
        $('#datatables').DataTable({
            "pagingType": "full_numbers",
            "lengthMenu": [
                [10, 25, 50, -1],
                [10, 25, 50, "All"]
            ],
            responsive: true,
            language: {
                search: "_INPUT_",
                searchPlaceholder: "Search records",
            }
        });
        var table = $('#datatables').DataTable();
        $('.card .material-datatables label').addClass('form-group');
    };
    OffersListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.userService.getAllNotification().subscribe(function (response) {
            _this.count += 1;
            for (var i = 0; i < response.result.length; i++) {
                for (var j = 0; j < response.result.length; j++) {
                    _this.dataRows.push(response.result[i][j].job_Name);
                    _this.idRows.push(response.result[i][j]._id);
                }
                _this.dataTable.dataRows.push([
                    _this.count,
                    _this.dataRows[i],
                    _this.idRows[i]
                ]);
            }
        });
        this.dataTable = {
            headerRow: ['#', 'العرض', 'الاجراءات'],
            dataRows: []
        };
        this.isLoading = false;
    };
    OffersListComponent.prototype.onAccepted = function (id) {
        this.jobService.applyJob(id);
    };
    OffersListComponent.prototype.onSelect = function (id) {
        this.dataService.storeDataoffer(id);
    };
    OffersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers-list',
            template: __webpack_require__(/*! ./offers-list.component.html */ "./src/app/offers-list/offers-list.component.html"),
            styles: [__webpack_require__(/*! ./offers-list.component.css */ "./src/app/offers-list/offers-list.component.css")]
        }),
        __metadata("design:paramtypes", [_my_cv_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _add_job_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"]])
    ], OffersListComponent);
    return OffersListComponent;
}());



/***/ }),

/***/ "./src/app/offers-list/offers-list.module.ts":
/*!***************************************************!*\
  !*** ./src/app/offers-list/offers-list.module.ts ***!
  \***************************************************/
/*! exports provided: OffersListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersListModule", function() { return OffersListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _offers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./offers-list.component */ "./src/app/offers-list/offers-list.component.ts");
/* harmony import */ var _offers_list_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers-list.routing */ "./src/app/offers-list/offers-list.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var OffersListModule = /** @class */ (function () {
    function OffersListModule() {
    }
    OffersListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_offers_list_component__WEBPACK_IMPORTED_MODULE_2__["OffersListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_offers_list_routing__WEBPACK_IMPORTED_MODULE_3__["OffersListRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], OffersListModule);
    return OffersListModule;
}());



/***/ }),

/***/ "./src/app/offers-list/offers-list.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/offers-list/offers-list.routing.ts ***!
  \****************************************************/
/*! exports provided: OffersListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersListRoutes", function() { return OffersListRoutes; });
/* harmony import */ var _offers_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers-list.component */ "./src/app/offers-list/offers-list.component.ts");

var OffersListRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _offers_list_component__WEBPACK_IMPORTED_MODULE_0__["OffersListComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=offers-list-offers-list-module.js.map