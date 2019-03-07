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
    JobService.prototype.getJobs = function (id) {
        return this.http.get(BackUrl + '/get/jobs?id=' + id);
    };
    JobService.prototype.getJob = function (id) {
        return this.http
            .get(BackUrl + '/getjob?id=' + id);
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
var ProjectService = /** @class */ (function () {
    function ProjectService(http, router) {
        this.http = http;
        this.router = router;
        this.project = [];
    }
    ProjectService.prototype.addproject = function (data) {
        var _this = this;
        this.http
            .post(BackUrl + '/postproject', data)
            .subscribe(function (responseData) {
            _this.projectId = responseData._id;
            console.log(_this.projectId);
            _this.router.navigate(['/my-projects']);
        });
    };
    ProjectService.prototype.getprojects = function (id) {
        return this.http
            .get(BackUrl + '/getprojects?id=' + id);
    };
    ProjectService.prototype.getproject = function (id) {
        this.http
            .get(BackUrl + '/getproject?id=' + id)
            .subscribe(function (data) {
            console.log(data);
            return data;
        });
    };
    ProjectService.prototype.deleteproject = function (id) {
        this.http
            .delete(BackUrl + '/deleteproject?id=' + id).subscribe(function () {
            console.log('Deleted');
        });
    };
    ProjectService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: 'root' }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/rest.service.ts":
/*!*********************************!*\
  !*** ./src/app/rest.service.ts ***!
  \*********************************/
/*! exports provided: RestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestService", function() { return RestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var endpoint = 'https://ptway-dev.herokuapp.com/';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json'
    })
};
var RestService = /** @class */ (function () {
    function RestService(http) {
        this.http = http;
    }
    RestService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    RestService.prototype.getUsers = function (id) {
        return this.http.get(endpoint + 'users/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData));
    };
    RestService.prototype.userRegistreing = function (data) {
        console.log(data);
        return this.http.post(endpoint + 'api/userRegistreing', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("user Registre succes w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('userRegistreing')));
    };
    RestService.prototype.companyRegistreing = function (data) {
        console.log(data);
        return this.http.post(endpoint + 'api/companyRegistreing', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("comapny Registre succes w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('companyRegistreing')));
    };
    RestService.prototype.postuserinfo = function (data) {
        console.log(data);
        return this.http.post(endpoint + 'api/postuserinfo', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("user succes complete his data  w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postuserinfo')));
    };
    RestService.prototype.userlogin = function (data) {
        console.log(data);
        return this.http.post(endpoint + 'api/login', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("user login succes w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('userlogin')));
    };
    RestService.prototype.postcompanyinfo = function (data) {
        console.log(data);
        return this.http.post(endpoint + 'api/postcompanyinfo', JSON.stringify(data), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log("company succes complete data w/ id=" + data.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('postcompanyinfo')));
    };
    RestService.prototype.updateProduct = function (id, product) {
        return this.http.put(endpoint + 'products/' + id, JSON.stringify(product), httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("updated product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('updateProduct')));
    };
    RestService.prototype.deleteProduct = function (id) {
        return this.http.delete(endpoint + 'products/' + id, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("deleted product id=" + id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('deleteProduct')));
    };
    RestService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    RestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestService);
    return RestService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map