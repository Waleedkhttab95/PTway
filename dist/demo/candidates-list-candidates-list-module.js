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

module.exports = ".card [class*=\"card-header-\"] .card-icon{\n    margin-left: 15px;\n    float: right;\n}\n.custom-title{\n    text-align: right;\n}\n.mat-form-field{\n    text-align: right;\n}\n.custom-card{\n    margin-left: auto;\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/candidates-list/candidates-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/candidates-list/candidates-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">assignment</i>\n            </div>\n            <h4 class=\"card-title custom-title\">قائمة المرشحين</h4>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"toolbar\">\n              <!--        Here you can write extra buttons/actions for the toolbar              -->\n            </div>\n            <div class=\"material-datatables\">\n              <table id=\"datatables\" class=\"table table-striped table-no-bordered table-hover\" cellspacing=\"0\" width=\"100%\"\n                style=\"width:100%\">\n                <thead>\n                  <tr>\n                    <th>{{ dataTable.headerRow[0] }}</th>\n                    <th>{{ dataTable.headerRow[1] }}</th>\n                    <th class=\"disabled-sorting text-right\">{{ dataTable.headerRow[2] }}</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let row of dataTable.dataRows\">\n                    <td>{{row[0]}}</td>\n                    <td><button mat-raised-button class=\"btn btn-primary btn-round\">عرض السيرة الذاتية</button></td>\n                    <td class=\"text-right\">\n                      <a  class=\"btn btn-link btn-success btn-just-icon edit\" (click)=\"onAccepted(row[1])\"><i class=\"material-icons\">done</i></a>\n                      <a href=\"#\" class=\"btn btn-link btn-danger btn-just-icon remove\"><i class=\"material-icons\">close</i></a>\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <!-- end content-->\n        </div>\n        <!--  end card  -->\n      </div>\n      <!-- end col-md-12 -->\n    </div>\n    <!-- end row -->\n  </div>\n</div>"

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
    function CandidatesListComponent(data, offerService, authService, jobService) {
        this.data = data;
        this.offerService = offerService;
        this.authService = authService;
        this.jobService = jobService;
        this.dataRows = [];
        this.nameRows = [];
        this.idRows = [];
        this.count = 0;
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
        // table.on('click', '.edit', function(e) {
        //   const $tr = $(this).closest('tr');
        //   const data = table.row($tr).data();
        //   alert('You press on Row: ' + data[0] + ' ' + data[1] + ' ' + data[2] + '\'s row.');
        //   e.preventDefault();
        // });
        // // Delete a record
        // table.on('click', '.remove', function(e) {
        //   const $tr = $(this).closest('tr');
        //   table.row($tr).remove().draw();
        //   e.preventDefault();
        // });
        // //Like record
        // table.on('click', '.like', function(e) {
        //   alert('You clicked on Like button');
        //   e.preventDefault();
        // });
        $('.card .material-datatables label').addClass('form-group');
    };
    CandidatesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data.currentMessage.subscribe(function (m) {
            _this.jobId = m;
        });
        this.authService.autoAuthUser();
        this.offerService.getCandidates('5c63e939453ed8751c55a8b8').subscribe(function (response) {
            for (var i = 0; i < response.count; i++) {
                _this.dataRows.push(response.username[i]);
                _this.idRows.push(response.candidateNames[i]);
                _this.dataTable.dataRows.push([
                    _this.dataRows[i],
                    _this.idRows[i]
                ]);
            }
        });
        this.dataTable = {
            headerRow: ['الأسم', 'السيرة الذاتية', 'الإجراءات'],
            dataRows: []
        };
        this.jobService.getJob('5c727a53ff7f0d690870f1d6').subscribe(function (res) {
            _this.CandidatesNumber = res.required_Number;
        });
    };
    CandidatesListComponent.prototype.onAccepted = function (id) {
        this.count++;
        this.Acc = {
            jobAd: '5c63e939453ed8751c55a8b8',
            acceptedName: id
        };
        this.offerService.addAcceptence(this.Acc);
        console.log(this.count);
    };
    CandidatesListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-candidates-list',
            template: __webpack_require__(/*! ./candidates-list.component.html */ "./src/app/candidates-list/candidates-list.component.html"),
            styles: [__webpack_require__(/*! ./candidates-list.component.css */ "./src/app/candidates-list/candidates-list.component.css")]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _my_offers_offer_service__WEBPACK_IMPORTED_MODULE_2__["offerService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _add_job_job_service__WEBPACK_IMPORTED_MODULE_4__["JobService"]])
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