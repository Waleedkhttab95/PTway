(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-offers-my-offers-module"],{

/***/ "./src/app/my-offers/my-offers.component.css":
/*!***************************************************!*\
  !*** ./src/app/my-offers/my-offers.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/my-offers/my-offers.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-offers/my-offers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">rate_review</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">عروض العمل الخاصة بي</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"toolbar\">\r\n              <!--        Here you can write extra buttons/actions for the toolbar              -->\r\n            </div>\r\n            <div class=\"material-datatables\">\r\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th>{{ dataTable.headerRow[2] }}</th>\r\n                    <th>{{ dataTable.headerRow[3] }}</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let row of dataTable.dataRows\">\r\n                    <td><a [routerLink]=\"['/job-offer-preview']\">{{row[0]}}</a></td>\r\n                    <td>\r\n                        <swal\r\n                        #deleteSwal\r\n                        title=\"انتـبه!\"\r\n                        text=\"هل انت متأكد من الحذف\"\r\n                        confirmButtonText= 'نعم'\r\n                        cancelButtonText= 'إلغاء الأمر'\r\n                        type=\"warning\"\r\n                        showCancelButton=\"true\"\r\n                        cancelButtonClass=\"btn btn-danger\"\r\n                        (confirm)=\"onDelete(row[1])\">\r\n\r\n                       >\r\n                      </swal>\r\n                      <button mat-raised-button class=\"btn btn-danger btn-round\" [swal]=\"deleteSwal\">حذف</button>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-raised-button class=\"btn btn-primary btn-round\"  (click)=\"onCandidates(row[1])\" [routerLink]=\"['/candidates-list']\">عرض القائمة </button>\r\n                    </td>\r\n                    <td>\r\n                      <button mat-raised-button class=\"btn btn-primary btn-round\" (click)=\"onAccepted(row[1])\"  [routerLink]=\"['/acceptance-list']\">عرض القائمة</button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end content-->\r\n        </div>\r\n        <!--  end card  -->\r\n      </div>\r\n      <!-- end col-md-12 -->\r\n    </div>\r\n    <!-- end row -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/my-offers/my-offers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-offers/my-offers.component.ts ***!
  \**************************************************/
/*! exports provided: MyOffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOffersComponent", function() { return MyOffersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _add_job_job_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-job/job.service */ "./src/app/add-job/job.service.ts");
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




var MyOffersComponent = /** @class */ (function () {
    function MyOffersComponent(data, jobService, authService) {
        this.data = data;
        this.jobService = jobService;
        this.authService = authService;
        this.dataRows = [];
        this.idRows = [];
    }
    MyOffersComponent.prototype.ngAfterViewInit = function () {
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
    MyOffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (m) {
            _this.projectId = m;
        });
        this.authService.autoAuthUser();
        this.jobService.getJobs('5c6bd0e0baf49b0016dabe51').subscribe(function (response) {
            console.log(response);
            for (var i = 0; i < response.count; i++) {
                _this.dataRows.push(response.jobNames[i]);
                _this.idRows.push(response.id[i]);
                _this.dataTable.dataRows.push([
                    _this.dataRows[i],
                    _this.idRows[i]
                ]);
            }
        });
        this.dataTable = {
            headerRow: ['اسم الإعلان', 'حذف الإعلان', 'قائمة المرشحين', 'قائمة المقبولين'],
            dataRows: []
        };
    };
    MyOffersComponent.prototype.onCandidates = function (id) {
        this.data.changeMessage(id);
    };
    MyOffersComponent.prototype.onAccepted = function (id) {
        this.data.changeMessage(id);
    };
    MyOffersComponent.prototype.onDelete = function (id) {
        this.jobService.deleteJob(id).subscribe(function () {
            console.log("heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeey");
        });
    };
    MyOffersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-offers',
            template: __webpack_require__(/*! ./my-offers.component.html */ "./src/app/my-offers/my-offers.component.html"),
            styles: [__webpack_require__(/*! ./my-offers.component.css */ "./src/app/my-offers/my-offers.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _add_job_job_service__WEBPACK_IMPORTED_MODULE_2__["JobService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], MyOffersComponent);
    return MyOffersComponent;
}());



/***/ }),

/***/ "./src/app/my-offers/my-offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/my-offers/my-offers.module.ts ***!
  \***********************************************/
/*! exports provided: MyOffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOffersModule", function() { return MyOffersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _my_offers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-offers.component */ "./src/app/my-offers/my-offers.component.ts");
/* harmony import */ var _my_offers_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-offers.routing */ "./src/app/my-offers/my-offers.routing.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
/* harmony import */ var _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @toverux/ngx-sweetalert2 */ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MyOffersModule = /** @class */ (function () {
    function MyOffersModule() {
    }
    MyOffersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_my_offers_component__WEBPACK_IMPORTED_MODULE_2__["MyOffersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_my_offers_routing__WEBPACK_IMPORTED_MODULE_3__["MyOffersRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                _toverux_ngx_sweetalert2__WEBPACK_IMPORTED_MODULE_7__["SweetAlert2Module"].forRoot({
                    buttonsStyling: false,
                    customClass: 'modal-content',
                    confirmButtonClass: 'btn btn-primary',
                    cancelButtonClass: 'btn'
                })
            ]
        })
    ], MyOffersModule);
    return MyOffersModule;
}());



/***/ }),

/***/ "./src/app/my-offers/my-offers.routing.ts":
/*!************************************************!*\
  !*** ./src/app/my-offers/my-offers.routing.ts ***!
  \************************************************/
/*! exports provided: MyOffersRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOffersRoutes", function() { return MyOffersRoutes; });
/* harmony import */ var _my_offers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-offers.component */ "./src/app/my-offers/my-offers.component.ts");

var MyOffersRoutes = [
    {
        path: '',
        children: [{
                path: '',
                component: _my_offers_component__WEBPACK_IMPORTED_MODULE_0__["MyOffersComponent"]
            }]
    }
];


/***/ })

}]);
//# sourceMappingURL=my-offers-my-offers-module.js.map