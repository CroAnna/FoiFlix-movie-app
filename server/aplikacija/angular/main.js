"use strict";
(self["webpackChunkRWAzadaca2"] = self["webpackChunkRWAzadaca2"] || []).push([["main"],{

/***/ 81:
/*!***********************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/app-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _dokumentacija_dokumentacija_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dokumentacija/dokumentacija.component */ 3583);
/* harmony import */ var _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./film-detalji/film-detalji.component */ 9679);
/* harmony import */ var _filmovi_pretrazivanje_filmovi_pretrazivanje_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filmovi-pretrazivanje/filmovi-pretrazivanje.component */ 6034);
/* harmony import */ var _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./galerija/galerija.component */ 4236);
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pocetna/pocetna.component */ 1569);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prijedlozi/prijedlozi.component */ 7906);
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profil/profil.component */ 4954);
/* harmony import */ var _upload_slike_upload_slike_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./upload-slike/upload-slike.component */ 9387);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);














// pocetna verzija za routing
const routes = [{
  path: '',
  redirectTo: '/pocetna',
  pathMatch: 'full'
}, {
  path: 'zanrovi',
  component: _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_10__.ZanrComponent
}, {
  path: 'prijava',
  component: _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_6__.PrijavaComponent
}, {
  path: 'pregledFilmova',
  component: _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_5__.PregledFilmovaComponent
}, {
  path: 'prijedloziFilmova',
  component: _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_7__.PrijedloziComponent
}, {
  path: 'pocetna',
  component: _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_4__.PocetnaComponent
}, {
  path: 'pregledFilmova/film/:id',
  component: _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_1__.FilmDetaljiComponent
}, {
  path: 'pregledFilmova/galerija/:id',
  component: _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_3__.GalerijaComponent
}, {
  path: 'dokumentacija',
  component: _dokumentacija_dokumentacija_component__WEBPACK_IMPORTED_MODULE_0__.DokumentacijaComponent
}, {
  path: 'profil',
  component: _profil_profil_component__WEBPACK_IMPORTED_MODULE_8__.ProfilComponent
}, {
  path: 'pretrazivanje',
  component: _filmovi_pretrazivanje_filmovi_pretrazivanje_component__WEBPACK_IMPORTED_MODULE_2__.FilmoviPretrazivanjeComponent
}, {
  path: 'upload',
  component: _upload_slike_upload_slike_component__WEBPACK_IMPORTED_MODULE_9__.UploadSlikeComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule]
  });
})();

/***/ }),

/***/ 5319:
/*!******************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/app.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navigacija/navigacija.component */ 749);



class AppComponent {
  constructor() {
    this.title = 'RWAzadaca2';
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)();
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 3,
  vars: 0,
  consts: [[1, "all"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-navigacija");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "router-outlet");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_0__.NavigacijaComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2230:
/*!***************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/app.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 81);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5319);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigacija/navigacija.component */ 749);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prijedlozi/prijedlozi.component */ 7906);
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pocetna/pocetna.component */ 1569);
/* harmony import */ var _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./film-detalji/film-detalji.component */ 9679);
/* harmony import */ var _dokumentacija_dokumentacija_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dokumentacija/dokumentacija.component */ 3583);
/* harmony import */ var _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profil/profil.component */ 4954);
/* harmony import */ var _filmovi_pretrazivanje_filmovi_pretrazivanje_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./filmovi-pretrazivanje/filmovi-pretrazivanje.component */ 6034);
/* harmony import */ var _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./galerija/galerija.component */ 4236);
/* harmony import */ var _upload_slike_upload_slike_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-slike/upload-slike.component */ 9387);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 2560);

















class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__.ZanrComponent, _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__.NavigacijaComponent, _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__.PregledFilmovaComponent, _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__.PrijavaComponent, _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_6__.PrijedloziComponent, _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_7__.PocetnaComponent, _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_8__.FilmDetaljiComponent, _dokumentacija_dokumentacija_component__WEBPACK_IMPORTED_MODULE_9__.DokumentacijaComponent, _profil_profil_component__WEBPACK_IMPORTED_MODULE_10__.ProfilComponent, _filmovi_pretrazivanje_filmovi_pretrazivanje_component__WEBPACK_IMPORTED_MODULE_11__.FilmoviPretrazivanjeComponent, _galerija_galerija_component__WEBPACK_IMPORTED_MODULE_12__.GalerijaComponent, _upload_slike_upload_slike_component__WEBPACK_IMPORTED_MODULE_13__.UploadSlikeComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_15__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule]
  });
})();

/***/ }),

/***/ 3583:
/*!******************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/dokumentacija/dokumentacija.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DokumentacijaComponent": () => (/* binding */ DokumentacijaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DokumentacijaComponent {}
DokumentacijaComponent.ɵfac = function DokumentacijaComponent_Factory(t) {
  return new (t || DokumentacijaComponent)();
};
DokumentacijaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: DokumentacijaComponent,
  selectors: [["app-dokumentacija"]],
  decls: 538,
  vars: 0,
  consts: [[1, "o-studentu"], [1, "podaci-container"], ["href", "/"], ["src", "/assets/fotke/previous_icon_light.png", "alt", "back", "title", "Na po\u010Detnu", 1, "back-icon"], [1, "dokumentacija-container"], [1, "podaci", "veci"], [1, "slike"], ["src", "/assets/fotke/ja.jpg", "alt", "moja-slika"], [1, "tablica"], [1, "oznaka", "zelena"], [1, "oznaka", "zuta"], [1, "oznaka", "crvena"]],
  template: function DokumentacijaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Podaci");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ana \u0160karica");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "askarica20@student.foi.hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "IPS-RPS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div")(17, "table", 8)(18, "thead")(19, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Legenda");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "tbody")(25, "tr")(26, "td")(27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Sve je napravljeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td")(30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Djelomi\u010Dno je napravljeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "td")(33, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Skoro ni\u0161ta nije napravljeno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div")(36, "table", 8)(37, "thead")(38, "tr")(39, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Resurs Parametri");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "GET \u010Ditanje");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "POST kreiranje");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "PUT a\u017Euriranje");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "DELETE brisanje");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Detaljno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tbody")(52, "tr")(53, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "api/korisnici");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td")(56, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "vra\u0107a listu korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "td")(59, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "kreira novog korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td")(62, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "td")(65, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "tr")(70, "td")(71, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "api/korisnici/:korime");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "td")(74, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "vra\u0107a odre\u0111enog korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "td")(77, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "405");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "td")(80, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "A\u017Eurira odre\u0111enog korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "td")(83, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "tr")(88, "td")(89, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "api/korisnici/korime/aktivacija");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "td")(92, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "td")(95, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "405");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "td")(98, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Aktivira novog korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "td")(101, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "tr")(106, "td")(107, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "api/korisnici/korime/prijava");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "td")(110, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "td")(113, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Provjerava podatke prijave i vra\u0107a je li korisnik uspje\u0161no prijavljen ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td")(116, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "td")(119, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "tr")(124, "td")(125, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " api/filmovi/?stranica=broj&brojFilmova= broj[&datum=datum][&zanr=idZanr] [&naziv=dioNazivFilma][&sortiraj=[d|z|n]] ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td")(128, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, " vra\u0107a listu odre\u0111enog broja filmova za neku stranicu (broj), opcionalno filtrirano po datumu unosa (datum) i/ili \u017Eanru (idZanr) i/ili nazivu filma (dioNazivFilma), te mo\u017Ee sortirati uzlazno po datumu(d), nazivu(n) ili \u017Eanru(z) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "td")(131, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " Uz dobivene podatke \u010Dita sve podatke o filmu s vanjskog servisa i dodaje novi film ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "td")(134, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td")(137, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td")(140, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " Pri GET metodi nema svih vrsta filtriranja i sortiranja, nego samo neke ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "tr")(143, "td")(144, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "api/filmovi/:id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "td")(147, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, " Vra\u0107a podatke odre\u0111enog filma (id) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "td")(150, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "405");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "td")(153, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "A\u017Eurira podatke odre\u0111enog filma");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td")(156, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Bri\u0161e odre\u0111eni film");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "td")(159, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " Pri PUT metodi se updatea samo je li prihva\u0107en za dodavanje u bazu ili ne ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "tr")(162, "td")(163, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "api/zanr/");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "td")(166, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "Vra\u0107a listu \u017Eanrova");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "td")(169, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Dodaje novi \u017Eanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "td")(172, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "td")(175, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Bri\u0161e sve \u017Eanrove za koje ne postoji film ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "tr")(180, "td")(181, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "api/zanr/:id");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "td")(184, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Vra\u0107a podatke odre\u0111enog \u017Eanra (id) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "td")(187, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "405");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "td")(190, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "A\u017Eurira postoje\u0107i \u017Eanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "td")(193, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Bri\u0161e odre\u0111eni \u017Eanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "tr")(198, "td")(199, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "api/tmdb/zanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "td")(202, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " Proslje\u0111uje listu \u017Eanrova koji vrati servis TMDB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "td")(205, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](206, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "td")(208, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](209, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "td")(211, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "tr")(216, "td")(217, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " api/tmdb/filmovi?kljucnaRijec=rijec1[,rijec2]&stranica=broj ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "td")(220, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, " Proslje\u0111uje listu filmova koju vrati servis TMDB, a \u010Diji filmovi imaju klju\u010Dnu rije\u010D ili vi\u0161e njih ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "td")(223, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "td")(226, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "td")(229, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "501");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](232, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div")(234, "table", 8)(235, "thead")(236, "tr")(237, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Uloga");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240, "Stranica/e");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](241, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Opis");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Detaljno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "tbody")(246, "tr")(247, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](248, "Gost");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "td")(250, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](251, "Po\u010Detna");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, " Prikazuje popis \u017Eanrova u bazi podataka i nasumice prikazuje 2 filma za svaki \u017Eanr koji postoje u bazi podataka. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "Jedino ne prikazuje filmove iz moje baze, nego iz TMDB-a");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "tr")(257, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](258, "Gost");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "td")(260, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](261, "Dokumentacija");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "td")(263, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Prikazuje stranicu dokumentacija.html opisanu ranije");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "Sve radi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "tr")(268, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](269, "Gost");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "td")(271, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "Registracija, Prijava, Odjava");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "td")(274, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, " Gost se mo\u017Ee se registrirati kao novi korisnik. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "s");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, " Kod registracije \u0161alje se e-mail s tokenom za aktivaciju ra\u010Duna. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, " Lozinka se u bazu ne smije spremati u \u010Ditljivom obliku i treba koristiti sol kod spremanja. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "s");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " Dok se ra\u010Dun ne aktivira nije mogu\u0107e napraviti prijavu. Kod prijave treba koristiti autentikacija dvije razine prvo lozinka s JWT i nakon toga TOTP. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](281, " Jednom prijavljeni korisnik mo\u017Ee se odjaviti u bilo kojem trenutku. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "td")(283, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " Sve radi. REST servis ne koristi vi\u0161e username i password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "tr")(286, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "td")(289, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](290, "Profil");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "td")(292, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](293, " Vidi svoje podatke (ime, prezime, korisni\u010Dko ime, e-mail, ...) i mo\u017Ee ih a\u017Eurirati. Korisni\u010Dko ime i e-mail se ne mogu a\u017Eurirati. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](295, "Sve radi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "tr")(297, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](298, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](299, "td")(300, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "Filmovi pregled");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "td")(303, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, " Vidi popis svih filmova koji postoje u bazi, mo\u017Ee filmove filtrirati po \u017Eanru i/ili datumu unosa. Datumsko filtriranje \u010Dita podatke od unesenog datuma do dana\u0161njeg datuma. Mo\u017Ee uzlazno sortirati filmove po nazivu filma, datumu ili nazivu \u017Eanra. Mo\u017Ee kliknuti na naziv filma i dobiti sve podatke o filmu. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](306, " Vidi se popis filmova i detalji o filmu kad se klikne, mo\u017Ee se pretra\u017Eivati jedino po nazivu. (za sad) ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "tr")(308, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "td")(311, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](312, "Film");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "td")(314, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](315, " Prikazuje sve podatke o filmu zajedno s posterom i poveznicom na \u201CGalerija slika\u201D za taj film i podatkom koji korisnik je dodao film u bazu. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Sve radi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "tr")(319, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](320, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "td")(322, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](323, "Filmovi pretra\u017Eivanje");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "td")(325, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](326, " Mo\u017Ee upisati klju\u010Dne rije\u010Di po kojima se pretra\u017Euju filmovi sa servisa TMDB (preko api/tmdb). Broj stranica nalazi se u podatku \u201Ctotal_pages\u201D. Ako prona\u0111e film koji mu se svi\u0111a mo\u017Ee kliknuti na dodaj u bazu. Film se svim dobivenim podacima dodaje u bazu kao prijedlog, ali \u010Deka odobrenje admina da bude vidljiv u \u201CFilmovi pregled\u201D. Nije potrebno spremati podatke o \u201Cproduction_companies\u201D, \u201Cproduction_countries\u201D i \u201Cspoken_languages\u201D. Ako ve\u0107 postoji prijedlog za neki film tada nije mogu\u0107e kliknuti dodaj u bazu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](328, "Sve radi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "tr")(330, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](331, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](332, "td")(333, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Galerija slika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "td")(336, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, " Korisnik vidi galeriju slika postavljenih od strane svih korisnika za odabrani film. Mo\u017Ee pretra\u017Eivati galeriju slika po datumu postavljanja slike tako da unese od i/ili do datum. Mo\u017Ee kliknuti na sliku te ga se prebacuje na \u201CFilm\u201D ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](339, " Jedino radi da se otvori stranica za odabrani film i prika\u017Ee naslov, dio sa slikama nije implementiran ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "tr")(341, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](342, "Korisnik");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](343, "td")(344, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](345, "Slika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "td")(347, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, " Mo\u017Ee postaviti novu sliku (samo jpg, jpeg, png ili gif maksimalne veli\u010Dine 500KB) za neki film koji postoji u bazi. Slika se sprema fizi\u010Dki na poslu\u017Eitelj unutar direktorija slike/id_filma/korime. Direktorij ozna\u010Den sa id_filma predstavlja id filma pod kojim je film spremljen u bazi, a direktroij korime je korisni\u010Dko ime korisnika koji je dodao sliku. Slika se sprema pod nazivom datum_hash.ekstenzija. Datum je datum postavljanja slike u obliku \u201Cgodina-mjesec-dan\u201D, a hash je generiran na temelju vremena i korisni\u010Dkog imena. Ekstenzija je originalna ekstenzija prenesene datoteke ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](350, " Radi dio s prijenosom i validacijom (provjera vrste i dopu\u0161tene veli\u010Dine datoteke). Javlja se obavijest ako korisnik nije odabrao dobru sliku, a mo\u017Ee se i obrisati odabir slike. Slika se ne sprema, tj. to dalje nije implementirano. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](351, "tr")(352, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "td")(355, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](356, "Filmovi prijedlozi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "td")(358, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](359, " Vidi popis filmova koji su poslani kao prijedlog za dodavanje, ako odobri film postaje vidljiv svim korisnicima u pogledu \u201CFilmovi pregled\u201D. Kod odobravanja filma preuzima se slika postera s TMDB koja se sprema lokalno na poslu\u017Eitelj u direktorij posteri. Ako ne odobri film tada se on bri\u0161e i mo\u017Ee se opet kasnije dati kao prijedlog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](361, " Radi sve, jedino nije implementirano spremanje slike postera ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "tr")(363, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "Admin");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "td")(366, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](367, "\u017Danrovi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "td")(369, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](370, " Vidi pregled svih \u017Eanrova u bazi podataka, mo\u017Ee a\u017Eurirati naziv \u017Eanra, mo\u017Ee obrisati sve \u017Eanrove za koje nema filmova u bazi. Mo\u017Ee povu\u0107i listu \u017Eanrova s TMDB servisa te mo\u017Ee dodati u bazu sve ili samo neke \u017Eanrove. Ako pri dodavanju, ve\u0107 postoji neki \u017Eanr s istim id-om, tada se takav preska\u010De i uop\u0107e se ne \u0161alje zahtjev na servis za dodavanjem. Korisniku se javlja poruka na ekranu koji \u017Eanrovi su bili presko\u010Deni jer ve\u0107 postoje ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](371, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](372, "Sve radi.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "div")(374, "table", 8)(375, "thead")(376, "tr")(377, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](378, "Korak");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](380, "\u0160to je dovr\u0161eno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](381, "th");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](382, "\u0160to nije dovr\u0161eno");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "tbody")(384, "tr")(385, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Kreirati 3 tablice na dokumentaciji i ispuniti ih");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](388, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](390, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "tr")(392, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](393, "Prebaciti bazu u sqlite");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](395, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](397, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "tr")(399, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](400, "Poslo\u017Eiti strukturu prema uputama");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](401, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](402, "TODO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](403, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "tr")(405, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](406, "Pokretanje sa npm start");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](408, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](410, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "tr")(412, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](413, "Poslo\u017Eiti NODE_PATH");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](414, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](415, "TODO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](416, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "tr")(418, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](419, "Izbrisati svoje klju\u010Deve za TMDB");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](420, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](421, "TODO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](422, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "tr")(424, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "REST koristi port iz konfiguracijske datoteke pod rest.port");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](429, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](430, "tr")(431, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "REST ne koristi vi\u0161e username i password, nego JWT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](434, "Izba\u010Den username i password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](435, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](436, "Nije dodano da radi s JWT-om");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](437, "tr")(438, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](439, "Klijentski dio preba\u010Den u Angular");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](440, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](441, "Ve\u0107ina");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](442, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](443, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "tr")(445, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](446, "Informacije o portovima se \u010Ditaju iz environment datoteke");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](447, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](448, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](449, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](450, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](451, "tr")(452, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](453, "Dizajn koristi SASS");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](454, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](455, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](456, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](457, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](458, "tr")(459, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](460, "Dodana bar 3 reCaptcha v3 (prijava, reg + 1 po izboru)");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](461, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](462, "TODO");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](463, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](464, "tr")(465, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](466, " Pozadinski dio web aplikacije poslu\u017Euje Angular web aplikaciju. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](467, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](468, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](469, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](470, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](471, "tr")(472, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](473, " Pozadinski dio web aplikacije poslu\u017Euje dokumentaciju ili je ugra\u0111ena u Angular ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](474, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](475, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](476, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](477, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](478, "tr")(479, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](480, " Pozadinski dio web aplikaciije nudi REST api podr\u0161ku za klijentsku stranu sa resursima koji ne postoje u REST servisu npr. autentifikacija korisnika i generiranje JWT-a. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](481, "td")(482, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](483, "tr")(484, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](485, " Pozadinski dio port se mora \u010Ditati iz konfiguracijske datoteke iz podatka: app.port ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](486, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](487, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](488, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](489, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](490, "tr")(491, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](492, "Izba\u010Den TOTP i aktivacija mailom kod prijave");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](493, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](494, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](495, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](496, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](497, "tr")(498, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](499, "Prikazati podatke za login za admina i korisnika");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](500, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](501, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](502, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](503, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](504, "tr")(505, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](506, " Angular aplikacija smije direktno komunicirati sa REST servisom, ali mora obavezno slati JWT. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](507, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](508, "Komunicira direktno.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](509, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](510, "Ne \u0161alje JWT");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](511, "tr")(512, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](513, " Datumski podaci su u obliku dan.mjesec.godina sati:minute:sekunde ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](514, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](515, "Sve");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](516, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](517, "-");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](518, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](519, "td")(520, "td")(521, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](522, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](523, "td")(524, "td")(525, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](526, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](527, "td")(528, "td")(529, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](530, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](531, "td")(532, "td")(533, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](534, "tr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](535, "td")(536, "td")(537, "td");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9679:
/*!****************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/film-detalji/film-detalji.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmDetaljiComponent": () => (/* binding */ FilmDetaljiComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/filmovi.service */ 9702);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);






class FilmDetaljiComponent {
  constructor(aktiviranRoute, filmoviServis) {
    this.aktiviranRoute = aktiviranRoute;
    this.filmoviServis = filmoviServis;
    this.odabraniFilm = '';
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // JEL TREBAJU SVE OVE NEKAJ VRACAT IL JE OKE I BEZ TOG JER MENI NE BACA ERROR, A NEZ JEL BU DRUGIMA TAK
      _this.filmId = _this.aktiviranRoute.snapshot.paramMap.get('id');
      console.log('this.film id ---> ' + _this.filmId);
      _this.odabraniFilm = yield _this.filmoviServis.dajOdabraniFilm(_this.filmId);
    })();
  }
}
FilmDetaljiComponent.ɵfac = function FilmDetaljiComponent_Factory(t) {
  return new (t || FilmDetaljiComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
FilmDetaljiComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilmDetaljiComponent,
  selectors: [["app-film-detalji"]],
  decls: 63,
  vars: 24,
  consts: [[1, "podaci-filma-kontejner"], [1, "pregled"], ["id", "film-slika"], ["alt", "slika-poster", "id", "slika-poster", 3, "src", "alt"], ["for", "film-title"], ["id", "film-title", "type", "text", "readonly", "", 3, "value"], ["for", "film-original-language"], ["id", "film-original-language", "type", "text", "readonly", "", 3, "value"], ["for", "film-original-title"], ["id", "film-original-title", "type", "text", "readonly", "", 3, "value"], ["for", "film-overview"], ["readonly", "", "name", "film-overview", "id", "film-overview", "cols", "30", "rows", "10", 3, "value"], ["for", "film-id"], ["id", "film-id", "type", "text", "readonly", "", 3, "value"], ["for", "film-adult"], ["id", "film-adult", "type", "text", "readonly", "", 3, "value"], ["for", "film-popularity"], ["id", "film-popularity", "type", "text", "readonly", "", 3, "value"], ["for", "film-release-date"], ["id", "film-release-date", "type", "text", "readonly", "", 3, "value"], ["for", "film-backdroppath"], ["id", "film-backdroppath", "type", "text", "readonly", "", 3, "value"], ["for", "film-video"], ["id", "film-video", "type", "text", "readonly", "", 3, "value"], ["for", "film-vote-average"], ["id", "film-vote-average", "type", "text", "readonly", "", 3, "value"], ["for", "film-vote-count"], ["id", "film-vote-count", "type", "text", "readonly", "", 3, "value"], ["for", "film-datum-unosa"], ["id", "film-datum-unosa", "type", "text", "readonly", "", 3, "value"], ["for", "film-homepage"], ["id", "film-homepage", "type", "text", "readonly", "", 3, "value"], ["for", "film-imdb-id"], ["id", "film-imdb-id", "type", "text", "readonly", "", 3, "value"], ["for", "film-status"], ["id", "film-status", "type", "text", "readonly", "", 3, "value"], ["for", "film-tagline"], ["id", "film-tagline", "type", "text", "readonly", "", 3, "value"], ["for", "film-korisnik-id"], ["id", "film-korisnik-id", "type", "text", "readonly", "", 3, "value"], [1, "lijepiGumb", 3, "routerLink"]],
  template: function FilmDetaljiComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "form")(6, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Original language");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Original title");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Overview");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "textarea", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "label", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Adult");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "input", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "label", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "Popularity");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "input", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Release-date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](30, "date");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Backdroppath");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "Video");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Vote average");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "input", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Vote count");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](42, "input", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Datum unosa");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](45, "input", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](46, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Homepage");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "input", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](50, "Imdb id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "input", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Status");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](54, "input", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](56, "Tagline");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](57, "input", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Korisnik id");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](60, "input", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, " Na galeriju ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/", ctx.odabraniFilm.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("alt", ctx.odabraniFilm.poster_path);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.original_language);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.original_title);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.overview);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.adult);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.popularity);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](30, 21, ctx.odabraniFilm.release_date, "dd.MM.yyyy. hh:mm:ss"));
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.backdrop_path);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.video);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.vote_average);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.vote_count);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.datum_unosa);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.vote_count);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.imdb_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.status);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.tagline);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.odabraniFilm.korisnik_id);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pregledFilmova/galerija/", ctx.odabraniFilm.id, "");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6034:
/*!**********************************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/filmovi-pretrazivanje/filmovi-pretrazivanje.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmoviPretrazivanjeComponent": () => (/* binding */ FilmoviPretrazivanjeComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/filmovi.service */ 9702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function FilmoviPretrazivanjeComponent_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilmoviPretrazivanjeComponent_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.strPrva());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " << ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FilmoviPretrazivanjeComponent_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilmoviPretrazivanjeComponent_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.strNatrag());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " < ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FilmoviPretrazivanjeComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilmoviPretrazivanjeComponent_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r9.strDalje());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FilmoviPretrazivanjeComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilmoviPretrazivanjeComponent_button_5_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.strZadnja());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, " >> ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function FilmoviPretrazivanjeComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FilmoviPretrazivanjeComponent_div_13_Template_button_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15);
      const film_r13 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.dodaj(film_r13.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Dodaj u bazu");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const film_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](film_r13.original_title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("src", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/", film_r13.poster_path, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", film_r13.overview, " ");
  }
}
class FilmoviPretrazivanjeComponent {
  constructor(filmoviService) {
    this.filmoviService = filmoviService;
    this.rijeciSearch = '';
    this.stranica = 1;
    this.zadnjaStranica = 0;
  }
  onSearchChange(event) {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(event.target.value);
      _this.rijeciSearch = event.target.value;
      _this.prikaziFilmove();
    })();
  }
  ngOnInit() {
    var _this2 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('on init');
      _this2.prikaziFilmove();
    })();
  }
  get odabraniFilter() {
    return this.rijeciSearch;
  }
  dodaj(idFilma) {
    this.filmoviService.dodajUbazu(idFilma);
  }
  strPrva() {
    this.stranica = 1;
    this.prikaziFilmove();
  }
  strNatrag() {
    if (this.stranica > 1) {
      this.stranica = this.stranica - 1;
      this.prikaziFilmove();
    }
  }
  strDalje() {
    var _this3 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.stranica = _this3.stranica + 1; // mora bit malo number, a ne Number
      _this3.prikaziFilmove();
    })();
  }
  strZadnja() {
    this.stranica = this.zadnjaStranica;
    this.prikaziFilmove();
  }
  prikaziFilmove() {
    var _this4 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.dohvaceniFilmovi = JSON.parse(yield _this4.filmoviService.dajTmdbFilmove(_this4.rijeciSearch, _this4.stranica)).results;
      sessionStorage.setItem('dohvaceniFilmovi', JSON.stringify(_this4.dohvaceniFilmovi));
      _this4.zadnjaStranica = JSON.parse(yield _this4.filmoviService.dajTmdbFilmove(_this4.rijeciSearch, _this4.stranica)).total_pages;
    })();
  }
}
FilmoviPretrazivanjeComponent.ɵfac = function FilmoviPretrazivanjeComponent_Factory(t) {
  return new (t || FilmoviPretrazivanjeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
FilmoviPretrazivanjeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: FilmoviPretrazivanjeComponent,
  selectors: [["app-filmovi-pretrazivanje"]],
  decls: 14,
  vars: 7,
  consts: [[1, "pretrazivanje-gore"], ["id", "stranicenje"], ["class", "btnStranicenje", 3, "click", 4, "ngIf"], [1, "pretrazivanje"], ["type", "text", "id", "filterPRCMAN", "placeholder", "Kljucne rijeci", "name", "rijeci", 1, "search", 3, "input"], [1, "brStr"], [1, "pretrazivanje-kontejner"], ["id", "sadrzaj"], ["class", "grid", 4, "ngFor", "ngForOf"], [1, "btnStranicenje", 3, "click"], [1, "grid"], [1, "dohvFilm"], [1, "img-div"], ["alt", "poster", 3, "src"], [1, "tekst"], [3, "click"]],
  template: function FilmoviPretrazivanjeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, FilmoviPretrazivanjeComponent_button_2_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, FilmoviPretrazivanjeComponent_button_3_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, FilmoviPretrazivanjeComponent_button_4_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, FilmoviPretrazivanjeComponent_button_5_Template, 2, 0, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "h1", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Pretra\u017Eivanje filmova");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("input", function FilmoviPretrazivanjeComponent_Template_input_input_8_listener($event) {
        return ctx.onSearchChange($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6)(12, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, FilmoviPretrazivanjeComponent_div_13_Template, 10, 3, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stranica > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stranica > 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stranica < ctx.zadnjaStranica);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.stranica < ctx.zadnjaStranica);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Stranica: ", ctx.stranica, " / ", ctx.zadnjaStranica, "");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.dohvaceniFilmovi);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4236:
/*!********************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/galerija/galerija.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GalerijaComponent": () => (/* binding */ GalerijaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/filmovi.service */ 9702);




class GalerijaComponent {
  constructor(aktiviranRoute, filmoviServis) {
    this.aktiviranRoute = aktiviranRoute;
    this.filmoviServis = filmoviServis;
    this.odabraniFilm = '';
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.filmId = _this.aktiviranRoute.snapshot.paramMap.get('id');
      console.log('this.film id ---> ' + _this.filmId);
      _this.odabraniFilm = yield _this.filmoviServis.dajOdabraniFilm(_this.filmId);
    })();
  }
}
GalerijaComponent.ɵfac = function GalerijaComponent_Factory(t) {
  return new (t || GalerijaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
GalerijaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: GalerijaComponent,
  selectors: [["app-galerija"]],
  decls: 3,
  vars: 1,
  consts: [[1, "galerija"]],
  template: function GalerijaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.odabraniFilm.original_title);
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 749:
/*!************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/navigacija/navigacija.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigacijaComponent": () => (/* binding */ NavigacijaComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../servisi/korisnici.service */ 2725);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




function NavigacijaComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Zanrovi");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Pretrazivanje");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Profil ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Registracija ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Pregled filmova ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Prijedlozi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, " Upload ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
function NavigacijaComponent_li_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li")(1, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigacijaComponent_li_15_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r8.odjaviKorisnika());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Odjava");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
}
class NavigacijaComponent {
  constructor(korisniciService) {
    this.korisniciService = korisniciService;
  }
  get prijavljenAdmin() {
    return sessionStorage.getItem('prijavljenaUloga') == '1';
  }
  get prijavljenKorisnik() {
    return sessionStorage.getItem('prijavljenaUloga') == '2';
  }
  odjaviKorisnika() {
    sessionStorage.setItem('prijavljenaUloga', ''); // nema prijavljenog
    sessionStorage.setItem('prijavljeniKorisnikKorime', '');
  }
}
NavigacijaComponent.ɵfac = function NavigacijaComponent_Factory(t) {
  return new (t || NavigacijaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_0__.KorisniciService));
};
NavigacijaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigacijaComponent,
  selectors: [["app-navigacija"]],
  decls: 16,
  vars: 8,
  consts: [["routerLink", "/pocetna", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], [4, "ngIf"], ["routerLink", "/dokumentacija", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/zanrovi", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pretrazivanje", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/profil", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/prijava", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pregledFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/prijedloziFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/upload", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pocetna", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 3, "click"]],
  template: function NavigacijaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ul")(2, "li")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Pocetna");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NavigacijaComponent_li_5_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavigacijaComponent_li_6_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, NavigacijaComponent_li_7_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavigacijaComponent_li_8_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavigacijaComponent_li_9_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavigacijaComponent_li_10_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavigacijaComponent_li_11_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li")(13, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Dokumentacija");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavigacijaComponent_li_15_Template, 3, 0, "li", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.prijavljenAdmin && !ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljenAdmin || ctx.prijavljenKorisnik);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkActive],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1569:
/*!******************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/pocetna/pocetna.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PocetnaComponent": () => (/* binding */ PocetnaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_zanrovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/zanrovi.service */ 8311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function PocetnaComponent_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const zanr_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](zanr_r1.name);
  }
}
class PocetnaComponent {
  constructor(zanroviService) {
    this.zanroviService = zanroviService;
  }
  ngOnInit() {
    this.prikaziMojeZanrove();
  }
  prikaziMojeZanrove() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.zanroviMoji = yield _this.zanroviService.dajMojePodatke();
      console.log(_this.zanroviMoji);
    })();
  }
}
PocetnaComponent.ɵfac = function PocetnaComponent_Factory(t) {
  return new (t || PocetnaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_zanrovi_service__WEBPACK_IMPORTED_MODULE_1__.ZanroviService));
};
PocetnaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PocetnaComponent,
  selectors: [["app-pocetna"]],
  decls: 7,
  vars: 1,
  consts: [[1, "generirani"], [1, "generirani-kontejner"], [4, "ngFor", "ngForOf"], [1, "moji-filmovi"]],
  template: function PocetnaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Po\u010Detna \uD83C\uDFAC");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Preporu\u010Deni filmovi po Va\u0161im \u017Eanrovima:");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PocetnaComponent_ul_6_Template, 3, 1, "ul", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zanroviMoji);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6850:
/*!**********************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/pregled-filmova/pregled-filmova.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PregledFilmovaComponent": () => (/* binding */ PregledFilmovaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/filmovi.service */ 9702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function PregledFilmovaComponent_div_15_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/pregledFilmova/film/", film_r1.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ---> ", film_r1.title, " ", film_r1.id, " ");
  }
}
function PregledFilmovaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PregledFilmovaComponent_div_15_div_2_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const film_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", film_r1.odobreno == 1);
  }
}
class PregledFilmovaComponent {
  constructor(filmoviService) {
    this.filmoviService = filmoviService;
    this.filterOdabrani = 'Svi';
    this.tekstFiltriranje = '';
  }
  get odabraniFilter() {
    return this.filterOdabrani;
  }
  set odabraniFilter(value) {
    // zove se svaki put kad se promijeni
    this.filterOdabrani = value;
    console.log('value ' + value);
    if (value == 'Svi') {
      this.prikaziSve();
    } else if (value == 'Naziv') {
      this.prikaziPoNazivu();
    } else if (value == '') {}
    // promjena polja prikaza
  }

  prikaziPoNazivu() {
    console.log(this.tekstFiltriranje.toLowerCase());
    this.filmoviFiltrirani = this.filmoviOdobreni.filter(f => f.title.toLowerCase().includes(this.tekstFiltriranje.toLowerCase()));
  }
  prikaziSve() {
    this.filmoviFiltrirani = this.filmoviOdobreni;
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('on init');
      _this.filmoviOdobreni = yield _this.filmoviService.dajMojeFilmove();
      _this.prikaziSve();
    })();
  }
}
PregledFilmovaComponent.ɵfac = function PregledFilmovaComponent_Factory(t) {
  return new (t || PregledFilmovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
PregledFilmovaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PregledFilmovaComponent,
  selectors: [["app-pregled-filmova"]],
  decls: 16,
  vars: 3,
  consts: [[1, "pregled"], ["type", "text", 3, "ngModel", "ngModelChange"], ["id", "sort", 3, "ngModel", "ngModelChange"], ["value", "Svi", "selected", "selected"], ["value", "Naziv"], ["value", "Datum"], ["value", "Zanr"], ["id", "stranicenje"], ["id", "moji-filmovi-kontejner"], [4, "ngFor", "ngForOf"], [1, "moji-filmovi"], ["class", "moj-film", 3, "routerLink", 4, "ngIf"], [1, "moj-film", 3, "routerLink"]],
  template: function PregledFilmovaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PregledFilmovaComponent_Template_input_ngModelChange_1_listener($event) {
        return ctx.tekstFiltriranje = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "select", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PregledFilmovaComponent_Template_select_ngModelChange_2_listener($event) {
        return ctx.odabraniFilter = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Svi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Naziv (prvo unesi rije\u010D pa odaberi ovo)");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "option", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Datum");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "option", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Zanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Pregled filmova");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PregledFilmovaComponent_div_15_Template, 3, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.tekstFiltriranje);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.odabraniFilter);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filmoviFiltrirani);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4167:
/*!******************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/prijava/prijava.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrijavaComponent": () => (/* binding */ PrijavaComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/korisnici.service */ 2725);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function PrijavaComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Prijava");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 7)(6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_14_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.inputKorime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_14_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.inputLozinka = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " Nema\u0161 ra\u010Dun? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span")(11, "Button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijavaComponent_div_14_Template_Button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.ucitajSuprotno());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Registriraj se.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijavaComponent_div_14_Template_input_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r7.prijavi());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.inputKorime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r0.inputLozinka);
  }
}
function PrijavaComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "div", 12)(2, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Registracija");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 15)(6, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_15_Template_input_ngModelChange_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r8.korime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_15_Template_input_ngModelChange_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r10.lozinka = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_15_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r11.ime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_15_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.prezime = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrijavaComponent_div_15_Template_input_ngModelChange_10_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.email = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Ve\u0107 ima\u0161 ra\u010Dun? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "span")(14, "Button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijavaComponent_div_15_Template_Button_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r14.ucitajSuprotno());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Prijavi se.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijavaComponent_div_15_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r15.registriraj());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, " Registriraj se ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.korime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.lozinka);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.ime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.prezime);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx_r1.email);
  }
}
function PrijavaComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 22)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "podaci za prijavu:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " admin => korime: administrator, lozinka: rwa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " korisnik => korime: obican, lozinka: rwa ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class PrijavaComponent {
  constructor(korisniciService) {
    this.korisniciService = korisniciService;
    this.inputLozinka = '';
    this.inputKorime = '';
    this.prikazLogin = false;
    this.prikazReg = true;
  }
  prijavi() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let odgovor = yield _this.korisniciService.prijaviKorisnika(_this.inputKorime, _this.inputLozinka);
      if (odgovor == false) {
        window.alert('Neispravni podaci!');
      } else {
        sessionStorage.setItem('prijavljenaUloga', odgovor.uloga_id);
        sessionStorage.setItem('prijavljeniKorisnikKorime', odgovor.korime);
      }
    })();
  }
  registriraj() {
    this.ucitajSuprotno();
    this.korisniciService.dodajKorisnika(this.korime, this.lozinka, this.ime, this.prezime, this.email);
  }
  // prebacivanje s logina na registraciju i obratno
  ucitajSuprotno() {
    this.prikazLogin = !this.prikazLogin;
    this.prikazReg = !this.prikazReg;
  }
}
PrijavaComponent.ɵfac = function PrijavaComponent_Factory(t) {
  return new (t || PrijavaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_1__.KorisniciService));
};
PrijavaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PrijavaComponent,
  selectors: [["app-prijava"]],
  decls: 17,
  vars: 3,
  consts: [[1, "login-container", "registration-container"], [1, "lijevo"], ["class", "desno", 4, "ngIf"], ["class", "podaci-prijava", 4, "ngIf"], [1, "desno"], [1, "input-container", "login"], ["id", "poruka"], ["action", "/prijava", "method", "POST", "id", "formPrijava"], ["name", "korime", "type", "text", "placeholder", "Korisni\u010Dko ime", "id", "korime", "required", "", 3, "ngModel", "ngModelChange"], ["name", "lozinka", "type", "password", "placeholder", "Lozinka", "id", "lozinka", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"], ["id", "btnSalji", "type", "submit", "value", "Prijavi se", 3, "click"], [1, "input-container", "registration"], ["id", "naslov"], ["id", "greske", 2, "color", "red"], ["action", "/registracija", "method", "POST", "id", "obrazacRegistracija"], ["id", "korime", "type", "text", "name", "korime", "placeholder", "Korisni\u010Dko ime", "required", "", 3, "ngModel", "ngModelChange"], ["id", "lozinka", "type", "password", "name", "lozinka", "placeholder", "Lozinka", "required", "", 3, "ngModel", "ngModelChange"], ["id", "ime", "type", "text", "name", "ime", "placeholder", "Ime", "required", "", 3, "ngModel", "ngModelChange"], ["id", "prezime", "type", "text", "name", "prezime", "placeholder", "Prezime", "required", "", 3, "ngModel", "ngModelChange"], ["id", "email", "name", "email", "type", "text", "placeholder", "E-mail", "required", "", 3, "ngModel", "ngModelChange"], ["type", "submit", "id", "btnRegistriraj", 3, "click"], [1, "podaci-prijava"]],
  template: function PrijavaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Dobrodo\u0161li na");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "FOIFLIX");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "ul")(8, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Pretra\u017Eujte filmove");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Gledajte informacije o filmovima");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "I jo\u0161 mnogo toga!");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PrijavaComponent_div_14_Template, 14, 2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, PrijavaComponent_div_15_Template, 18, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, PrijavaComponent_div_16_Template, 7, 0, "div", 3);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.prikazLogin);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.prikazReg);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.prikazLogin);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7906:
/*!************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/prijedlozi/prijedlozi.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrijedloziComponent": () => (/* binding */ PrijedloziComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/filmovi.service */ 9702);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);




function PrijedloziComponent_div_1_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijedloziComponent_div_1_div_2_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.odobriFilm(film_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Odobri");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrijedloziComponent_div_1_div_2_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5);
      const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.odbaciFilm(film_r1.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Odbaci");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const film_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", film_r1.title, " ", film_r1.id, " ");
  }
}
function PrijedloziComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PrijedloziComponent_div_1_div_2_Template, 6, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const film_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", film_r1.odobreno == 0);
  }
}
class PrijedloziComponent {
  constructor(filmoviService) {
    this.filmoviService = filmoviService;
    this.filter = {
      odobreno: 1
    };
  }
  ngOnInit() {
    this.prikaziMojeFilmove();
  }
  odobriFilm(id) {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.filmoviService.odobri(id);
      _this.prikaziMojeFilmove();
    })();
  }
  odbaciFilm(id) {
    var _this2 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.filmoviService.odbaci(id);
      _this2.prikaziMojeFilmove();
    })();
  }
  prikaziMojeFilmove() {
    var _this3 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.filmoviNeodobreni = yield _this3.filmoviService.dajMojeFilmove();
    })();
  }
}
PrijedloziComponent.ɵfac = function PrijedloziComponent_Factory(t) {
  return new (t || PrijedloziComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
PrijedloziComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PrijedloziComponent,
  selectors: [["app-prijedlozi"]],
  decls: 2,
  vars: 1,
  consts: [["id", "prijedlozi-kontejner"], [4, "ngFor", "ngForOf"], [1, "moji-filmovi"], ["class", "moj-film", 4, "ngIf"], [1, "moj-film"], ["id", "btnOdobri", 3, "click"], ["id", "btnOdbaci", 3, "click"]],
  template: function PrijedloziComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PrijedloziComponent_div_1_Template, 3, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filmoviNeodobreni);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4954:
/*!****************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/profil/profil.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfilComponent": () => (/* binding */ ProfilComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/korisnici.service */ 2725);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





class ProfilComponent {
  constructor(korisniciServis, router) {
    this.korisniciServis = korisniciServis;
    this.router = router;
    this.logiraniKorisnik = ''; // da ne baca error pri loadanju da je undefined
  }

  ngOnInit() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.korime = sessionStorage.getItem('prijavljeniKorisnikKorime');
      if (_this.korime != null) {
        _this.logiraniKorisnik = yield _this.korisniciServis.dajLogiranog(_this.korime);
      }
    })();
  }
  onSubmit(event) {
    this.korisniciServis.updateajKorisnika(this.korime, event.target.ime.value, event.target.prezime.value);
  }
  odustani() {
    this.router.navigate(['/pocetna']);
  }
}
ProfilComponent.ɵfac = function ProfilComponent_Factory(t) {
  return new (t || ProfilComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_1__.KorisniciService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
ProfilComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ProfilComponent,
  selectors: [["app-profil"]],
  decls: 21,
  vars: 4,
  consts: [[1, "podaci"], [3, "ngSubmit"], ["for", "profil-ime"], ["id", "profil-ime", "type", "text", "name", "ime", 3, "value"], ["for", "profil-prezime"], ["id", "profil-prezime", "type", "text", "name", "prezime", 3, "value"], ["for", "profil-korime"], ["id", "profil-korime", "type", "text", "readonly", "", 3, "value"], ["for", "profil-email"], ["id", "profil-email", "type", "text", "readonly", "", 3, "value"], [1, "gumbi"], ["id", "btnSpremi", "type", "submit"], ["id", "btnOdustani", "type", "button", 3, "click"]],
  template: function ProfilComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Moj profil");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "form", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function ProfilComponent_Template_form_ngSubmit_3_listener($event) {
        return ctx.onSubmit($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Ime");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Prezime");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Korisnicko ime");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "input", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "label", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "E-mail");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "input", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 10)(17, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Spremi");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ProfilComponent_Template_button_click_19_listener() {
        return ctx.odustani();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, " Odustani ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.logiraniKorisnik.ime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.logiraniKorisnik.prezime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.logiraniKorisnik.korime);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", ctx.logiraniKorisnik.email);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9702:
/*!****************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/servisi/filmovi.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilmoviService": () => (/* binding */ FilmoviService)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/environment */ 7019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class FilmoviService {
  constructor() {}
  dajMojeFilmove() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let odgovor = yield fetch(_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis + 'filmovi');
      return JSON.parse(yield odgovor.text());
    })();
  }
  dajTmdbFilmove(rijec, str) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}tmdb/filmovi?kljucnaRijec=${rijec}&stranica=${str}`);
      return yield odgovor.text();
    })();
  }
  dajOdabraniFilm(idFilma) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      //console.log('id filma -----> ' + idFilma);
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}filmovi/` + idFilma);
      if (odgovor.status == 200) {
        let podaci = yield odgovor.text();
        console.log('podaci ' + podaci);
        return JSON.parse(podaci);
      } else {
        alert('Problem kod preuzimanja podataka:\n' + odgovor.statusText);
      }
    })();
  }
  odobri(idFilma) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        id: idFilma
      };
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
      };
      let podatki = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}filmovi/:id`, parametri);
      yield podatki.text();
    })();
  }
  odbaci(idFilma) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        id: idFilma
      };
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'DELETE',
        body: JSON.stringify(tijelo),
        headers: header
      };
      let podatki = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}filmovi/:id`, parametri);
      yield podatki.text();
    })();
  }
  dodajUbazu(idFilma) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let sesija = sessionStorage.getItem('dohvaceniFilmovi');
      console.log(`sessjia ${sesija}`);
      let filmovi;
      if (sesija) {
        filmovi = JSON.parse(sesija);
      }
      //filmovi = JSON.parse(sessionStorage.getItem('dohvaceniFilmovi'));
      for (let film of filmovi) {
        if (idFilma == film.id) {
          let header = new Headers();
          header.set('Content-Type', 'application/json');
          console.log('id filma ' + idFilma);
          let parametri = {
            method: 'POST',
            body: JSON.stringify(film),
            headers: header
          };
          let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}filmovi`, parametri);
          if (odgovor.status == 200) {
            let podaci = yield odgovor.text();
            console.log('FILM ' + JSON.stringify(podaci));
            //poruka.innerHTML = 'Film dodan u bazu!';
          } else if (odgovor.status == 401) {
            //  poruka.innerHTML = 'Neautorizirani pristup! Prijavite se!';
          } else {
            //poruka.innerHTML = 'Greška u dodavanju filma!';
          }
          break;
        }
      }
    })();
  }
}
FilmoviService.ɵfac = function FilmoviService_Factory(t) {
  return new (t || FilmoviService)();
};
FilmoviService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: FilmoviService,
  factory: FilmoviService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 2725:
/*!******************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/servisi/korisnici.service.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KorisniciService": () => (/* binding */ KorisniciService)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/environment */ 7019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);




class KorisniciService {
  constructor(router) {
    this.router = router;
  }
  dajLogiranog(korime) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}korisnici/` + korime);
      if (odgovor.status == 200) {
        let podaci = yield odgovor.text();
        console.log(podaci);
        return JSON.parse(podaci);
        //prikaziKorisnikovePodatke(podaci);
      } else {
        return null;
        // alert('Problem kod preuzimanja podataka:\n' + odgovor.statusText);
      }
    })();
  }

  prijaviKorisnika(korime, lozinka) {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // lozinka = kodovi.kreirajSHA256(lozinka, 'moja sol');
      let tijelo = {
        korime: korime,
        lozinka: lozinka
      };
      let zaglavlje = new Headers();
      zaglavlje.set('Content-Type', 'application/json');
      let parametri = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: zaglavlje
      };
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appServis}prijava`, parametri);
      if (odgovor.status == 200) {
        console.log('uspjesna prijava');
        _this.router.navigate(['/pocetna']);
        let podaci = yield odgovor.text();
        console.log('podaci ' + podaci);
        return JSON.parse(podaci);
      } else {
        return false;
      }
    })();
  }
  dodajKorisnika(korime, lozinka, ime, prezime, email) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        korime: korime,
        lozinka: lozinka,
        ime: ime,
        prezime: prezime,
        email: email
      };
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: header
      };
      let podaci = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.appServis}registracija`, parametri);
      return yield podaci.text();
    })();
  }
  updateajKorisnika(korime, novo_ime, novo_prezime) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        korime: korime,
        ime: novo_ime,
        prezime: novo_prezime
      };
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
      };
      let podatki = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}korisnici/` + korime, parametri);
      yield podatki.text();
    })();
  }
}
KorisniciService.ɵfac = function KorisniciService_Factory(t) {
  return new (t || KorisniciService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router));
};
KorisniciService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: KorisniciService,
  factory: KorisniciService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 8311:
/*!****************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/servisi/zanrovi.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZanroviService": () => (/* binding */ ZanroviService)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _environment_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environment/environment */ 7019);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);



class ZanroviService {
  constructor() {}
  dajMojePodatke() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let mojiZanrovi = new Array();
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}zanr`); // OVO SE CITA IZ ENVIRONMENT VARIJABLI TODO
      mojiZanrovi = JSON.parse(yield odgovor.text());
      return mojiZanrovi;
    })();
  }
  dajPodatke() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tmdbZanrovi = new Array();
      let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}tmdb/zanr`);
      tmdbZanrovi = JSON.parse(yield odgovor.text()).genres;
      return tmdbZanrovi;
    })();
  }
  dajMojePodatkeBrisanje() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}zanr`);
        if (odgovor.status === 200) {
          const podaci = yield odgovor.text();
          _this.izbrisiBezFilmova(podaci);
        } else {
          alert(`Problem kod preuzimanja podataka: ${odgovor.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  dodajIzTMDBAuMojuBazu(novi_id, novi_naziv) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        id: novi_id,
        name: novi_naziv
      };
      const zaglavlje = new Headers({
        'Content-Type': 'application/json'
      });
      const parametri = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: zaglavlje
      };
      try {
        const odgovor = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}zanr`, parametri);
        const data = yield odgovor.text();
        console.log(data);
        if (data == 'false') {
          alert('Ovaj žanr je već u bazi!');
        }
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateajZanr(id, novi_naziv) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // TODO da se automatski azurira i obrise text input field
      let tijelo = {
        id: id,
        name: novi_naziv
      };
      let zaglavlje = new Headers();
      zaglavlje.set('Content-Type', 'application/json');
      let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: zaglavlje
      };
      let podatki = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}zanr/:id`, parametri);
      yield podatki.text();
    })();
  }
  izbrisiBezFilmova(podaci) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let zanrovi_parse = JSON.parse(podaci);
      let tijelo = {
        zanrovi: zanrovi_parse
      };
      let zaglavlje = new Headers();
      zaglavlje.set('Content-Type', 'application/json');
      let parametri = {
        method: 'DELETE',
        body: JSON.stringify(tijelo),
        headers: zaglavlje
      };
      let podatki = yield fetch(`${_environment_environment__WEBPACK_IMPORTED_MODULE_1__.environment.restServis}zanr`, parametri);
      yield podatki.text();
    })();
  }
}
ZanroviService.ɵfac = function ZanroviService_Factory(t) {
  return new (t || ZanroviService)();
};
ZanroviService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: ZanroviService,
  factory: ZanroviService.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9387:
/*!****************************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/upload-slike/upload-slike.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UploadSlikeComponent": () => (/* binding */ UploadSlikeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


const _c0 = ["myInput"];
class UploadSlikeComponent {
  constructor() {
    this.disablean = true;
  }
  odabranFile(event) {
    if (event.target.value != null) {
      const velicinaFile = event.target.files[0].size;
      const velicinaKB = velicinaFile / 1024;
      if (velicinaKB >= 500) {
        this.disablean = true;
        console.log('veci od 500, nije okej');
        this.ukloniSliku();
        alert('File je prevelik. Mora biti do 500KB');
      } else {
        this.disablean = false;
        console.log('manji od 500, okej');
      }
    }
  }
  uploadajSliku() {
    console.log('uploadaj');
    // TODO upload slike
    this.ukloniSliku();
  }
  ukloniSliku() {
    this.myInputVariable.nativeElement.value = '';
  }
}
UploadSlikeComponent.ɵfac = function UploadSlikeComponent_Factory(t) {
  return new (t || UploadSlikeComponent)();
};
UploadSlikeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: UploadSlikeComponent,
  selectors: [["app-upload-slike"]],
  viewQuery: function UploadSlikeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myInputVariable = _t.first);
    }
  },
  decls: 11,
  vars: 2,
  consts: [[1, "slike-kontejner"], ["id", "slika-upload", "type", "file", "accept", "image/png, image/gif, image/jpeg, image/jpg", 3, "change"], ["myInput", ""], ["id", "povratna-info"], ["id", "btnUpload", "type", "submit", 1, "lijepiGumb", 3, "disabled", "click"]],
  template: function UploadSlikeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Uploadaj sliku");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form")(4, "input", 1, 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UploadSlikeComponent_Template_input_change_4_listener($event) {
        return ctx.odabranFile($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "p", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadSlikeComponent_Template_button_click_7_listener() {
        return ctx.uploadajSliku();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Po\u0161alji ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UploadSlikeComponent_Template_button_click_9_listener() {
        return ctx.ukloniSliku();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ukloni sliku ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablean ? true : null);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.disablean ? true : null);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3742:
/*!************************************************************!*\
  !*** ./projekti/rwazadaca2/src/app/zanr/zanr.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZanrComponent": () => (/* binding */ ZanrComponent)
/* harmony export */ });
/* harmony import */ var C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _servisi_zanrovi_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../servisi/zanrovi.service */ 8311);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function ZanrComponent_ul_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li")(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ZanrComponent_ul_14_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const zanr_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onChangeOdabraniRadioMoj($event, zanr_r2.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const zanr_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", zanr_r2.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", zanr_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", zanr_r2.name, " ", zanr_r2.id, " ");
  }
}
function ZanrComponent_ul_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li")(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ZanrComponent_ul_16_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const zanr_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onChangeOdabraniRadioTmdb($event, zanr_r5.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const zanr_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("id", zanr_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", zanr_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", zanr_r5.name, " ", zanr_r5.id, " ");
  }
}
class ZanrComponent {
  constructor(zanroviService) {
    this.zanroviService = zanroviService;
    this.odabraniRadioNameTmdb = '';
    this.odabraniRadioIdTmdb = 0; // neki defaultni broj
    this.odabraniRadioNameMoj = '';
    this.odabraniRadioIdMoj = 0; // neki defaultni broj
  }

  prikaziMojeZanrove() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.zanroviMoji = yield _this.zanroviService.dajMojePodatke();
    })();
  }
  prikaziTMDBZanrove() {
    var _this2 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.zanroviTMDB = yield _this2.zanroviService.dajPodatke();
    })();
  }
  prikaziZanrove() {
    var _this3 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.prikaziMojeZanrove();
      yield _this3.prikaziTMDBZanrove();
    })();
  }
  onChangeOdabraniRadioTmdb(event, id) {
    // koji je trenutno odabran
    this.odabraniRadioNameTmdb = event.target.value;
    this.odabraniRadioIdTmdb = id;
  }
  onChangeOdabraniRadioMoj(event, id) {
    this.odabraniRadioNameMoj = event.target.value;
    this.odabraniRadioIdMoj = id;
  }
  dodajTMDBPodatke() {
    var _this4 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.odabraniRadioIdTmdb != 0) {
        yield _this4.zanroviService.dodajIzTMDBAuMojuBazu(_this4.odabraniRadioIdTmdb, _this4.odabraniRadioNameTmdb);
        _this4.prikaziMojeZanrove();
      } else {
        alert('Nije odabran ni jedan žanr!');
      }
    })();
  }
  dodajSveTMDBPodatke() {
    var _this5 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.prikaziTMDBZanrove();
      console.log('zanrovi tmdb ' + _this5.zanroviTMDB);
      _this5.zanroviTMDB.forEach( /*#__PURE__*/function () {
        var _ref = (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (zanr) {
          console.log(zanr.id + zanr.name);
          yield _this5.zanroviService.dodajIzTMDBAuMojuBazu(zanr.id, zanr.name);
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
      yield _this5.prikaziMojeZanrove();
    })();
  }
  promijeniNaziv() {
    var _this6 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.zanroviService.updateajZanr(_this6.odabraniRadioIdMoj, _this6.noviNaziv);
      _this6.prikaziMojeZanrove();
    })();
  }
  brisanje() {
    var _this7 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.zanroviService.dajMojePodatkeBrisanje();
      yield _this7.prikaziMojeZanrove();
    })();
  }
}
ZanrComponent.ɵfac = function ZanrComponent_Factory(t) {
  return new (t || ZanrComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_zanrovi_service__WEBPACK_IMPORTED_MODULE_1__.ZanroviService));
};
ZanrComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: ZanrComponent,
  selectors: [["app-zanr"]],
  decls: 17,
  vars: 3,
  consts: [[1, "zanrovi-gumbi"], ["id", "dajMojePodatke", 1, "lijepiGumb", 3, "click"], ["id", "dodajTMDBPodatke", 1, "lijepiGumb", 3, "click"], ["id", "dodajSveTMDBPodatke", 1, "lijepiGumb", 3, "click"], ["id", "promijeniNaziv", 1, "lijepiGumb", 3, "click"], ["id", "izbrisiBezFilmova", 1, "lijepiGumb", 3, "click"], ["type", "text", "id", "inputPromjenaNaziva", 3, "ngModel", "ngModelChange"], [1, "zanrovi-vanjski-container"], ["id", "zanrovi-container-moje"], [4, "ngFor", "ngForOf"], ["id", "zanrovi-container"], ["type", "radio", "name", "moji-zanrovi", 3, "id", "value", "change"], ["type", "radio", "name", "tmdb-zanrovi", 3, "id", "value", "change"]],
  template: function ZanrComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_1_listener() {
        return ctx.prikaziZanrove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ucitaj zanrove ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_3_listener() {
        return ctx.dodajTMDBPodatke();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Dodaj iz TMDB-a u moju bazu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_5_listener() {
        return ctx.dodajSveTMDBPodatke();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Dodaj sve iz TMDB-a u moju bazu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_7_listener() {
        return ctx.promijeniNaziv();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Promijeni naziv odabranog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_9_listener() {
        return ctx.brisanje();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Izbrisi sve zanrove bez filmova ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "input", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ZanrComponent_Template_input_ngModelChange_11_listener($event) {
        return ctx.noviNaziv = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 7)(13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ZanrComponent_ul_14_Template, 4, 4, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, ZanrComponent_ul_16_Template, 4, 4, "ul", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.noviNaziv);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zanroviMoji);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zanroviTMDB);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7019:
/*!************************************************************!*\
  !*** ./projekti/rwazadaca2/src/environment/environment.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
  restServis: 'http://localhost:9000/api/',
  appServis: 'http://localhost:9001/' // app port
};

/***/ }),

/***/ 8829:
/*!*****************************************!*\
  !*** ./projekti/rwazadaca2/src/main.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 2230);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8829)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map