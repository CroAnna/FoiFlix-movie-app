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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./film-detalji/film-detalji.component */ 9679);
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pocetna/pocetna.component */ 1569);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./prijedlozi/prijedlozi.component */ 7906);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









// pocetna verzija za routing
const routes = [{
  path: '',
  redirectTo: '/pocetna',
  pathMatch: 'full'
}, {
  path: 'zanrovi',
  component: _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_5__.ZanrComponent
}, {
  path: 'prijava',
  component: _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_3__.PrijavaComponent
}, {
  path: 'pregledFilmova',
  component: _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_2__.PregledFilmovaComponent
}, {
  path: 'prijedloziFilmova',
  component: _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_4__.PrijedloziComponent
}, {
  path: 'pocetna',
  component: _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_1__.PocetnaComponent
}, {
  path: 'pregledFilmova/film/:id',
  component: _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_0__.FilmDetaljiComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 81);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5319);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigacija/navigacija.component */ 749);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prijedlozi/prijedlozi.component */ 7906);
/* harmony import */ var _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pocetna/pocetna.component */ 1569);
/* harmony import */ var _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./film-detalji/film-detalji.component */ 9679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);












class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__.ZanrComponent, _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__.NavigacijaComponent, _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__.PregledFilmovaComponent, _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__.PrijavaComponent, _prijedlozi_prijedlozi_component__WEBPACK_IMPORTED_MODULE_6__.PrijedloziComponent, _pocetna_pocetna_component__WEBPACK_IMPORTED_MODULE_7__.PocetnaComponent, _film_detalji_film_detalji_component__WEBPACK_IMPORTED_MODULE_8__.FilmDetaljiComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule]
  });
})();

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
  vars: 23,
  consts: [[1, "podaci-filma-kontejner"], [1, "pregled"], ["id", "film-slika"], ["alt", "slika-poster", "id", "slika-poster", 3, "src", "alt"], ["for", "film-title"], ["id", "film-title", "type", "text", "readonly", "", 3, "value"], ["for", "film-original-language"], ["id", "film-original-language", "type", "text", "readonly", "", 3, "value"], ["for", "film-original-title"], ["id", "film-original-title", "type", "text", "readonly", "", 3, "value"], ["for", "film-overview"], ["readonly", "", "name", "film-overview", "id", "film-overview", "cols", "30", "rows", "10", 3, "value"], ["for", "film-id"], ["id", "film-id", "type", "text", "readonly", "", 3, "value"], ["for", "film-adult"], ["id", "film-adult", "type", "text", "readonly", "", 3, "value"], ["for", "film-popularity"], ["id", "film-popularity", "type", "text", "readonly", "", 3, "value"], ["for", "film-release-date"], ["id", "film-release-date", "type", "text", "readonly", "", 3, "value"], ["for", "film-backdroppath"], ["id", "film-backdroppath", "type", "text", "readonly", "", 3, "value"], ["for", "film-video"], ["id", "film-video", "type", "text", "readonly", "", 3, "value"], ["for", "film-vote-average"], ["id", "film-vote-average", "type", "text", "readonly", "", 3, "value"], ["for", "film-vote-count"], ["id", "film-vote-count", "type", "text", "readonly", "", 3, "value"], ["for", "film-datum-unosa"], ["id", "film-datum-unosa", "type", "text", "readonly", "", 3, "value"], ["for", "film-homepage"], ["id", "film-homepage", "type", "text", "readonly", "", 3, "value"], ["for", "film-imdb-id"], ["id", "film-imdb-id", "type", "text", "readonly", "", 3, "value"], ["for", "film-status"], ["id", "film-status", "type", "text", "readonly", "", 3, "value"], ["for", "film-tagline"], ["id", "film-tagline", "type", "text", "readonly", "", 3, "value"], ["for", "film-korisnik-id"], ["id", "film-korisnik-id", "type", "text", "readonly", "", 3, "value"], [1, "lijepiGumb"]],
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Na galeriju");
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
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](30, 20, ctx.odabraniFilm.release_date, "dd.MM.yyyy. hh:mm:ss"));
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
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
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




function NavigacijaComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Pregled filmova ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigacijaComponent_a_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Prijava ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigacijaComponent_a_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Prijedlozi ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function NavigacijaComponent_a_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavigacijaComponent_a_15_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.odjaviKorisnika());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Odjava");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
//import { ChangeDetectorRef } from '@angular/core'; // rerenderanje
class NavigacijaComponent {
  constructor(korisniciService) {
    this.korisniciService = korisniciService;
    this.prijavljen = sessionStorage.getItem('prijavljeniKorisnik');
    this.displayObicni = false;
    this.displamKorisnik = false;
    this.displayAdmin = false;
  }
  odjaviKorisnika() {
    sessionStorage.setItem('prijavljeniKorisnik', ''); //nema prijavljenog
  }

  ngOnInit() {
    console.log('on init u glavnom');
    this.PrikaziNavigaciju();
  }
  PrikaziNavigaciju() {
    this.prijavljen = sessionStorage.getItem('prijavljeniKorisnik');
    console.log('prijavljen - ' + this.prijavljen);
  }
  ngAfterContentChecked() {
    //console.log(' ngAfterContentChecked');
    //();
    // ovo se svako malo pozove
  }
}
NavigacijaComponent.ɵfac = function NavigacijaComponent_Factory(t) {
  return new (t || NavigacijaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_servisi_korisnici_service__WEBPACK_IMPORTED_MODULE_0__.KorisniciService));
};
NavigacijaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: NavigacijaComponent,
  selectors: [["app-navigacija"]],
  decls: 16,
  vars: 4,
  consts: [["routerLink", "/zanrovi", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pregledFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 4, "ngIf"], ["routerLink", "/prijava", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 4, "ngIf"], ["routerLink", "/prijedloziFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 4, "ngIf"], ["routerLink", "/pocetna", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pocetna", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 3, "click", 4, "ngIf"], ["routerLink", "/pregledFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/prijava", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/prijedloziFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pocetna", "routerLinkActive", "active", "ariaCurrentWhenActive", "page", 3, "click"]],
  template: function NavigacijaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav")(1, "ul")(2, "li")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Zanrovi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, NavigacijaComponent_a_6_Template, 2, 0, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, NavigacijaComponent_a_8_Template, 2, 0, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavigacijaComponent_a_10_Template, 2, 0, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li")(12, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Pocetna");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, NavigacijaComponent_a_15_Template, 2, 0, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljen == "2" || ctx.prijavljen == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.prijavljen);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljen == "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prijavljen == "1" || ctx.prijavljen == "2");
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






function PregledFilmovaComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 10);
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
function PregledFilmovaComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PregledFilmovaComponent_div_12_div_2_Template, 2, 3, "div", 9);
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
    this.filter = {
      odobreno: 1
    };
  }
  ngOnInit() {
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('on init');
      _this.filmoviOdobreni = yield _this.filmoviService.dajMojeFilmove();
    })();
  }
}
PregledFilmovaComponent.ɵfac = function PregledFilmovaComponent_Factory(t) {
  return new (t || PregledFilmovaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_servisi_filmovi_service__WEBPACK_IMPORTED_MODULE_1__.FilmoviService));
};
PregledFilmovaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PregledFilmovaComponent,
  selectors: [["app-pregled-filmova"]],
  decls: 13,
  vars: 1,
  consts: [[1, "pregled"], ["id", "sort"], ["value", "Naziv"], ["value", "Datum"], ["value", "Zanr"], ["id", "stranicenje"], ["id", "moji-filmovi-kontejner"], [4, "ngFor", "ngForOf"], [1, "moji-filmovi"], ["class", "moj-film", 3, "routerLink", 4, "ngIf"], [1, "moj-film", 3, "routerLink"]],
  template: function PregledFilmovaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "select", 1)(2, "option", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Naziv");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "option", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Datum");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "option", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Zanr");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Pregled filmova");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, PregledFilmovaComponent_div_12_Template, 3, 1, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.filmoviOdobreni);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"]],
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
      console.log('pocetak prijavi');
      let odgovor = yield _this.korisniciService.prijaviKorisnika(_this.inputKorime, _this.inputLozinka);
      console.log('odgovoro ' + JSON.stringify(odgovor));
      if (odgovor != false) {
        console.log('kraj');
        sessionStorage.setItem('prijavljeniKorisnik', odgovor.uloga_id);
      }
    })();
  }
  registriraj() {
    this.korisniciService.dodajKorisnika(this.korime, this.lozinka, this.ime, this.prezime, this.email);
  }
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
    var _this = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.filmoviNeodobreni = yield _this.filmoviService.dajMojeFilmove();
    })();
  }
  odobriFilm(id) {
    this.filmoviService.odobri(id);
  }
  odbaciFilm(id) {
    this.filmoviService.odbaci(id);
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class FilmoviService {
  constructor() {}
  dajMojeFilmove() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let odgovor = yield fetch('http://localhost:9000/api/filmovi');
      return JSON.parse(yield odgovor.text());
    })();
  }
  dajOdabraniFilm(idFilma) {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('id filma -----> ' + idFilma);
      let odgovor = yield fetch('http://localhost:9000/api/filmovi/' + idFilma);
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
      let podatki = yield fetch('http://localhost:9000/api/filmovi/:id', parametri);
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
      let podatki = yield fetch('http://localhost:9000/api/filmovi/:id', parametri);
      yield podatki.text();
    })();
  }
}
FilmoviService.ɵfac = function FilmoviService_Factory(t) {
  return new (t || FilmoviService)();
};
FilmoviService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class KorisniciService {
  constructor(router) {
    this.router = router;
  }
  // private updateMenu = new Subject<void>();
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
      /*
      let odgovor = await fetch(
        'http://localhost:9000/api/korisnici/' + korime + '/prijava',
        parametri
      );*/
      console.log('prije odg');
      let odgovor = yield fetch('http://localhost:9001/prijava', parametri);
      console.log('poslije odg' + odgovor);
      if (odgovor.status == 200) {
        console.log('uspjesna prijava');
        _this.router.navigate(['/pocetna']);
        let podaci = yield odgovor.text();
        console.log('podaci ' + podaci);
        return JSON.parse(podaci);
        //  return;
        //return JSON.parse(await odgovor.text());
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
      // TODO da sprema ko sol
      // mozda probaj s onim ngFormom
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: header
      };
      let podaci = yield fetch('http://localhost:9001/registracija', parametri);
      return yield podaci.text();
    })();
  }
}
KorisniciService.ɵfac = function KorisniciService_Factory(t) {
  return new (t || KorisniciService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
};
KorisniciService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ZanroviService {
  constructor() {}
  dajMojePodatke() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let mojiZanrovi = new Array();
      let odgovor = yield fetch('http://localhost:9000/api/zanr'); // OVO SE CITA IZ ENVIRONMENT VARIJABLI TODO
      mojiZanrovi = JSON.parse(yield odgovor.text());
      return mojiZanrovi;
    })();
  }
  dajPodatke() {
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tmdbZanrovi = new Array();
      let odgovor = yield fetch('http://localhost:9000/api/tmdb/zanr');
      tmdbZanrovi = JSON.parse(yield odgovor.text()).genres;
      return tmdbZanrovi;
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
        const odgovor = yield fetch('http://localhost:9000/api/zanr', parametri);
        const data = yield odgovor.text();
        console.log(data);
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
      let podatki = yield fetch('http://localhost:9000/api/zanr/:id', parametri);
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
      let podatki = yield fetch('http://localhost:9000/api/zanr', parametri);
      yield podatki.text();
    })();
  }
}
ZanroviService.ɵfac = function ZanroviService_Factory(t) {
  return new (t || ZanroviService)();
};
ZanroviService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: ZanroviService,
  factory: ZanroviService.ɵfac,
  providedIn: 'root'
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





function ZanrComponent_ul_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li")(2, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ZanrComponent_ul_12_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);
      const zanr_r2 = restoredCtx.$implicit;
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.onChangeOdabraniRadioTmdb($event, zanr_r2.id));
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
function ZanrComponent_ul_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li")(2, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function ZanrComponent_ul_14_Template_input_change_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7);
      const zanr_r5 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.onChangeOdabraniRadioMoj($event, zanr_r5.id));
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
  onChangeOdabraniRadioTmdb(event, id) {
    // koji je trenutno odabran
    this.odabraniRadioNameTmdb = event.target.value;
    this.odabraniRadioIdTmdb = id;
  }
  onChangeOdabraniRadioMoj(event, id) {
    this.odabraniRadioNameMoj = event.target.value;
    this.odabraniRadioIdMoj = id;
  }
  // TODO provjeri jel vec postoji u bazi taj
  dodajTMDBPodatke() {
    this.zanroviService.dodajIzTMDBAuMojuBazu(this.odabraniRadioIdTmdb, this.odabraniRadioNameTmdb);
  }
  promijeniNaziv() {
    this.zanroviService.updateajZanr(this.odabraniRadioIdMoj, this.noviNaziv);
  }
  dajMojePodatkeBrisanje() {
    var _this3 = this;
    return (0,C_Users_Ana_Desktop_askarica20_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let odgovor = yield fetch('http://localhost:9000/api/zanr');
        if (odgovor.status === 200) {
          const podaci = yield odgovor.text();
          _this3.zanroviService.izbrisiBezFilmova(podaci);
        } else {
          alert(`Problem kod preuzimanja podataka: ${odgovor.statusText}`);
        }
      } catch (error) {
        console.error(error);
      }
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
  consts: [[1, "zanrovi-gumbi"], ["id", "dajPodatke", 1, "lijepiGumb", 3, "click"], ["id", "dajMojePodatke", 1, "lijepiGumb", 3, "click"], ["id", "dodajTMDBPodatke", 1, "lijepiGumb", 3, "click"], ["id", "promijeniNaziv", 1, "lijepiGumb", 3, "click"], ["id", "izbrisiBezFilmova", 1, "lijepiGumb", 3, "click"], ["id", "zanrovi-container"], [4, "ngFor", "ngForOf"], ["id", "zanrovi-container-moje"], ["id", "informacije-zanrovi"], ["type", "text", "id", "inputPromjenaNaziva", 3, "ngModel", "ngModelChange"], ["type", "radio", "name", "tmdb-zanrovi", 3, "id", "value", "change"], ["type", "radio", "name", "moji-zanrovi", 3, "id", "value", "change"]],
  template: function ZanrComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_1_listener() {
        return ctx.prikaziTMDBZanrove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ucitaj zanrove TMDB ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_3_listener() {
        return ctx.prikaziMojeZanrove();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Ucitaj zanrove moja baza ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_5_listener() {
        return ctx.dodajTMDBPodatke();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, " Dodaj iz TMDB-a u moju bazu ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_7_listener() {
        return ctx.promijeniNaziv();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Promijeni naziv odabranog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ZanrComponent_Template_button_click_9_listener() {
        return ctx.dajMojePodatkeBrisanje();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Izbrisi sve zanrove bez filmova ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, ZanrComponent_ul_12_Template, 4, 4, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ZanrComponent_ul_14_Template, 4, 4, "ul", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function ZanrComponent_Template_input_ngModelChange_16_listener($event) {
        return ctx.noviNaziv = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zanroviTMDB);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.zanroviMoji);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.noviNaziv);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgModel],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

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