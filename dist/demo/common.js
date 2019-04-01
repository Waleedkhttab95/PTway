(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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






var BackUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].BackUrl;

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
            _this.showSwal('secc');
            _this.jobData = {
                country: responseData.country,
                city: responseData.city,
                gender: responseData.gender,
                //  personal_Skills: responseData.personal_Skills,
                public_Major: responseData.public_Major,
                jobAd: responseData._id
            };
            _this.http
                .post(BackUrl + '/send/Jobad', _this.jobData, { responseType: 'text' }).subscribe(function (res) {
                _this.router.navigate(['/my-projects']);
            });
        });
    };
    JobService.prototype.applyJob = function (jobAd) {
        var _this = this;
        jobAd = {
            jobAd: jobAd
        };
        this.http.post(BackUrl + '/postBodyC', jobAd).subscribe(function (result) {
            _this.router.navigate(['/my-cv']);
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
    JobService.prototype.getJobs = function (id) {
        return this.http.get(BackUrl + '/get/jobs?projectid=' + id);
    };
    JobService.prototype.getJob = function (id) {
        return this.http
            .get(BackUrl + '/getjob?id=' + id);
    };
    JobService.prototype.deleteJob = function (id) {
        return this.http
            .delete(BackUrl + '/deletejob?id=' + id);
    };
    JobService.prototype.getcountry = function () {
        return this.http.get(BackUrl + '/getcountry').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractData));
    };
    JobService.prototype.getcity = function () {
        return this.http.get(BackUrl + '/getcity').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractData));
    };
    JobService.prototype.getsectors = function () {
        this.http
            .get(BackUrl + '/getsectors').subscribe(function (data) {
            return data;
        });
    };
    JobService.prototype.getspecialization = function () {
        this.http
            .get(BackUrl + '/getspec').subscribe(function (data) {
            return data;
        });
    };
    JobService.prototype.getcontracts = function () {
        return this.http.get(BackUrl + '/getcontracts').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(this.extractData));
    };
    JobService.prototype.getprojects = function (id) {
        return this.http
            .get(BackUrl + '/getprojects?id=' + id);
    };
    JobService.prototype.getSkills = function () {
        return this.http
            .get(BackUrl + '/get/skills');
    };
    JobService.prototype.getPersonalSkills = function () {
        return this.http
            .get(BackUrl + '/get/p_skills');
    };
    JobService.prototype.getJobRequierdNumber = function (id) {
        return this.http
            .get(BackUrl + '/getjob/req?id=' + id);
    };
    JobService.prototype.showSwal = function (type) {
        if (type == 'secc') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default()({
                title: "تمت عملية الإضافة بنجاح!",
                buttonsStyling: false,
                confirmButtonText: 'نعم',
                type: 'success',
                confirmButtonClass: 'btn btn-success'
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.noop);
        }
    };
    JobService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], JobService);
    return JobService;
}());



/***/ }),

/***/ "./src/app/add-project/project.service.ts":
/*!************************************************!*\
  !*** ./src/app/add-project/project.service.ts ***!
  \************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BackUrl;
var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        // headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
        this.project = [];
    }
    ProjectService.prototype.addproject = function (data) {
        var _this = this;
        this.http
            .post(BackUrl + '/postproject', data)
            .subscribe(function (responseData) {
            _this.showSwal('secc');
            _this.projectId = responseData._id;
            _this.router.navigate(['/my-projects']);
        });
    };
    ProjectService.prototype.getprojects = function () {
        return this.http
            .get(BackUrl + '/getprojects');
    };
    ProjectService.prototype.getproject = function (id) {
        return this.http
            .get(BackUrl + '/getproject?id=' + id);
    };
    ProjectService.prototype.updateProject = function (data) {
        var _this = this;
        var response = this.http
            .put(BackUrl + '/put/project', data, { responseType: 'text' })
            .subscribe(function (responseData) {
            _this.router.navigate(['/my-projects']);
        });
        ;
    };
    ProjectService.prototype.deleteproject = function (id) {
        return this.http
            .delete(BackUrl + '/deleteproject?id=' + id);
    };
    ProjectService.prototype.showSwal = function (type) {
        if (type == 'secc') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "تمت عملية الحفظ بنجاح!",
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                confirmButtonText: 'نعم',
                type: 'success',
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        }
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/add-user-info/mime-type.validator.ts":
/*!******************************************************!*\
  !*** ./src/app/add-user-info/mime-type.validator.ts ***!
  \******************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener('loadend', function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = '';
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case '89504e47':
                    isValid = true;
                    break;
                case 'ffd8ffe0':
                case 'ffd8ffe1':
                case 'ffd8ffe2':
                case 'ffd8ffe3':
                case 'ffd8ffe8':
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/my-offers/offer.service.ts":
/*!********************************************!*\
  !*** ./src/app/my-offers/offer.service.ts ***!
  \********************************************/
/*! exports provided: offerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "offerService", function() { return offerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BackUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BackUrl;
// const BackUrl = 'http://localhost:5000/api'
var offerService = /** @class */ (function () {
    function offerService(http, router) {
        this.http = http;
        this.router = router;
    }
    offerService.prototype.getCandidates = function (id) {
        return this.http.get(BackUrl + '/getOneCandi?jobAd=' + id);
    };
    offerService.prototype.addCandidate = function (data) {
        var _this = this;
        this.http.post(BackUrl + '/postBodyC', data).subscribe(function () {
            _this.router.navigate(['/']);
        });
    };
    offerService.prototype.addAcceptence = function (data) {
        return this.http.post(BackUrl + '/postAcc', data);
    };
    offerService.prototype.getAcceptence = function (id) {
        return this.http.get(BackUrl + '/getOneAccepted?jobAd=' + id);
    };
    offerService.prototype.startJob = function (data) {
        var _this = this;
        this.http.post(BackUrl + '/start/job', data).subscribe(function (result) {
            _this.showSwal('secc');
            _this.router.navigate(['/my-offers']);
        });
    };
    offerService.prototype.endJob = function (data) {
        var _this = this;
        var response = this.http.post(BackUrl + '/end/job', data, { responseType: 'text' }).subscribe(function (result) {
            _this.showSwal('secc');
            _this.router.navigate(['/acceptance-list']);
        });
    };
    offerService.prototype.showSwal = function (type) {
        if (type == 'secc') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default()({
                title: "تمت العملية بنجاح!",
                buttonsStyling: false,
                confirmButtonClass: 'btn btn-success',
                confirmButtonText: 'نعم',
                type: 'success',
            }).catch(sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.noop);
        }
    };
    offerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], offerService);
    return offerService;
}());



/***/ }),

/***/ "./src/app/sign-up/sign-up.service.ts":
/*!********************************************!*\
  !*** ./src/app/sign-up/sign-up.service.ts ***!
  \********************************************/
/*! exports provided: SignUpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpService", function() { return SignUpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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





// import { UNAUTHORIZED, BAD_REQUEST, FORBIDDEN } from "http-status-codes";
// import { ToastsManager, Toast, ToastOptions } from "ng6-toastr";
var BackUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].BackUrl;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var SignUpService = /** @class */ (function () {
    // private showError(message: string) {
    //   this.toastManager.error(message, SignUpService.DEFAULT_ERROR_TITLE, { dismiss: 'controlled' }).then((toast: Toast) => {
    //     let currentToastId: number = toast.id;
    //     this.toastManager.onClickToast().subscribe(clickedToast => {
    //       if (clickedToast.id === currentToastId) {
    //         this.toastManager.dismissToast(toast);
    //         window.location.reload();
    //       }
    //     });
    //   });
    // }
    // private job: SignUpData[] = [];
    // private jobsUpdated = new Subject<{ posts: SignUpData[], jobCount: number }>();
    function SignUpService(http, router) {
        this.http = http;
        this.router = router;
    }
    // static readonly REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE: string = "An error occurred: Please click this message to refresh";
    // static readonly DEFAULT_ERROR_TITLE: string = "Something went wrong";
    SignUpService.prototype.handleError = function (error) {
        // console.error(error);
        // let httpErrorCode = error.httpErrorCode;
        // switch (httpErrorCode) {
        //   case UNAUTHORIZED:
        //     this.router.navigateByUrl("/sign0in");
        //     break;
        //   case FORBIDDEN:
        //     this.router.navigateByUrl("/error-message");
        //     break;
        //   case BAD_REQUEST:
        //     this.showError(error.message);
        //     break;
        //   default:
        //     this.showError(SignUpService.REFRESH_PAGE_ON_TOAST_CLICK_MESSAGE);
        // }
    };
    SignUpService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SignUpService.prototype.getsectors = function () {
        return this.http.get(BackUrl + '/getsectors').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    SignUpService.prototype.getspecialization = function () {
        return this.http.get(BackUrl + '/getspec').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(this.extractData));
    };
    SignUpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpService);
    return SignUpService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map