(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-projects-my-projects-module"],{

/***/ "./src/app/my-projects/my-projects.component.css":
/*!*******************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n::ng-deep .mat-raised-button.btn.btn-round, .mat-raised-button.btn:not([class*=mat-elevation-z]).btn-round, .btn.btn-round .custon-btn{\r\n    font-family: 'Cairo', 'Changa';\r\n}"

/***/ }),

/***/ "./src/app/my-projects/my-projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-spinner style=\"position:fixed;top:50%;left:50%;margin:0 auto;\" mode=\"indeterminate\" *ngIf=\"isLoading\"></mat-spinner>\r\n<div class=\"main-content\" *ngIf=\"!isLoading\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">next_week</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">المشاريع الخاصة بي</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"toolbar\">\r\n              <!--     [routerLink]=\"['/my-offers']\"   Here you can write extra buttons/actions for the toolbar              -->\r\n            </div>\r\n            <div class=\"material-datatables\">\r\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th>{{ dataTable.headerRow[2] }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let row of dataTable.dataRows; let rowIndex = index\">\r\n                    <td><a class=\"remove\" [routerLink]=\"['/my-offers']\" (click)=\"onSelect(row[1])\">{{row[0]}}</a></td>\r\n                    <td>\r\n                      <button mat-raised-button class=\"btn btn-primary btn-round custon-btn\" [routerLink]=\"['/add-project']\"\r\n                        (click)=\"onEdit(row[1])\">تعديل</button>\r\n                    </td>\r\n                    <td>\r\n                      <swal #deleteSwal title=\"انتـبه!\" text=\"هل انت متأكد من الحذف\" confirmButtonText='نعم'\r\n                        cancelButtonText='إلغاء الأمر' type=\"warning\" showCancelButton=\"true\" cancelButtonClass=\"btn btn-danger\"\r\n                        (confirm)=\"onDelete(row[1]); deleteRow(rowIndex)\">\r\n                      </swal>\r\n                      <button [swal]=\"deleteSwal\" mat-raised-button class=\"btn btn-danger btn-round custon-btn\">حذف</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end content-->\r\n        </div>\r\n        <!--  end card  -->\r\n      </div>\r\n      <!-- end col-md-12 -->\r\n    </div>\r\n    <!-- end row -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-projects/my-projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-projects/my-projects.component.ts ***!
  \******************************************************/
/*! exports provided: MyProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsComponent", function() { return MyProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _add_project_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-project/project.service */ "./src/app/add-project/project.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MyProjectsComponent = /** @class */ (function () {
    // tslint:disable-next-line: member-ordering
    function MyProjectsComponent(data, projectService, authService, changeDetectorRef) {
        this.data = data;
        this.projectService = projectService;
        this.authService = authService;
        this.changeDetectorRef = changeDetectorRef;
        this.isLoading = false;
        this.dataRows = [];
        this.idRows = [];
    }
    MyProjectsComponent.prototype.ngAfterViewInit = function () {
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
        //Like record
        table.on('click', '.like', function (e) {
            alert('You clicked on Like button');
            e.preventDefault();
        });
        $('.card .material-datatables label').addClass('form-group');
        this.authService.autoAuthUser();
        this.fetchData();
    };
    // tslint:disable-next-line: member-ordering
    MyProjectsComponent.prototype.ngOnInit = function () {
        this.isLoading = true;
        this.dataTable = {
            headerRow: ['اسم المشروع', 'تعديل المشروع', 'حذف المشروع'],
            dataRows: []
        };
        this.isLoading = false;
    };
    MyProjectsComponent.prototype.fetchData = function () {
        var _this = this;
        this.projectService.getprojects().subscribe(function (response) {
            for (var i = 0; i < response.count; i++) {
                _this.dataRows.push(response.projectName[i]);
                _this.idRows.push(response.id[i]);
                _this.dataTable.dataRows.push([
                    _this.dataRows[i],
                    _this.idRows[i]
                ]);
            }
        });
    };
    MyProjectsComponent.prototype.onSelect = function (id) {
        this.data.storeData(id);
        this.data.changeMessage(id);
    };
    MyProjectsComponent.prototype.onEdit = function (id) {
        this.data.changeMessage(id);
        this.data.changeStatus(true);
    };
    MyProjectsComponent.prototype.onDelete = function (id) {
        var _this = this;
        this.projectService.deleteproject(id).subscribe(function () {
            _this.dataTable.dataRows.filter(function (r) { return r[1] !== id; });
        });
    };
    MyProjectsComponent.prototype.deleteRow = function (rowNumber) {
        console.log('testdeletRow');
        this.dataTable.dataRows.splice(rowNumber, 1);
        this.changeDetectorRef.detectChanges();
    };
    MyProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-projects',
            template: __webpack_require__(/*! ./my-projects.component.html */ "./src/app/my-projects/my-projects.component.html"),
            styles: [__webpack_require__(/*! ./my-projects.component.css */ "./src/app/my-projects/my-projects.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _add_project_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], MyProjectsComponent);
    return MyProjectsComponent;
}());



/***/ }),

/***/ "./src/app/my-projects/my-projects.module.ts":
/*!***************************************************!*\
  !*** ./src/app/my-projects/my-projects.module.ts ***!
  \***************************************************/
/*! exports provided: MyProjectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsModule", function() { return MyProjectsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_projects_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-projects.component */ "./src/app/my-projects/my-projects.component.ts");
/* harmony import */ var _my_projects_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-projects.routing */ "./src/app/my-projects/my-projects.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var MyProjectsModule = /** @class */ (function () {
    function MyProjectsModule() {
    }
    MyProjectsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_my_projects_component__WEBPACK_IMPORTED_MODULE_2__["MyProjectsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_my_projects_routing__WEBPACK_IMPORTED_MODULE_3__["MyProjectsRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ]
        })
    ], MyProjectsModule);
    return MyProjectsModule;
}());



/***/ }),

/***/ "./src/app/my-projects/my-projects.routing.ts":
/*!****************************************************!*\
  !*** ./src/app/my-projects/my-projects.routing.ts ***!
  \****************************************************/
/*! exports provided: MyProjectsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProjectsRoutes", function() { return MyProjectsRoutes; });
/* harmony import */ var _my_projects_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-projects.component */ "./src/app/my-projects/my-projects.component.ts");

var MyProjectsRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _my_projects_component__WEBPACK_IMPORTED_MODULE_0__["MyProjectsComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=my-projects-my-projects-module.js.map