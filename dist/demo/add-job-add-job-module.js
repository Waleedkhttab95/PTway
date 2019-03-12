(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-job-add-job-module"],{

/***/ "./src/app/add-job/add-job.component.css":
/*!***********************************************!*\
  !*** ./src/app/add-job/add-job.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\r\n    margin-left: 15px;\r\n    float: right;\r\n}\r\n.custom-title{\r\n    text-align: right;\r\n}\r\n.mat-form-field{\r\n    text-align: right;\r\n}\r\n.mat-option{\r\n    text-align: right;\r\n}\r\n.mat-option.mat-selected:hover{\r\n    background-color: #3f51b5 !important;\r\n}\r\n.mat-option:hover {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n    background: #3f51b5!important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    background-color: #3f51b5 !important;\r\n    color: #fff !important;\r\n}\r\n.mat-option.mat-selected:not(.mat-option-multiple) {\r\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\r\n}\r\n.custom-card{\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n.custom-label{\r\n    float: right;\r\n}\r\n::ng-deep .btn-primary{\r\n    margin-right: auto;\r\n}"

/***/ }),

/***/ "./src/app/add-job/add-job.component.html":
/*!************************************************!*\
  !*** ./src/app/add-job/add-job.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header card-header-primary card-header-icon\">\r\n            <div class=\"card-icon\">\r\n              <i class=\"material-icons\">portrait</i>\r\n            </div>\r\n            <h4 class=\"card-title custom-title\">اضافة عرض عمل</h4>\r\n          </div>\r\n          <div class=\"col-md-8 custom-card\">\r\n            <div class=\"card-body\">\r\n              <form (submit)=\"addJob()\" [formGroup]=\"addProjcetForm\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- نوع التعاقد</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"اختر التعاقد...\" formControlName=\"contracts\" name=\"contract\">\r\n                        <mat-option *ngFor=\"let contract of contracts\" [value]=\"contract.value\">\r\n                          {{contract.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المشروع</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"اختر المشروع...\" formControlName=\"projects\" name=\"project\">\r\n                        <mat-option *ngFor=\"let project of projects\" [value]=\"project.value\">\r\n                          {{project.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المسمى الوظيفي المطلوب</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"ادخل المسمى الوظيفي المطلوب...\" type=\"text\" formControlName=\"job_Name\"\r\n                     >\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المهارات الوظيفية</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"اختر المهارات الوظيفية...\" formControlName=\"job_skills\" name=\"job_skills\"\r\n                        multiple>\r\n                        <mat-option *ngFor=\"let skill of skillList\" [value]=\"skill\">{{skill}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الدولة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"اختر الدولة...\" formControlName=\"country\" name=\"country\">\r\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\r\n                          {{country.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"اختر المدينة...\" formControlName=\"city\" name=\"city\">\r\n                        <mat-option *ngFor=\"let city of cities\"  [value]=\"city.value\">\r\n                          {{city.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- التخصص العام</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"ادخل التخصص العام...\" type=\"text\" formControlName=\"public_Major\"\r\n                        name=\"public_Major\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- ساعات العمل اليومية</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"ادخل ساعات العمل اليومية...\" type=\"number\" formControlName=\"work_hours\"\r\n                        name=\"work_hours\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- ايام العمل</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"ادخل ايام العمل...\" type=\"number\" formControlName=\"work_days\" name=\"work_days\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الراتب</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"الراتب...\" type=\"number\" formControlName=\"salary\" name=\"salary\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- الجنس</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"الجنس...\" formControlName=\"gender\" name=\"gender\">\r\n                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n                          {{gender.viewValue}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- المهارات الشخصية</label>\r\n                    <mat-form-field>\r\n                      <mat-select placeholder=\"المهارات الشخصية...\" formControlName=\"personal_Skills\" name=\"personal_Skills\"\r\n                        multiple>\r\n                        <mat-option *ngFor=\"let personal_Skill of personal_SkillList\" [value]=\"personal_Skill\">{{personal_Skill}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- تاريخ الميلاد</label>\r\n                    <mat-form-field>\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                    <label class=\"bmd-label-floating custom-label\">- رقم الجوال</label>\r\n                    <mat-form-field class=\"example-full-width\">\r\n                      <input matInput placeholder=\"رقم الجوال...\" type=\"tel\" formControlName=\"required_Number\" name=\"required_Number\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                    <div class=\"card-footer\">\r\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\" >حفظ</button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _job_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job.service */ "./src/app/add-job/job.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
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
    function AddJobComponent(rest, authService, route, router, fb) {
        this.rest = rest;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.contracts = [];
        this.cities = [];
        this.projects = [];
        this.countries = [];
        this.selectTheme = 'primary';
        this.genders = [
            { value: 'male', viewValue: 'ذكر' },
            { value: 'female', viewValue: 'انثى' },
        ];
        this.languages = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.languageList = ['العربية', 'الانجليزية', 'الفرنسية', 'الاسبانية', 'الايطالية'];
        this.skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.skillList = ['التصوير الفوتوغرافي', 'الرسم', 'التصميم'];
        this.personal_Skills = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.personal_SkillList = ['الإلقاء', 'التعبير'];
    }
    AddJobComponent.prototype.getcontracts = function () {
        var _this = this;
        this.contracts = [];
        this.rest.getcontracts().subscribe(function (data) {
            console.log("Here");
            for (var key in data) {
                _this.contracts.push({ value: data[key]._id, viewValue: data[key].contractName });
            }
            console.log(_this.contracts);
        });
    };
    AddJobComponent.prototype.getprojects = function (id) {
        var _this = this;
        this.projects = [];
        this.rest.getprojects(id).subscribe(function (data) {
            console.log(data.id);
            for (var i = 0; i < data.count; i++) {
                _this.projects.push({ value: data.id[i], viewValue: data.projectName[i] });
                console.log(data.id[i]);
            }
            console.log(_this.projects);
        });
    };
    AddJobComponent.prototype.getcountry = function () {
        var _this = this;
        this.countries = [];
        this.rest.getcountry().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.countries.push({ value: data[key]._id, viewValue: data[key].countryName });
            }
            console.log(_this.countries);
        });
    };
    AddJobComponent.prototype.getcity = function () {
        var _this = this;
        this.cities = [];
        this.rest.getcity().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.cities.push({ value: data[key]._id, viewValue: data[key].cityName });
            }
            console.log(_this.cities);
        });
    };
    AddJobComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
        this.getcontracts();
        this.getprojects(this.authService.getUserId());
        this.getcountry();
        this.getcity();
        this.addProjcetForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            contracts: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            projects: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            job_Name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            job_skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            public_Major: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            work_hours: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            work_days: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            salary: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            personal_Skills: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            required_Number: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
        });
    };
    AddJobComponent.prototype.addJob = function () {
        this.data = {
            contract: this.addProjcetForm.value.contracts,
            project: this.addProjcetForm.value.projects,
            job_Name: this.addProjcetForm.value.job_Name,
            job_skills: this.addProjcetForm.value.job_skills,
            country: this.addProjcetForm.value.country,
            city: this.addProjcetForm.value.city,
            public_Major: this.addProjcetForm.value.public_Major,
            work_hours: this.addProjcetForm.value.work_hours,
            work_days: this.addProjcetForm.value.work_days,
            salary: this.addProjcetForm.value.salary,
            gender: this.addProjcetForm.value.gender,
            personal_Skills: this.addProjcetForm.value.personal_Skills,
            required_Number: this.addProjcetForm.value.required_Number
        };
        this.rest.addJob(this.data);
    };
    AddJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job',
            template: __webpack_require__(/*! ./add-job.component.html */ "./src/app/add-job/add-job.component.html"),
            styles: [__webpack_require__(/*! ./add-job.component.css */ "./src/app/add-job/add-job.component.css")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_chips__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-chips */ "./node_modules/ngx-chips/esm5/ngx-chips.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app.module */ "./src/app/app.module.ts");
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
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_add_job_routing__WEBPACK_IMPORTED_MODULE_3__["AddJobRoutes"]),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _app_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                ngx_chips__WEBPACK_IMPORTED_MODULE_5__["TagInputModule"],
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