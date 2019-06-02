(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/states/user/effects/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/states/user/effects/index.ts ***!
  \*****************************************************/
/*! exports provided: effects, UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return effects; });
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.effects */ "./src/app/shared/states/user/effects/user.effects.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return _user_effects__WEBPACK_IMPORTED_MODULE_0__["UserEffects"]; });


var effects = [_user_effects__WEBPACK_IMPORTED_MODULE_0__["UserEffects"]];



/***/ }),

/***/ "./src/app/shared/states/user/index.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/states/user/index.ts ***!
  \*********************************************/
/*! exports provided: reducers, LOAD_USER, LoadUser, LOAD_USER_SUCCESS, LoadUserSuccess, LOAD_USER_FAILED, LoadUserFailed, UPDATE_USER, UpdateUser, UPDATE_USER_SUCCESS, UpdateUserSuccess, UPDATE_USER_FAILED, UpdateUserFailed, LOGOUT_USER, Logout, effects, UserEffects, getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reducers */ "./src/app/shared/states/user/reducers/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return _reducers__WEBPACK_IMPORTED_MODULE_0__["reducers"]; });

/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ "./src/app/shared/states/user/actions/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_USER_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOAD_USER_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadUserFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LoadUserFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUser", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_SUCCESS", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserSuccess", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_USER_FAILED", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UPDATE_USER_FAILED"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UpdateUserFailed", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["UpdateUserFailed"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT_USER", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["LOGOUT_USER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return _actions__WEBPACK_IMPORTED_MODULE_1__["Logout"]; });

/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./effects */ "./src/app/shared/states/user/effects/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "effects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["effects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return _effects__WEBPACK_IMPORTED_MODULE_2__["UserEffects"]; });

/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./selectors */ "./src/app/shared/states/user/selectors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguages", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLanguages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguageByID", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getLanguageByID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStudies", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getStudies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStudyByID", function() { return _selectors__WEBPACK_IMPORTED_MODULE_3__["getStudyByID"]; });







/***/ }),

/***/ "./src/app/shared/states/user/selectors/index.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/states/user/selectors/index.ts ***!
  \*******************************************************/
/*! exports provided: getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.selectors */ "./src/app/shared/states/user/selectors/user.selectors.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_0__["getProfile"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguages", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_0__["getLanguages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getLanguageByID", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_0__["getLanguageByID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStudies", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_0__["getStudies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getStudyByID", function() { return _user_selectors__WEBPACK_IMPORTED_MODULE_0__["getStudyByID"]; });




/***/ }),

/***/ "./src/app/shared/states/user/selectors/user.selectors.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/states/user/selectors/user.selectors.ts ***!
  \****************************************************************/
/*! exports provided: getProfile, getLanguages, getLanguageByID, getStudies, getStudyByID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfile", function() { return getProfile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguages", function() { return getLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLanguageByID", function() { return getLanguageByID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudies", function() { return getStudies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStudyByID", function() { return getStudyByID; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getProfile = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('user');
var getLanguages = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfile, function (_a) {
    var languages = _a.languages;
    return languages;
});
function getLanguageByID(id) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getLanguages, function (languages) { return languages.find(function (language) { return language.uid === id; }); });
}
var getStudies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getProfile, function (_a) {
    var studies = _a.studies;
    return studies;
});
function getStudyByID(id) {
    return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getStudies, function (studies) { return studies.find(function (study) { return study.uid === id; }); });
}


/***/ })

}]);
//# sourceMappingURL=common.js.map