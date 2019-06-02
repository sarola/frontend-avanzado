(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./views/dashboard/dashboard.module": [
		"./src/app/views/dashboard/dashboard.module.ts",
		"views-dashboard-dashboard-module"
	],
	"./views/favorites/favorites.module": [
		"./src/app/views/favorites/favorites.module.ts",
		"views-favorites-favorites-module"
	],
	"./views/forgot-password/forgot-password.module": [
		"./src/app/views/forgot-password/forgot-password.module.ts",
		"views-forgot-password-forgot-password-module"
	],
	"./views/offers/offers.module": [
		"./src/app/views/offers/offers.module.ts",
		"common",
		"views-offers-offers-module"
	],
	"./views/profile/profile.module": [
		"./src/app/views/profile/profile.module.ts",
		"common",
		"views-profile-profile-module"
	],
	"./views/signin/signin.module": [
		"./src/app/views/signin/signin.module.ts",
		"views-signin-signin-module"
	],
	"./views/signup/signup.module": [
		"./src/app/views/signup/signup.module.ts",
		"views-signup-signup-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: rootRouterConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rootRouterConfig", function() { return rootRouterConfig; });
/* harmony import */ var _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/components/admin-layout/admin-layout.component */ "./src/app/shared/components/admin-layout/admin-layout.component.ts");

/* import { AdminLayoutComponent } from './shared/components/layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './shared/components/layouts/auth-layout/auth-layout.component';
import { AuthGuard } from './shared/services/auth/auth.guard'; */
var rootRouterConfig = [
    {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
    },
    {
        path: 'signin',
        loadChildren: './views/signin/signin.module#SigninModule',
        data: { title: 'Signin' }
    },
    {
        path: 'forgot-password',
        loadChildren: './views/forgot-password/forgot-password.module#ForgotPasswordModule',
        data: { title: 'Forgot Password' }
    },
    {
        path: 'signup',
        loadChildren: './views/signup/signup.module#SignupModule',
        data: { title: 'Signup' }
    },
    {
        path: 'admin',
        component: _shared_components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_0__["AdminLayoutComponent"],
        /* canActivate: [AuthGuard], */
        children: [
            {
                path: 'dashboard',
                loadChildren: './views/dashboard/dashboard.module#DashboardModule',
                data: { title: 'Dashboard', breadcrumb: 'DASHBOARD' }
            },
            {
                path: 'favorites',
                loadChildren: './views/favorites/favorites.module#FavoritesModule',
                data: { title: 'Favorites', breadcrumb: 'FAVORITES' }
            },
            {
                path: 'profile',
                loadChildren: './views/profile/profile.module#ProfileModule',
                data: { title: 'Material', breadcrumb: 'MATERIAL' }
            },
            {
                path: 'offers',
                loadChildren: './views/offers/offers.module#OffersModule',
                data: { title: 'Offers', breadcrumb: 'Offers' }
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'sessions/404'
    }
];


/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'UOCJob';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _shared_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/core.module */ "./src/app/shared/core.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/inmemory-db/fake-backend.service */ "./src/app/shared/inmemory-db/fake-backend.service.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                _shared_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_6__["rootRouterConfig"], { useHash: false }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__["HttpClientInMemoryWebApiModule"].forRoot(_shared_inmemory_db_fake_backend_service__WEBPACK_IMPORTED_MODULE_9__["FakeBackendService"], {
                    dataEncapsulation: false
                }),
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"]
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/shared/app.settings.ts":
/*!****************************************!*\
  !*** ./src/app/shared/app.settings.ts ***!
  \****************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
/* import * as moment from 'moment'; */
var AppSettings = /** @class */ (function () {
    function AppSettings() {
    }
    AppSettings.getAvatar = function (user, size) {
        if (size === void 0) { size = 'sm'; }
        if (!user || !user.avatar_hash) {
            return this.IMAGES.UNKNOWN_FACE;
        }
        var _a = user.avatar_hash.split('.'), hash = _a[0], extension = _a[1];
        return "" + this.STATIC_AVATAR_ENDPOINT + user.uid + "/" + hash + size + "." + extension;
    };
    AppSettings.APP_NAME = 'PoliJob';
    AppSettings.APP_LOCALSTORAGE_TOKEN = 'PoliJob_Token';
    AppSettings.APP_VERSION = '0.1.0';
    AppSettings.API_ENDPOINT = 'api/';
    AppSettings.STATIC_ENDPOINT = AppSettings.API_ENDPOINT + 'static/';
    AppSettings.STATIC_AVATAR_ENDPOINT = AppSettings.STATIC_ENDPOINT + 'images/avatar/';
    AppSettings.API_ENDPOINT_APP = AppSettings.API_ENDPOINT + 'app/';
    AppSettings.API_ENDPOINT_USER = AppSettings.API_ENDPOINT + 'user';
    AppSettings.API_ENDPOINT_USERS = AppSettings.API_ENDPOINT + 'users';
    AppSettings.API_ENDPOINT_OFFERS = AppSettings.API_ENDPOINT + 'offers';
    AppSettings.API_ENDPOINT_USER_ME = AppSettings.API_ENDPOINT + 'user-me';
    AppSettings.API_ENDPOINT_USER_CREATE = AppSettings.API_ENDPOINT_USER + '/create';
    AppSettings.API_ENDPOINT_CONFIRM_USER = AppSettings.API_ENDPOINT_USER + '/confirm-user';
    AppSettings.API_ENDPOINT_USER_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD = AppSettings.API_ENDPOINT_USER + '/request-remember-password';
    AppSettings.API_ENDPOINT_USER_REQUEST_USER_AVATAR = AppSettings.API_ENDPOINT_USER + '/request-avatar-user';
    AppSettings.API_ENDPOINT_USER_UPLOAD_AVATAR = AppSettings.API_ENDPOINT_USER + '/upload-avatar';
    AppSettings.API_ENDPOINT_USER_SENDMAIL = AppSettings.API_ENDPOINT_USER + '/sendmail';
    AppSettings.API_ENDPOINT_AUTH = AppSettings.API_ENDPOINT + 'auth/';
    AppSettings.API_ENDPOINT_AUTH_LOCAL = AppSettings.API_ENDPOINT + 'auth/local/';
    AppSettings.APP_QUILL_EDITOR_CONFIGURATION = {
        toolbar: [
            ['bold', 'italic', 'underline'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ direction: 'rtl' }],
            ['clean'],
            ['link']
        ]
    };
    AppSettings.APP_DEFAULT_MOMENT_LOCALE = 'es';
    AppSettings.GUESS_ROL = {
        value: 'guess',
        text: 'settings.rol.GUESS'
    };
    AppSettings.STUDENT_ROL = {
        value: 'student',
        text: 'settings.rol.STUDENT'
    };
    AppSettings.ADMINISTRATOR_ROL = {
        value: 'admin',
        text: 'settings.rol.ADMINISTRATOR'
    };
    AppSettings.COMPANY_ROL = {
        value: 'company',
        text: 'settings.rol.COMPANY'
    };
    AppSettings.ROLES = [
        AppSettings.GUESS_ROL,
        AppSettings.STUDENT_ROL,
        AppSettings.COMPANY_ROL,
        AppSettings.ADMINISTRATOR_ROL
    ];
    AppSettings.USER_STATUS_PENDING = {
        value: 'pending',
        text: 'settings.status.PENDING'
    };
    AppSettings.USER_STATUS_ACTIVE = {
        value: 'active',
        text: 'settings.status.ACTIVE'
    };
    AppSettings.USER_STATUS_INACTIVE = {
        value: 'inactive',
        text: 'settings.status.INACTIVE'
    };
    AppSettings.USER_STATUS = [
        AppSettings.USER_STATUS_PENDING,
        AppSettings.USER_STATUS_ACTIVE,
        AppSettings.USER_STATUS_INACTIVE
    ];
    AppSettings.FORMAT_DATE = 'MM/DD/YYYY';
    AppSettings.IMAGES = {
        UNKNOWN_IMAGE: 'assets/images/image-not-found.png',
        UNKNOWN_FACE: 'assets/images/face-unknown.png',
        UNKNOWN_TEAM: 'assets/images/image-not-found.png'
    };
    AppSettings.NOTIFICATIONS = {
        DEFAULT_TIME: 2000
    };
    return AppSettings;
}());



/***/ }),

/***/ "./src/app/shared/components/admin-layout/admin-layout.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shared/components/admin-layout/admin-layout.component.ts ***!
  \**************************************************************************/
/*! exports provided: AdminLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLayoutComponent", function() { return AdminLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AdminLayoutComponent = /** @class */ (function () {
    function AdminLayoutComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Small, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].XSmall])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    AdminLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin-layout',
            template: __webpack_require__(/*! ./admin-layout.template.html */ "./src/app/shared/components/admin-layout/admin-layout.template.html"),
            styles: [__webpack_require__(/*! ./admin-layout.scss */ "./src/app/shared/components/admin-layout/admin-layout.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/admin-layout/admin-layout.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/admin-layout/admin-layout.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%; }\n\n.sidenav {\n  width: 200px; }\n\n.sidenav .mat-toolbar {\n  background: inherit; }\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1; }\n\n.topnav-icon {\n  text-decoration: none;\n  display: flex;\n  color: #fff; }\n\n.sidenav-icon {\n  text-decoration: none;\n  padding: 0 10px; }\n\n.nav-spacer {\n  flex: 1 1 auto; }\n\n.mat-sidenav-content > .mat-toolbar > div > a:hover {\n  color: #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvYWRtaW4tbGF5b3V0L0M6XFxVc2Vyc1xcU2FyYVxcRG9jdW1lbnRzXFxNQVNURVJcXDIgc2VtZXN0cmVcXEZyb250LWVuZCBhdmFuemFkb1xcUEVDM1xcVU9DSm9iL3NyY1xcYXBwXFxzaGFyZWRcXGNvbXBvbmVudHNcXGFkbWluLWxheW91dFxcYWRtaW4tbGF5b3V0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixVQUFVLEVBQUE7O0FBWVo7RUFDRSxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLFdBQVcsRUFBQTs7QUFHYjtFQUNFLHFCQUFxQjtFQUNyQixlQUFlLEVBQUE7O0FBR2pCO0VBQ0UsY0FBYyxFQUFBOztBQUtoQjtFQUNFLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2FkbWluLWxheW91dC9hZG1pbi1sYXlvdXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi8vLnNpZGVuYXYtY29udGFpbmVyIHtcclxuLy8gIGhlaWdodDogMTAwJTtcclxuLy99XHJcbi8vXHJcbi8vLnNpZGVuYXYge1xyXG4vLyAgd2lkdGg6IDI1MHB4O1xyXG4vLyAgYm94LXNoYWRvdzogM3B4IDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4yNCk7XHJcbi8vfVxyXG4udG9wbmF2LWljb24ge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2lkZW5hdi1pY29uIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcblxyXG4ubmF2LXNwYWNlciB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbn1cclxuLy8ubWFpbi1jb250YWluZXJ7XHJcbi8vICBsZWZ0OiAyMHB4O1xyXG4vL31cclxuLm1hdC1zaWRlbmF2LWNvbnRlbnQgPiAubWF0LXRvb2xiYXIgPiBkaXYgPiBhOmhvdmVyIHtcclxuICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcclxuLy8gIC5tYXQtc2lkZW5hdntcclxuLy8gICAgd2lkdGg6IGF1dG87XHJcbi8vICAgIC5tYXQtbGlzdC1pdGVte1xyXG4vLyAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vLyAgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4vLyAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuLy8gIH1cclxuLy9cclxuLy99XHJcbi8vXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcclxuLy8gIGZvb3RlcntcclxuLy8gICAgZm9udC1zaXplOiAxNHB4O1xyXG4vLyAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5ICFpbXBvcnRhbnQ7XHJcbi8vICAgIHAge1xyXG4vLyAgICAgIG1hcmdpbi1sZWZ0OiAyZW0gIWltcG9ydGFudDtcclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vLyAgLm1haW4tY29udGFpbmVye1xyXG4vLyAgICBsZWZ0OiAwcHg7XHJcbi8vICAgIHBhZGRpbmctbGVmdDoxMHB4O1xyXG4vLyAgfVxyXG4vL31cclxuXHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuLy8gIC5tYXQtc2lkZW5hdntcclxuLy8gICAgd2lkdGg6IGF1dG87XHJcbi8vICAgIC5tYXQtbGlzdC1pdGVte1xyXG4vLyAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vLyAgZm9vdGVyIHtcclxuLy8gICAgb3ZlcmZsb3c6c2Nyb2xsO1xyXG4vLyAgICBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgIHB7XHJcbi8vICAgICAgd2lkdGg6IDUwJTtcclxuLy8gICAgfVxyXG4vLyAgfVxyXG4vLyAgLm1hdC1zaWRlbmF2LWNvbnRlbnQge1xyXG4vLyAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuLy8gIH1cclxuLy9cclxuLy99XHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIHtcclxuLy8gIC5tYWluLWNvbnRhaW5lcntcclxuLy8gICAgbGVmdDogMjBweDtcclxuLy8gIH1cclxuLy99XHJcbi8vQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogIDI3MHB4KSB7XHJcbi8vICAuZml4LW5hdntcclxuLy8gICAgZm9udC1zaXplOiAxMXB4ICFpbXBvcnRhbnQ7XHJcbi8vICB9XHJcbi8vfVxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/shared/components/admin-layout/admin-layout.template.html":
/*!***************************************************************************!*\
  !*** ./src/app/shared/components/admin-layout/admin-layout.template.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"sidenav-container\">\n    <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\"\n                 [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n                 [mode]=\"(isHandset$ | async) ? 'over' : 'side'\"\n                 [opened]=\"!(isHandset$ | async)\">\n        <mat-toolbar position=\"start\">Menu</mat-toolbar>\n        <mat-nav-list>\n            <a mat-list-item routerLink=\"/admin/profile\">Profile</a>\n            <a mat-list-item routerLink=\"/admin/offers\">Offers</a>\n            <a mat-list-item routerLink=\"/admin/config\">Config</a>\n            <a mat-list-item routerLink=\"/admin/offers/my-offers\">My offers</a>\n        </mat-nav-list>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <mat-toolbar class=\"fix-nav\"  color=\"primary\">\n            <button\n                    type=\"button\"\n                    aria-label=\"Toggle sidenav\"\n                    mat-icon-button\n                    (click)=\"drawer.toggle()\"\n                    *ngIf=\"isHandset$ | async\">\n                <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n            </button>\n            <div fxFlex fxLayout=\"row-reverse\">\n            <a mat-button routerLink=\"/\"><span>Logout</span></a>\n            <a mat-button routerLink=\"/admin/\"><span>Dashboard</span></a>\n            </div>\n\n        </mat-toolbar>\n        <!-- Add Content Here -->\n\n        <div class=\"main-container\">\n            <div class=\"div-principal\">\n                <router-outlet></router-outlet>\n                <footer class=\"footer\">\n                    <p>Trabajo realizado por Sara Paz Fernández</p>\n                    <p>Asignatura: Desarrollo Front-end Avanzado</p>\n                </footer>\n            </div>\n\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>\n\n\n\n<!--<mat-sidenav-container class=\"sidenav-container fixed-top\">-->\n    <!--<mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"true\" role=\"navigation\" mode=\"side\"-->\n                 <!--opened>-->\n        <!--<mat-toolbar color=\"primary\">Menu</mat-toolbar>-->\n        <!--<mat-nav-list>-->\n            <!--<a mat-list-item routerLink=\"/admin/profile\">Profile</a>-->\n            <!--<a mat-list-item routerLink=\"/admin/offers\">Offers</a>-->\n            <!--<a mat-list-item routerLink=\"/admin/config\">Config</a>-->\n            <!--<a mat-list-item routerLink=\"/admin/offers/my-offers\">My offers</a>-->\n        <!--</mat-nav-list>-->\n    <!--</mat-sidenav>-->\n    <!--<mat-sidenav-content fxFlex fxLayout=\"column\">-->\n        <!--<mat-toolbar color=\"primary\" class=\"fix-nav\"  fxLayout=\"row-reverse\" >-->\n            <!--&lt;!&ndash;<button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button>&ndash;&gt;-->\n                <!--&lt;!&ndash;<mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>()\"&ndash;&gt;-->\n            <!--&lt;!&ndash;</button>&ndash;&gt;-->\n                <!--<div >-->\n                <!--<a mat-button routerLink=\"/\"><span>Logout</span></a>-->\n                <!--<a mat-button routerLink=\"/admin/\"><span>Dashboard</span></a>-->\n                <!--</div>-->\n            <!--<span class=\"nav-spacer\"></span>-->\n            <!--&lt;!&ndash;-->\n            <!--<mat-icon class=\"nav-icon\">person</mat-icon>-->\n            <!--<span class=\"nav-spacer\"></span>-->\n            <!--<mat-icon class=\"nav-icon\">notifications</mat-icon>-->\n            <!--<mat-icon class=\"nav-icon\">apps</mat-icon>-->\n            <!--<mat-icon class=\"nav-icon\">fullscreen</mat-icon>-->\n            <!--<mat-icon class=\"nav-icon\">flag</mat-icon>-->\n            <!--<mat-icon class=\"nav-icon\">search</mat-icon>-->\n            <!--<mat-icon class=\"nav-icon\">account_circle</mat-icon> &ndash;&gt;-->\n\n\n        <!--</mat-toolbar>-->\n        <!--<div class=\"main-container\"><div class=\"div-principal\"><router-outlet></router-outlet></div>-->\n\n            <!--<footer class=\"footer\">-->\n                <!--<p>Trabajo realizado por Sara Paz Fernández</p>-->\n                <!--<p>Asignatura: Desarrollo Front-end Avanzado</p>-->\n            <!--</footer>-->\n        <!--</div>-->\n\n    <!--</mat-sidenav-content>-->\n\n<!--</mat-sidenav-container>-->\n\n"

/***/ }),

/***/ "./src/app/shared/core.module.ts":
/*!***************************************!*\
  !*** ./src/app/shared/core.module.ts ***!
  \***************************************/
/*! exports provided: CORE_SERVICES, CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CORE_SERVICES", function() { return CORE_SERVICES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _states_root_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./states/root.reducer */ "./src/app/shared/states/root.reducer.ts");
/* harmony import */ var _states_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./states/auth/effects/auth.effects */ "./src/app/shared/states/auth/effects/auth.effects.ts");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _states_router_effects_router_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./states/router/effects/router.effects */ "./src/app/shared/states/router/effects/router.effects.ts");
/* harmony import */ var _states_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./states/user/effects/user.effects */ "./src/app/shared/states/user/effects/user.effects.ts");
/* harmony import */ var _states_app_effects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./states/app/effects */ "./src/app/shared/states/app/effects/index.ts");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/profile.service */ "./src/app/shared/services/profile.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
/* harmony import */ var _services_offers_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/offers.service */ "./src/app/shared/services/offers.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _states_offers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./states/offers */ "./src/app/shared/states/offers/index.ts");



/* import { JWTInterceptor } from './interceptors/jwt.interceptor'; */
/* import { JwtExpiredInterceptor } from './interceptors/jwt-expired.interceptor'; */









/* import { UsersEffects } from './states/users/effects'; */
/* import { UsersService } from '../views/users/shared/users.service'; */

/* import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'; */





/* export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
} */
var CORE_SERVICES = [
    _services_profile_service__WEBPACK_IMPORTED_MODULE_12__["ProfileService"],
    _services_offers_service__WEBPACK_IMPORTED_MODULE_15__["OffersService"],
    _services_notifications_service__WEBPACK_IMPORTED_MODULE_14__["NotificationsService"],
    _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"]
    /* {
      provide: HTTP_INTERCEPTORS,
      useClass: JWTInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtExpiredInterceptor,
      multi: true,
    }, */
    /*   { provide: MAT_DATE_LOCALE, useValue: 'ja-JP' },
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: RouterStateSerializer, useClass: CustomSerializer }, */
    /* {
      provide: MatPaginatorIntl,
      useClass: DatatablePaginatorIntl,
      deps: [TranslateService],
    }, */
];
var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_states_root_reducer__WEBPACK_IMPORTED_MODULE_6__["reducers"], { metaReducers: _states_root_reducer__WEBPACK_IMPORTED_MODULE_6__["metaReducers"] }),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_8__["StoreRouterConnectingModule"].forRoot({ stateKey: 'router' }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_5__["StoreDevtoolsModule"].instrument({ maxAge: 50 }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["EffectsModule"].forRoot([
                    _states_app_effects__WEBPACK_IMPORTED_MODULE_11__["AppEffects"],
                    _states_auth_effects_auth_effects__WEBPACK_IMPORTED_MODULE_7__["AuthEffects"],
                    _states_user_effects_user_effects__WEBPACK_IMPORTED_MODULE_10__["UserEffects"],
                    _states_offers__WEBPACK_IMPORTED_MODULE_17__["OffersEffects"],
                    _states_router_effects_router_effects__WEBPACK_IMPORTED_MODULE_9__["RouterEffects"]
                ])
                /*  TranslateModule.forRoot({
                  loader: {
                    provide: TranslateLoader,
                    useFactory: HttpLoaderFactory,
                    deps: [HttpClient]
                  }
                }) */
                // InMemoryWebApiModule.forRoot(InMemoryDataService, { passThruUnknownUrl: true }),
            ],
            providers: CORE_SERVICES
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/shared/inmemory-db/fake-backend.service.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/inmemory-db/fake-backend.service.ts ***!
  \************************************************************/
/*! exports provided: FakeBackendService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FakeBackendService", function() { return FakeBackendService; });
var FakeBackendService = /** @class */ (function () {
    function FakeBackendService() {
    }
    FakeBackendService.prototype.createDb = function () {
        var users = [
            {
                id: 1,
                username: 'carloscg',
                name: 'Carlos',
                surname: 'Caballero',
                birthdate: new Date('10/01/1981'),
                phone: '644039911',
                phone2: '690940321',
                email: 'carlos.caballero@gmail.com',
                password: '1234',
                roles: ['student'],
                documentType: { uid: 1, name: 'NIF' },
                documentNumber: '26808956H',
                license: 'B1',
                aboutMe: 'LOREM IPSUM',
                otherCompetences: 'LOREM IPSUM',
                address: {
                    street: 'Urbanización las Areanas - 45',
                    province: { uid: 4, name: 'Cádiz' },
                    municipe: { uid: 6, name: 'Chiclana de la Frontera' }
                },
                avatar_hash: 'assets/img/perfil.png',
                studies: [
                    {
                        uid: 1,
                        level: { uid: 1, name: 'Ciclo Formativo' },
                        category: { uid: 2, name: 'Informática y comunicaciones' },
                        institution: {
                            uid: 2,
                            name: 'IES Politécnico Jesús Marin'
                        },
                        title: {
                            uid: 2,
                            name: 'Administracion de sistemas informaticos y redes'
                        },
                        grade: {
                            uid: 3,
                            name: 'Ciclo Formativo de Grado Superior'
                        },
                        date: new Date(2001, 2, 2),
                        dual: false,
                        bilingue: true,
                        certificate: true
                    },
                    {
                        uid: 2,
                        institution: {
                            uid: 2,
                            name: 'IES Politécnico Jesús Marin'
                        },
                        category: { uid: 2, name: 'Informática y comunicaciones' },
                        level: { uid: 1, name: 'Ciclo Formativo' },
                        title: {
                            uid: 1,
                            name: 'Técnico Superior en Desarrollo de Aplicaciones Web'
                        },
                        grade: { uid: 3, name: 'Ciclo Formativo de Grado Superior' },
                        date: new Date(2004, 7, 15),
                        dual: true,
                        bilingue: false,
                        certificate: false
                    }
                ],
                experiencies: [],
                languages: [
                    {
                        uid: 1,
                        level: { uid: 5, name: 'C1' },
                        name: { uid: 1, name: 'Inglés' },
                        date: new Date('3/06/2005')
                    },
                    {
                        uid: 2,
                        level: { uid: 4, name: 'B2' },
                        name: { uid: 2, name: 'Francés' },
                        date: new Date('3/06/1998')
                    }
                ],
                offers: []
                /*         experiences: [
                  {
                    id: 0,
                    eid: 0,
                    empresa: 'Suma',
                    date_incio: '1548320228',
                    date_fin: '1548320228',
                    puesto: 'Junior',
                    tareas: 'Desarrollador front-end'
                  },
                  {
                    id: 0,
                    eid: 1,
                    empresa: 'Indra',
                    date_incio: '1548320228',
                    date_fin: '1548320228',
                    puesto: 'Ingeniero',
                    tareas: 'Desarrollador back-end'
                  }
                ],
                languages: [
                  { id: 0, lid: 0, idioma: 'Inglés', nivel: 'B2', date: '30/06/2008' },
                  {
                    id: 0,
                    lid: 1,
                    idioma: 'Portugués',
                    nivel: 'A2',
                    date: '30/06/2013'
                  }
                ]
             */
            }
        ];
        var offers = [
            {
                id: 1,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Programador Jr Java',
                    description: 'Programación y prueba unitaria en Java'
                },
                province: { uid: 1, name: 'Málaga' },
                municipe: { uid: 7, name: 'Estepona' },
                date: new Date('09/09/2006'),
                category: { uid: 2, name: 'Informática y Comunicaciones' },
                title: [
                    { uid: 1, name: 'Desarrollo Aplicaciones Web' },
                    { uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }
                ]
            },
            {
                id: 2,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Comercial',
                    description: 'Relaciones con los clientes y atención a las redes sociales.'
                },
                province: { uid: 1, name: 'Málaga' },
                municipe: { uid: 8, name: 'Campanillas (PTA)' },
                date: new Date('02/09/2016'),
                category: { uid: 4, name: 'Comercio y Marketing' },
                title: [{ uid: 5, name: 'Gestión Comercial y Empresarial' }]
            },
            {
                id: 3,
                company: {
                    uid: 33,
                    name: 'Coritel'
                },
                job: {
                    name: 'Analista Programador Java',
                    description: 'Análisis funcional y diseño técnico/detallado de componentes'
                },
                province: { uid: 5, name: 'Granada' },
                municipe: { uid: 9, name: 'Motril' },
                date: new Date('11/07/2016'),
                category: { uid: 2, name: 'Informática y Comunicaciones' },
                title: [{ uid: 4, name: 'Desarrollo Aplicaciones Multiplataforma' }]
            },
            {
                id: 4,
                company: {
                    uid: 35,
                    name: 'Indra'
                },
                job: {
                    name: 'Administrativo',
                    description: 'Gestión de cartera de clientes.'
                },
                province: { uid: 2, name: 'Sevilla' },
                municipe: { uid: 10, name: 'Osuna' },
                date: new Date('01/12/2015'),
                category: { uid: 5, name: 'Administración y Gestión' },
                title: [{ uid: 6, name: 'Empresariales' }]
            }
        ];
        return { users: users, offers: offers };
    };
    return FakeBackendService;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["FlexLayoutModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.component.ts ***!
  \**********************************************************************/
/*! exports provided: AppComfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComfirmComponent", function() { return AppComfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'; */

var AppComfirmComponent = /** @class */ (function () {
    function AppComfirmComponent() {
    }
    AppComfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: "\n    <h1 matDialogTitle>{{ data.title }}</h1>\n    <div mat-dialog-content>{{ data.message }}</div>\n    <div mat-dialog-actions>\n      <button\n        type=\"button\"\n        mat-raised-button\n        color=\"primary\"\n        (click)=\"dialogRef.close(true)\"\n      >\n        OK\n      </button>\n      &nbsp;\n      <span fxFlex></span>\n      <button\n        type=\"button\"\n        color=\"accent\"\n        mat-raised-button\n        (click)=\"dialogRef.close(false)\"\n      >\n        Cancel\n      </button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComfirmComponent);
    return AppComfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/app-confirm/app-confirm.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/services/app-confirm/app-confirm.service.ts ***!
  \********************************************************************/
/*! exports provided: AppConfirmService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfirmService", function() { return AppConfirmService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

/* import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material'; */

var AppConfirmService = /** @class */ (function () {
    function AppConfirmService( /* private dialog: MatDialog */) {
    }
    AppConfirmService.prototype.confirm = function (data) {
        if (data === void 0) { data = {}; }
        /*  data.title = data.title || 'Confirm';
        data.message = data.message || 'Are you sure?';
        let dialogRef: MatDialogRef<AppComfirmComponent>;
        dialogRef = this.dialog.open(AppComfirmComponent, {
          width: '380px',
          disableClose: true,
          data: { title: data.title, message: data.message }
        });
        return dialogRef.afterClosed(); */
    };
    AppConfirmService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppConfirmService);
    return AppConfirmService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.login = function (_a) {
        var email = _a.email, password = _a.password;
        //Mock - Should return a Token
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(true);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/services/notifications.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/notifications.service.ts ***!
  \**********************************************************/
/*! exports provided: NotificationsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsService", function() { return NotificationsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/* import { MatSnackBar } from '@angular/material'; */
var NotificationsService = /** @class */ (function () {
    function NotificationsService( /* private snackBar: MatSnackBar */) {
    }
    NotificationsService.prototype.showNotification = function (message, action) {
        console.log('message:', message, ' action:', action);
        /*     this.snackBar.open(message, action, {
          duration: AppSettings.NOTIFICATIONS.DEFAULT_TIME
        }); */
    };
    NotificationsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotificationsService);
    return NotificationsService;
}());



/***/ }),

/***/ "./src/app/shared/services/offers.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/offers.service.ts ***!
  \***************************************************/
/*! exports provided: OffersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersService", function() { return OffersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var OffersService = /** @class */ (function () {
    function OffersService(http /* , private store$: Store<AppStore> */) {
        this.http = http;
    }
    OffersService.prototype.getOffers = function () {
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_OFFERS);
    };
    OffersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] /* , private store$: Store<AppStore> */])
    ], OffersService);
    return OffersService;
}());



/***/ }),

/***/ "./src/app/shared/services/profile.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/profile.service.ts ***!
  \****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.settings */ "./src/app/shared/app.settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _states_user_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../states/user/actions */ "./src/app/shared/states/user/actions/index.ts");






var ProfileService = /** @class */ (function () {
    function ProfileService(http, store$) {
        this.http = http;
        this.store$ = store$;
    }
    ProfileService.prototype.getUsers = function (id) {
        return this.http.get(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS + "/" + id);
    };
    ProfileService.prototype.loadProfile = function () {
        return this.getUsers(1);
    };
    ProfileService.prototype.logout = function () {
        this.store$.dispatch(new _states_user_actions__WEBPACK_IMPORTED_MODULE_5__["Logout"]());
    };
    ProfileService.prototype.updateProfile = function (profile /* User */) {
        return this.http.put(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USERS, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, profile));
    };
    ProfileService.prototype.signupProfile = function (profile /* UserOptions */) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_CREATE, profile);
    };
    ProfileService.prototype.requestRememberPassword = function (uid) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REQUEST_REMEMBER_PASSWORD, uid);
    };
    ProfileService.prototype.rememberPassword = function (uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_USER_REMEMBER_PASSWORD, uidAndHash);
    };
    ProfileService.prototype.confirmUser = function (uidAndHash) {
        return this.http.post(_app_settings__WEBPACK_IMPORTED_MODULE_2__["AppSettings"].API_ENDPOINT_CONFIRM_USER, uidAndHash);
    };
    ProfileService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]])
    ], ProfileService);
    return ProfileService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.component */ "./src/app/shared/services/app-confirm/app-confirm.component.ts");
/* harmony import */ var _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin-layout/admin-layout.component */ "./src/app/shared/components/admin-layout/admin-layout.component.ts");
/* harmony import */ var _services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");






/*
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar'; */
// COMPONENTS


// DIRECTIVES
// PIPES
// SERVICES

var declarations = [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__["AppComfirmComponent"], _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"]];
var exports = [
    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
    _services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__["AppComfirmComponent"],
    _components_admin_layout_admin_layout_component__WEBPACK_IMPORTED_MODULE_7__["AdminLayoutComponent"],
    _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
];
var providers = [_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_8__["AppConfirmService"]];
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]],
            entryComponents: [_services_app_confirm_app_confirm_component__WEBPACK_IMPORTED_MODULE_6__["AppComfirmComponent"]],
            providers: providers,
            declarations: declarations,
            exports: exports
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/states/app/effects/app.effects.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/states/app/effects/app.effects.ts ***!
  \**********************************************************/
/*! exports provided: AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return AppEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppEffects = /** @class */ (function () {
    function AppEffects() {
    }
    AppEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppEffects);
    return AppEffects;
}());



/***/ }),

/***/ "./src/app/shared/states/app/effects/index.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/states/app/effects/index.ts ***!
  \****************************************************/
/*! exports provided: effects, AppEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _app_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.effects */ "./src/app/shared/states/app/effects/app.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppEffects", function() { return _app_effects__WEBPACK_IMPORTED_MODULE_0__["AppEffects"]; });


var effects = [_app_effects__WEBPACK_IMPORTED_MODULE_0__["AppEffects"]];



/***/ }),

/***/ "./src/app/shared/states/app/reducers/app.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/states/app/reducers/app.reducer.ts ***!
  \***********************************************************/
/*! exports provided: initialState, reducer, getProvinces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProvinces", function() { return getProvinces; });
var initialState = {
    provinces: []
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    return state;
}
var getProvinces = function (state) { return state.provinces; };


/***/ }),

/***/ "./src/app/shared/states/app/reducers/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/states/app/reducers/index.ts ***!
  \*****************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _app_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.reducer */ "./src/app/shared/states/app/reducers/app.reducer.ts");

var reducers = {
    app: _app_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/shared/states/auth/actions/auth.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/states/auth/actions/auth.actions.ts ***!
  \************************************************************/
/*! exports provided: IDENTIFICATION, Identification, IDENTIFICATION_SUCCESS, IdentificationSuccess, IDENTIFICATION_FAILED, IdentificationFailed, IDENTIFICATION_LOGOUT, IdentificationLogout, IDENTIFICATION_REFRESH, IdentificationRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION", function() { return IDENTIFICATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Identification", function() { return Identification; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_SUCCESS", function() { return IDENTIFICATION_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationSuccess", function() { return IdentificationSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_FAILED", function() { return IDENTIFICATION_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationFailed", function() { return IdentificationFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_LOGOUT", function() { return IDENTIFICATION_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationLogout", function() { return IdentificationLogout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_REFRESH", function() { return IDENTIFICATION_REFRESH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentificationRefresh", function() { return IdentificationRefresh; });
var IDENTIFICATION = '[Auth] Identification';
var Identification = /** @class */ (function () {
    function Identification(payload) {
        this.payload = payload;
        this.type = IDENTIFICATION;
    }
    return Identification;
}());

var IDENTIFICATION_SUCCESS = '[Auth] Identification success';
var IdentificationSuccess = /** @class */ (function () {
    function IdentificationSuccess(payload) {
        this.payload = payload;
        this.type = IDENTIFICATION_SUCCESS;
    }
    return IdentificationSuccess;
}());

var IDENTIFICATION_FAILED = '[Auth] Identification failed';
var IdentificationFailed = /** @class */ (function () {
    function IdentificationFailed(payload) {
        this.payload = payload;
        this.type = IDENTIFICATION_FAILED;
    }
    return IdentificationFailed;
}());

var IDENTIFICATION_LOGOUT = '[Auth] Identification logout';
var IdentificationLogout = /** @class */ (function () {
    function IdentificationLogout() {
        this.type = IDENTIFICATION_LOGOUT;
    }
    return IdentificationLogout;
}());

var IDENTIFICATION_REFRESH = '[Auth] Identification refresh';
var IdentificationRefresh = /** @class */ (function () {
    function IdentificationRefresh(payload) {
        this.payload = payload;
        this.type = IDENTIFICATION_REFRESH;
    }
    return IdentificationRefresh;
}());



/***/ }),

/***/ "./src/app/shared/states/auth/actions/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/states/auth/actions/index.ts ***!
  \*****************************************************/
/*! exports provided: IDENTIFICATION, Identification, IDENTIFICATION_SUCCESS, IdentificationSuccess, IDENTIFICATION_FAILED, IdentificationFailed, IDENTIFICATION_LOGOUT, IdentificationLogout, IDENTIFICATION_REFRESH, IdentificationRefresh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.actions */ "./src/app/shared/states/auth/actions/auth.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IDENTIFICATION"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Identification", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["Identification"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_SUCCESS", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IDENTIFICATION_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentificationSuccess", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IdentificationSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_FAILED", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IDENTIFICATION_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentificationFailed", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IdentificationFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_LOGOUT", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IDENTIFICATION_LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentificationLogout", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IdentificationLogout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IDENTIFICATION_REFRESH", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IDENTIFICATION_REFRESH"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentificationRefresh", function() { return _auth_actions__WEBPACK_IMPORTED_MODULE_0__["IdentificationRefresh"]; });




/***/ }),

/***/ "./src/app/shared/states/auth/effects/auth.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/states/auth/effects/auth.effects.ts ***!
  \************************************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/auth/actions/index.ts");
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../user/actions */ "./src/app/shared/states/user/actions/index.ts");
/* harmony import */ var _offers_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../offers/actions */ "./src/app/shared/states/offers/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/notifications.service */ "./src/app/shared/services/notifications.service.ts");










var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, authService, notificationsService) {
        var _this = this;
        this.actions$ = actions$;
        this.authService = authService;
        this.notificationsService = notificationsService;
        this.login$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.authService.login(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (token) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["IdentificationSuccess"](token); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["IdentificationFailed"](error.message));
            }));
        }));
        this.loginSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _user_actions__WEBPACK_IMPORTED_MODULE_4__["LoadUser"]()); }));
        this.loginSuccessOffers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["of"])(new _offers_actions__WEBPACK_IMPORTED_MODULE_5__["LoadOffers"]()); }));
        this.loginFailed$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["IDENTIFICATION_FAILED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            return _this.notificationsService.showNotification('header.ERROR_LOGIN', 'header.ERROR_LOGIN');
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], AuthEffects.prototype, "login$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AuthEffects.prototype, "loginSuccessOffers$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_7__["Observable"])
    ], AuthEffects.prototype, "loginFailed$", void 0);
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
            src_app_shared_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"]])
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/shared/states/auth/reducers/auth.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/states/auth/reducers/auth.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer, getToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/auth/actions/index.ts");


var initialState = {
    token: ''
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_LOGOUT"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, initialState);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["IDENTIFICATION_REFRESH"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload);
        }
    }
    return state;
}
var getToken = function (state) { return state.token; };


/***/ }),

/***/ "./src/app/shared/states/auth/reducers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/states/auth/reducers/index.ts ***!
  \******************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/shared/states/auth/reducers/auth.reducer.ts");

var reducers = {
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/shared/states/offers/actions/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/states/offers/actions/index.ts ***!
  \*******************************************************/
/*! exports provided: LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offers_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.actions */ "./src/app/shared/states/offers/actions/offers.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffers", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LoadOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LoadOffersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function() { return _offers_actions__WEBPACK_IMPORTED_MODULE_0__["LoadOffersFailed"]; });




/***/ }),

/***/ "./src/app/shared/states/offers/actions/offers.actions.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/states/offers/actions/offers.actions.ts ***!
  \****************************************************************/
/*! exports provided: LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function() { return LOAD_OFFERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOffers", function() { return LoadOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function() { return LOAD_OFFERS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function() { return LoadOffersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function() { return LOAD_OFFERS_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function() { return LoadOffersFailed; });
var LOAD_OFFERS = '[Offers] Load Offers Information';
var LoadOffers = /** @class */ (function () {
    function LoadOffers() {
        this.type = LOAD_OFFERS;
    }
    return LoadOffers;
}());

var LOAD_OFFERS_SUCCESS = '[Offers] Load success';
var LoadOffersSuccess = /** @class */ (function () {
    function LoadOffersSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_OFFERS_SUCCESS;
    }
    return LoadOffersSuccess;
}());

var LOAD_OFFERS_FAILED = '[Offer] Load failed';
var LoadOffersFailed = /** @class */ (function () {
    function LoadOffersFailed(payload) {
        this.payload = payload;
        this.type = LOAD_OFFERS_FAILED;
    }
    return LoadOffersFailed;
}());



/***/ }),

/***/ "./src/app/shared/states/offers/effects/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/states/offers/effects/index.ts ***!
  \*******************************************************/
/*! exports provided: effects, OffersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _offers_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.effects */ "./src/app/shared/states/offers/effects/offers.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffersEffects", function() { return _offers_effects__WEBPACK_IMPORTED_MODULE_0__["OffersEffects"]; });


var effects = [_offers_effects__WEBPACK_IMPORTED_MODULE_0__["OffersEffects"]];



/***/ }),

/***/ "./src/app/shared/states/offers/effects/offers.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/states/offers/effects/offers.effects.ts ***!
  \****************************************************************/
/*! exports provided: OffersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersEffects", function() { return OffersEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/offers/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_shared_services_offers_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/offers.service */ "./src/app/shared/services/offers.service.ts");







var OffersEffects = /** @class */ (function () {
    function OffersEffects(actions$, offersService) {
        var _this = this;
        this.actions$ = actions$;
        this.offersService = offersService;
        this.loadOffers$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_OFFERS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function () {
            return _this.offersService.getOffers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (offers) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadOffersSuccess"](offers); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadOffersFailed"](error.message));
            }));
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"])
    ], OffersEffects.prototype, "loadOffers$", void 0);
    OffersEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_shared_services_offers_service__WEBPACK_IMPORTED_MODULE_6__["OffersService"]])
    ], OffersEffects);
    return OffersEffects;
}());



/***/ }),

/***/ "./src/app/shared/states/offers/index.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/states/offers/index.ts ***!
  \***********************************************/
/*! exports provided: reducers, effects, LOAD_OFFERS, LoadOffers, LOAD_OFFERS_SUCCESS, LoadOffersSuccess, LOAD_OFFERS_FAILED, LoadOffersFailed, OffersEffects, getOffers, getOfferByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/shared/states/offers/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/shared/states/offers/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffers", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffersSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffersSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_OFFERS_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_OFFERS_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadOffersFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadOffersFailed"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/shared/states/offers/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OffersEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["OffersEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/shared/states/offers/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOffers", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOfferByID", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getOfferByID"]; });







/***/ }),

/***/ "./src/app/shared/states/offers/reducers/index.ts":
/*!********************************************************!*\
  !*** ./src/app/shared/states/offers/reducers/index.ts ***!
  \********************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _offers_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.reducer */ "./src/app/shared/states/offers/reducers/offers.reducer.ts");

var reducers = {
    offers: _offers_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"]
};


/***/ }),

/***/ "./src/app/shared/states/offers/reducers/offers.reducer.ts":
/*!*****************************************************************!*\
  !*** ./src/app/shared/states/offers/reducers/offers.reducer.ts ***!
  \*****************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/offers/actions/index.ts");

var initialState = [];
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_OFFERS_SUCCESS"]: {
            return state.concat(action.payload);
        }
    }
    return state;
}


/***/ }),

/***/ "./src/app/shared/states/offers/selectors/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/states/offers/selectors/index.ts ***!
  \*********************************************************/
/*! exports provided: getOffers, getOfferByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _offers_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./offers.selectors */ "./src/app/shared/states/offers/selectors/offers.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOffers", function() { return _offers_selectors__WEBPACK_IMPORTED_MODULE_0__["getOffers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getOfferByID", function() { return _offers_selectors__WEBPACK_IMPORTED_MODULE_0__["getOfferByID"]; });




/***/ }),

/***/ "./src/app/shared/states/offers/selectors/offers.selectors.ts":
/*!********************************************************************!*\
  !*** ./src/app/shared/states/offers/selectors/offers.selectors.ts ***!
  \********************************************************************/
/*! exports provided: getOffers, getOfferByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOffers", function() { return getOffers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getOfferByID", function() { return getOfferByID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getOffers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('offers');
function getOfferByID(id) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getOffers, function (offers) { return offers.find(function (offer) { return offer.id === id; }); });
}


/***/ }),

/***/ "./src/app/shared/states/root.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/states/root.reducer.ts ***!
  \***********************************************/
/*! exports provided: reducers, localStorageSyncReducer, metaReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localStorageSyncReducer", function() { return localStorageSyncReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "metaReducers", function() { return metaReducers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngrx-store-freeze */ "./node_modules/ngrx-store-freeze/index.js");
/* harmony import */ var ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngrx-store-localstorage */ "./node_modules/ngrx-store-localstorage/dist/index.js");
/* harmony import */ var ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/reducers */ "./src/app/shared/states/app/reducers/index.ts");
/* harmony import */ var _auth_reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/reducers */ "./src/app/shared/states/auth/reducers/index.ts");
/* harmony import */ var _user_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user/reducers */ "./src/app/shared/states/user/reducers/index.ts");
/* harmony import */ var _offers_reducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers/reducers */ "./src/app/shared/states/offers/reducers/index.ts");



/* import { enableBatching } from 'redux-batched-actions'; */
/* import { environment } from 'environments/environment'; */




// ------------------------------------------------------------------------------
var reducers = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _app_reducers__WEBPACK_IMPORTED_MODULE_3__["reducers"], _auth_reducers__WEBPACK_IMPORTED_MODULE_4__["reducers"], _user_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"], _offers_reducers__WEBPACK_IMPORTED_MODULE_6__["reducers"]);
function localStorageSyncReducer(reducer) {
    return Object(ngrx_store_localstorage__WEBPACK_IMPORTED_MODULE_2__["localStorageSync"])({ keys: ['auth'], rehydrate: true })(reducer);
}
// ------------------------------------------------------------------------------
// enableBatching allows us to dispatch multiple actions
// without letting the subscribers being warned between the actions
// only at the end : https://github.com/tshelburne/redux-batched-actions
// can be very handy when normalizing HTTP response
/* const metaReducersDev = [storeFreeze, enableBatching]; */
var metaReducersDev = [ngrx_store_freeze__WEBPACK_IMPORTED_MODULE_1__["storeFreeze"], localStorageSyncReducer];
/* const metaReducersProd = [enableBatching];  */
var metaReducersProd = [];
// if environment is != from production
// use storeFreeze to avoid state mutation
/* export const metaReducers = environment.production
    ? metaReducersProd
    : metaReducersDev; */
var metaReducers = metaReducersDev;


/***/ }),

/***/ "./src/app/shared/states/router/actions/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/states/router/actions/index.ts ***!
  \*******************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.action */ "./src/app/shared/states/router/actions/router.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["GO"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["BACK"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["FORWARD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Go"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Back"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return _router_action__WEBPACK_IMPORTED_MODULE_0__["Forward"]; });




/***/ }),

/***/ "./src/app/shared/states/router/actions/router.action.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/states/router/actions/router.action.ts ***!
  \***************************************************************/
/*! exports provided: GO, BACK, FORWARD, Go, Back, Forward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GO", function() { return GO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK", function() { return BACK; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORWARD", function() { return FORWARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Go", function() { return Go; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Back", function() { return Back; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Forward", function() { return Forward; });
var GO = '[Router] Go';
var BACK = '[Router] Back';
var FORWARD = '[Router] Forward';
var Go = /** @class */ (function () {
    function Go(payload) {
        this.payload = payload;
        this.type = GO;
    }
    return Go;
}());

var Back = /** @class */ (function () {
    function Back() {
        this.type = BACK;
    }
    return Back;
}());

var Forward = /** @class */ (function () {
    function Forward() {
        this.type = FORWARD;
    }
    return Forward;
}());



/***/ }),

/***/ "./src/app/shared/states/router/effects/router.effects.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/states/router/effects/router.effects.ts ***!
  \****************************************************************/
/*! exports provided: RouterEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterEffects", function() { return RouterEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/router/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var RouterEffects = /** @class */ (function () {
    function RouterEffects(actions$, router, location) {
        var _this = this;
        this.actions$ = actions$;
        this.router = router;
        this.location = location;
        this.navigate$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["GO"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (action) { return action.payload; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function (_a) {
            var path = _a.path, queryParams = _a.query, extras = _a.extras;
            _this.router.navigate(path, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ queryParams: queryParams }, extras));
        }));
        this.navigateBack$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["BACK"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.location.back(); }));
        this.navigateForward$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_5__["FORWARD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () { return _this.location.forward(); }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigate$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateBack$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], RouterEffects.prototype, "navigateForward$", void 0);
    RouterEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], RouterEffects);
    return RouterEffects;
}());



/***/ }),

/***/ "./src/app/shared/states/user/actions/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/states/user/actions/index.ts ***!
  \*****************************************************/
/*! exports provided: LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.actions */ "./src/app/shared/states/user/actions/user.actions.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOAD_USER_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LoadUserFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UPDATE_USER_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["UpdateUserFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["LOGOUT_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _user_actions__WEBPACK_IMPORTED_MODULE_0__["Logout"]; });




/***/ }),

/***/ "./src/app/shared/states/user/actions/user.actions.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/states/user/actions/user.actions.ts ***!
  \************************************************************/
/*! exports provided: LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER", function() { return LOAD_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return LoadUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return LOAD_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return LoadUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function() { return LOAD_USER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function() { return LoadUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return UPDATE_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return UpdateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function() { return UPDATE_USER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return UpdateUserSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function() { return UPDATE_USER_FAILED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function() { return UpdateUserFailed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return LOGOUT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
var LOAD_USER = '[User] Load User Information';
var LoadUser = /** @class */ (function () {
    function LoadUser() {
        this.type = LOAD_USER;
    }
    return LoadUser;
}());

var LOAD_USER_SUCCESS = '[User] Load success';
var LoadUserSuccess = /** @class */ (function () {
    function LoadUserSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_USER_SUCCESS;
    }
    return LoadUserSuccess;
}());

var LOAD_USER_FAILED = '[User] Load failed';
var LoadUserFailed = /** @class */ (function () {
    function LoadUserFailed(payload) {
        this.payload = payload;
        this.type = LOAD_USER_FAILED;
    }
    return LoadUserFailed;
}());

var UPDATE_USER = '[User] Update User Information';
var UpdateUser = /** @class */ (function () {
    function UpdateUser(payload) {
        this.payload = payload;
        this.type = UPDATE_USER;
    }
    return UpdateUser;
}());

var UPDATE_USER_SUCCESS = '[User] Update User Information SUCCESS';
var UpdateUserSuccess = /** @class */ (function () {
    function UpdateUserSuccess(payload) {
        this.payload = payload;
        this.type = UPDATE_USER_SUCCESS;
    }
    return UpdateUserSuccess;
}());

var UPDATE_USER_FAILED = '[User] Update User Information FAILED';
var UpdateUserFailed = /** @class */ (function () {
    function UpdateUserFailed(payload) {
        this.payload = payload;
        this.type = UPDATE_USER_FAILED;
    }
    return UpdateUserFailed;
}());

var LOGOUT_USER = '[User] Logout';
var Logout = /** @class */ (function () {
    function Logout() {
        this.type = LOGOUT_USER;
    }
    return Logout;
}());



/***/ }),

/***/ "./src/app/shared/states/user/effects/user.effects.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/states/user/effects/user.effects.ts ***!
  \************************************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/user/actions/index.ts");
/* harmony import */ var _auth_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../auth/actions */ "./src/app/shared/states/auth/actions/index.ts");
/* harmony import */ var _router_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../router/actions */ "./src/app/shared/states/router/actions/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_profile_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/profile.service */ "./src/app/shared/services/profile.service.ts");
/* harmony import */ var _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../services/notifications.service */ "./src/app/shared/services/notifications.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, profileService, notificationsService) {
        var _this = this;
        this.actions$ = actions$;
        this.profileService = profileService;
        this.notificationsService = notificationsService;
        this.me$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () {
            return _this.profileService.loadProfile().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (user) { return new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserSuccess"](user); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserFailed"](error.message));
            }));
        }));
        this.loadUserSuccess$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOAD_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new _router_actions__WEBPACK_IMPORTED_MODULE_5__["Go"]({ path: ['admin/dashboard'] }); }));
        this.updateUser$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.profileService.updateProfile(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function () { return new _actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUserSuccess"](action.payload); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["UpdateUserFailed"](error.message));
            }));
        }));
        this.updateUserSuccessNotification$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            return _this.notificationsService.showNotification('Modificación realizada', 'Actualizar usuario');
        }));
        // Si quieres desplazar al usuario una vez realizado el cambio.
        /* @Effect()
        updateUserSuccessRouter$: Observable<RouterActions.Go> = this.actions$.pipe(
          ofType(UserActions.UPDATE_USER_SUCCESS),
          map(() => new RouterActions.Go({ path: ['admin/dashboard'] }))
        ); */
        this.addUsersFailed$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER_FAILED"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])(function () {
            return _this.notificationsService.showNotification('Error: Inténtelo más tarde', 'Crear usuario');
        }));
        // POR AQUÍ
        this.updateUserRouter$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["UPDATE_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function (action) {
            return _this.profileService.updateProfile(action.payload);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (token) {
            _this.notificationsService.showNotification('Modificación realizada', 'Actualizar usuario');
            return new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["IdentificationRefresh"](token);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(function (error) {
            _this.notificationsService.showNotification('Error: Inténtelo más tarde', 'Actualizar usuario');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])(new _actions__WEBPACK_IMPORTED_MODULE_3__["LoadUserFailed"](error.message));
        }));
        this.logout$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_3__["LOGOUT_USER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["switchMap"])(function () { return [
            new _auth_actions__WEBPACK_IMPORTED_MODULE_4__["IdentificationLogout"](),
            new _router_actions__WEBPACK_IMPORTED_MODULE_5__["Go"]({ path: ['/login'] })
        ]; }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "me$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "loadUserSuccess$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "updateUser$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "updateUserSuccessNotification$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])({ dispatch: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "addUsersFailed$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "updateUserRouter$", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs__WEBPACK_IMPORTED_MODULE_9__["Observable"])
    ], UserEffects.prototype, "logout$", void 0);
    UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            _services_profile_service__WEBPACK_IMPORTED_MODULE_7__["ProfileService"],
            _services_notifications_service__WEBPACK_IMPORTED_MODULE_8__["NotificationsService"]])
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "./src/app/shared/states/user/reducers/index.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/states/user/reducers/index.ts ***!
  \******************************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.reducer */ "./src/app/shared/states/user/reducers/user.reducer.ts");

var reducers = {
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/shared/states/user/reducers/user.reducer.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/states/user/reducers/user.reducer.ts ***!
  \*************************************************************/
/*! exports provided: initialState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/shared/states/user/actions/index.ts");


var initialState = {
    password: '',
    id: -1,
    username: '',
    name: '',
    surname: '',
    birthdate: new Date(),
    phone: '',
    phone2: '',
    email: '',
    documentNumber: '',
    documentType: {
        uid: -1,
        name: ''
    },
    aboutMe: '',
    otherCompetences: '',
    license: '',
    avatar_hash: '',
    address: {
        street: '',
        province: {
            uid: -1,
            name: ''
        },
        municipe: {
            uid: -1,
            name: ''
        }
    },
    roles: [],
    studies: [],
    experiencies: [],
    languages: [],
    offers: [],
    hasFailed: false
};
function reducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload, { hasFailed: false });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILED"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { hasFailed: true });
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_SUCCESS"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, action.payload);
        }
        case _actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"]: {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, initialState);
        }
    }
    return state;
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sara\Documents\MASTER\2 semestre\Front-end avanzado\PEC3\UOCJob\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map