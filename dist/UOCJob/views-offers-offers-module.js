(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-offers-offers-module"],{

/***/ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts ***!
  \*******************************************************************************/
/*! exports provided: OffersDetailWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDetailWrapperComponent", function() { return OffersDetailWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/states/user */ "./src/app/shared/states/user/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/states/offers */ "./src/app/shared/states/offers/index.ts");
/* harmony import */ var src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/states/user/actions */ "./src/app/shared/states/user/actions/index.ts");








var OffersDetailWrapperComponent = /** @class */ (function () {
    function OffersDetailWrapperComponent(store$, route) {
        var _this = this;
        this.store$ = store$;
        this.route = route;
        this.user$ = this.store$.select(src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
        this.offer$ = this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var id = _a.id;
            return Number.parseInt(id);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (id) { return _this.store$.select(Object(src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_6__["getOfferByID"])(id)); }));
    }
    OffersDetailWrapperComponent.prototype.onSubscribeOffer = function (user) {
        this.store$.dispatch(new src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateUser"](user));
    };
    OffersDetailWrapperComponent.prototype.onUnsubscribeOffer = function (user) {
        this.store$.dispatch(new src_app_shared_states_user_actions__WEBPACK_IMPORTED_MODULE_7__["UpdateUser"](user));
    };
    OffersDetailWrapperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-detail-wrapper',
            template: "\n    <app-offers-detail\n      [user]=\"user$ | async\"\n      [offer]=\"offer$ | async\"\n      (subscribeOffer)=\"onSubscribeOffer($event)\"\n      (unsubscribeOffer)=\"onUnsubscribeOffer($event)\"\n    ></app-offers-detail>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], OffersDetailWrapperComponent);
    return OffersDetailWrapperComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>\n  {{offer.job.name + \" en \" + offer.province.name}}\n</h3>\n\n<div fxLayout=\"column\" class=\"pl15\">\n  <mat-list>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Empresa: </p><p matLine class=\"texto-detalle\">{{offer.company.name}}</p> </mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Puesto:</p> <p matLine class=\"texto-detalle\">{{offer.job.name}}</p> </mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Provincia:</p> <p matLine class=\"texto-detalle\">{{offer.province.name}}</p> </mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Municipio:</p> <p matLine class=\"texto-detalle\">{{offer.municipe.name}} </p></mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Fecha: </p><p matLine class=\"texto-detalle\">{{offer.date | date: 'dd-MM-yyyy'}} </p></mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle\" >Categoría:</p> <p matLine class=\"texto-detalle\">{{offer.category.name}} </p></mat-list-item>\n    <mat-list-item> <p matLine class=\"titulo-detalle wrap\" >Títulos:</p>\n      <!--<ul>-->\n        <p matLine class=\"texto-detalle\" *ngFor=\"let title of offer.title\"> {{title.name}} </p>\n      <!--</ul>-->\n    </mat-list-item>\n  </mat-list>\n  <div fxFlex fxLayoutAlign=\"center\" class=\"mb-3em mt-3em\">\n  <button mat-raised-button color=\"primary\" *ngIf=\"!isSubscribe()\" (click)=\"subscribe()\">Inscribirme</button>\n  <button  mat-raised-button color=\"warn\" *ngIf=\"isSubscribe()\" (click)=\"unsubscribe()\">Eliminar oferta</button>\n  </div>\n\n</div>\n\n\n<!--},-->\n<!--\"job\": {-->\n<!--\"name\": \"Programador Jr Java\",-->\n<!--\"description\": \"Programación y prueba unitaria en Java\"-->\n<!--},-->\n<!--\"province\": {-->\n<!--\"uid\": 1,-->\n<!--\"name\": \"Málaga\"-->\n<!--},-->\n<!--\"municipe\": {-->\n<!--\"uid\": 7,-->\n<!--\"name\": \"Estepona\"-->\n<!--},-->\n<!--\"date\": null,-->\n<!--\"category\": {-->\n<!--\"uid\": 2,-->\n<!--\"name\": \"Informática y Comunicaciones\"-->\n<!--},-->\n<!--\"title\": [-->\n<!--{-->\n<!--\"uid\": 1,-->\n<!--\"name\": \"Desarrollo Aplicaciones Web\"-->\n<!--},-->\n<!--{-->\n<!--\"uid\": 4,-->\n<!--\"name\": \"Desarrollo Aplicaciones Multiplataforma\"-->\n<!--}-->\n<!--]-->\n\n<!--<pre>{{ offer | json }} </pre>-->\n\n<!--<button *ngIf=\"!isSubscribe()\" class=\"btn btn-primary\" (click)=\"subscribe()\">-->\n  <!--Inscribirse-->\n<!--</button>-->\n<!--<button *ngIf=\"isSubscribe()\" class=\"btn btn-danger\" (click)=\"unsubscribe()\">-->\n  <!--Eliminar oferta-->\n<!--</button>-->\n"

/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL29mZmVycy9vZmZlcnMtZGV0YWlsL29mZmVycy1kZXRhaWwuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/offers/offers-detail/offers-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/offers/offers-detail/offers-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: OffersDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersDetailComponent", function() { return OffersDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersDetailComponent = /** @class */ (function () {
    function OffersDetailComponent() {
        this.subscribeOffer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.unsubscribeOffer = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OffersDetailComponent.prototype.subscribe = function () {
        var offers = this.user.offers.concat([this.offer]);
        var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.user, { offers: offers });
        this.subscribeOffer.emit(user);
    };
    OffersDetailComponent.prototype.unsubscribe = function () {
        var _this = this;
        var offers = this.user.offers.filter(function (_offer) { return _offer.id !== _this.offer.id; });
        var user = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.user, { offers: offers });
        this.unsubscribeOffer.emit(user);
    };
    OffersDetailComponent.prototype.isSubscribe = function () {
        var _this = this;
        return !!(this.user && this.user.offers.find(function (_offer) { return _this.offer.id === _offer.id; }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersDetailComponent.prototype, "offer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersDetailComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OffersDetailComponent.prototype, "subscribeOffer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"])
    ], OffersDetailComponent.prototype, "unsubscribeOffer", void 0);
    OffersDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-detail',
            template: __webpack_require__(/*! ./offers-detail.component.html */ "./src/app/views/offers/offers-detail/offers-detail.component.html"),
            styles: [__webpack_require__(/*! ./offers-detail.component.scss */ "./src/app/views/offers/offers-detail/offers-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersDetailComponent);
    return OffersDetailComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers-list/offers-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/offers/offers-list/offers-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Ofertas</h2>\n\n<div class=\"mb-3em table\">\n  <h3>Cumple con la Titulación (Familia)</h3>\n  <table mat-table [dataSource]=\"offers\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"job\">\n      <th mat-header-cell *matHeaderCellDef> Puesto  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.job.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef> Empresa  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.company.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef> Familia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Fecha  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"province\">\n      <th mat-header-cell *matHeaderCellDef> Provincia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.province.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"municipe\">\n      <th mat-header-cell *matHeaderCellDef> Municipio  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.municipe.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"subscribe\">\n      <th mat-header-cell *matHeaderCellDef> Inscrito  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.subscribe ? 'Si' : 'No'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Acciones  </th>\n      <td mat-cell *matCellDef=\"let offer\">\n        <a mat-raised-button class=\"btn-acciones\" [routerLink]=\"[offer.id]\">Ver detalle</a>\n      </td>\n\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n\n<div class=\"table\">\n  <h3>Otras Ofertas</h3>\n\n  <table mat-table [dataSource]=\"offersOther\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"job\">\n      <th mat-header-cell *matHeaderCellDef> Puesto  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.job.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef> Empresa  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.company.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef> Familia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Fecha  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"province\">\n      <th mat-header-cell *matHeaderCellDef> Provincia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.province.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"municipe\">\n      <th mat-header-cell *matHeaderCellDef> Municipio  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.municipe.name}} </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsOthers\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsOthers;\"></tr>\n  </table>\n</div>\n<!--<table class=\"table table-bordered table-striped\">-->\n  <!--<thead class=\"thead-light\">-->\n    <!--<tr>-->\n      <!--<th>Puesto</th>-->\n      <!--<th>Empresa</th>-->\n      <!--<th>Familia</th>-->\n      <!--<th>Fecha</th>-->\n      <!--<th>Provincia</th>-->\n      <!--<th>Municipio</th>-->\n      <!--<th>Inscrito</th>-->\n      <!--<th>Acciones</th>-->\n    <!--</tr>-->\n  <!--</thead>-->\n  <!--<tbody>-->\n    <!--<tr *ngFor=\"let offer of offersStudy\">-->\n      <!--<td>{{ offer.job.name }}</td>-->\n      <!--<td>{{ offer.company.name }}</td>-->\n      <!--<td>{{ offer.category.name }}</td>-->\n      <!--<td>{{ offer.date }}</td>-->\n      <!--<td>{{ offer.province.name }}</td>-->\n      <!--<td>{{ offer.municipe.name }}</td>-->\n      <!--<td>{{ offer.subscribe ? 'Sí' : 'No' }}</td>-->\n      <!--<td>-->\n        <!--<a style=\"cursor:pointer\" [routerLink]=\"[offer.id]\">Ver Detalle</a>-->\n      <!--</td>-->\n    <!--</tr>-->\n  <!--</tbody>-->\n<!--</table>-->\n\n<!--<h3>Otras Ofertas</h3>-->\n\n<!--<table class=\"table table-bordered table-striped\">-->\n  <!--<thead class=\"thead-light\">-->\n    <!--<tr>-->\n      <!--<th>Puesto</th>-->\n      <!--<th>Empresa</th>-->\n      <!--<th>Familia</th>-->\n      <!--<th>Fecha</th>-->\n      <!--<th>Provincia</th>-->\n      <!--<th>Municipio</th>-->\n    <!--</tr>-->\n  <!--</thead>-->\n  <!--<tbody>-->\n    <!--<tr *ngFor=\"let offer of offersOther\">-->\n      <!--<td>{{ offer.job.name }}</td>-->\n      <!--<td>{{ offer.company.name }}</td>-->\n      <!--<td>{{ offer.category.name }}</td>-->\n      <!--<td>{{ offer.date }}</td>-->\n      <!--<td>{{ offer.province.name }}</td>-->\n      <!--<td>{{ offer.municipe.name }}</td>-->\n      <!--<td></td>-->\n    <!--</tr>-->\n  <!--</tbody>-->\n<!--</table>-->\n"

/***/ }),

/***/ "./src/app/views/offers/offers-list/offers-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/offers/offers-list/offers-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: OffersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersListComponent", function() { return OffersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersListComponent = /** @class */ (function () {
    function OffersListComponent() {
        this.offersStudy = [];
        this.offersOther = [];
        this.displayedColumns = ['job', 'company', 'category', 'date', 'province', 'municipe', 'subscribe', 'actions'];
        this.displayedColumnsOthers = ['job', 'company', 'category', 'date', 'province', 'municipe'];
    }
    OffersListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.user && changes.offers) {
            this.selectOffers();
        }
    };
    OffersListComponent.prototype.selectOffers = function () {
        var studiesOfUser = this.user.studies;
        var offersOfUser = this.user.offers;
        this.offersStudy = this.offers
            .filter(function (offer) {
            return studiesOfUser.some(function (study) { return study.uid === offer.category.uid; });
        })
            .map(function (offer) {
            var offerUser = !!offersOfUser.find(function (_offerUser) { return _offerUser.id === offer.id; });
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, offer, { subscribe: offerUser });
        });
        this.offersOther = this.offers.filter(function (offer) {
            return studiesOfUser.every(function (study) { return study.uid !== offer.category.uid; });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersListComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], OffersListComponent.prototype, "offers", void 0);
    OffersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-list',
            template: __webpack_require__(/*! ./offers-list.component.html */ "./src/app/views/offers/offers-list/offers-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersListComponent);
    return OffersListComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers-profile/offers-profile.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/views/offers/offers-profile/offers-profile.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Mis Ofertas</h3>\n\n<div class=\"table mb-3em\">\n  <table mat-table [dataSource]=\"offers\" class=\"mat-elevation-z8\">\n\n    <ng-container matColumnDef=\"job\">\n      <th mat-header-cell *matHeaderCellDef> Puesto  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.job.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"company\">\n      <th mat-header-cell *matHeaderCellDef> Empresa  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.company.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef> Familia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category.name }} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"date\">\n      <th mat-header-cell *matHeaderCellDef> Fecha  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.date | date: 'dd-MM-yyyy'}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"province\">\n      <th mat-header-cell *matHeaderCellDef> Provincia  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.province.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"municipe\">\n      <th mat-header-cell *matHeaderCellDef> Municipio  </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.municipe.name}} </td>\n    </ng-container>\n\n    <ng-container matColumnDef=\"actions\">\n      <th mat-header-cell *matHeaderCellDef> Acciones  </th>\n      <td mat-cell *matCellDef=\"let offer\">\n        <a mat-raised-button class=\"btn-acciones\" [routerLink]=\"['/admin/offers/', offer.id]\">Ver detalle</a>\n      </td>\n\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n  </table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/views/offers/offers-profile/offers-profile.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/views/offers/offers-profile/offers-profile.component.ts ***!
  \*************************************************************************/
/*! exports provided: OffersProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersProfileComponent", function() { return OffersProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OffersProfileComponent = /** @class */ (function () {
    function OffersProfileComponent() {
        this.offers = [];
        this.displayedColumns = ['job', 'company', 'category', 'date', 'province', 'municipe', 'actions'];
    }
    OffersProfileComponent.prototype.ngOnChanges = function () {
        this.offers = this.user.offers;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], OffersProfileComponent.prototype, "user", void 0);
    OffersProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers-profile',
            template: __webpack_require__(/*! ./offers-profile.component.html */ "./src/app/views/offers/offers-profile/offers-profile.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OffersProfileComponent);
    return OffersProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/offers/offers-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OffersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersRoutingModule", function() { return OffersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _offers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers.component */ "./src/app/views/offers/offers.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers-detail/offers-detail.component-wrapper */ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts");





var routes = [
    {
        path: '',
        component: _offers_component__WEBPACK_IMPORTED_MODULE_3__["OffersComponent"]
    },
    {
        path: 'my-offers',
        component: _offers_component__WEBPACK_IMPORTED_MODULE_3__["OffersComponent"],
        data: { my_offers: true }
    },
    {
        path: ':id',
        component: _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_4__["OffersDetailWrapperComponent"]
    }
];
var OffersRoutingModule = /** @class */ (function () {
    function OffersRoutingModule() {
    }
    OffersRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], OffersRoutingModule);
    return OffersRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/offers/offers.component.html":
/*!****************************************************!*\
  !*** ./src/app/views/offers/offers.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-offers-list\n  [user]=\"user$ | async\"\n  [offers]=\"offers$ | async\"\n  *ngIf=\"isOffersList\"\n></app-offers-list>\n<app-offers-profile\n  [user]=\"user$ | async\"\n  *ngIf=\"!isOffersList\"\n></app-offers-profile>\n"

/***/ }),

/***/ "./src/app/views/offers/offers.component.scss":
/*!****************************************************!*\
  !*** ./src/app/views/offers/offers.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL29mZmVycy9vZmZlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/views/offers/offers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/offers/offers.component.ts ***!
  \**************************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/states/user */ "./src/app/shared/states/user/index.ts");
/* harmony import */ var src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/states/offers */ "./src/app/shared/states/offers/index.ts");






var OffersComponent = /** @class */ (function () {
    function OffersComponent(route, store$) {
        var _this = this;
        this.route = route;
        this.store$ = store$;
        this.isOffersList = true;
        this.route.data.subscribe(function (params) { return (_this.isOffersList = !params.my_offers); });
        this.user$ = this.store$.select(src_app_shared_states_user__WEBPACK_IMPORTED_MODULE_4__["getProfile"]);
        this.offers$ = this.store$.select(src_app_shared_states_offers__WEBPACK_IMPORTED_MODULE_5__["getOffers"]);
    }
    OffersComponent.prototype.ngOnInit = function () { };
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/views/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.scss */ "./src/app/views/offers/offers.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/views/offers/offers.module.ts":
/*!***********************************************!*\
  !*** ./src/app/views/offers/offers.module.ts ***!
  \***********************************************/
/*! exports provided: OffersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersModule", function() { return OffersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _offers_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./offers-routing.module */ "./src/app/views/offers/offers-routing.module.ts");
/* harmony import */ var _offers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./offers.component */ "./src/app/views/offers/offers.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./offers-detail/offers-detail.component */ "./src/app/views/offers/offers-detail/offers-detail.component.ts");
/* harmony import */ var _offers_list_offers_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./offers-list/offers-list.component */ "./src/app/views/offers/offers-list/offers-list.component.ts");
/* harmony import */ var _offers_profile_offers_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./offers-profile/offers-profile.component */ "./src/app/views/offers/offers-profile/offers-profile.component.ts");
/* harmony import */ var _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./offers-detail/offers-detail.component-wrapper */ "./src/app/views/offers/offers-detail/offers-detail.component-wrapper.ts");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/material.module */ "./src/app/shared/material.module.ts");










var OffersModule = /** @class */ (function () {
    function OffersModule() {
    }
    OffersModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _offers_component__WEBPACK_IMPORTED_MODULE_4__["OffersComponent"],
                _offers_profile_offers_profile_component__WEBPACK_IMPORTED_MODULE_7__["OffersProfileComponent"],
                _offers_list_offers_list_component__WEBPACK_IMPORTED_MODULE_6__["OffersListComponent"],
                _offers_detail_offers_detail_component__WEBPACK_IMPORTED_MODULE_5__["OffersDetailComponent"],
                _offers_detail_offers_detail_component_wrapper__WEBPACK_IMPORTED_MODULE_8__["OffersDetailWrapperComponent"]
            ],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_3__["OffersRoutingModule"], _shared_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]],
            exports: [_shared_material_module__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"]]
        })
    ], OffersModule);
    return OffersModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-offers-offers-module.js.map