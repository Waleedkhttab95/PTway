(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["offers-list-offers-list-module"],{

/***/ "./src/app/offers-list/offers-list.component.css":
/*!*******************************************************!*\
  !*** ./src/app/offers-list/offers-list.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\n    margin-left: 15px;\n    float: right;\n}\n.custom-title{\n    text-align: right;\n}\n.mat-form-field{\n    text-align: right;\n}\n.custom-card{\n    margin-left: auto;\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/offers-list/offers-list.component.html":
/*!********************************************************!*\
  !*** ./src/app/offers-list/offers-list.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n    <div class=\"container-fluid\">\n      <div class=\"row\">\n        <div class=\"col-md-8 custom-card\">\n          <div class=\"card\">\n            <div class=\"card-header card-header-primary card-header-icon\">\n              <div class=\"card-icon\">\n                <i class=\"material-icons\">rate_review</i>\n              </div>\n              <h4 class=\"card-title custom-title\">قائمة العروض </h4>\n            </div>\n            <div class=\"card-body\">\n              <div class=\"toolbar\">\n                <!--        Here you can write extra buttons/actions for the toolbar              -->\n              </div>\n              <div class=\"material-datatables\">\n                <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\n                  style=\"width:100%\">\n                  <thead>\n                    <tr>\n                      <th>{{ dataTable.headerRow[0] }}</th>\n                      <th>{{ dataTable.headerRow[1] }}</th>\n                      <th>{{ dataTable.headerRow[2] }}</th>\n                      <th>{{ dataTable.headerRow[3] }}</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n                    <tr *ngFor=\"let row of dataTable.dataRows\">\n                      <td>{{row[0]}}</td>\n                      <td><a>{{row[1]}}</a></td>\n                      <td>{{row[2]}}</td>\n                      <td class=\"text-right\">\n                        <a  class=\"btn btn-link btn-success btn-just-icon edit\" (click)=\"onAccepted(row[1])\"><i class=\"material-icons\">done</i></a>\n                      </td>\n                    </tr>\n                  </tbody>\n                </table>\n              </div>\n            </div>\n            <!-- end content-->\n          </div>\n          <!--  end card  -->\n        </div>\n        <!-- end col-md-12 -->\n      </div>\n      <!-- end row -->\n    </div>\n  </div>"

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
    function OffersListComponent() {
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
        // Edit record
        table.on('click', '.edit', function (e) {
            var $tr = $(this).closest('tr');
            var data = table.row($tr).data();
            alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
            e.preventDefault();
        });
        // Delete a record
        table.on('click', '.remove', function (e) {
            var $tr = $(this).closest('tr');
            table.row($tr).remove().draw();
            e.preventDefault();
        });
        //Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
    };
    OffersListComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['#', 'العرض', 'اسم الشركة', 'الاجراءات'],
            dataRows: [
                ['1', 'Airi Satou', 'ELM'],
                ['2', 'Ashton Cox', 'google'],
                ['3', 'Bradley Greer', 'mqdam'],
                ['4', 'Brenden Wagner', 'google'],
                ['5', 'Brielle Williamson', 'psu']
            ]
        };
    };
    OffersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offers-list',
            template: __webpack_require__(/*! ./offers-list.component.html */ "./src/app/offers-list/offers-list.component.html"),
            styles: [__webpack_require__(/*! ./offers-list.component.css */ "./src/app/offers-list/offers-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
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