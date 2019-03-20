(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["acceptance-list-acceptance-list-module~my-offers-my-offers-module~my-projects-my-projects-module"],{

/***/ "./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@toverux/ngx-sweetalert2/esm5/toverux-ngx-sweetalert2.js ***!
  \*******************************************************************************/
/*! exports provided: SwalPartialTargets, SwalComponent, SwalDirective, SwalPartialDirective, SweetAlert2Module, ɵa, ɵb, ɵc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPartialTargets", function() { return SwalPartialTargets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalComponent", function() { return SwalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalDirective", function() { return SwalDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwalPartialDirective", function() { return SwalPartialDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SweetAlert2Module", function() { return SweetAlert2Module; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SwalDefaults; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return swalDefaultsProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SwalPartialComponent; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");




var SwalPartialTargets = /** @class */ (function () {
    function SwalPartialTargets() {
        this.title = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getTitle(); };
        this.content = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getContent(); };
        this.buttonsWrapper = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getButtonsWrapper(); };
        this.actions = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getActions(); };
        this.confirmButton = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getConfirmButton(); };
        this.cancelButton = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getCancelButton(); };
        this.footer = function () { return sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.getFooter(); };
    }
    return SwalPartialTargets;
}());
var SwalDefaults = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('SwalDefaults');
function swalDefaultsProvider(options) {
    if (options === void 0) { options = {}; }
    return {
        provide: SwalDefaults,
        useValue: options
    };
}
var SwalComponent = /** @class */ (function () {
    function SwalComponent(defaultSwalOptions) {
        this.defaultSwalOptions = defaultSwalOptions;
        this.beforeOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.open = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.nativeSwal = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a;
        this.isCurrentlyShown = false;
        this.touchedProps = new Set();
        this.markTouched = this.touchedProps.add.bind(this.touchedProps);
        this.show = this.show.bind(this);
    }
    Object.defineProperty(SwalComponent.prototype, "options", {
        get: function () {
            var _this = this;
            var options = {};
            this.touchedProps.forEach(function (prop) {
                options[prop] = ((_this))[prop];
            });
            return options;
        },
        set: function (options) {
            Object.assign(this, options);
            Object.keys(options).forEach(this.markTouched);
        },
        enumerable: true,
        configurable: true
    });
    SwalComponent.prototype.ngOnChanges = function (changes) {
        Object.keys(changes)
            .filter(function (prop) { return prop !== 'options'; })
            .forEach(this.markTouched);
    };
    SwalComponent.prototype.ngOnDestroy = function () {
        if (this.isCurrentlyShown) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.close();
        }
    };
    SwalComponent.prototype.show = function () {
        var _this = this;
        var options = Object.assign({}, this.defaultSwalOptions, this.options, { onBeforeOpen: function (modalElement) {
                _this.beforeOpen.emit({ modalElement: modalElement });
            }, onOpen: function (modalElement) {
                _this.isCurrentlyShown = true;
                _this.open.emit({ modalElement: modalElement });
            }, onClose: function (modalElement) {
                _this.isCurrentlyShown = false;
                _this.close.emit({ modalElement: modalElement });
            } });
        var promise = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default()(options);
        var useRejections = ((options)).useRejections;
        promise.then(function (result) {
            if (useRejections) {
                _this.confirm.emit(result);
            }
            else if ('value' in result) {
                _this.confirm.emit(result.value);
            }
            else {
                _this.cancel.emit(result.dismiss);
            }
        }, function (err) {
            if (useRejections) {
                _this.cancel.emit(err);
            }
        });
        return promise;
    };
    return SwalComponent;
}());
SwalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                selector: 'swal',
                template: '',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
SwalComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [SwalDefaults,] },] },
]; };
SwalComponent.propDecorators = {
    "title": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "titleText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "text": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "html": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "footer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "type": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "backdrop": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "toast": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "target": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "input": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "padding": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "background": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "position": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "grow": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "customClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "timer": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "animation": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowOutsideClick": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowEscapeKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "allowEnterKey": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showConfirmButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showCancelButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonText": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonColor": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirmButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "cancelButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "buttonsStyling": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "reverseButtons": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "focusCancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showCloseButton": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "closeButtonAriaLabel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "showLoaderOnConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "preConfirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageUrl": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageWidth": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageHeight": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageAlt": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "imageClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputPlaceholder": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputValue": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputOptions": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputAutoTrim": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputAttributes": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputValidator": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "inputClass": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "progressSteps": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "currentProgressStep": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "progressStepsDistance": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "beforeOpen": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "open": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "close": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "confirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "options": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SwalDirective = /** @class */ (function () {
    function SwalDirective(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Object.defineProperty(SwalDirective.prototype, "swal", {
        set: function (options) {
            if (options instanceof SwalComponent) {
                this.swalInstance = options;
            }
            else if (Array.isArray(options)) {
                this.swalOptions = sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.argsToParams(options);
            }
            else {
                this.swalOptions = options;
            }
        },
        enumerable: true,
        configurable: true
    });
    SwalDirective.prototype.ngOnInit = function () {
        if (!this.swalInstance) {
            var factory = this.resolver.resolveComponentFactory(SwalComponent);
            this.swalRef = this.viewContainerRef.createComponent(factory);
            this.swalInstance = this.swalRef.instance;
        }
    };
    SwalDirective.prototype.ngOnDestroy = function () {
        if (this.swalRef) {
            this.swalRef.destroy();
        }
    };
    SwalDirective.prototype.onHostClicked = function (event) {
        var _this = this;
        event.preventDefault();
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (this.swalOptions) {
            this.swalInstance.options = this.swalOptions;
        }
        var confirmSub = this.swalInstance.confirm.asObservable().subscribe(function (v) { return _this.confirm.emit(v); });
        var cancelSub = this.swalInstance.cancel.asObservable().subscribe(function (v) { return _this.cancel.emit(v); });
        this.swalInstance.show().then(unsubscribe);
        function unsubscribe() {
            confirmSub.unsubscribe();
            cancelSub.unsubscribe();
        }
    };
    return SwalDirective;
}());
SwalDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[swal]'
            },] },
];
SwalDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
]; };
SwalDirective.propDecorators = {
    "swal": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
    "confirm": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "cancel": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"] },],
    "onHostClicked": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"], args: ['click', ['$event'],] },],
};
var SwalPartialComponent = /** @class */ (function () {
    function SwalPartialComponent() {
    }
    return SwalPartialComponent;
}());
SwalPartialComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                template: '<ng-container *ngTemplateOutlet="template"></ng-container>',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            },] },
];
SwalPartialComponent.ctorParameters = function () { return []; };
SwalPartialComponent.propDecorators = {
    "template": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SwalPartialDirective = /** @class */ (function () {
    function SwalPartialDirective(resolver, injector, app, templateRef, swalTargets, swalComponent) {
        this.resolver = resolver;
        this.injector = injector;
        this.app = app;
        this.templateRef = templateRef;
        this.swalTargets = swalTargets;
        this.swalComponent = swalComponent;
    }
    SwalPartialDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.beforeOpenSubscription = this.swalComponent.beforeOpen.asObservable().subscribe(function () {
            var targetEl = _this.swalPartial ? _this.swalPartial() : _this.swalTargets.content();
            var factory = _this.resolver.resolveComponentFactory(SwalPartialComponent);
            _this.partialRef = factory.create(_this.injector, [], targetEl);
            _this.partialRef.instance.template = _this.templateRef;
            _this.app.attachView(_this.partialRef.hostView);
        });
        this.closeSubscription = this.swalComponent.close.asObservable().subscribe(function () {
            _this.app.detachView(_this.partialRef.hostView);
            _this.partialRef.destroy();
        });
    };
    SwalPartialDirective.prototype.ngOnDestroy = function () {
        this.beforeOpenSubscription.unsubscribe();
        this.closeSubscription.unsubscribe();
    };
    return SwalPartialDirective;
}());
SwalPartialDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"], args: [{
                selector: '[swalPartial]'
            },] },
];
SwalPartialDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injector"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], },
    { type: SwalPartialTargets, },
    { type: SwalComponent, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Host"] },] },
]; };
SwalPartialDirective.propDecorators = {
    "swalPartial": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"] },],
};
var SweetAlert2Module = /** @class */ (function () {
    function SweetAlert2Module() {
    }
    SweetAlert2Module.forRoot = function (defaultSwalOptions) {
        return {
            ngModule: SweetAlert2Module,
            providers: [swalDefaultsProvider(defaultSwalOptions)]
        };
    };
    return SweetAlert2Module;
}());
SweetAlert2Module.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"], args: [{
                declarations: [
                    SwalComponent, SwalPartialDirective, SwalPartialComponent,
                    SwalDirective
                ],
                providers: [
                    SwalPartialTargets
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
                ],
                exports: [
                    SwalComponent, SwalPartialDirective,
                    SwalDirective
                ],
                entryComponents: [
                    SwalComponent, SwalPartialComponent
                ]
            },] },
];
SweetAlert2Module.ctorParameters = function () { return []; };


//# sourceMappingURL=toverux-ngx-sweetalert2.js.map


/***/ })

}]);
//# sourceMappingURL=acceptance-list-acceptance-list-module~my-offers-my-offers-module~my-projects-my-projects-module.js.map