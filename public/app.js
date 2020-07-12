(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/config */ "./resources/js/components/admin/constants/config.js");
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/menu */ "./resources/js/components/admin/constants/menu.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      selectedParentMenu: '',
      isMenuOver: false,
      menuItems: _constants_menu__WEBPACK_IMPORTED_MODULE_2__["default"],
      viewingParentMenu: ''
    };
  },
  mounted: function mounted() {
    this.selectMenu();
    window.addEventListener('resize', this.handleWindowResize);
    document.addEventListener('click', this.handleDocumentClick);
    this.handleWindowResize();
  },
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener('click', this.handleDocumentClick);
    window.removeEventListener('resize', this.handleWindowResize);
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapMutations"])(['changeSideMenuStatus', 'addMenuClassname', 'changeSelectedMenuHasSubItems']), {
    selectMenu: function selectMenu() {
      var currentParentUrl = this.$route.path.split('/').filter(function (x) {
        return x !== '';
      })[1];

      if (currentParentUrl !== undefined || currentParentUrl !== null) {
        this.selectedParentMenu = currentParentUrl.toLowerCase();
      } else {
        this.selectedParentMenu = 'dashboards';
      }

      this.isCurrentMenuHasSubItem();
    },
    isCurrentMenuHasSubItem: function isCurrentMenuHasSubItem() {
      var _this = this;

      var menuItem = this.menuItems.find(function (x) {
        return x.id === _this.selectedParentMenu;
      });
      var isCurrentMenuHasSubItem = menuItem && menuItem.subs && menuItem.subs.length > 0 ? true : false;

      if (isCurrentMenuHasSubItem != this.selectedMenuHasSubItems) {
        if (!isCurrentMenuHasSubItem) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: false
          });
        }
      }

      return isCurrentMenuHasSubItem;
    },
    changeSelectedParentHasNoSubmenu: function changeSelectedParentHasNoSubmenu(parentMenu) {
      this.selectedParentMenu = parentMenu;
      this.viewingParentMenu = parentMenu;
      this.changeSelectedMenuHasSubItems(false);
      this.changeSideMenuStatus({
        step: 0,
        classNames: this.menuType,
        selectedMenuHasSubItems: false
      });
    },
    openSubMenu: function openSubMenu(e, menuItem) {
      var selectedParent = menuItem.id;
      var hasSubMenu = menuItem.subs && menuItem.subs.length > 0;
      this.changeSelectedMenuHasSubItems(hasSubMenu);

      if (!hasSubMenu) {
        this.viewingParentMenu = selectedParent;
        this.selectedParentMenu = selectedParent;
        this.toggle();
      } else {
        var currentClasses = this.menuType ? this.menuType.split(' ').filter(function (x) {
          return x !== '';
        }) : '';

        if (!currentClasses.includes('menu-mobile')) {
          if (currentClasses.includes('menu-sub-hidden') && (this.menuClickCount === 2 || this.menuClickCount === 0)) {
            this.changeSideMenuStatus({
              step: 3,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          } else if (currentClasses.includes('menu-hidden') && (this.menuClickCount === 1 || this.menuClickCount === 3)) {
            this.changeSideMenuStatus({
              step: 2,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          } else if (currentClasses.includes('menu-default') && !currentClasses.includes('menu-sub-hidden') && (this.menuClickCount === 1 || this.menuClickCount === 3)) {
            this.changeSideMenuStatus({
              step: 0,
              classNames: this.menuType,
              selectedMenuHasSubItems: hasSubMenu
            });
          }
        } else {
          this.addMenuClassname({
            classname: 'sub-show-temporary',
            currentClasses: this.menuType
          });
        }

        this.viewingParentMenu = selectedParent;
      }
    },
    handleDocumentClick: function handleDocumentClick(e) {
      if (!this.isMenuOver) {
        var cont = true;
        var path = e.path || e.composedPath && e.composedPath();
        path.map(function (p) {
          if (p.nodeName !== 'svg' && p.nodeName !== 'rect' && p.className !== undefined && p.className.indexOf('menu-button') > -1) {
            cont = false;
          }
        });
        this.viewingParentMenu = '';
        this.selectMenu();

        if (cont || !this.selectedMenuHasSubItems) {
          this.toggle();
        }
      }
    },
    toggle: function toggle() {
      var currentClasses = this.menuType.split(' ').filter(function (x) {
        return x !== '';
      });

      if (currentClasses.includes('menu-sub-hidden') && this.menuClickCount === 3) {
        this.changeSideMenuStatus({
          step: 2,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems
        });
      } else if (currentClasses.includes('menu-hidden') || currentClasses.includes('menu-mobile')) {
        if (!(this.menuClickCount === 1 && !this.selectedMenuHasSubItems)) {
          this.changeSideMenuStatus({
            step: 0,
            classNames: this.menuType,
            selectedMenuHasSubItems: this.selectedMenuHasSubItems
          });
        }
      }
    },
    // Resize
    handleWindowResize: function handleWindowResize(event) {
      if (event && !event.isTrusted) {
        return;
      }

      var nextClasses = this.getMenuClassesForResize(this.menuType);
      this.changeSideMenuStatus({
        step: 0,
        classNames: nextClasses.join(' '),
        selectedMenuHasSubItems: this.selectedMenuHasSubItems
      });
    },
    getMenuClassesForResize: function getMenuClassesForResize(classes) {
      var nextClasses = classes.split(' ').filter(function (x) {
        return x !== '';
      });
      var windowWidth = window.innerWidth;

      if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_1__["menuHiddenBreakpoint"]) {
        nextClasses.push('menu-mobile');
      } else if (windowWidth < _constants_config__WEBPACK_IMPORTED_MODULE_1__["subHiddenBreakpoint"]) {
        nextClasses = nextClasses.filter(function (x) {
          return x !== 'menu-mobile';
        });

        if (nextClasses.includes('menu-default') && !nextClasses.includes('menu-sub-hidden')) {
          nextClasses.push('menu-sub-hidden');
        }
      } else {
        nextClasses = nextClasses.filter(function (x) {
          return x !== 'menu-mobile';
        });

        if (nextClasses.includes('menu-default') && nextClasses.includes('menu-sub-hidden')) {
          nextClasses = nextClasses.filter(function (x) {
            return x !== 'menu-sub-hidden';
          });
        }
      }

      return nextClasses;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    menuType: 'getMenuType',
    menuClickCount: 'getMenuClickCount',
    selectedMenuHasSubItems: 'getSelectedMenuHasSubItems'
  })),
  watch: {
    '$route': function $route(to, from) {
      if (to.path !== from.path) {
        var toParentUrl = to.path.split('/').filter(function (x) {
          return x !== '';
        })[1];

        if (toParentUrl !== undefined || toParentUrl !== null) {
          this.selectedParentMenu = toParentUrl.toLowerCase();
        } else {
          this.selectedParentMenu = 'dashboards';
        }

        this.selectMenu();
        this.toggle();
        this.changeSideMenuStatus({
          step: 0,
          classNames: this.menuType,
          selectedMenuHasSubItems: this.selectedMenuHasSubItems
        });
        window.scrollTo(0, top);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_switches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-switches */ "./node_modules/vue-switches/src/switches.vue");
/* harmony import */ var _data_notifications__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/notifications */ "./resources/js/components/admin/data/notifications.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_Svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Svg */ "./resources/js/components/admin/components/Svg/index.js");
/* harmony import */ var _constants_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/config */ "./resources/js/components/admin/constants/config.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "./resources/js/components/admin/utils/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    "menu-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_3__["MenuIcon"],
    "mobile-menu-icon": _components_Svg__WEBPACK_IMPORTED_MODULE_3__["MobileMenuIcon"],
    switches: vue_switches__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      selectedParentMenu: "",
      searchKeyword: "",
      isMobileSearch: false,
      isSearchOver: false,
      fullScreen: false,
      menuHiddenBreakpoint: _constants_config__WEBPACK_IMPORTED_MODULE_4__["menuHiddenBreakpoint"],
      searchPath: _constants_config__WEBPACK_IMPORTED_MODULE_4__["searchPath"],
      localeOptions: _constants_config__WEBPACK_IMPORTED_MODULE_4__["localeOptions"],
      buyUrl: _constants_config__WEBPACK_IMPORTED_MODULE_4__["buyUrl"],
      notifications: _data_notifications__WEBPACK_IMPORTED_MODULE_1__["default"],
      isDarkActive: false
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapMutations"])(["changeSideMenuStatus", "changeSideMenuForMobile"]), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["setLang", "signOut"]), {
    search: function search() {
      this.$router.push("".concat(this.searchPath, "?search=").concat(this.searchKeyword));
      this.searchKeyword = "";
    },
    searchClick: function searchClick() {
      if (window.innerWidth < this.menuHiddenBreakpoint) {
        if (!this.isMobileSearch) {
          this.isMobileSearch = true;
        } else {
          this.search();
          this.isMobileSearch = false;
        }
      } else {
        this.search();
      }
    },
    handleDocumentforMobileSearch: function handleDocumentforMobileSearch() {
      if (!this.isSearchOver) {
        this.isMobileSearch = false;
        this.searchKeyword = "";
      }
    },
    changeLocale: function changeLocale(locale, direction) {
      var currentDirection = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getDirection"])().direction;

      if (direction !== currentDirection) {
        Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setDirection"])(direction);
      }

      this.setLang(locale);
    },
    logout: function logout() {
      var _this = this;

      this.signOut().then(function () {
        _this.$router.push("/user/login");
      });
    },
    toggleFullScreen: function toggleFullScreen() {
      var isInFullScreen = this.isInFullScreen();
      var docElm = document.documentElement;

      if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }

      this.fullScreen = !isInFullScreen;
    },
    getThemeColor: function getThemeColor() {
      return localStorage.getItem("themeColor") ? localStorage.getItem("themeColor") : _constants_config__WEBPACK_IMPORTED_MODULE_4__["defaultColor"];
    },
    isInFullScreen: function isInFullScreen() {
      return document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
    }
  }),
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    currentUser: "currentUser",
    menuType: "getMenuType",
    menuClickCount: "getMenuClickCount",
    selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
  })),
  beforeDestroy: function beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentforMobileSearch);
  },
  created: function created() {
    var color = this.getThemeColor();
    this.isDarkActive = color.indexOf("dark") > -1;
  },
  watch: {
    "$i18n.locale": function $i18nLocale(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
    isDarkActive: function isDarkActive(val) {
      var color = this.getThemeColor();
      var isChange = false;

      if (val && color.indexOf("light") > -1) {
        isChange = true;
        color = color.replace("light", "dark");
      } else if (!val && color.indexOf("dark") > -1) {
        isChange = true;
        color = color.replace("dark", "light");
      }

      if (isChange) {
        localStorage.setItem("themeColor", color);
        setTimeout(function () {
          window.location.reload();
        }, 500);
      }
    },
    isMobileSearch: function isMobileSearch(val) {
      if (val) {
        document.addEventListener("click", this.handleDocumentforMobileSearch);
      } else {
        document.removeEventListener("click", this.handleDocumentforMobileSearch);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _containers_Sidebar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../containers/Sidebar */ "./resources/js/components/admin/containers/Sidebar.vue");
/* harmony import */ var _containers_TopNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../containers/TopNav */ "./resources/js/components/admin/containers/TopNav.vue");
/* harmony import */ var _containers_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../containers/Footer */ "./resources/js/components/admin/containers/Footer.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    'top-nav': _containers_TopNav__WEBPACK_IMPORTED_MODULE_1__["default"],
    'sidebar': _containers_Sidebar__WEBPACK_IMPORTED_MODULE_0__["default"],
    'footer-component': _containers_Footer__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['getMenuType']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea& ***!
  \************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 19 19" } },
    [
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z" }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z" }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 19 19" } },
    [
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e& ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "text-center" }, [
    _c(
      "svg",
      {
        staticClass: "main",
        attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 9 17" }
      },
      [
        _c("rect", { attrs: { x: "0.48", y: "0.5", width: "7", height: "1" } }),
        _vm._v(" "),
        _c("rect", { attrs: { x: "0.48", y: "7.5", width: "7", height: "1" } }),
        _vm._v(" "),
        _c("rect", { attrs: { x: "0.48", y: "15.5", width: "7", height: "1" } })
      ]
    ),
    _vm._v(" "),
    _c(
      "svg",
      {
        staticClass: "sub",
        attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 18 17" }
      },
      [
        _c("rect", {
          attrs: { x: "1.56", y: "0.5", width: "16", height: "1" }
        }),
        _vm._v(" "),
        _c("rect", {
          attrs: { x: "1.56", y: "7.5", width: "16", height: "1" }
        }),
        _vm._v(" "),
        _c("rect", {
          attrs: { x: "1.56", y: "15.5", width: "16", height: "1" }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 26 17" } },
    [
      _c("rect", { attrs: { x: "0.5", y: "0.5", width: "25", height: "1" } }),
      _vm._v(" "),
      _c("rect", { attrs: { x: "0.5", y: "7.5", width: "25", height: "1" } }),
      _vm._v(" "),
      _c("rect", { attrs: { x: "0.5", y: "15.5", width: "25", height: "1" } })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "svg",
    { attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 19 19" } },
    [
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z" }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: {
          d:
            "M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"
        }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z" }
      }),
      _vm._v(" "),
      _c("path", {
        staticClass: "view-icon-svg",
        attrs: { d: "M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z" }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "page-footer" }, [
      _c("div", { staticClass: "footer-content" }, [
        _c("div", { staticClass: "container-fluid" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-12 col-sm-6" }, [
              _c("p", { staticClass: "mb-0 text-muted" }, [
                _vm._v("ColoredStrategies 2019")
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-sm-6 d-none d-sm-block" }, [
              _c("ul", { staticClass: "breadcrumb pt-0 pr-0 float-right" }, [
                _c("li", { staticClass: "breadcrumb-item mb-0" }, [
                  _c("a", { staticClass: "btn-link", attrs: { href: "#" } }, [
                    _vm._v("Review")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item mb-0" }, [
                  _c("a", { staticClass: "btn-link", attrs: { href: "#" } }, [
                    _vm._v("Purchase")
                  ])
                ]),
                _vm._v(" "),
                _c("li", { staticClass: "breadcrumb-item mb-0" }, [
                  _c("a", { staticClass: "btn-link", attrs: { href: "#" } }, [
                    _vm._v("Docs")
                  ])
                ])
              ])
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca& ***!
  \***************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "sidebar",
      on: {
        mouseenter: function($event) {
          _vm.isMenuOver = true
        },
        mouseleave: function($event) {
          _vm.isMenuOver = false
        },
        touchstart: function($event) {
          _vm.isMenuOver = true
        }
      }
    },
    [
      _c(
        "div",
        { staticClass: "main-menu" },
        [
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "scroll",
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            [
              _c(
                "ul",
                { staticClass: "list-unstyled" },
                _vm._l(_vm.menuItems, function(item, index) {
                  return _c(
                    "li",
                    {
                      key: "parent_" + item.id,
                      class: {
                        active:
                          (_vm.selectedParentMenu === item.id &&
                            _vm.viewingParentMenu === "") ||
                          _vm.viewingParentMenu === item.id
                      },
                      attrs: { "data-flag": item.id }
                    },
                    [
                      item.newWindow
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href: item.to,
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }
                            },
                            [
                              _c("i", { class: item.icon }),
                              _vm._v(
                                "\r\n                        " +
                                  _vm._s(_vm.$t(item.label)) +
                                  "\r\n                    "
                              )
                            ]
                          )
                        : item.subs && item.subs.length > 0
                        ? _c(
                            "a",
                            {
                              attrs: { href: "#" + item.to },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.openSubMenu($event, item)
                                }
                              }
                            },
                            [
                              _c("i", { class: item.icon }),
                              _vm._v(
                                "\r\n                        " +
                                  _vm._s(_vm.$t(item.label))
                              )
                            ]
                          )
                        : _c(
                            "router-link",
                            {
                              attrs: { to: item.to },
                              nativeOn: {
                                click: function($event) {
                                  return _vm.changeSelectedParentHasNoSubmenu(
                                    item.id
                                  )
                                }
                              }
                            },
                            [
                              _c("i", { class: item.icon }),
                              _vm._v(
                                "\r\n                        " +
                                  _vm._s(_vm.$t(item.label))
                              )
                            ]
                          )
                    ],
                    1
                  )
                }),
                0
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "sub-menu" },
        [
          _c(
            "vue-perfect-scrollbar",
            {
              staticClass: "scroll",
              attrs: {
                settings: { suppressScrollX: true, wheelPropagation: false }
              }
            },
            _vm._l(_vm.menuItems, function(item, itemIndex) {
              return _c(
                "ul",
                {
                  key: "sub_" + item.id,
                  class: {
                    "list-unstyled": true,
                    "d-block":
                      (_vm.selectedParentMenu === item.id &&
                        _vm.viewingParentMenu === "") ||
                      _vm.viewingParentMenu === item.id
                  },
                  attrs: { "data-parent": item.id }
                },
                _vm._l(item.subs, function(sub, subIndex) {
                  return _c(
                    "li",
                    {
                      class: {
                        "has-sub-item": sub.subs && sub.subs.length > 0,
                        active: _vm.$route.path.indexOf(sub.to) > -1
                      }
                    },
                    [
                      sub.newWindow
                        ? _c(
                            "a",
                            {
                              attrs: {
                                href: sub.to,
                                rel: "noopener noreferrer",
                                target: "_blank"
                              }
                            },
                            [
                              _c("i", { class: sub.icon }),
                              _vm._v(" "),
                              _c("span", [_vm._v(_vm._s(_vm.$t(sub.label)))])
                            ]
                          )
                        : sub.subs && sub.subs.length > 0
                        ? [
                            _c(
                              "b-link",
                              {
                                directives: [
                                  {
                                    name: "b-toggle",
                                    rawName: "v-b-toggle",
                                    value: "menu_" + itemIndex + "_" + subIndex,
                                    expression:
                                      "`menu_${itemIndex}_${subIndex}`"
                                  }
                                ],
                                staticClass: "rotate-arrow-icon opacity-50",
                                attrs: { variant: "link" }
                              },
                              [
                                _c("i", {
                                  staticClass: "simple-icon-arrow-down"
                                }),
                                _vm._v(" "),
                                _c("span", { staticClass: "d-inline-block" }, [
                                  _vm._v(_vm._s(_vm.$t(sub.label)))
                                ])
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-collapse",
                              {
                                attrs: {
                                  visible: "",
                                  id: "menu_" + itemIndex + "_" + subIndex
                                }
                              },
                              [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "list-unstyled third-level-menu"
                                  },
                                  _vm._l(sub.subs, function(
                                    thirdLevelSub,
                                    thirdIndex
                                  ) {
                                    return _c(
                                      "li",
                                      {
                                        key:
                                          "third_" +
                                          itemIndex +
                                          "_" +
                                          subIndex +
                                          "_" +
                                          thirdIndex,
                                        class: {
                                          "third-level-menu": true,
                                          active:
                                            _vm.$route.path === thirdLevelSub.to
                                        }
                                      },
                                      [
                                        thirdLevelSub.newWindow
                                          ? _c(
                                              "a",
                                              {
                                                attrs: {
                                                  href: thirdLevelSub.to,
                                                  rel: "noopener noreferrer",
                                                  target: "_blank"
                                                }
                                              },
                                              [
                                                _c("i", {
                                                  class: thirdLevelSub.icon
                                                }),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        thirdLevelSub.label
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                          : _c(
                                              "router-link",
                                              {
                                                attrs: { to: thirdLevelSub.to }
                                              },
                                              [
                                                _c("i", {
                                                  class: thirdLevelSub.icon
                                                }),
                                                _vm._v(" "),
                                                _c("span", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.$t(
                                                        thirdLevelSub.label
                                                      )
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                      ],
                                      1
                                    )
                                  }),
                                  0
                                )
                              ]
                            )
                          ]
                        : _c("router-link", { attrs: { to: sub.to } }, [
                            _c("i", { class: sub.icon }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(_vm.$t(sub.label)))])
                          ])
                    ],
                    2
                  )
                }),
                0
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0& ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    { staticClass: "navbar fixed-top" },
    [
      _c("div", { staticClass: "d-flex align-items-center navbar-left" }, [
        _c(
          "a",
          {
            staticClass: "menu-button d-none d-md-block",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.changeSideMenuStatus({
                  step: _vm.menuClickCount + 1,
                  classNames: _vm.menuType,
                  selectedMenuHasSubItems: _vm.selectedMenuHasSubItems
                })
              }
            }
          },
          [_c("menu-icon")],
          1
        ),
        _vm._v(" "),
        _c(
          "a",
          {
            staticClass: "menu-button-mobile d-xs-block d-sm-block d-md-none",
            attrs: { href: "#" },
            on: {
              click: function($event) {
                $event.preventDefault()
                return _vm.changeSideMenuForMobile(_vm.menuType)
              }
            }
          },
          [_c("mobile-menu-icon")],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "searchContainer",
            class: { search: true, "mobile-view": _vm.isMobileSearch },
            on: {
              mouseenter: function($event) {
                _vm.isSearchOver = true
              },
              mouseleave: function($event) {
                _vm.isSearchOver = false
              }
            }
          },
          [
            _c("b-input", {
              attrs: { placeholder: _vm.$t("menu.search") },
              nativeOn: {
                keypress: function($event) {
                  if (
                    !$event.type.indexOf("key") &&
                    _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                  ) {
                    return null
                  }
                  return _vm.search($event)
                }
              },
              model: {
                value: _vm.searchKeyword,
                callback: function($$v) {
                  _vm.searchKeyword = $$v
                },
                expression: "searchKeyword"
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "search-icon", on: { click: _vm.searchClick } },
              [_c("i", { staticClass: "simple-icon-magnifier" })]
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "d-inline-block" },
          [
            _c(
              "b-dropdown",
              {
                staticClass: "ml-2",
                attrs: {
                  id: "langddm",
                  variant: "light",
                  size: "sm",
                  "toggle-class": "language-button"
                }
              },
              [
                _c("template", { slot: "button-content" }, [
                  _c("span", { staticClass: "name" }, [
                    _vm._v(_vm._s(_vm.$i18n.locale.toUpperCase()))
                  ])
                ]),
                _vm._v(" "),
                _vm._l(_vm.localeOptions, function(l, index) {
                  return _c(
                    "b-dropdown-item",
                    {
                      key: index,
                      on: {
                        click: function($event) {
                          return _vm.changeLocale(l.id, l.direction)
                        }
                      }
                    },
                    [_vm._v(_vm._s(l.name))]
                  )
                })
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "position-relative d-none d-none d-lg-inline-block" },
          [
            _c(
              "a",
              {
                staticClass: "btn btn-outline-primary btn-sm ml-2",
                attrs: { target: "_top", href: _vm.buyUrl }
              },
              [_vm._v(_vm._s(_vm.$t("user.buy")))]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "router-link",
        { staticClass: "navbar-logo", attrs: { tag: "a", to: "/app" } },
        [
          _c("span", { staticClass: "logo d-none d-xs-block" }),
          _vm._v(" "),
          _c("span", { staticClass: "logo-mobile d-block d-xs-none" })
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "navbar-right" }, [
        _c(
          "div",
          { staticClass: "d-none d-md-inline-block align-middle mr-3" },
          [
            _c("switches", {
              staticClass: "vue-switcher-small",
              attrs: {
                id: "tool-mode-switch",
                theme: "custom",
                color: "primary"
              },
              model: {
                value: _vm.isDarkActive,
                callback: function($$v) {
                  _vm.isDarkActive = $$v
                },
                expression: "isDarkActive"
              }
            }),
            _vm._v(" "),
            _c("b-tooltip", {
              attrs: {
                target: "tool-mode-switch",
                placement: "left",
                title: "Dark Mode"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "header-icons d-inline-block align-middle" }, [
          _c(
            "div",
            { staticClass: "position-relative d-none d-sm-inline-block" },
            [
              _c(
                "b-dropdown",
                {
                  attrs: {
                    variant: "empty",
                    size: "sm",
                    right: "",
                    "toggle-class": "header-icon",
                    "menu-class": "position-absolute mt-3 iconMenuDropdown",
                    "no-caret": ""
                  }
                },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("i", { staticClass: "simple-icon-grid" })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", { staticClass: "iconsminds-shop-4 d-block" }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.dashboards")) +
                              "\r\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", {
                            staticClass: "iconsminds-pantone d-block"
                          }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.ui")) +
                              "\r\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", {
                            staticClass: "iconsminds-bar-chart-4 d-block"
                          }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.charts")) +
                              "\r\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", {
                            staticClass: "iconsminds-speach-bubble d-block"
                          }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.chat")) +
                              "\r\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", {
                            staticClass: "iconsminds-formula d-block"
                          }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.survey")) +
                              "\r\n                        "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass: "icon-menu-item",
                          attrs: { tag: "a", to: "#" }
                        },
                        [
                          _c("i", { staticClass: "iconsminds-check d-block" }),
                          _vm._v(
                            "\r\n                            " +
                              _vm._s(_vm.$t("menu.todo")) +
                              "\r\n                        "
                          )
                        ]
                      )
                    ],
                    1
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "position-relative d-inline-block" },
            [
              _c(
                "b-dropdown",
                {
                  attrs: {
                    variant: "empty",
                    size: "sm",
                    right: "",
                    "toggle-class": "header-icon notificationButton",
                    "menu-class": "position-absolute mt-3 notificationDropdown",
                    "no-caret": ""
                  }
                },
                [
                  _c("template", { slot: "button-content" }, [
                    _c("i", { staticClass: "simple-icon-bell" }),
                    _vm._v(" "),
                    _c("span", { staticClass: "count" }, [_vm._v("3")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "vue-perfect-scrollbar",
                    {
                      attrs: {
                        settings: {
                          suppressScrollX: true,
                          wheelPropagation: false
                        }
                      }
                    },
                    _vm._l(_vm.notifications, function(n, index) {
                      return _c(
                        "div",
                        {
                          key: index,
                          staticClass: "d-flex flex-row mb-3 pb-3 border-bottom"
                        },
                        [
                          _c("router-link", { attrs: { tag: "a", to: "#" } }, [
                            _c("img", {
                              staticClass:
                                "img-thumbnail list-thumbnail xsmall border-0 rounded-circle",
                              attrs: { src: n.img, alt: n.title }
                            })
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "pl-3 pr-2" },
                            [
                              _c(
                                "router-link",
                                { attrs: { tag: "a", to: "#" } },
                                [
                                  _c(
                                    "p",
                                    { staticClass: "font-weight-medium mb-1" },
                                    [_vm._v(_vm._s(n.title))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "p",
                                    {
                                      staticClass: "text-muted mb-0 text-small"
                                    },
                                    [_vm._v(_vm._s(n.date))]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    }),
                    0
                  )
                ],
                2
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "position-relative d-none d-sm-inline-block" },
            [
              _c(
                "div",
                { staticClass: "btn-group" },
                [
                  _c(
                    "b-button",
                    {
                      staticClass: "header-icon btn-sm",
                      attrs: { variant: "empty" },
                      on: { click: _vm.toggleFullScreen }
                    },
                    [
                      _c("i", {
                        class: {
                          "d-inline-block": true,
                          "simple-icon-size-actual": _vm.fullScreen,
                          "simple-icon-size-fullscreen": !_vm.fullScreen
                        }
                      })
                    ]
                  )
                ],
                1
              )
            ]
          )
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "user d-inline-block" },
          [
            _c(
              "b-dropdown",
              {
                staticClass: "dropdown-menu-right",
                attrs: {
                  right: "",
                  variant: "empty",
                  "toggle-class": "p-0",
                  "menu-class": "mt-3",
                  "no-caret": ""
                }
              },
              [
                _c("template", { slot: "button-content" }, [
                  _c("span", { staticClass: "name mr-1" }, [
                    _vm._v(_vm._s(_vm.currentUser.title))
                  ]),
                  _vm._v(" "),
                  _c("span", [
                    _c("img", {
                      attrs: {
                        alt: _vm.currentUser.title,
                        src: _vm.currentUser.img
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("b-dropdown-item", [_vm._v("Account")]),
                _vm._v(" "),
                _c("b-dropdown-item", [_vm._v("Features")]),
                _vm._v(" "),
                _c("b-dropdown-item", [_vm._v("History")]),
                _vm._v(" "),
                _c("b-dropdown-item", [_vm._v("Support")]),
                _vm._v(" "),
                _c("b-dropdown-divider"),
                _vm._v(" "),
                _c("b-dropdown-item", { on: { click: _vm.logout } }, [
                  _vm._v("Sign out")
                ])
              ],
              2
            )
          ],
          1
        )
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.getMenuType, attrs: { id: "app-container" } },
    [
      _c("top-nav"),
      _vm._v(" "),
      _c("sidebar"),
      _vm._v(" "),
      _c("main", [
        _c("div", { staticClass: "container-fluid" }, [_c("router-view")], 1)
      ]),
      _vm._v(" "),
      _c("footer-component")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/DataListIcon.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/DataListIcon.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataListIcon.vue?vue&type=template&id=445551ea& */ "./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/Svg/DataListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DataListIcon.vue?vue&type=template&id=445551ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/DataListIcon.vue?vue&type=template&id=445551ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DataListIcon_vue_vue_type_template_id_445551ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/ImageListIcon.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/ImageListIcon.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ImageListIcon.vue?vue&type=template&id=d06d66ce& */ "./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/Svg/ImageListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ImageListIcon.vue?vue&type=template&id=d06d66ce& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/ImageListIcon.vue?vue&type=template&id=d06d66ce&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ImageListIcon_vue_vue_type_template_id_d06d66ce___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/MenuIcon.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/MenuIcon.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuIcon.vue?vue&type=template&id=7d883d3e& */ "./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/Svg/MenuIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuIcon.vue?vue&type=template&id=7d883d3e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/MenuIcon.vue?vue&type=template&id=7d883d3e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuIcon_vue_vue_type_template_id_7d883d3e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/MobileMenuIcon.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/MobileMenuIcon.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileMenuIcon.vue?vue&type=template&id=34a8bb3a& */ "./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/Svg/MobileMenuIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileMenuIcon.vue?vue&type=template&id=34a8bb3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/MobileMenuIcon.vue?vue&type=template&id=34a8bb3a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileMenuIcon_vue_vue_type_template_id_34a8bb3a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/ThumbListIcon.vue":
/*!************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/ThumbListIcon.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ThumbListIcon.vue?vue&type=template&id=2c0a7494& */ "./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/components/Svg/ThumbListIcon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ThumbListIcon.vue?vue&type=template&id=2c0a7494& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/components/Svg/ThumbListIcon.vue?vue&type=template&id=2c0a7494&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ThumbListIcon_vue_vue_type_template_id_2c0a7494___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/components/Svg/index.js":
/*!***************************************************************!*\
  !*** ./resources/js/components/admin/components/Svg/index.js ***!
  \***************************************************************/
/*! exports provided: DataListIcon, ThumbListIcon, ImageListIcon, MenuIcon, MobileMenuIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DataListIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataListIcon */ "./resources/js/components/admin/components/Svg/DataListIcon.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DataListIcon", function() { return _DataListIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ThumbListIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ThumbListIcon */ "./resources/js/components/admin/components/Svg/ThumbListIcon.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ThumbListIcon", function() { return _ThumbListIcon__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ImageListIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageListIcon */ "./resources/js/components/admin/components/Svg/ImageListIcon.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImageListIcon", function() { return _ImageListIcon__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _MenuIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuIcon */ "./resources/js/components/admin/components/Svg/MenuIcon.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuIcon", function() { return _MenuIcon__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _MobileMenuIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MobileMenuIcon */ "./resources/js/components/admin/components/Svg/MobileMenuIcon.vue");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MobileMenuIcon", function() { return _MobileMenuIcon__WEBPACK_IMPORTED_MODULE_4__["default"]; });








/***/ }),

/***/ "./resources/js/components/admin/constants/menu.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/constants/menu.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  id: "piaf",
  icon: "iconsminds-shop",
  label: "menu.piaf",
  to: "/app/piaf",
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.start",
    to: "/app/piaf/start"
  }]
}, {
  id: "second-menu",
  icon: "iconsminds-chemical",
  label: "menu.second-menu",
  to: "/app/second-menu",
  subs: [{
    icon: "simple-icon-paper-plane",
    label: "menu.second",
    to: "/app/second-menu/second"
  }]
}, {
  id: "pages",
  icon: "iconsminds-digital-drawing",
  label: "menu.pages",
  to: "/user/login",
  subs: [{
    icon: "simple-icon-user-following",
    label: "menu.login",
    to: "/user/login",
    newWindow: true
  }, {
    icon: "simple-icon-user-follow",
    label: "menu.register",
    to: "/user/register",
    newWindow: true
  }, {
    icon: "simple-icon-user-unfollow",
    label: "menu.forgot-password",
    to: "/user/forgot-password",
    newWindow: true
  }, {
    icon: "simple-icon-user-following",
    label: "menu.reset-password",
    to: "/user/reset-password",
    newWindow: true
  }]
}, {
  id: "single",
  icon: "iconsminds-three-arrow-fork",
  label: "menu.single",
  to: "/app/single"
}, {
  id: "docs",
  icon: "iconsminds-library",
  label: "menu.docs",
  to: "https://piaf-vue-docs.coloredstrategies.com/",
  newWindow: true
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./resources/js/components/admin/containers/Footer.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/containers/Footer.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=0de5531d& */ "./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d&");
/* harmony import */ var _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/containers/Footer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Footer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Footer.vue?vue&type=template&id=0de5531d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Footer.vue?vue&type=template&id=0de5531d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_0de5531d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/containers/Sidebar.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/admin/containers/Sidebar.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=template&id=576f8cca& */ "./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca&");
/* harmony import */ var _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/containers/Sidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Sidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Sidebar.vue?vue&type=template&id=576f8cca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/Sidebar.vue?vue&type=template&id=576f8cca&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sidebar_vue_vue_type_template_id_576f8cca___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/containers/TopNav.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/containers/TopNav.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopNav.vue?vue&type=template&id=1dfa40e0& */ "./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0&");
/* harmony import */ var _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopNav.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/containers/TopNav.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/TopNav.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TopNav.vue?vue&type=template&id=1dfa40e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/containers/TopNav.vue?vue&type=template&id=1dfa40e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TopNav_vue_vue_type_template_id_1dfa40e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/data/notifications.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/admin/data/notifications.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var data = [{
  img: '/assets/img/profile-pic-l-2.jpg',
  title: 'Joisse Kaycee just sent a new comment!',
  date: '09.04.2018 - 12:45',
  id: 1
}, {
  img: '/assets/img/notification-thumb.jpg',
  title: '1 item is out of stock!',
  date: '09.04.2018 - 12:45',
  id: 2
}, {
  img: '/assets/img/notification-thumb-2.jpg',
  title: 'New order received! It is total $147,20.',
  date: '09.04.2018 - 12:45',
  id: 3
}, {
  img: '/assets/img/notification-thumb-3.jpg',
  title: '3 items just added to wish list by a user!',
  date: '09.04.2018 - 12:45',
  id: 4
}];
/* harmony default export */ __webpack_exports__["default"] = (data);

/***/ }),

/***/ "./resources/js/components/admin/views/app/index.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/admin/views/app/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=4b7500f0& */ "./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/views/app/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/views/app/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=4b7500f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/views/app/index.vue?vue&type=template&id=4b7500f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_4b7500f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);