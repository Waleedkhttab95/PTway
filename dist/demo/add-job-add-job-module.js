(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-job-add-job-module"],{

/***/ "./src/app/add-job/add-job.component.css":
/*!***********************************************!*\
  !*** ./src/app/add-job/add-job.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card [class*=\"card-header-\"] .card-icon{\n    margin-left: 15px;\n    float: right;\n}\n.custom-title{\n    text-align: right;\n}\n.mat-form-field{\n    text-align: right;\n}\n.mat-option{\n    text-align: right;\n}\n.mat-option.mat-selected:hover{\n    background-color: #3f51b5 !important;\n}\n.mat-option:hover {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n    background: #3f51b5!important;\n    color: #fff !important;\n}\n.mat-option.mat-selected:not(.mat-option-multiple) {\n    background-color: #3f51b5 !important;\n    color: #fff !important;\n}\n.mat-option.mat-selected:not(.mat-option-multiple) {\n    box-shadow: 0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(22, 44, 243, 0.4);\n}\n.custom-card{\n    margin-left: auto;\n    margin-right: auto;\n}\n.custom-label{\n    float: right;\n}\n::ng-deep .btn-primary{\n    margin-right: auto;\n}"

/***/ }),

/***/ "./src/app/add-job/add-job.component.html":
/*!************************************************!*\
  !*** ./src/app/add-job/add-job.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"card\">\n          <div class=\"card-header card-header-primary card-header-icon\">\n            <div class=\"card-icon\">\n              <i class=\"material-icons\">portrait</i>\n            </div>\n            <h4 class=\"card-title custom-title\">اضافة عرض عمل</h4>\n          </div>\n          <div class=\"col-md-8 custom-card\">\n            <div class=\"card-body\">\n              <form (ngSubmit)=\"postuserinfo()\" [formGroup]=\"addProjcetForm\">\n                <div class=\"row\">\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- نوع التعاقد</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"اختر التعاقد...\" [formControl]=\"contract\" name=\"contract\">\n                        <mat-option *ngFor=\"let contract of contracts\" [value]=\"contract.value\">\n                          {{contract.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المشروع</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"اختر المشروع...\" [formControl]=\"project\" name=\"project\">\n                        <mat-option *ngFor=\"let project of projects\" [value]=\"project.value\">\n                          {{project.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المسمى الوظيفي المطلوب</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"ادخل المسمى الوظيفي المطلوب...\" type=\"text\" [formControl]=\"job_Name\"\n                        name=\"job_Name\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المهارات الوظيفية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"اختر المهارات الوظيفية...\" [formControl]=\"job_skills\" name=\"job_skills\"\n                        multiple>\n                        <mat-option *ngFor=\"let skill of skillList\" [value]=\"skill\">{{skill}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الدولة</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"اختر الدولة...\" formControlName=\"country\" name=\"country\">\n                        <mat-option *ngFor=\"let country of countries\" [value]=\"country.value\">\n                          {{country.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المدينة</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"اختر المدينة...\" formControlName=\"city\" name=\"city\">\n                        <mat-option *ngFor=\"let city of cities\" [value]=\"city.value\">\n                          {{city.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- التخصص العام</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"ادخل التخصص العام...\" type=\"text\" formControlName=\"public_Major\"\n                        name=\"public_Major\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- ساعات العمل اليومية</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"ادخل ساعات العمل اليومية...\" type=\"number\" formControlName=\"work_hours\"\n                        name=\"work_hours\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- ايام العمل</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"ادخل ايام العمل...\" type=\"number\" formControlName=\"work_days\" name=\"work_days\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الراتب</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"الراتب...\" type=\"number\" formControlName=\"salary\" name=\"salary\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- الجنس</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"الجنس...\" formControlName=\"gender\" name=\"gender\">\n                        <mat-option *ngFor=\"let gender of genders\" [value]=\"gender.value\">\n                          {{gender.viewValue}}\n                        </mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- المهارات الشخصية</label>\n                    <mat-form-field>\n                      <mat-select placeholder=\"المهارات الشخصية...\" [formControl]=\"personal_Skills\" name=\"personal_Skills\"\n                        multiple>\n                        <mat-option *ngFor=\"let personal_Skill of personal_SkillList\" [value]=\"personal_Skill\">{{personal_Skill}}</mat-option>\n                      </mat-select>\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label class=\"bmd-label-floating custom-label\">- رقم الجوال</label>\n                    <mat-form-field class=\"example-full-width\">\n                      <input matInput placeholder=\"رقم الجوال...\" type=\"tel\" formControlName=\"required_Number\" name=\"required_Number\">\n                    </mat-form-field>\n                  </div>\n                  <div class=\"col-md-12\">\n                    <div class=\"card-footer\">\n                      <button mat-raised-button type=\"submit\" class=\"btn btn-fill btn-primary\">حفظ</button>\n                    </div>\n                  </div>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
    function AddJobComponent(rest, route, router, fb) {
        this.rest = rest;
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
    // postuserinfo() {
    //   console.log(this.addProjcetForm.value);
    //   this.rest.postuserinfo(this.addProjcetForm.value).subscribe((result) => {
    //     this.router.navigate(['/dashboard/']);
    //   }, (err) => {
    //     console.log(err);
    //   });
    // }
    AddJobComponent.prototype.getcontracts = function () {
        var _this = this;
        this.contracts = [];
        this.rest.getcontracts().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.contracts.push({ value: data[key]._id, viewValue: data[key].contractName });
            }
            console.log(_this.contracts);
        });
    };
    AddJobComponent.prototype.getprojects = function () {
        var _this = this;
        this.projects = [];
        this.rest.getprojects().subscribe(function (data) {
            console.log(data);
            for (var key in data) {
                _this.projects.push({ value: data[key]._id, viewValue: data[key].projectName });
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
        this.getcontracts();
        this.getprojects();
        this.getcountry();
        this.getcity();
        this.addProjcetForm = this.fb.group({
            contract: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            project: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
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
    AddJobComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-job',
            template: __webpack_require__(/*! ./add-job.component.html */ "./src/app/add-job/add-job.component.html"),
            styles: [__webpack_require__(/*! ./add-job.component.css */ "./src/app/add-job/add-job.component.css")]
        }),
        __metadata("design:paramtypes", [_job_service__WEBPACK_IMPORTED_MODULE_3__["JobService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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


/***/ }),

/***/ "./src/app/add-job/job.service.ts":
/*!****************************************!*\
  !*** ./src/app/add-job/job.service.ts ***!
  \****************************************/
/*! exports provided: JobService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobService", function() { return JobService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackUrl = 'https://cors-anywhere.herokuapp.com/https://ptway-dev.herokuapp.com/api';
var JobService = /** @class */ (function () {
    function JobService(http, router) {
        this.http = http;
        this.router = router;
        this.job = [];
        this.jobsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    JobService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    JobService.prototype.addJob = function (data) {
        var _this = this;
        this.http
            .post(BackUrl + '/postjob', data)
            .subscribe(function (responseData) {
            _this.router.navigate(['/']);
        });
    };
    JobService.prototype.sendJob = function (data) {
        var _this = this;
        this.http
            .post(BackUrl + '/send/Jobad', data)
            .subscribe(function (responseData) {
            _this.router.navigate(['/']);
        });
    };
    // getJobs() {
    //     this.http.get(BackUrl + '/getjobs').subscribe(data => {
    //         console.log(data);
    //     });
    // }
    JobService.prototype.getJobs = function () {
        return this.http.get(BackUrl + '/getjobs').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    JobService.prototype.getJob = function (id) {
        this.http
            .get(BackUrl + '/getjob?id=' + id)
            .subscribe(function (data) {
            console.log(data);
        });
    };
    JobService.prototype.deleteJob = function (id) {
        this.http
            .delete(BackUrl + '/deletejob?id=' + id).subscribe(function () {
            console.log('Deleted');
        });
    };
    // getcountry() {
    //     this.http
    //         .get(BackUrl + '/getcountry').subscribe(data => {
    //             console.log(data);
    //             return data;
    //         });
    // }
    JobService.prototype.getcountry = function () {
        return this.http.get(BackUrl + '/getcountry').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    // getcity() {
    //     this.http
    //         .get(BackUrl + '/getcity').subscribe(data => {
    //             console.log(data);
    //             return data;
    //         });
    // }
    JobService.prototype.getcity = function () {
        return this.http.get(BackUrl + '/getcity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    JobService.prototype.getsectors = function () {
        this.http
            .get(BackUrl + '/getsectors').subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    JobService.prototype.getspecialization = function () {
        this.http
            .get(BackUrl + '/getspec').subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    // getcontracts() {
    //     this.http
    //     .get(BackUrl + '/getcontracts').subscribe(data =>{
    //         console.log(data);
    //         return data;
    //     });
    // }
    JobService.prototype.getcontracts = function () {
        return this.http.get(BackUrl + '/getcontracts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    // getprojects() {
    //     this.http
    //         .get(BackUrl + '/getprojects')
    //         .subscribe(data => {
    //             console.log(data);
    //         });
    // }
    JobService.prototype.getprojects = function () {
        return this.http.get(BackUrl + '/getprojects').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JobService);
    return JobService;
}());



/***/ })

}]);
//# sourceMappingURL=add-job-add-job-module.js.map