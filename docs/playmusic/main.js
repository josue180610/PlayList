(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\playmusic\src\main.ts */"zUnb");


/***/ }),

/***/ "7BuC":
/*!***********************************************************************************!*\
  !*** ./src/app/Components/body-list/body-list-item/body-list-reactive.service.ts ***!
  \***********************************************************************************/
/*! exports provided: BodyListReactiveService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyListReactiveService", function() { return BodyListReactiveService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class BodyListReactiveService {
    constructor() {
        this.search = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("");
        this.bodyListform = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            search: this.search
        });
    }
}
BodyListReactiveService.ɵfac = function BodyListReactiveService_Factory(t) { return new (t || BodyListReactiveService)(); };
BodyListReactiveService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BodyListReactiveService, factory: BodyListReactiveService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyListReactiveService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AoFM":
/*!**********************************************************!*\
  !*** ./src/app/Components/body-list/body-list.module.ts ***!
  \**********************************************************/
/*! exports provided: BodyListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyListModule", function() { return BodyListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body-list-item/body-list-item.component */ "OiSW");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _footer_list_footer_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../footer-list/footer-list.module */ "goBx");






class BodyListModule {
}
BodyListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BodyListModule });
BodyListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BodyListModule_Factory(t) { return new (t || BodyListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _footer_list_footer_list_module__WEBPACK_IMPORTED_MODULE_4__["FooterListModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BodyListModule, { declarations: [_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_2__["BodyListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _footer_list_footer_list_module__WEBPACK_IMPORTED_MODULE_4__["FooterListModule"]], exports: [_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_2__["BodyListItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_2__["BodyListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _footer_list_footer_list_module__WEBPACK_IMPORTED_MODULE_4__["FooterListModule"]
                ],
                exports: [_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_2__["BodyListItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "O8zc":
/*!********************************************************************************!*\
  !*** ./src/app/Components/footer-list/footer-list-item/footer-list.service.ts ***!
  \********************************************************************************/
/*! exports provided: FooterListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterListService", function() { return FooterListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class FooterListService {
    constructor() {
        this.controlAudio = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](50);
        this.formAudio = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            controlAudio: this.controlAudio
        });
    }
}
FooterListService.ɵfac = function FooterListService_Factory(t) { return new (t || FooterListService)(); };
FooterListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FooterListService, factory: FooterListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OJ7A":
/*!************************************************************************************!*\
  !*** ./src/app/Components/aside-list/aside-list-item/aside-list-item.component.ts ***!
  \************************************************************************************/
/*! exports provided: AsideListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideListItemComponent", function() { return AsideListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AsideListItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
AsideListItemComponent.ɵfac = function AsideListItemComponent_Factory(t) { return new (t || AsideListItemComponent)(); };
AsideListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AsideListItemComponent, selectors: [["app-aside-list-item"]], decls: 32, vars: 0, consts: [[2, "width", "100%", "padding-top", "25px"], [1, "container-img-drowp"], ["src", "../../../../assets/images/foxbel-music.png"], ["id", "section-library", 1, "form-group", 2, "margin-left", "10px"], [1, "main-title"], [2, "padding", "0px 20px"], ["id", "section-playList", 1, "form-group", 2, "margin-left", "10px"]], template: function AsideListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Mi Librer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Recientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Artistas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u00C1lbums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Canciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Estaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Metal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Para Bailar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Rock 90s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Baladas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Estaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["*[_ngcontent-%COMP%] {\n  list-style: none;\n}\n\n.container-img-drowp[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  width: 100%;\n}\n\n.main-title[_ngcontent-%COMP%] {\n  padding: 0px 20px;\n  margin: 0;\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  \n  color: #FFFFFF;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  \n  color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9hc2lkZS1saXN0L2FzaWRlLWxpc3QtaXRlbS9hc2lkZS1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUFjLGVBQUE7RUFBZ0IsdUJBQUE7RUFBd0IsV0FBQTtBQUkxRDs7QUFEQTtFQUVBLGlCQUFBO0VBQ0EsU0FBQTtFQUNBLGtCQUFBO0VBRUEsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFHQSxjQUFBO0FBQUE7O0FBR0E7RUFFQSxxQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUZBIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9hc2lkZS1saXN0L2FzaWRlLWxpc3QtaXRlbS9hc2lkZS1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqeyBcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbi5jb250YWluZXItaW1nLWRyb3dwe1xyXG4gICAgZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7anVzdGlmeS1jb250ZW50OiBjZW50ZXI7d2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYWluLXRpdGxle1xyXG5cclxucGFkZGluZzowcHggMjBweDtcclxubWFyZ2luOiAwO1xyXG4vKiAyMi1ib2xkLXdoaXRlICovXHJcblxyXG5mb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDIycHg7XHJcbmxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5cclxuXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG51bCBsaSB7XHJcblxyXG4vKiAxNi1yZWd1bGFyLXdoaXRlICovXHJcblxyXG5mb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-aside-list-item',
                templateUrl: './aside-list-item.component.html',
                styleUrls: ['./aside-list-item.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OiSW":
/*!*********************************************************************************!*\
  !*** ./src/app/Components/body-list/body-list-item/body-list-item.component.ts ***!
  \*********************************************************************************/
/*! exports provided: BodyListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyListItemComponent", function() { return BodyListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var _footer_list_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../footer-list/footer-list-item/footer-list-item.component */ "PG+b");
/* harmony import */ var _Services_play_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/play-list.service */ "sreG");
/* harmony import */ var _body_list_reactive_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./body-list-reactive.service */ "7BuC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");










function BodyListItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyListItemComponent_div_11_Template_i_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.showMessagePadre(ctx_r3.responseSearchCollections[1].album.cover_small, ctx_r3.responseSearchCollections[1].preview, ctx_r3.nameArt, ctx_r3.nameAlbum, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "strong", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea illo ex nisi, quas illum animi veniam tempora quasi eos provident impedit neque cupiditate in facilis velit veritatis molestias odit beatae? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyListItemComponent_div_11_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.showMessagePadre(ctx_r5.responseSearchCollections[1].album.cover_small, ctx_r5.responseSearchCollections[1].preview, ctx_r5.nameArt, ctx_r5.nameAlbum, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Reproducir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Seguir");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.imgArt, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMapInterpolate1"]("display: flex;flex-wrap: wrap;\n            background: linear-gradient(0deg, rgba(167, 0, 0, 0.8), rgba(167, 0, 0, 0.8)),url('", ctx_r0.imgBackGround, "');\n            background-size: cover;\n            background-repeat: no-repeat;");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.nameArt);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.subDescription, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.rank, " seguidores");
} }
function BodyListItemComponent_p_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "strong", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function BodyListItemComponent_ul_17_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "ul", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyListItemComponent_ul_17_Template_i_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r8); const value_r6 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r7.showMessagePadre(value_r6.album.cover_small, value_r6.preview, value_r6.artist.name, value_r6.album.title, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](12, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", value_r6.album.cover_medium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](9, 3, value_r6.title_short, 0, 15));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](12, 7, value_r6.artist.name, 0, 15), "}");
} }
class BodyListItemComponent {
    constructor(serv, react, ref) {
        this.serv = serv;
        this.react = react;
        this.ref = ref;
        this.nameArt = "";
        this.subDescription = "";
        this.fans = "";
        this.minDescription = "";
        this.imgArt = "";
        this.imgBackGround = "";
        this.nameAlbum = "";
        this.rank = "";
        this.responseSearchCollections = [];
        this.flagFound = false;
        this.flagMessageFound = false;
    }
    ngAfterViewInit() {
        console.log(this.footerComponent);
    }
    ngOnInit() {
        this.handleSearchInputValue("?");
    }
    showMessagePadre(linkImage, linkMusic, artTitle, albumTitle, reprod) {
        this.footerComponent.showMessage(linkImage, linkMusic, artTitle, albumTitle, reprod, this.responseSearchCollections);
    }
    searchDataByParameter($event) {
        $event.preventDefault();
        this.handleSearchInputValue(this.react.search.value);
    }
    handleSearchInputValue(parameter) {
        this.blockUI.start("Cargando...");
        this.serv.getPlayList(parameter).toPromise().then((res) => {
            this.flagFound = true;
            this.flagMessageFound = false;
            this.responseSearchCollections = res["data"];
            if (this.responseSearchCollections.length > 0) {
                this.nameArt = this.responseSearchCollections[1].artist.name;
                this.imgBackGround = this.responseSearchCollections[1].artist.picture;
                this.imgArt = this.responseSearchCollections[1].album.cover_big;
                this.subDescription = this.responseSearchCollections[1].title;
                this.rank = this.responseSearchCollections[1].rank;
                this.nameAlbum = this.responseSearchCollections[1].album.title;
                this.showMessagePadre(this.responseSearchCollections[1].album.cover_small, this.responseSearchCollections[1].preview, this.nameArt, this.nameAlbum, false);
            }
            this.ref.detectChanges();
            this.blockUI.stop();
        }, (error) => {
            this.flagFound = true;
            this.flagMessageFound = true;
        });
    }
}
BodyListItemComponent.ɵfac = function BodyListItemComponent_Factory(t) { return new (t || BodyListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_Services_play_list_service__WEBPACK_IMPORTED_MODULE_4__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_body_list_reactive_service__WEBPACK_IMPORTED_MODULE_5__["BodyListReactiveService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"])); };
BodyListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BodyListItemComponent, selectors: [["app-body-list-item"]], viewQuery: function BodyListItemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_footer_list_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_3__["FooterListItemComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.footerComponent = _t.first);
    } }, decls: 20, vars: 4, consts: [[3, "formGroup"], [2, "width", "90%", "margin-left", "auto", "margin-right", "auto"], [2, "display", "flex", "justify-content", "space-between", "margin-top", "40px"], [1, "container-input-search"], ["type", "text", "placeholder", "Buscar", "formControlName", "search", 1, "input-search", 2, "width", "100%", 3, "change"], [1, "fas", "fa-search", "flat-icon-search", 3, "click"], [1, "container-user-profile"], [1, "font-awesome", "fas", "fa-user"], [1, "text-username"], [1, "mt-10", 2, "margin", "40px 0px"], ["style", "padding: 0;margin: 0;display: flex;flex-wrap: wrap; width: 100%;z-index: 1;", 4, "ngIf"], [2, "margin", "30px auto"], [1, "title-result"], ["class", "container-loading", 4, "ngIf"], [1, "element-list"], ["style", "list-style: none;", 4, "ngFor", "ngForOf"], [1, "footer-fixed", 2, "position", "absolute", "width", "100%", "left", "0%"], [2, "padding", "0", "margin", "0", "display", "flex", "flex-wrap", "wrap", "width", "100%", "z-index", "1"], [1, "container-imagen", 2, "position", "relative"], ["width", "100%", 3, "src"], [1, "btn", "fa", "fa-play", "position-play", 3, "click"], [1, "container-description-art"], [2, "margin-top", "20px", "margin-left", "30px", "padding", "0"], [1, "title-description-art", "m-0", 2, "color", "#FFFFFF"], [1, "m-0", "title-fans", 2, "color", "#ffffff"], [2, "color", "#000000", "margin", "0 15px"], ["id", "description", 1, "text-description-music"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "left"], [1, "btn", "btn-play", 3, "click"], [1, "btn", "btn-follow"], ["href", "#", 1, "btn", "btn-link", "btn-link-show"], [1, "container-loading"], [1, "animate__animated", "animate__bounce"], [2, "list-style", "none"], [1, "card", 2, "width", "auto", "float", "left"], [1, "card-img-top", "container-main-imagen"], ["width", "100%", "alt", "Card image cap", 1, "rounded", "mx-auto", "d-block", 3, "src"], [1, "btn", "fa", "fa-play", "sub-position-play", 3, "click"], [1, "card-body", "bg-mobile-response-description", 2, "background-color", "rgba(179, 170, 170, 0.1)"], [1, "description-title-music", "m-0"], [1, "description-art", "m-0"]], template: function BodyListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function BodyListItemComponent_Template_input_change_4_listener($event) { return ctx.searchDataByParameter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function BodyListItemComponent_Template_i_click_5_listener($event) { return ctx.searchDataByParameter($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Francisco M");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, BodyListItemComponent_div_11_Template, 22, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "h2", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Resultados ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, BodyListItemComponent_p_15_Template, 3, 0, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, BodyListItemComponent_ul_17_Template, 13, 11, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "footer", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-footer-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.react.bodyListform);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.flagFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.flagFound);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.responseSearchCollections);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _footer_list_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_3__["FooterListItemComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["SlicePipe"]], styles: [".input-search[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0%;\n  right: 0%;\n  top: 0%;\n  bottom: 0%;\n  padding-left: 10px;\n  background: #FFFFFF;\n  \n  border: 1px solid #828282;\n  box-sizing: border-box;\n  border-radius: 100px;\n}\n\n.flat-icon-search[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  left: 92.51%;\n  right: 4.05%;\n  top: 25%;\n  bottom: 25%;\n  font-family: Font Awesome 5 Free;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 18px;\n  line-height: 21px;\n  \n  color: #BDBDBD;\n}\n\n.text-username[_ngcontent-%COMP%] {\n  text-align: center;\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  \n  \n  color: #4F4F4F;\n  margin-top: 15px;\n}\n\n.font-awesome[_ngcontent-%COMP%] {\n  font-family: Font Awesome 5 Free;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  \n  color: #E86060;\n}\n\n.title-result[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  \n  \n  color: #E86060;\n}\n\n.list-items-music[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 5px;\n  margin: 1px;\n}\n\n.list-items-music[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 2px 5px;\n  padding: 10px;\n}\n\n.container-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n  border-radius: 10px;\n  padding: 5px;\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.container-description-art[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 80%;\n  mix-blend-mode: normal;\n  opacity: 0.8;\n  transform: matrix(1, 0, 0, 1, 0, 0);\n  padding-bottom: 20px;\n}\n\n.title-description-art[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  \n}\n\n.text-description-music[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-left: -10px;\n  padding: 10px;\n  width: 100%;\n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFFFFF;\n}\n\n.title-fans[_ngcontent-%COMP%] {\n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  \n  color: #662323;\n}\n\n.btn-play[_ngcontent-%COMP%] {\n  \n  background: #eb1717;\n  color: #ffffff;\n  mix-blend-mode: normal;\n  border-radius: 100px;\n}\n\n.btn-follow[_ngcontent-%COMP%] {\n  border: 1px solid #eb1717;\n  box-sizing: border-box;\n  border-radius: 100px;\n  color: #ffffff;\n  margin: 0 10px;\n}\n\n.btn-link-show[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n\n.container-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  width: 20%;\n}\n\n.description-title-music[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 10px;\n  line-height: 12px;\n  \n  color: #555555;\n}\n\n.description-art[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 15px;\n  \n  \n  color: #828282;\n}\n\n.position-play[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #ffffff;\n  width: 100%;\n  height: 72px;\n  margin: 0 auto;\n  top: 70px;\n  font-size: 50px;\n}\n\n.sub-position-play[_ngcontent-%COMP%] {\n  position: absolute;\n  color: #FFFFFF;\n  width: 100%;\n  height: 72px;\n  margin: 0 auto;\n  top: 55px;\n  font-size: 30px;\n}\n\n.container-main-imagen[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 150px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 10px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #f1f1f1;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #888;\n}\n\n.container-input-search[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  width: 80%;\n  position: relative;\n}\n\n.container-user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  width: calc(100%-80%);\n}\n\n.element-list[_ngcontent-%COMP%] {\n  height: 400px;\n  overflow: auto;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #555;\n}\n\n@media (max-width: 950px) {\n  .element-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .container-user-profile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .container-input-search[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n    position: relative;\n    height: 40px;\n  }\n}\n\n@media (max-width: 600px) {\n  ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    margin: 100px 0;\n  }\n\n  .bg-mobile-response-description[_ngcontent-%COMP%] {\n    background-color: rgba(0, 0, 0, 0.5);\n    position: absolute;\n    bottom: -70%;\n    width: 100%;\n  }\n\n  .description-title-music[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .description-art[_ngcontent-%COMP%] {\n    color: #ffffff;\n  }\n\n  .element-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n  .container-user-profile[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .container-input-search[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    width: 100%;\n    position: relative;\n    height: 40px;\n  }\n\n  .flat-icon-search[_ngcontent-%COMP%] {\n    margin-left: -20px;\n    margin-top: 0px;\n  }\n\n  .container-imagen[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .container-description-art[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .position-play[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #c2bbbb;\n    font-size: 100px;\n    top: 110px;\n    left: 10px;\n  }\n\n  .container-main-imagen[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n\n  .sub-position-play[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #c2bbbb;\n    font-size: 45px;\n    top: 95px;\n    left: 7px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9ib2R5LWxpc3QvYm9keS1saXN0LWl0ZW0vYm9keS1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUFKOztBQUVBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUVBLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxjQUFBO0FBRkE7O0FBSUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBREE7O0FBSUE7RUFDSSxnQ0FBQTtFQUNKLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUVBLGtCQUFBO0VBRUEsY0FBQTtBQUhBOztBQU1BO0VBQ0ksa0JBQUE7RUFFSixzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUdBLGtCQUFBO0VBRUEsY0FBQTtBQVBBOztBQVVBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQVBKOztBQVNBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQU5KOztBQVNBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQVkscUJBQUE7RUFBc0IsbUJBQUE7RUFBb0IsWUFBQTtFQUFhLGNBQUE7RUFBZSxvQ0FBQTtBQUR0Rjs7QUFJQTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQkFBQTtBQURKOztBQUlBO0VBQ0ksa0JBQUE7RUFFSixzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQUZBOztBQU1BO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUosY0FBQTtBQUpBOztBQU9BO0VBQ0ksc0JBQUE7RUFDSixrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBSkE7O0FBT0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFKSjs7QUFPQTtFQUNJLHlCQUFBO0VBQ0osc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FBSkE7O0FBTUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFISjs7QUFLQTtFQUNJLGFBQUE7RUFBYyxlQUFBO0VBQWdCLDJCQUFBO0VBQTRCLFVBQUE7QUFDOUQ7O0FBRUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0FBQ0E7O0FBQ0E7RUFDQSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUFDQTs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFBVSxlQUFBO0FBRWQ7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQVUsZUFBQTtBQUlkOztBQUZBO0VBQ0ksWUFBQTtFQUFhLGFBQUE7QUFNakI7O0FBSEEsVUFBQTs7QUFDQTtFQUNJLFdBQUE7QUFNSjs7QUFIRSxVQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUFNSjs7QUFIRSxXQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGFBQUE7RUFBYyxlQUFBO0VBQWdCLDJCQUFBO0VBQTRCLFVBQUE7RUFBVyxrQkFBQTtBQVd6RTs7QUFUQTtFQUNJLGFBQUE7RUFBYyxlQUFBO0VBQWdCLHlCQUFBO0VBQTBCLHFCQUFBO0FBZTVEOztBQWJBO0VBQ0ksYUFBQTtFQUFjLGNBQUE7RUFBZSxhQUFBO0VBQWMsZUFBQTtBQW1CL0M7O0FBakJFLG9CQUFBOztBQUNBO0VBQ0UsZ0JBQUE7QUFvQko7O0FBbEJFO0VBQ0U7SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBcUJOOztFQW5CRTtJQUNJLGFBQUE7RUFzQk47O0VBcEJFO0lBQ0ksYUFBQTtJQUFjLGVBQUE7SUFBZ0IsMkJBQUE7SUFBNEIsV0FBQTtJQUFZLGtCQUFBO0lBQ3RFLFlBQUE7RUEyQk47QUFDRjs7QUF6QkE7RUFDSTtJQUNJLGVBQUE7RUEyQk47O0VBekJFO0lBQ0ksb0NBQUE7SUFDRCxrQkFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VBNEJMOztFQTFCRTtJQUNJLGNBQUE7RUE2Qk47O0VBMUJFO0lBQ0ksY0FBQTtFQTZCTjs7RUEzQkU7SUFDSSxhQUFBO0lBQ0EsZUFBQTtJQUNBLHVCQUFBO0VBOEJOOztFQTVCRTtJQUNJLGFBQUE7RUErQk47O0VBN0JFO0lBQ0ksYUFBQTtJQUFjLGVBQUE7SUFBZ0IsMkJBQUE7SUFBNEIsV0FBQTtJQUFZLGtCQUFBO0lBQ3RFLFlBQUE7RUFvQ047O0VBbENFO0lBQ0ksa0JBQUE7SUFDQSxlQUFBO0VBcUNOOztFQW5DRTtJQUNJLFdBQUE7RUFzQ047O0VBcENFO0lBQ0ksV0FBQTtFQXVDTjs7RUFyQ0U7SUFDSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxVQUFBO0VBd0NOOztFQXJDRTtJQUNJLFdBQUE7RUF3Q047O0VBdENFO0lBQ0ksa0JBQUE7SUFDQSxjQUFBO0lBQ0EsZUFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0VBeUNOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2JvZHktbGlzdC9ib2R5LWxpc3QtaXRlbS9ib2R5LWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnB1dC1zZWFyY2h7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIHJpZ2h0OiAwJTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBib3R0b206IDAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgIC8qIEdyYXkgKi9cclxuICAgIFxyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzgyODI4MjtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG4uZmxhdC1pY29uLXNlYXJjaHsgXHJcbmN1cnNvcjogcG9pbnRlcjtcclxucG9zaXRpb246IGFic29sdXRlO1xyXG5sZWZ0OiA5Mi41MSU7XHJcbnJpZ2h0OiA0LjA1JTtcclxudG9wOiAyNSU7XHJcbmJvdHRvbTogMjUlO1xyXG5cclxuZm9udC1mYW1pbHk6IEZvbnQgQXdlc29tZSA1IEZyZWU7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IDkwMDtcclxuZm9udC1zaXplOiAxOHB4O1xyXG5saW5lLWhlaWdodDogMjFweDtcclxuXHJcbi8qIFNvZnQgZ3JheSAqL1xyXG5cclxuY29sb3I6ICNCREJEQkQ7XHJcbn1cclxuLnRleHQtdXNlcm5hbWV7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuLyogMTYtcmVndWxhci13aGl0ZSAqL1xyXG5mb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTZweDtcclxubGluZS1oZWlnaHQ6IDIwcHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbi8qIEdyYXkgMiAqL1xyXG5jb2xvcjogIzRGNEY0RjtcclxubWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuLmZvbnQtYXdlc29tZXsgXHJcbiAgICBmb250LWZhbWlseTogRm9udCBBd2Vzb21lIDUgRnJlZTtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogOTAwO1xyXG5mb250LXNpemU6IDE0cHg7XHJcbmxpbmUtaGVpZ2h0OiAxNnB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4vKiBSZWQgUHJpbmNpcGFsICovXHJcblxyXG5jb2xvcjogI0U4NjA2MDtcclxufVxyXG5cclxuLnRpdGxlLXJlc3VsdHtcclxuICAgIC8qIDIyLWJvbGQtd2hpdGUgKi9cclxuXHJcbmZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDI3cHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG5cclxuLyogUmVkIFByaW5jaXBhbCAqL1xyXG5cclxuY29sb3I6ICNFODYwNjA7XHJcbn1cclxuXHJcbi5saXN0LWl0ZW1zLW11c2lje1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIG1hcmdpbjogMXB4O1xyXG59XHJcbi5saXN0LWl0ZW1zLW11c2ljIGxpIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMnB4IDVweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWluZXItbG9hZGluZ3sgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogMTBweDtwYWRkaW5nOiA1cHg7Y29sb3I6ICNmZmZmZmY7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWRlc2NyaXB0aW9uLWFydHsgXHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi50aXRsZS1kZXNjcmlwdGlvbi1hcnR7IFxyXG4gICAgLyogMjItYm9sZC13aGl0ZSAqL1xyXG5cclxuZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAyMnB4O1xyXG5saW5lLWhlaWdodDogMjdweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcbn1cclxuXHJcbi50ZXh0LWRlc2NyaXB0aW9uLW11c2ljeyBcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG5cclxuY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi50aXRsZS1mYW5zeyBcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiAxMHB4O1xyXG5saW5lLWhlaWdodDogMTJweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuY29sb3I6ICM2NjIzMjM7XHJcbn1cclxuXHJcbi5idG4tcGxheSB7XHJcbiAgICAvKiBSZWQgUHJpbmNpcGFsICovXHJcbiAgICBiYWNrZ3JvdW5kOnJnYigyMzUsIDIzLCAyMyk7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIG1peC1ibGVuZC1tb2RlOiBub3JtYWw7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIFxyXG59XHJcbi5idG4tZm9sbG93eyBcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzUsIDIzLCAyMyk7XHJcbmJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG5jb2xvcjogI2ZmZmZmZjtcclxubWFyZ2luOiAwIDEwcHg7XHJcbn1cclxuLmJ0bi1saW5rLXNob3d7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IFxyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuLmNvbnRhaW5lci1pbWFnZW57IFxyXG4gICAgZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O3dpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbi10aXRsZS1tdXNpY3tcclxuLyogMTQtYm9sZC1xcyAqL1xyXG5mb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBib2xkO1xyXG5mb250LXNpemU6IDEwcHg7XHJcbmxpbmUtaGVpZ2h0OiAxMnB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5jb2xvcjogIzU1NTU1NTtcclxufVxyXG4uZGVzY3JpcHRpb24tYXJ0e1xyXG4vKiAxMi1yZWd1bGFyLXFzICovXHJcblxyXG5mb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxubGluZS1oZWlnaHQ6IDE1cHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbi8qIEdyYXkgKi9cclxuY29sb3I6ICM4MjgyODI7XHJcbn1cclxuXHJcbi5wb3NpdGlvbi1wbGF5e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiA3MHB4O2ZvbnQtc2l6ZTogNTBweDtcclxufVxyXG4uc3ViLXBvc2l0aW9uLXBsYXl7IFxyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNzJweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdG9wOiA1NXB4O2ZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4uY29udGFpbmVyLW1haW4taW1hZ2Vue1xyXG4gICAgd2lkdGg6IDE1MHB4O2hlaWdodDogMTUwcHg7XHJcbn1cclxuXHJcbi8qIHdpZHRoICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFRyYWNrICovXHJcbiAgOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xyXG4gIH1cclxuICBcclxuICAvKiBIYW5kbGUgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQ6ICM4ODg7XHJcbiAgfVxyXG4uY29udGFpbmVyLWlucHV0LXNlYXJjaHsgXHJcbiAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtd3JhcDogd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7d2lkdGg6IDgwJTtwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNvbnRhaW5lci11c2VyLXByb2ZpbGV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtd3JhcDogd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO3dpZHRoOiBDYWxjKDEwMCUtODAlKTtcclxufVxyXG4uZWxlbWVudC1saXN0eyBcclxuICAgIGhlaWdodDogNDAwcHg7b3ZlcmZsb3c6IGF1dG87ZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuICAvKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuICA6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQ6ICM1NTU7XHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAgIC5lbGVtZW50LWxpc3R7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIC5jb250YWluZXItdXNlci1wcm9maWxleyBcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1pbnB1dC1zZWFyY2h7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtmbGV4LXdyYXA6IHdyYXA7anVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O3dpZHRoOiAxMDAlO3Bvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxyXG4gICAgdWwgbGkge1xyXG4gICAgICAgIG1hcmdpbjogMTAwcHggMDtcclxuICAgIH1cclxuICAgIC5iZy1tb2JpbGUtcmVzcG9uc2UtZGVzY3JpcHRpb257XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgYm90dG9tOiAtNzAlO1xyXG4gICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuZGVzY3JpcHRpb24tdGl0bGUtbXVzaWMge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmRlc2NyaXB0aW9uLWFydHtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIH1cclxuICAgIC5lbGVtZW50LWxpc3R7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIH1cclxuICAgIC5jb250YWluZXItdXNlci1wcm9maWxle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLWlucHV0LXNlYXJjaHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O2ZsZXgtd3JhcDogd3JhcDtqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7d2lkdGg6IDEwMCU7cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuICAgIC5mbGF0LWljb24tc2VhcmNoeyBcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci1pbWFnZW4geyBcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItZGVzY3JpcHRpb24tYXJ0e1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnBvc2l0aW9uLXBsYXl7IFxyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBjb2xvcjogI2MyYmJiYjtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIHRvcDogMTEwcHg7XHJcbiAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5jb250YWluZXItbWFpbi1pbWFnZW57IFxyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLnN1Yi1wb3NpdGlvbi1wbGF5eyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgY29sb3I6ICNjMmJiYmI7XHJcbiAgICAgICAgZm9udC1zaXplOiA0NXB4O1xyXG4gICAgICAgIHRvcDogOTVweDtcclxuICAgICAgICBsZWZ0OiA3cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdfQ== */"] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(ng_block_ui__WEBPACK_IMPORTED_MODULE_2__["BlockUI"])()
], BodyListItemComponent.prototype, "blockUI", void 0);
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](BodyListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-body-list-item',
                templateUrl: './body-list-item.component.html',
                styleUrls: ['./body-list-item.component.scss']
            }]
    }], function () { return [{ type: _Services_play_list_service__WEBPACK_IMPORTED_MODULE_4__["PlayListService"] }, { type: _body_list_reactive_service__WEBPACK_IMPORTED_MODULE_5__["BodyListReactiveService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }]; }, { footerComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: [_footer_list_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_3__["FooterListItemComponent"]]
        }], blockUI: [] }); })();


/***/ }),

/***/ "PG+b":
/*!***************************************************************************************!*\
  !*** ./src/app/Components/footer-list/footer-list-item/footer-list-item.component.ts ***!
  \***************************************************************************************/
/*! exports provided: FooterListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterListItemComponent", function() { return FooterListItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _Services_play_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/play-list.service */ "sreG");
/* harmony import */ var _footer_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-list.service */ "O8zc");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");







function FooterListItemComponent_i_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_i_14_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.play(ctx_r4.linkMusic); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterListItemComponent_i_15_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_i_15_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.pause(ctx_r6.linkMusic); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterListItemComponent_i_20_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_i_20_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.handleAudioEnabled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FooterListItemComponent_i_21_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_i_21_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.handleAudioEnabled(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FooterListItemComponent {
    constructor(ref, serFooter, react) {
        this.ref = ref;
        this.serFooter = serFooter;
        this.react = react;
        this.counter = 0;
        this.responseSearchCollections = [];
        this.linkMusic = "";
        this.artistTitle = "";
        this.albumTitle = "";
        this.linkImage = "";
        this.flagAudio = false;
        this.flagPlay = false;
        this.audio = new Audio();
    }
    handleAudioEnabled() {
        this.flagAudio = !this.flagAudio;
        if (this.flagAudio === true) {
            this.ismute();
        }
        if (this.flagAudio === false) {
            this.isnotmute();
        }
        this.ref.detectChanges();
    }
    showMessage(linkImage, linkmusic, art, album, reprod, collectionMusic) {
        this.artistTitle = art;
        this.albumTitle = album;
        this.linkImage = linkImage;
        this.linkMusic = linkmusic;
        this.audio.pause();
        this.flagPlay = false;
        if (reprod) {
            this.play(this.linkMusic);
        }
        this.responseSearchCollections = collectionMusic;
        this.ref.detectChanges();
    }
    ngOnInit() {
        this.react.controlAudio.setValue(100);
    }
    play(url) {
        this.audio = new Audio(url);
        this.audio.play();
        this.flagPlay = !this.flagPlay;
        this.ref.detectChanges();
    }
    pause(url) {
        this.audio.pause();
        this.flagPlay = !this.flagPlay;
        this.ref.detectChanges();
    }
    ismute() {
        this.audio.muted = true;
    }
    isnotmute() {
        this.audio.muted = false;
    }
    asigValueArray(index) {
        this.artistTitle = this.responseSearchCollections[index].artist.name;
        this.albumTitle = this.responseSearchCollections[index].album.title;
        this.linkImage = this.responseSearchCollections[index].album.cover_small;
        this.linkMusic = this.responseSearchCollections[index].preview;
        this.ref.detectChanges();
    }
    next() {
        this.counter = this.counter + 1;
        if (this.counter === this.responseSearchCollections.length - 1) {
            this.counter = 0;
        }
        this.asigValueArray(this.counter);
        this.pause("");
    }
    controlVolume(event) {
        this.audio.volume = event.value;
    }
    back() {
        this.counter = this.counter - 1;
        if (this.counter <= 0) {
            this.counter = this.responseSearchCollections.length - 1;
        }
        this.asigValueArray(this.counter);
        this.pause("");
    }
}
FooterListItemComponent.ɵfac = function FooterListItemComponent_Factory(t) { return new (t || FooterListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_play_list_service__WEBPACK_IMPORTED_MODULE_1__["PlayListService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_footer_list_service__WEBPACK_IMPORTED_MODULE_2__["FooterListService"])); };
FooterListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterListItemComponent, selectors: [["app-footer-list-item"]], inputs: { linkMusic: "linkMusic", artistTitle: "artistTitle", albumTitle: "albumTitle", linkImage: "linkImage" }, decls: 22, vars: 17, consts: [[3, "formGroup"], [2, "width", "100%", "height", "auto", "background-color", "#EB5757", "display", "block", "display", "flex", "flex-wrap", "wrap", "justify-content", "space-between"], [1, "form-inline", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "flex-start"], ["alt", "logo", 3, "src"], [2, "margin", "12px 10px"], [1, "title-art"], [1, "title-album"], [2, "width", "60%", "display", "flex", "flex-wrap", "wrap", "justify-content", "center"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-between", "margin", "15px 0", "text-align", "center"], ["aria-hidden", "true", 1, "fa", "fa-step-backward", "back-btn", 3, "click"], ["class", "fa fa-play-circle play-btn", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["class", "far fa-pause-circle play-btn", "aria-hidden", "true", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-step-forward", "next-btn", 3, "click"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "flex-end"], [1, "container-flaticon-center"], ["min", "0", "max", "1", "formControlName", "controlAudio", 1, "min", 2, "color", "#ffffff", "margin-top", "12.5px", "margin-right", "5px", 3, "step", "input"], ["class", "fa fa-volume-up container-flaticon-center", "aria-hidden", "true", "style", "font-family: Font Awesome 5 Free;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 20px;\n        line-height: 41px;\n        margin-top: 11.5px;\n        margin-right: 10px;\n        cursor: pointer;\n        /* identical to box height */\n        \n        \n        color: #FFFFFF;", 3, "click", 4, "ngIf"], ["class", "fa fa-volume-off container-flaticon-center", "aria-hidden", "true", "style", "font-family: Font Awesome 5 Free;\n        font-style: normal;\n        font-weight: 900;\n        font-size: 20px;\n        line-height: 41px;\n        margin-top: 11.5px;\n        margin-right: 10px;\n        cursor: pointer;\n        /* identical to box height */\n        \n        \n        color: #FFFFFF;", 3, "click", 4, "ngIf"], ["aria-hidden", "true", 1, "fa", "fa-play-circle", "play-btn", 3, "click"], ["aria-hidden", "true", 1, "far", "fa-pause-circle", "play-btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-volume-up", "container-flaticon-center", 2, "font-family", "Font Awesome 5 Free", "font-style", "normal", "font-weight", "900", "font-size", "20px", "line-height", "41px", "margin-top", "11.5px", "margin-right", "10px", "cursor", "pointer", "/* identical to box height */\n        \n        \n        color", "#FFFFFF", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-volume-off", "container-flaticon-center", 2, "font-family", "Font Awesome 5 Free", "font-style", "normal", "font-weight", "900", "font-size", "20px", "line-height", "41px", "margin-top", "11.5px", "margin-right", "10px", "cursor", "pointer", "/* identical to box height */\n        \n        \n        color", "#FFFFFF", 3, "click"]], template: function FooterListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_Template_i_click_13_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FooterListItemComponent_i_14_Template, 1, 0, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, FooterListItemComponent_i_15_Template, 1, 0, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterListItemComponent_Template_i_click_16_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-slider", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function FooterListItemComponent_Template_mat_slider_input_19_listener($event) { return ctx.controlVolume($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, FooterListItemComponent_i_20_Template, 1, 0, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FooterListItemComponent_i_21_Template, 1, 0, "i", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.react.formAudio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.linkImage, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](7, 9, ctx.artistTitle, 0, 15));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](10, 13, ctx.albumTitle, 0, 15));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flagPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagPlay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("step", 0.1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.flagAudio);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.flagAudio);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_5__["MatSlider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["SlicePipe"]], styles: [".footer-play-list[_ngcontent-%COMP%] {\n  background-color: #EB5757;\n  padding: 0;\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n.title-art[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  \n  color: #FFFFFF;\n  margin: 0;\n}\n\n.title-album[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 15px;\n  \n  color: #e2e0e0;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\nul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.play-btn[_ngcontent-%COMP%] {\n  font-size: 30px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.play-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #c4c2c2;\n}\n\n.back-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-right: 10px;\n  margin-top: 8px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.back-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #c4c2c2;\n}\n\n.next-btn[_ngcontent-%COMP%] {\n  font-size: 15px;\n  margin-left: 10px;\n  margin-top: 8px;\n  color: #ffffff;\n  cursor: pointer;\n}\n\n.next-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.9;\n  color: #c4c2c2;\n}\n\n.container-flaticon-center[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  vertical-align: middle;\n  margin-right: 10px;\n}\n\n  .mat-slide-toggle.mat-checked:not(.mat-disabled) .mat-slide-toggle-thumb {\n  background-color: blue;\n  \n}\n\n[_nghost-%COMP%]     .average .mat-slider-thumb {\n  background-color: #ff3967;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb {\n  background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-thumb-label {\n  background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .min .mat-slider-track-fill {\n  background-color: #ffffff;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-thumb-label {\n  background-color: orange;\n}\n\n[_nghost-%COMP%]     .max .mat-slider-track-fill {\n  background-color: orange;\n}\n\n  .mat-slider.mat-slider-horizontal .mat-slider-wrapper {\n  top: 18px;\n  color: #FFFFFF;\n}\n\n@media (max-width: 600px) {\n  .title-art[_ngcontent-%COMP%] {\n    font-size: 0.6rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXItbGlzdC9mb290ZXItbGlzdC1pdGVtL2Zvb3Rlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQUNBOztBQUNBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FBRUE7O0FBQ0E7RUFDSSxxQkFBQTtBQUVKOztBQUNBO0VBQ0ksU0FBQTtBQUVKOztBQUFBO0VBQ0ksZUFBQTtFQUFnQixjQUFBO0VBQWUsZUFBQTtBQUtuQzs7QUFIQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQWdCLGtCQUFBO0VBQW1CLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLGVBQUE7QUFXdEU7O0FBVEE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtBQVlKOztBQVZBO0VBQ0ksZUFBQTtFQUFnQixpQkFBQTtFQUFrQixlQUFBO0VBQWdCLGNBQUE7RUFBZSxlQUFBO0FBaUJyRTs7QUFmQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0FBa0JKOztBQWhCQTtFQUNJLGFBQUE7RUFBYyxlQUFBO0VBQWdCLHVCQUFBO0VBQXdCLHNCQUFBO0VBQXVCLGtCQUFBO0FBdUJqRjs7QUFyQkE7RUFDSSxzQkFBQTtFQUF3QiwwQkFBQTtBQXlCNUI7O0FBdkJBO0VBQ0kseUJBQUE7QUEwQko7O0FBdkJFO0VBQ0UseUJBQUE7QUEwQko7O0FBdkJFO0VBQ0UseUJBQUE7QUEwQko7O0FBdkJFO0VBQ0UseUJBQUE7QUEwQko7O0FBdkJFO0VBQ0Usd0JBQUE7QUEwQko7O0FBdkJFO0VBQ0Usd0JBQUE7QUEwQko7O0FBdkJFO0VBQ0Usd0JBQUE7QUEwQko7O0FBeEJBO0VBQ0ksU0FBQTtFQUNBLGNBQUE7QUEyQko7O0FBeEJBO0VBQ0k7SUFDSSxpQkFBQTtFQTJCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvQ29tcG9uZW50cy9mb290ZXItbGlzdC9mb290ZXItbGlzdC1pdGVtL2Zvb3Rlci1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLXBsYXktbGlzdHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQjU3NTc7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnRpdGxlLWFydHsgXHJcbi8qIDE0LWJvbGQtcXMgKi9cclxuZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAxNHB4O1xyXG5saW5lLWhlaWdodDogMTdweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuY29sb3I6ICNGRkZGRkY7XHJcbm1hcmdpbjogMDtcclxufVxyXG4udGl0bGUtYWxidW17XHJcbi8qIDEyLXJlZ3VsYXItcXMgKi9cclxuZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG5mb250LXNpemU6IDEwcHg7XHJcbmxpbmUtaGVpZ2h0OiAxNXB4O1xyXG4vKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG5jb2xvcjogI2UyZTBlMDtcclxubWFyZ2luOiAwO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbnVsIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ucGxheS1idG57XHJcbiAgICBmb250LXNpemU6IDMwcHg7Y29sb3I6ICNmZmZmZmY7Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5wbGF5LWJ0bjpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGNvbG9yOiAjYzRjMmMyO1xyXG59XHJcbi5iYWNrLWJ0bnsgXHJcbiAgICBmb250LXNpemU6IDE1cHg7bWFyZ2luLXJpZ2h0OiAxMHB4O21hcmdpbi10b3A6IDhweDtjb2xvcjogI2ZmZmZmZjtjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmJhY2stYnRuOmhvdmVyeyBcclxuICAgIG9wYWNpdHk6IDAuOTtcclxuICAgIGNvbG9yOiAjYzRjMmMyO1xyXG59XHJcbi5uZXh0LWJ0bntcclxuICAgIGZvbnQtc2l6ZTogMTVweDttYXJnaW4tbGVmdDogMTBweDttYXJnaW4tdG9wOiA4cHg7Y29sb3I6ICNmZmZmZmY7Y3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5uZXh0LWJ0bjpob3ZlcnsgXHJcbiAgICBvcGFjaXR5OiAwLjk7XHJcbiAgICBjb2xvcjogI2M0YzJjMjtcclxufVxyXG4uY29udGFpbmVyLWZsYXRpY29uLWNlbnRlcntcclxuICAgIGRpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO2p1c3RpZnktY29udGVudDogY2VudGVyO3ZlcnRpY2FsLWFsaWduOiBtaWRkbGU7bWFyZ2luLXJpZ2h0OjEwcHg7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtc2xpZGUtdG9nZ2xlLm1hdC1jaGVja2VkOm5vdCgubWF0LWRpc2FibGVkKSAubWF0LXNsaWRlLXRvZ2dsZS10aHVtYiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAvKnJlcGxhY2Ugd2l0aCB5b3VyIGNvbG9yKi9cclxufVxyXG46aG9zdCA6Om5nLWRlZXAgLmF2ZXJhZ2UgLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzk2NztcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5taW4gLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAubWluIC5tYXQtc2xpZGVyLXRyYWNrLWZpbGwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogICNmZmZmZmY7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IDo6bmctZGVlcCAubWF4IC5tYXQtc2xpZGVyLXRodW1iIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbiAgXHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5tYXggLm1hdC1zbGlkZXItdGh1bWItbGFiZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xyXG4gIH1cclxuICBcclxuICA6aG9zdCA6Om5nLWRlZXAgLm1heCAubWF0LXNsaWRlci10cmFjay1maWxsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcclxuICB9XHJcbjo6bmctZGVlcCAubWF0LXNsaWRlci5tYXQtc2xpZGVyLWhvcml6b250YWwgLm1hdC1zbGlkZXItd3JhcHBlciB7XHJcbiAgICB0b3A6IDE4cHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo2MDBweCl7IFxyXG4gICAgLnRpdGxlLWFydHtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-list-item',
                templateUrl: './footer-list-item.component.html',
                styleUrls: ['./footer-list-item.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _Services_play_list_service__WEBPACK_IMPORTED_MODULE_1__["PlayListService"] }, { type: _footer_list_service__WEBPACK_IMPORTED_MODULE_2__["FooterListService"] }]; }, { linkMusic: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], artistTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], albumTitle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], linkImage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var _Components_header_list_header_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/header-list/header-list.component */ "avLV");
/* harmony import */ var _Components_aside_list_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/aside-list/aside-list-item/aside-list-item.component */ "OJ7A");
/* harmony import */ var _Components_body_list_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/body-list/body-list-item/body-list-item.component */ "OiSW");






class AppComponent {
    constructor() {
        this.title = 'playmusic';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "show-header", 2, "margin", "0", "width", "100%", "position", "absolute", "background-color", "#662323", "padding", "5px"], [1, "clearfix"], [1, "container-view"], [1, "sidebar-container"], [1, "body-container"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "block-ui");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-aside-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-body-list-item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ng_block_ui__WEBPACK_IMPORTED_MODULE_1__["BlockUIComponent"], _Components_header_list_header_list_component__WEBPACK_IMPORTED_MODULE_2__["HeaderListComponent"], _Components_aside_list_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_3__["AsideListItemComponent"], _Components_body_list_body_list_item_body_list_item_component__WEBPACK_IMPORTED_MODULE_4__["BodyListItemComponent"]], styles: [".container-view[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.sidebar-container[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #662323;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  z-index: 1;\n  transition: all 0.8s ease-in;\n}\n\n.body-container[_ngcontent-%COMP%] {\n  width: calc(100% - 250px);\n}\n\n.input-search[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  \n  width: 80%;\n  padding: 0px 10px;\n  border: 1px solid #828282;\n  box-sizing: border-box;\n  border-radius: 50px;\n}\n\n.text-username[_ngcontent-%COMP%] {\n  text-align: center;\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n  line-height: 20px;\n  \n  \n  color: #4F4F4F;\n  margin-top: 15px;\n}\n\n.font-awesome[_ngcontent-%COMP%] {\n  font-family: Font Awesome 5 Free;\n  font-style: normal;\n  font-weight: 900;\n  font-size: 14px;\n  line-height: 16px;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  \n  color: #E86060;\n}\n\n.title-result[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  \n  \n  color: #E86060;\n}\n\n.list-items-music[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 5px;\n  margin: 1px;\n}\n\n.list-items-music[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 2px 5px;\n}\n\n.container-loading[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 100%;\n  display: inline-block;\n  border-radius: 10px;\n  padding: 5px;\n  color: #ffffff;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n.container-description-art[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  width: 80%;\n  mix-blend-mode: normal;\n  opacity: 0.5;\n  transform: matrix(1, 0, 0, 1, 0, 0);\n}\n\n.title-description-art[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 22px;\n  line-height: 27px;\n  \n}\n\n.text-description-music[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  margin-left: -10px;\n  padding: 10px;\n  width: 100%;\n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 20px;\n  color: #FFFFFF;\n}\n\n.title-fans[_ngcontent-%COMP%] {\n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 10px;\n  line-height: 12px;\n  \n  color: #662323;\n}\n\n.btn-play[_ngcontent-%COMP%] {\n  \n  background: #eb1717;\n  color: #ffffff;\n  mix-blend-mode: normal;\n  border-radius: 100px;\n}\n\n.btn-follow[_ngcontent-%COMP%] {\n  border: 1px solid #eb1717;\n  box-sizing: border-box;\n  border-radius: 100px;\n  color: #ffffff;\n  margin: 0 10px;\n}\n\n.btn-link-show[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n\n.container-imagen[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  width: 20%;\n}\n\n.show-header[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.footer-fixed[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 0%;\n  z-index: 1;\n  width: 100%;\n  background: #EB5757;\n}\n\n@media (max-width: 950px) {\n  .footer-fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0%;\n    z-index: 1;\n    width: 100%;\n    background: #EB5757;\n  }\n\n  .container-view[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 8%;\n  }\n\n  .show-header[_ngcontent-%COMP%] {\n    display: block;\n    background-color: #eb1717;\n  }\n\n  .sidebar-container[_ngcontent-%COMP%] {\n    transform: translateX(-100%);\n    transition: all 0.8s ease-in;\n    z-index: 1;\n    height: 100%;\n  }\n\n  .body-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    width: 100%;\n    position: absolute;\n    top: 0;\n  }\n\n  .container-view[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n}\n\n@media (max-width: 600px) {\n  .footer-fixed[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0%;\n    z-index: 1;\n    width: 100%;\n    background: #EB5757;\n  }\n\n  .container-view[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 5%;\n  }\n\n  .container-imagen[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7QUFDSjs7QUFDQTtFQUNJLHlCQUFBO0FBRUo7O0FBSUE7RUFDSSxtQkFBQTtFQUNKLFNBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFEQTs7QUFJQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFEQTs7QUFJQTtFQUNJLGdDQUFBO0VBQ0osa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBRUEsa0JBQUE7RUFFQSxjQUFBO0FBSEE7O0FBTUE7RUFDSSxrQkFBQTtFQUVKLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBR0Esa0JBQUE7RUFFQSxjQUFBO0FBUEE7O0FBVUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUEo7O0FBU0E7RUFDSSxxQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFVQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUFZLHFCQUFBO0VBQXNCLG1CQUFBO0VBQW9CLFlBQUE7RUFBYSxjQUFBO0VBQWUsb0NBQUE7QUFGdEY7O0FBS0E7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0FBRko7O0FBS0E7RUFDSSxrQkFBQTtFQUVKLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0FBSEE7O0FBT0E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFSixjQUFBO0FBTEE7O0FBUUE7RUFDSSxzQkFBQTtFQUNKLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLGNBQUE7QUFMQTs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtBQUxKOztBQVFBO0VBQ0kseUJBQUE7RUFDSixzQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUFMQTs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EsY0FBQTtBQUpKOztBQU1BO0VBQ0ksYUFBQTtFQUFjLGVBQUE7RUFBZ0IsMkJBQUE7RUFBNEIsVUFBQTtBQUE5RDs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7RUFDSixVQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQUVBOztBQUFBO0VBQ0k7SUFDSSxlQUFBO0lBQ1IsVUFBQTtJQUNBLFVBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUFHRTs7RUFETTtJQUNBLGtCQUFBO0lBQ0EsT0FBQTtFQUlOOztFQUZFO0lBQ0ksY0FBQTtJQUNBLHlCQUFBO0VBS047O0VBSEU7SUFDSSw0QkFBQTtJQUNBLDRCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFNTjs7RUFKRTtJQUNJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsTUFBQTtFQU9OOztFQUxFO0lBQ0ksVUFBQTtFQVFOO0FBQ0Y7O0FBTEE7RUFDSTtJQUNJLGVBQUE7SUFDUixVQUFBO0lBQ0EsVUFBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQU9FOztFQUxFO0lBQ0ksa0JBQUE7SUFDQSxPQUFBO0VBUU47O0VBTkU7SUFDSSxXQUFBO0VBU047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItdmlld3sgXHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5zaWRlYmFyLWNvbnRhaW5lciB7IFxyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzY2MjMyMzsgICAgXHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjhzIGVhc2UtaW47XHJcbn1cclxuLmJvZHktY29udGFpbmVye1xyXG4gICAgd2lkdGg6IENhbGMoMTAwJSAtIDI1MHB4KTtcclxufVxyXG5cclxuXHJcblxyXG4vLyBib2R5XHJcbi5pbnB1dC1zZWFyY2h7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4vKiBHcmF5ICovXHJcbndpZHRoOiA4MCU7XHJcbnBhZGRpbmc6IDBweCAxMHB4O1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjODI4MjgyO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG59XHJcblxyXG4udGV4dC11c2VybmFtZXtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG4vKiAxNi1yZWd1bGFyLXdoaXRlICovXHJcbmZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuZm9udC1zaXplOiAxNnB4O1xyXG5saW5lLWhlaWdodDogMjBweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuLyogR3JheSAyICovXHJcbmNvbG9yOiAjNEY0RjRGO1xyXG5tYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG4uZm9udC1hd2Vzb21leyBcclxuICAgIGZvbnQtZmFtaWx5OiBGb250IEF3ZXNvbWUgNSBGcmVlO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiA5MDA7XHJcbmZvbnQtc2l6ZTogMTRweDtcclxubGluZS1oZWlnaHQ6IDE2cHg7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbi8qIFJlZCBQcmluY2lwYWwgKi9cclxuXHJcbmNvbG9yOiAjRTg2MDYwO1xyXG59XHJcblxyXG4udGl0bGUtcmVzdWx0e1xyXG4gICAgLyogMjItYm9sZC13aGl0ZSAqL1xyXG5cclxuZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuZm9udC1zdHlsZTogbm9ybWFsO1xyXG5mb250LXdlaWdodDogYm9sZDtcclxuZm9udC1zaXplOiAyMnB4O1xyXG5saW5lLWhlaWdodDogMjdweDtcclxuLyogaWRlbnRpY2FsIHRvIGJveCBoZWlnaHQgKi9cclxuXHJcblxyXG4vKiBSZWQgUHJpbmNpcGFsICovXHJcblxyXG5jb2xvcjogI0U4NjA2MDtcclxufVxyXG5cclxuLmxpc3QtaXRlbXMtbXVzaWN7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgbWFyZ2luOiAxcHg7XHJcbn1cclxuLmxpc3QtaXRlbXMtbXVzaWMgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAycHggNXB4O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jb250YWluZXItbG9hZGluZ3sgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Ym9yZGVyLXJhZGl1czogMTBweDtwYWRkaW5nOiA1cHg7Y29sb3I6ICNmZmZmZmY7YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWRlc2NyaXB0aW9uLWFydHsgXHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWl4LWJsZW5kLW1vZGU6IG5vcm1hbDtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIHRyYW5zZm9ybTogbWF0cml4KDEsIDAsIDAsIDEsIDAsIDApO1xyXG59XHJcblxyXG4udGl0bGUtZGVzY3JpcHRpb24tYXJ0eyBcclxuICAgIC8qIDIyLWJvbGQtd2hpdGUgKi9cclxuXHJcbmZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbmZvbnQtc3R5bGU6IG5vcm1hbDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmZvbnQtc2l6ZTogMjJweDtcclxubGluZS1oZWlnaHQ6IDI3cHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcblxyXG59XHJcblxyXG4udGV4dC1kZXNjcmlwdGlvbi1tdXNpY3sgXHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1mYW1pbHk6IFF1aWNrc2FuZDtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbmNvbG9yOiAjRkZGRkZGO1xyXG59XHJcblxyXG4udGl0bGUtZmFuc3sgXHJcbiAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG5mb250LXN0eWxlOiBub3JtYWw7XHJcbmZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxubGluZS1oZWlnaHQ6IDEycHg7XHJcbi8qIGlkZW50aWNhbCB0byBib3ggaGVpZ2h0ICovXHJcbmNvbG9yOiAjNjYyMzIzO1xyXG59XHJcblxyXG4uYnRuLXBsYXkge1xyXG4gICAgLyogUmVkIFByaW5jaXBhbCAqL1xyXG4gICAgYmFja2dyb3VuZDpyZ2IoMjM1LCAyMywgMjMpO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBtaXgtYmxlbmQtbW9kZTogbm9ybWFsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgICBcclxufVxyXG4uYnRuLWZvbGxvd3sgXHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjM1LCAyMywgMjMpO1xyXG5ib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5ib3JkZXItcmFkaXVzOiAxMDBweDtcclxuY29sb3I6ICNmZmZmZmY7XHJcbm1hcmdpbjogMCAxMHB4O1xyXG59XHJcbi5idG4tbGluay1zaG93e1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyBcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG59XHJcbi5jb250YWluZXItaW1hZ2VueyBcclxuICAgIGRpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO2p1c3RpZnktY29udGVudDogZmxleC1zdGFydDt3aWR0aDogMjAlO1xyXG59XHJcbi5zaG93LWhlYWRlcnsgXHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5mb290ZXItZml4ZWR7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogMCU7XHJcbnotaW5kZXg6IDE7XHJcbndpZHRoOiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiAjRUI1NzU3O1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjk1MHB4KXtcclxuICAgIC5mb290ZXItZml4ZWR7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG5ib3R0b206IDAlO1xyXG56LWluZGV4OiAxO1xyXG53aWR0aDogMTAwJTtcclxuYmFja2dyb3VuZDogI0VCNTc1NztcclxuICAgIH1cclxuICAgICAgICAuY29udGFpbmVyLXZpZXcge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDglO1xyXG4gICAgfVxyXG4gICAgLnNob3ctaGVhZGVye1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDIzNSwgMjMsIDIzKVxyXG4gICAgfVxyXG4gICAgLnNpZGViYXItY29udGFpbmVye1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTAwJSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuOHMgZWFzZS1pbjtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmJvZHktY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFpbmVyLXZpZXd7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7IFxyXG4gICAgLmZvb3Rlci1maXhlZHtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbmJvdHRvbTogMCU7XHJcbnotaW5kZXg6IDE7XHJcbndpZHRoOiAxMDAlO1xyXG5iYWNrZ3JvdW5kOiAjRUI1NzU3O1xyXG4gICAgfVxyXG4gICAgLmNvbnRhaW5lci12aWV3IHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1JTtcclxuICAgIH1cclxuICAgIC5jb250YWluZXItaW1hZ2VuIHsgXHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "X2qd":
/*!************************************************************!*\
  !*** ./src/app/Components/aside-list/aside-list.module.ts ***!
  \************************************************************/
/*! exports provided: AsideListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AsideListModule", function() { return AsideListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside-list-item/aside-list-item.component */ "OJ7A");




class AsideListModule {
}
AsideListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AsideListModule });
AsideListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AsideListModule_Factory(t) { return new (t || AsideListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AsideListModule, { declarations: [_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_2__["AsideListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_2__["AsideListItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AsideListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_2__["AsideListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [_aside_list_item_aside_list_item_component__WEBPACK_IMPORTED_MODULE_2__["AsideListItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _Components_aside_list_aside_list_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/aside-list/aside-list.module */ "X2qd");
/* harmony import */ var _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/body-list/body-list.module */ "AoFM");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ng_block_ui__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-block-ui */ "12jx");
/* harmony import */ var _Components_header_list_header_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Components/header-list/header-list.component */ "avLV");












class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _Components_aside_list_aside_list_module__WEBPACK_IMPORTED_MODULE_4__["AsideListModule"],
            _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
            _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _Components_header_list_header_list_component__WEBPACK_IMPORTED_MODULE_9__["HeaderListComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _Components_aside_list_aside_list_module__WEBPACK_IMPORTED_MODULE_4__["AsideListModule"],
        _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
        _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _Components_header_list_header_list_component__WEBPACK_IMPORTED_MODULE_9__["HeaderListComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _Components_aside_list_aside_list_module__WEBPACK_IMPORTED_MODULE_4__["AsideListModule"],
                    _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
                    _Components_body_list_body_list_module__WEBPACK_IMPORTED_MODULE_5__["BodyListModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    ng_block_ui__WEBPACK_IMPORTED_MODULE_8__["BlockUIModule"].forRoot()
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "avLV":
/*!*****************************************************************!*\
  !*** ./src/app/Components/header-list/header-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderListComponent", function() { return HeaderListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



class HeaderListComponent {
    constructor() {
        this.flagShow = false;
    }
    changeFlagShow() {
        this.flagShow = !this.flagShow;
    }
    ngOnInit() {
    }
}
HeaderListComponent.ɵfac = function HeaderListComponent_Factory(t) { return new (t || HeaderListComponent)(); };
HeaderListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderListComponent, selectors: [["app-header-list"]], decls: 38, vars: 1, consts: [[2, "width", "100%", "display", "flex", "flex-wrap", "wrap", "justify-content", "center"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "flex-start", "margin-left", "-10px"], ["src", "../../../assets/images/foxbel-music.png", "alt", "logo"], [1, "fas", "fa-bars", "btn", "bars-menu", 3, "click"], [1, "container-user-profile", 2, "display", "flex", "flex-wrap", "wrap", "justify-content", "space-between", "margin-left", "10px"], [2, "display", "flex", "flex-wrap", "wrap", "justify-content", "flex-end", "margin-top", "20px", "color", "#ffffff"], [1, "font-awesome", "fas", "fa-user"], [1, "text-username"], [1, "sidebar-container", 2, "flex-wrap", "wrap", "justify-content", "flex-start", 3, "ngClass"], ["id", "section-library", 1, "form-group", 2, "margin-left", "10px"], [1, "main-title"], [2, "padding", "0px 20px"], ["id", "section-playList", 1, "form-group", 2, "margin-left", "10px"]], template: function HeaderListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderListComponent_Template_i_click_3_listener() { return ctx.changeFlagShow(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Francisco M");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Mi Librer\u00EDa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Recientes ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Artistas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u00C1lbums ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Canciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Estaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Playlist");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Metal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Para Bailar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Rock 90s ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Baladas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Estaciones ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.flagShow ? "show-sidebar" : "hide-sidebar");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]], styles: [".sidebar-container[_ngcontent-%COMP%] {\n  width: 250px;\n  background: #662323;\n  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);\n  z-index: 1;\n  position: absolute;\n  left: 0;\n  top: 50px;\n}\n\n.hide-sidebar[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.show-sidebar[_ngcontent-%COMP%] {\n  display: block;\n  transition: 0.3s ease-in all;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 13px;\n  line-height: 20px;\n  \n  color: #FFFFFF;\n}\n\n.container-user-profile[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-end;\n  width: calc(100%-80%);\n}\n\n.text-username[_ngcontent-%COMP%] {\n  text-align: center;\n  \n  font-family: Quicksand;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 12px;\n  line-height: 15px;\n  \n  \n  color: #ffffff;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29tcG9uZW50cy9oZWFkZXItbGlzdC9oZWFkZXItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSw0QkFBQTtBQUVKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0FBR0o7O0FBREE7RUFFSSxxQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsY0FBQTtBQUVKOztBQUFBO0VBQ1EsYUFBQTtFQUFjLGVBQUE7RUFBZ0IseUJBQUE7RUFBMEIscUJBQUE7QUFNaEU7O0FBSEE7RUFDUSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBTVIiLCJmaWxlIjoic3JjL2FwcC9Db21wb25lbnRzL2hlYWRlci1saXN0L2hlYWRlci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZGViYXItY29udGFpbmVyIHsgXHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjNjYyMzIzOyAgICBcclxuICAgIGJveC1zaGFkb3c6IDBweCA0cHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogNTBweDtcclxuICAgIFxyXG59XHJcbi5oaWRlLXNpZGViYXJ7IFxyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG4uc2hvdy1zaWRlYmFyeyBcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlLWluIGFsbDtcclxufVxyXG51bHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG59XHJcbnVsIGxpIHtcclxuXHJcbiAgICAvKiAxNi1yZWd1bGFyLXdoaXRlICovXHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBRdWlja3NhbmQ7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICB9XHJcbi5jb250YWluZXItdXNlci1wcm9maWxle1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7ZmxleC13cmFwOiB3cmFwO2p1c3RpZnktY29udGVudDogZmxleC1lbmQ7d2lkdGg6IENhbGMoMTAwJS04MCUpO1xyXG4gICAgfVxyXG5cclxuLnRleHQtdXNlcm5hbWV7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIC8qIDE2LXJlZ3VsYXItd2hpdGUgKi9cclxuICAgICAgICBmb250LWZhbWlseTogUXVpY2tzYW5kO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTVweDtcclxuICAgICAgICAvKiBpZGVudGljYWwgdG8gYm94IGhlaWdodCAqL1xyXG4gICAgICAgIC8qIEdyYXkgMiAqL1xyXG4gICAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header-list',
                templateUrl: './header-list.component.html',
                styleUrls: ['./header-list.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "goBx":
/*!**************************************************************!*\
  !*** ./src/app/Components/footer-list/footer-list.module.ts ***!
  \**************************************************************/
/*! exports provided: FooterListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterListModule", function() { return FooterListModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-list-item/footer-list-item.component */ "PG+b");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/slider */ "5RNC");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");






class FooterListModule {
}
FooterListModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterListModule });
FooterListModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterListModule_Factory(t) { return new (t || FooterListModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterListModule, { declarations: [_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterListItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]], exports: [_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterListItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterListModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterListItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_slider__WEBPACK_IMPORTED_MODULE_3__["MatSliderModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
                ],
                exports: [_footer_list_item_footer_list_item_component__WEBPACK_IMPORTED_MODULE_2__["FooterListItemComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "sreG":
/*!**********************************************************!*\
  !*** ./src/app/Components/Services/play-list.service.ts ***!
  \**********************************************************/
/*! exports provided: PlayListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListService", function() { return PlayListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! events */ "+qE3");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PlayListService {
    constructor(http) {
        this.http = http;
        this.isOpen = "";
        this.change = new events__WEBPACK_IMPORTED_MODULE_1__();
    }
    handleError(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
    }
    toggle() {
        console.log("G");
        this.change.emit(this.isOpen);
    }
    getPlayList(parameter) {
        return this.http.get(`https://api.deezer.com/search?q="${parameter}"`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
}
PlayListService.ɵfac = function PlayListService_Factory(t) { return new (t || PlayListService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PlayListService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayListService, factory: PlayListService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayListService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, { change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map