(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["candidates-list-candidates-list-module"],{

/***/ "./src/app/candidates-list/Candidates-list.routing.ts":
/*!************************************************************!*\
  !*** ./src/app/candidates-list/Candidates-list.routing.ts ***!
  \************************************************************/
/*! exports provided: CandidatesListRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesListRoutes", function() { return CandidatesListRoutes; });
/* harmony import */ var _candidates_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./candidates-list.component */ "./src/app/candidates-list/candidates-list.component.ts");

var CandidatesListRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _candidates_list_component__WEBPACK_IMPORTED_MODULE_0__["CandidatesListComponent"]
            }]
    }
];


/***/ }),

/***/ "./src/app/candidates-list/candidates-list.component.css":
/*!***************************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/candidates-list/candidates-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">assignment</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">قائمة المرشحين</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"toolbar\">\r\n              <!--        Here you can write extra buttons/actions for the toolbar              -->\r\n            </div>\r\n            <div class=\"material-datatables\">\r\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[2] }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                    <td>{{row[0]}}</td>\r\n                    <td><button mat-raised-button class=\"btn btn-primary btn-round\">عرض السيرة الذاتية</button></td>\r\n                    <td class=\"text-right\">\r\n                      <a href=\"#\" class=\"btn btn-link btn-success btn-just-icon edit\"><i class=\"material-icons\">done</i></a>\r\n                      <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end content-->\r\n        </div>\r\n        <!--  end card  -->\r\n      </div>\r\n      <!-- end col-md-12 -->\r\n    </div>\r\n    <!-- end row -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/candidates-list/candidates-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.component.ts ***!
  \**************************************************************/
/*! exports provided: CandidatesListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesListComponent", function() { return CandidatesListComponent; });
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

var CandidatesListComponent = /** @class */ (function () {
    function CandidatesListComponent() {
    }
    CandidatesListComponent.prototype.ngAfterViewInit = function () {
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
    CandidatesListComponent.prototype.ngOnInit = function () {
        this.dataTable = {
            headerRow: ['الأسم', 'السيرة الذاتية', 'الإجراءات'],
            dataRows: [
                ['Airi Satou'],
                ['Angelica Ramos'],
                ['Ashton Cox'],
                ['Bradley Greer'],
                ['Brenden Wagner'],
                ['Brielle Williamson'],
                ['Caesar Vance'],
                ['Cedric Kelly'],
            ]
        };
    };
    CandidatesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates-list',
            template: __webpack_require__(/*! ./candidates-list.component.html */ "./src/app/candidates-list/candidates-list.component.html"),
            styles: [__webpack_require__(/*! ./candidates-list.component.css */ "./src/app/candidates-list/candidates-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CandidatesListComponent);
    return CandidatesListComponent;
}());



/***/ }),

/***/ "./src/app/candidates-list/candidates-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.module.ts ***!
  \***********************************************************/
/*! exports provided: CandidatesListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidatesListModule", function() { return CandidatesListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _candidates_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./candidates-list.component */ "./src/app/candidates-list/candidates-list.component.ts");
/* harmony import */ var _Candidates_list_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Candidates-list.routing */ "./src/app/candidates-list/Candidates-list.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CandidatesListModule = /** @class */ (function () {
    function CandidatesListModule() {
    }
    CandidatesListModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_candidates_list_component__WEBPACK_IMPORTED_MODULE_2__["CandidatesListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_Candidates_list_routing__WEBPACK_IMPORTED_MODULE_3__["CandidatesListRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"]
            ]
        })
    ], CandidatesListModule);
    return CandidatesListModule;
}());



/***/ })

}]);
//# sourceMappingURL=candidates-list-candidates-list-module.js.map