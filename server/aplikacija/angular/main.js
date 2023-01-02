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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);






// pocetna verzija za routing
const routes = [{
  path: 'zanrovi',
  component: _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__.ZanrComponent
}, {
  path: 'prijava',
  component: _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_1__.PrijavaComponent
}, {
  path: 'pregledFilmova',
  component: _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_0__.PregledFilmovaComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 81);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5319);
/* harmony import */ var _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zanr/zanr.component */ 3742);
/* harmony import */ var _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navigacija/navigacija.component */ 749);
/* harmony import */ var _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pregled-filmova/pregled-filmova.component */ 6850);
/* harmony import */ var _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./prijava/prijava.component */ 4167);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _zanr_zanr_component__WEBPACK_IMPORTED_MODULE_2__.ZanrComponent, _navigacija_navigacija_component__WEBPACK_IMPORTED_MODULE_3__.NavigacijaComponent, _pregled_filmova_pregled_filmova_component__WEBPACK_IMPORTED_MODULE_4__.PregledFilmovaComponent, _prijava_prijava_component__WEBPACK_IMPORTED_MODULE_5__.PrijavaComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule]
  });
})();

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class NavigacijaComponent {}
NavigacijaComponent.ɵfac = function NavigacijaComponent_Factory(t) {
  return new (t || NavigacijaComponent)();
};
NavigacijaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: NavigacijaComponent,
  selectors: [["app-navigacija"]],
  decls: 11,
  vars: 0,
  consts: [["routerLink", "/zanrovi", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/pregledFilmova", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"], ["routerLink", "/prijava", "routerLinkActive", "active", "ariaCurrentWhenActive", "page"]],
  template: function NavigacijaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav")(1, "ul")(2, "li")(3, "a", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Zanrovi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li")(6, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pregled filmova");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li")(9, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Prijava");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkActive],
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PregledFilmovaComponent {}
PregledFilmovaComponent.ɵfac = function PregledFilmovaComponent_Factory(t) {
  return new (t || PregledFilmovaComponent)();
};
PregledFilmovaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PregledFilmovaComponent,
  selectors: [["app-pregled-filmova"]],
  decls: 2,
  vars: 0,
  template: function PregledFilmovaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Svi filmovi iz moje baze");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["*[_ngcontent-%COMP%] {\n  background-color: pink;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3Byb2pla3RpL3J3YXphZGFjYTIvc3JjL2FwcC9wcmVnbGVkLWZpbG1vdmEvcHJlZ2xlZC1maWxtb3ZhLmNvbXBvbmVudC5zY3NzIiwid2VicGFjazovLy4vLi4vLi4vcndhJTIwYW5hL2FuZ3VsYXIvcHJvamVrdGkvcndhemFkYWNhMi9zcmMvYXBwL3ByZWdsZWQtZmlsbW92YS9wcmVnbGVkLWZpbG1vdmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcclxufVxyXG4iLCIqIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);


class PrijavaComponent {}
PrijavaComponent.ɵfac = function PrijavaComponent_Factory(t) {
  return new (t || PrijavaComponent)();
};
PrijavaComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PrijavaComponent,
  selectors: [["app-prijava"]],
  decls: 49,
  vars: 0,
  consts: [["lang", "hr"], ["charset", "UTF-8"], ["http-equiv", "X-UA-Compatible", "content", "IE=edge"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"], ["rel", "icon", "type", "image/x-icon", "href", "./fotografije/favicon.png"], [1, "login-container"], [1, "lijevo"], [1, "desno"], [1, "input-container", "login"], ["id", "poruka"], ["action", "/prijava", "method", "POST", "id", "formPrijava"], ["name", "korime", "type", "text", "placeholder", "Korisni\u010Dko ime", "id", "korime", "required", ""], ["name", "lozinka", "type", "password", "placeholder", "Lozinka", "id", "lozinka", "required", ""], ["href", "/registracija"], ["id", "btnSalji", "type", "submit", "value", "Prijavi se"], [1, "podaci-prijava"], ["href", "http://validator.w3.org/check?uri=http://spider.foi.hr:12204/prijava"], ["src", "../fotografije/html_ikona.png", "alt", "html-ikona", 1, "ikona-dno"]],
  template: function PrijavaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html", 0)(1, "head");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "meta", 1)(3, "meta", 2)(4, "meta", 3)(5, "link", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "title");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "FOIFLIX - Prijava");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "body");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "header");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "main")(11, "div", 5)(12, "div", 6)(13, "h3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Dobrodo\u0161li na");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "FOIFLIX");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "ul")(19, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Pretra\u017Eujte filmove");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Gledajte informacije o filmovima");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "I jo\u0161 mnogo toga!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 7)(26, "div", 8)(27, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "#poruka#");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Prijava");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "form", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 11)(33, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Nema\u0161 ra\u010Dun? ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "span")(37, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Registriraj se.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "input", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15)(41, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "podaci za prijavu:");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " admin => korime: administrator, lozinka: rwa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " korisnik => korime: obican, lozinka: rwa ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ZanroviService {
  constructor() {}
  dajMojePodatke() {
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let mojiZanrovi = new Array();
      let odgovor = yield fetch('http://localhost:9000/api/zanr'); // OVO SE CITA IZ ENVIRONMENT VARIJABLI TODO
      mojiZanrovi = JSON.parse(yield odgovor.text());
      return mojiZanrovi;
    })();
  }
  dajPodatke() {
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tmdbZanrovi = new Array();
      let odgovor = yield fetch('http://localhost:9000/api/tmdb/zanr');
      tmdbZanrovi = JSON.parse(yield odgovor.text()).genres;
      return tmdbZanrovi;
    })();
  }
  dodajIzTMDBAuMojuBazu(novi_id, novi_naziv) {
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log(novi_id + ' ' + novi_naziv);
      let tijelo = {
        id: novi_id,
        name: novi_naziv
      };
      const headers = new Headers({
        'Content-Type': 'application/json'
      });
      const params = {
        method: 'POST',
        body: JSON.stringify(tijelo),
        headers: headers
      };
      try {
        const odgovor = yield fetch('http://localhost:9000/api/zanr', params);
        const data = yield odgovor.text();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }
  updateajZanr(id, novi_naziv) {
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let tijelo = {
        id: id,
        name: novi_naziv
      };
      console.log(`GASER ${tijelo.name} ${novi_naziv}`);
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'PUT',
        body: JSON.stringify(tijelo),
        headers: header
      };
      console.log(`ODABRANI ID ${id}`);
      let podatki = yield fetch('http://localhost:9000/api/zanr/:id', parametri);
      yield podatki.text();
    })();
  }
  izbrisiBezFilmova(podaci) {
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let zanrovi_parse = JSON.parse(podaci);
      let tijelo = {
        zanrovi: zanrovi_parse
      };
      let header = new Headers();
      header.set('Content-Type', 'application/json');
      let parametri = {
        method: 'DELETE',
        body: JSON.stringify(tijelo),
        headers: header
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
/* harmony import */ var C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
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
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.zanroviMoji = yield _this.zanroviService.dajMojePodatke();
    })();
  }
  prikaziTMDBZanrove() {
    var _this2 = this;
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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
    console.log('kliknut sam');
    this.zanroviService.dodajIzTMDBAuMojuBazu(this.odabraniRadioIdTmdb, this.odabraniRadioNameTmdb);
  }
  promijeniNaziv() {
    console.log(`NOVI NAZIV: ${this.noviNaziv}  odabrani --> ${this.odabraniRadioNameMoj} + ${this.odabraniRadioIdMoj}`);
    this.zanroviService.updateajZanr(this.odabraniRadioIdMoj, this.noviNaziv);
  }
  dajMojePodatkeBrisanje() {
    var _this3 = this;
    return (0,C_Users_Ana_Desktop_rwa_ana_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
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