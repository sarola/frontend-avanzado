(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-signin-signin-module"],{

/***/ "./src/app/views/signin/signin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/signin/signin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: SigninRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninRoutingModule", function() { return SigninRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.component */ "./src/app/views/signin/signin.component.ts");




var routes = [
    {
        path: '',
        component: _signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]
    }
];
var SigninRoutingModule = /** @class */ (function () {
    function SigninRoutingModule() {
    }
    SigninRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SigninRoutingModule);
    return SigninRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/signin/signin.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/signin/signin.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"div-login\">\n      <img src=\"/assets/img/uoc_logo.png\" />\n\n      <mat-toolbar color=\"primary\" >Login</mat-toolbar>\n\n      <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n\n\n\n          <div class=\"container\">\n\n              <mat-error *ngIf=\"errorLogin\"> There is an error in email or password</mat-error>\n\n            <div class=\"form-group\">\n            <mat-form-field class=\"input\">\n              <input matInput placeholder=\"Username\" id=\"email\"\n                     formControlName=\"email\"\n                     class=\"form-control\" required\n                     [ngClass]=\"{\n              'is-invalid': submitted && loginForm.controls.email.errors\n            }\">\n              <mat-error *ngIf=\"loginForm.controls.email.errors\"> There is an error in email</mat-error>\n\n            </mat-form-field>\n          </div>\n            <div class=\"form-group\">\n              <mat-form-field class=\"input\">\n                <input matInput type=\"password\" placeholder=\"Password*\" id=\"password\"\n                       formControlName=\"password\"\n                       class=\"form-control\"\n                       [ngClass]=\"{\n              'is-invalid': submitted && loginForm.controls.password.errors\n            }\">\n                <mat-error *ngIf=\"loginForm.controls.password.errors\"> There is an error in password</mat-error>\n\n              </mat-form-field>\n            </div>\n\n        <div class=\"botones-login\" fxLayout=\"row\" fxLayoutAlign=\"space-between\">\n          <button mat-raised-button [disabled]=\"loginForm.invalid\" color = \"primary\">\n            Login\n          </button>\n          <button mat-raised-button  color = \"primary\"  routerLink=\"/forgot-password\">\n            Remember password\n          </button>\n        </div>\n          </div>\n\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/views/signin/signin.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/signin/signin.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input {\n  width: 100%; }\n\n.container {\n  margin-top: 1.5em; }\n\n.div-login {\n  width: 50%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2lnbmluL0M6XFxVc2Vyc1xcU2FyYVxcRG9jdW1lbnRzXFxNQVNURVJcXDIgc2VtZXN0cmVcXEZyb250LWVuZCBhdmFuemFkb1xcUEVDM1xcVU9DSm9iL3NyY1xcYXBwXFx2aWV3c1xcc2lnbmluXFxzaWduaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXLEVBQUE7O0FBRWI7RUFDRSxpQkFBaUIsRUFBQTs7QUFFbkI7RUFDRSxVQUFTO0VBQ1QsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3Mvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDEuNWVtO1xyXG59XHJcbi5kaXYtbG9naW57XHJcbiAgd2lkdGg6NTAlO1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/views/signin/signin.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/signin/signin.component.ts ***!
  \**************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared_states_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/states/auth/actions/auth.actions */ "./src/app/shared/states/auth/actions/auth.actions.ts");





var SigninComponent = /** @class */ (function () {
    function SigninComponent(store$) {
        this.store$ = store$;
        this.submitted = false;
        this.errorLogin = false;
    }
    SigninComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            rememberMe: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](false),
        });
    };
    SigninComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.store$.dispatch(new src_app_shared_states_auth_actions_auth_actions__WEBPACK_IMPORTED_MODULE_4__["Identification"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.loginForm.value)));
    };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/views/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.scss */ "./src/app/views/signin/signin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/views/signin/signin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/signin/signin.module.ts ***!
  \***********************************************/
/*! exports provided: SigninModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninModule", function() { return SigninModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _signin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signin-routing.module */ "./src/app/views/signin/signin-routing.module.ts");
/* harmony import */ var _signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin.component */ "./src/app/views/signin/signin.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");





var SigninModule = /** @class */ (function () {
    function SigninModule() {
    }
    SigninModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"]],
            imports: [src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _signin_routing_module__WEBPACK_IMPORTED_MODULE_2__["SigninRoutingModule"]],
            providers: []
        })
    ], SigninModule);
    return SigninModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-signin-signin-module.js.map