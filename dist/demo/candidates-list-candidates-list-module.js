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

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n::ng-deep .mat-raised-button.btn.btn-primary, .mat-raised-button.btn:not([class*=mat-elevation-z]).btn-primary, .btn.btn-primary .custom-btn{\r\n    font-family: 'Cairo', 'Changa';\r\n}"

/***/ }),

/***/ "./src/app/candidates-list/candidates-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\" *ngIf='count != CandidatesNumber'>\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">assignment</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">قائمة المرشحين</h4>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"toolbar\">\r\n              <!--        Here you can write extra buttons/actions for the toolbar              -->\r\n            </div>\r\n            <div class=\"material-datatables\">\r\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\r\n                style=\"width:100%\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>  عدد المقبولين : {{count}} / {{CandidatesNumber}} </th>\r\n                  </tr>\r\n                  <br>\r\n                  <tr>\r\n                    <th>{{ dataTable.headerRow[0] }}</th>\r\n                    <th>{{ dataTable.headerRow[1] }}</th>\r\n                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[2] }}</th>\r\n                \r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let row of dataTable.dataRows; let rowIndex = index\">\r\n                    <td>{{row[0]}}</td>\r\n                    <td><button mat-raised-button class=\"btn btn-primary btn-round\" (click)='onSelect(row[1])' [routerLink]=\"['/cv-preview']\">عرض السيرة الذاتية</button></td>\r\n                    <td class=\"text-right\">\r\n                      <a  class=\"btn btn-link btn-success btn-just-icon edit\" (click)=\"onAccepted(row[1]);  deleteRow(rowIndex)\"><i class=\"material-icons\">done</i></a>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <!-- end content-->\r\n          <div class='col-md-12'>\r\n            <button mat-raised-button class=\"btn btn-fill btn-primary custom-btn\"  [routerLink]=\"['/my-offers']\">إلى الخلف</button>\r\n          </div>\r\n        </div>\r\n        <!--  end card  -->\r\n      </div>\r\n      <!-- end col-md-12 -->\r\n    </div>\r\n    <!-- end row -->\r\n  </div>\r\n</div>"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _my_offers_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../my-offers/offer.service */ "./src/app/my-offers/offer.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _add_job_job_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-job/job.service */ "./src/app/add-job/job.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
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
    function CandidatesListComponent(data, offerService, authService, jobService, changeDetectorRef, router) {
        this.data = data;
        this.offerService = offerService;
        this.authService = authService;
        this.jobService = jobService;
        this.changeDetectorRef = changeDetectorRef;
        this.router = router;
        this.dataRows = [];
        this.nameRows = [];
        this.idRows = [];
        this.count = 0;
    }
    CandidatesListComponent.prototype.Dtable = function () {
        setTimeout(function () {
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
        }, 100);
    };
    CandidatesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.jobId = this.data.getStoreDataJob();
        this.authService.autoAuthUser();
        this.offerService.getCandidates(this.jobId).subscribe(function (response) {
            for (var i = 0; i < response.count; i++) {
                _this.dataRows.push(response.username[i]);
                _this.idRows.push(response.candidateNames[i]);
                _this.dataTable.dataRows.push([
                    _this.dataRows[i],
                    _this.idRows[i]
                ]);
            }
            _this.Dtable();
        });
        this.dataTable = {
            headerRow: ['الأسم', 'السيرة الذاتية', 'الإجراءات'],
            dataRows: []
        };
        this.getReqNumber();
    };
    CandidatesListComponent.prototype.getReqNumber = function () {
        var _this = this;
        this.jobService.getJobRequierdNumber(this.jobId).subscribe(function (res) {
            _this.CandidatesNumber = res.req_n;
            _this.count = res.limit_n;
            if (_this.CandidatesNumber == _this.count) {
                _this.showSwal('warning-message');
                _this.router.navigate(['/my-offers']);
            }
        });
    };
    CandidatesListComponent.prototype.onAccepted = function (id) {
        var _this = this;
        // this.count++;
        this.Acc = {
            jobAd: this.jobId,
            acceptedName: id
        };
        this.offerService.addAcceptence(this.Acc).subscribe(function (result) {
            _this.showSwal('secc');
            _this.getReqNumber();
            _this.router.navigate(['/candidates-list']);
        });
        ;
    };
    CandidatesListComponent.prototype.deleteRow = function (rowNumber) {
        this.dataTable.dataRows.splice(rowNumber, 1);
        this.changeDetectorRef.detectChanges();
    };
    CandidatesListComponent.prototype.onSelect = function (id) {
        this.data.storeDataUser(id);
    };
    CandidatesListComponent.prototype.showSwal = function (type) {
        if (type == 'secc') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "تمت العملية بنجاح!",
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                confirmButtonText: 'نعم',
                type: 'success',
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
        }
        if (type == 'warning-message') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "لقد أكتمل العدد!",
                text: "شكرا لك لقد أكتمل عدد المطلوبين !",
                buttonsStyling: false,
                confirmButtonClass: "btn btn-warning",
                type: "warning"
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
        }
    };
    CandidatesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates-list',
            template: __webpack_require__(/*! ./candidates-list.component.html */ "./src/app/candidates-list/candidates-list.component.html"),
            styles: [__webpack_require__(/*! ./candidates-list.component.css */ "./src/app/candidates-list/candidates-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _my_offers_offer_service__WEBPACK_IMPORTED_MODULE_2__["offerService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _add_job_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
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