(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game/gameDetail/gameDetail"],{

/***/ 100:
/*!***********************************************************************!*\
  !*** D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameDetail.vue?vue&type=template&id=44dd5d2a& */ 101);
/* harmony import */ var _gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameDetail.vue?vue&type=script&lang=js& */ 103);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gameDetail.vue?vue&type=style&index=0&lang=scss& */ 105);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/game/gameDetail/gameDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 101:
/*!******************************************************************************************************!*\
  !*** D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=template&id=44dd5d2a& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameDetail.vue?vue&type=template&id=44dd5d2a& */ 102);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_template_id_44dd5d2a___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 102:
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=template&id=44dd5d2a& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 103:
/*!************************************************************************************************!*\
  !*** D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameDetail.vue?vue&type=script&lang=js& */ 104);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 104:
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ 23));
var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/createClass */ 24));
var _defineProperty2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ 11));
var _contentType = _interopRequireDefault(__webpack_require__(/*! ../../../tool/contentType.js */ 252));
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
// 引入垃圾总和的数组
var Card = /*#__PURE__*/function () {
  // 卡片的宽高,只有原本高度的一半，因为之后一个卡片占2*2的数组大小，方便形成上层卡片压到下层卡片的某个角的效果。

  // 偏移量

  function Card(_ref) {
    var x = _ref.x,
      y = _ref.y,
      z = _ref.z,
      key = _ref.key;
    (0, _classCallCheck2.default)(this, Card);
    this.x = x;
    this.y = y;
    this.z = z;
    this.key = key;
    this.val = key;
    this.content = {};
    this.cover = false;
    this.style = "top: ".concat(y * Card.y + Card.offsety, "px;left:").concat(x * Card.x + Card.offsetx, "px;");
  }
  (0, _createClass2.default)(Card, [{
    key: "setVal",
    value: function setVal(val) {
      this.val = val - 1;
      this.content = Card.contentType[val - 1];
      this.style += "".concat(this.content.style);
    }
  }], [{
    key: "setContentType",
    value: function setContentType(list) {
      Card.contentType = list;
    }
  }, {
    key: "setCardOffsetX",
    value: function setCardOffsetX(offset) {
      Card.offsetx = offset * 30;
    }
  }, {
    key: "setCardOffsetY",
    value: function setCardOffsetY(offsety) {
      Card.offsety = offsety * 30;
    }
  }]);
  return Card;
}();
(0, _defineProperty2.default)(Card, "x", 20);
(0, _defineProperty2.default)(Card, "y", 25);
(0, _defineProperty2.default)(Card, "offsetx", 25);
(0, _defineProperty2.default)(Card, "offsety", 25);
(0, _defineProperty2.default)(Card, "contentType", []);
var _default = {
  data: function data() {
    return {
      options: {},
      aaa: '🧻',
      // 所有卡片
      cardList: [],
      // 保存的三张卡片
      saveList: [],
      // 选择的卡片
      penddingList: [],
      // 判断道具是否可以使用
      tools: {
        three: true,
        random: true
      },
      // 判断是否以及获胜
      winner: false,
      // 数组的很轴和纵轴
      xUnit: 0,
      yUnit: 0,
      // 用于判断是否构成三张相同的可以消除
      calcValueList: []
    };
  },
  methods: {
    // 初始化游戏
    init: function init() {
      // 清空list
      this.cardList = [];
      this.penddingList = [];
      this.saveList = [];
      // 重置tools
      this.tools.three = true;
      this.tools.random = true;
      // 绘制卡片地图
      this.getMaps();
    },
    // 绘制卡片地图
    getMaps: function getMaps() {
      // 初始化网络地图
      var cardMap = this.initMap();
      // 根据卡片密度，向cardmap中放入card,此时的卡片没有内容
      cardMap = this.setCard(cardMap);
      // 设置卡片的内容
      this.setContent();
      // 计算卡片的遮罩关系
      this.calcCover(cardMap);
    },
    clickCard: function clickCard(item, flag) {
      var _this = this;
      // flag用来判断点击的是map中的还是saveList中的
      if (flag) {
        // 将点击的卡片冲cardList中去除，保存在penddingList中
        var index = this.cardList.indexOf(item);
        this.cardList = this.cardList.slice(0, index).concat(this.cardList.slice(index + 1));
      } else {
        // 将点击的卡片冲cardList中去除，保存在penddingList中
        var _index = this.saveList.indexOf(item);
        this.saveList = this.saveList.slice(0, _index).concat(this.saveList.slice(_index + 1));
      }
      // 重新设置item的style
      item.style = "left:".concat((this.penddingList.length - 1) * Card.x * 2 + 30 * 2, "px;").concat(item.content.style);
      this.penddingList.push(item);
      // 重新计算遮挡关系
      this.calcCover();
      //判断是否有三个重复的可以消除
      this.cancelCard();
      setTimeout(function () {
        // 判断是否成功或失败
        _this.isWin();
      }, 300);
    },
    // 判断是否成功或失败
    isWin: function isWin() {
      if (this.penddingList.length === 7) {
        uni.navigateTo({
          url: '/pages/game/gameResult/gameResult?winner=false'
        });
      } else if (this.cardList.length === 0) {
        uni.navigateTo({
          url: '/pages/game/gameResult/gameResult?winner=true'
        });
      }
    },
    // 三个重复的可以消除
    cancelCard: function cancelCard() {
      var _this2 = this;
      this.calcValueList = new Array(this.options.maxCard).fill(0);
      this.penddingList.some(function (item) {
        _this2.calcValueList[item.val]++;
        if (_this2.calcValueList[item.val] === 3) {
          // 设置定时器，延后一点进行清除,使第三张卡片显示出来
          setTimeout(function () {
            // 清除penddinglist中对应的卡片
            _this2.penddingList = _this2.penddingList.filter(function (e) {
              return e.val !== item.val;
            });
            // 重新更新penddingList中的卡片样式
            _this2.penddingList = _this2.penddingList.map(function (e, index) {
              e.style = "left:".concat((index - 1) * Card.x * 2 + 30 * 2, "px;").concat(e.content.style);
              return e;
            });
          }, 300);
        }
      });
    },
    // 计算卡片遮罩关系
    calcCover: function calcCover() {
      // 从后往前，后面的层数高
      // 初始化cover数组，false表示改位置没有卡片，true表示该位置的上方有卡片，需要设置cover样式
      var coverMap = new Array(this.yUnit);
      for (var i = 0; i < this.yUnit; i++) {
        coverMap[i] = new Array(this.xUnit).fill(false);
      }
      for (var _i = this.cardList.length - 1; _i >= 0; _i--) {
        var item = this.cardList[_i];
        var x = item.x,
          y = item.y;
        if (coverMap[y][x]) {
          item.cover = true;
        } else if (coverMap[y + 1][x]) {
          item.cover = true;
        } else if (coverMap[y][x + 1]) {
          item.cover = true;
        } else if (coverMap[y + 1][x + 1]) {
          item.cover = true;
        } else {
          item.cover = false;
        }
        coverMap[y][x] = true;
        coverMap[y + 1][x] = true;
        coverMap[y][x + 1] = true;
        coverMap[y + 1][x + 1] = true;
      }
    },
    // 设置卡片的内容
    setContent: function setContent() {
      var maxCard = this.options.maxCard;
      var valStack = new Array(maxCard);
      // 给卡片设置值
      this.cardList.forEach(function (item) {
        // 随机一个种类
        var value = Math.ceil(Math.random() * maxCard);
        if (valStack[value]) {
          // 将item赋值这个种类的卡片
          valStack[value].push(item);
          // 将他们进行三个三个配对
          if (valStack[value].length === 3) {
            valStack[value].forEach(function (item) {
              item.setVal(value);
            });
            valStack[value] = null;
          }
        } else {
          valStack[value] = [item];
        }
      });
      // 对为进行分类的重新分类
      var count = 2;
      valStack.forEach(function (list) {
        list && list.map(function (item) {
          count++;
          item.setVal(Math.floor(count / 3));
        });
      });
    },
    // 初始化地图，确认卡片位置
    setCard: function setCard(map) {
      var _this$options = this.options,
        x = _this$options.x,
        y = _this$options.y,
        z = _this$options.z,
        random = _this$options.random;
      var key = 0;
      var cardList = [];
      var shrinkSpeed = 3;
      for (var k = 0; k < z; k++) {
        var shrink = Math.floor((z - k - 1) / shrinkSpeed);
        var shrinkX = Math.min(Math.floor(this.xUnit / 2) - 2, shrink);
        var shrinkY = Math.min(Math.floor(this.yUnit / 2) - 2, shrink);
        // 行
        // -1是因为y是*2后的，最后一行不能放置卡片，不然就会超出边界
        for (var i = shrinkY; i < this.yUnit - 1 - shrinkY; i++) {
          // 列
          for (var j = shrinkX; j < Math.ceil((this.xUnit - 1) / 2); j++) {
            var canSetCard = true;
            if (j > 0 && map[k][i][j - 1]) {
              // 左边不能有卡片
              canSetCard = false;
            } else if (i > 0 && map[k][i - 1][j]) {
              // 上面不能有卡片
              canSetCard = false;
            } else if (i > 0 && j > 0 && map[k][i - 1][j - 1]) {
              // 左上角不能有卡片
              canSetCard = false;
            } else if (i > 0 && map[k][i - 1][j + 1]) {
              // 右上角不能有卡片
              canSetCard = false;
            } else if (k > 0 && map[k - 1][i][j]) {
              // 正底下不能有卡片
              canSetCard = false;
            } else if (Math.random() > random) {
              canSetCard = false;
            }
            // 如果这个位置可以放置卡片，那么根据随机数，设置卡片的密度
            if (canSetCard) {
              var rand = Math.random();
              var card = new Card({
                x: j,
                y: i,
                z: k,
                key: key
              });
              key++;
              map[k][i][j] = card;
              cardList.push(card);
              // 对称放置卡片
              var mirror = this.xUnit - 2 - j;
              if (mirror > j) {
                var item = new Card({
                  x: mirror,
                  y: i,
                  z: k,
                  key: key
                });
                map[k][i][mirror] = item;
                key++;
                cardList.push(item);
              }
            }
          }
        }
      }
      // 卡片形成三的倍数,去掉顶层的卡片，因为顶层的卡片最多
      cardList.reverse();
      for (var _i2 = 0; _i2 < cardList.length % 3; _i2++) {
        var _item = cardList.pop();
        map[_item.z][_item.y][_item.x] = 0;
      }
      cardList.reverse();
      this.cardList = cardList;
      return map;
    },
    // 初始化网络地图
    initMap: function initMap() {
      var _this$options2 = this.options,
        x = _this$options2.x,
        y = _this$options2.y,
        z = _this$options2.z;
      this.xUnit = x * 2;
      this.yUnit = y * 2;
      var cardMap = new Array(z);
      for (var i = 0; i < z; i++) {
        cardMap[i] = new Array(this.yUnit);
        for (var j = 0; j < this.yUnit; j++) {
          cardMap[i][j] = new Array(this.xUnit).fill(0);
        }
      }
      return cardMap;
    },
    // 根据maxCard初始化card类中的contentType数组，随机生产垃圾
    initContentType: function initContentType() {
      var contentList = _contentType.default;
      // 随机卡片样式数组
      // 洗牌算法
      var shuffle = function shuffle(arr) {
        for (var i = arr.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var _ref2 = [arr[j], arr[i]];
          arr[i] = _ref2[0];
          arr[j] = _ref2[1];
        }
        return arr;
      };
      var selected = shuffle(contentList).slice(0, this.options.maxCard);
      Card.setContentType(selected);
    },
    // 再来一轮
    again: function again() {
      this.init();
    },
    // 随机
    random: function random() {
      if (this.tools.random) {
        // 使用洗牌算法
        for (var i = this.cardList.length - 1; i > 0; i--) {
          var j = Math.floor(Math.random() * (i + 1));
          var temp = this.cardList[i].content;
          this.cardList[i].content = this.cardList[j].content;
          this.cardList[j].content = temp;
        }
        this.tools.random = false;
      } else {
        uni.showToast({
          title: '该功能只能使用一次',
          icon: 'none'
        });
      }
    },
    // 取出三张卡片
    removeThree: function removeThree() {
      if (this.tools.three) {
        // 判断penddingList是否有三张卡片
        var temp;
        if (this.penddingList.length >= 3) {
          for (var i = 0; i < 3; i++) {
            temp = this.penddingList.pop();
            temp.style = "left:".concat((this.saveList.length - 1) * Card.x * 2 + 30 * 2, "px;").concat(temp.content.style);
            this.saveList.push(temp);
          }
        } else {
          while (this.penddingList.length !== 0) {
            temp = this.penddingList.pop();
            temp.style = "left:".concat((this.saveList.length - 1) * Card.x * 2 + 30 * 2, "px;").concat(temp.content.style);
            this.saveList.push(temp);
          }
        }
        this.tools.three = false;
        console.log('123', this.saveList);
      } else {
        uni.showToast({
          title: '该功能只能使用一次',
          icon: 'none'
        });
      }
    }
  },
  onLoad: function onLoad(option) {
    this.options = JSON.parse(option.options);
    if (this.options.x <= 3) {
      Card.setCardOffsetX(8 - this.options.x - 1);
      Card.setCardOffsetY(8 - this.options.y - 1);
    } else {
      Card.setCardOffsetX(8 - this.options.x + 1);
      Card.setCardOffsetY(8 - this.options.y + 1);
    }

    // 根据maxCard初始化card类中的contentType数组，随机生产垃圾
    this.initContentType();
    // 初始化游戏
    this.init(this.options);
  },
  onShow: function onShow() {
    this.init();
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 105:
/*!*********************************************************************************************************!*\
  !*** D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./gameDetail.vue?vue&type=style&index=0&lang=scss& */ 106);
/* harmony import */ var _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_E_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_E_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_2_E_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_3_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_sass_loader_dist_cjs_js_ref_8_oneOf_1_4_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_8_oneOf_1_5_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_E_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_gameDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 106:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--8-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--8-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-2!./node_modules/postcss-loader/src??ref--8-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/sass-loader/dist/cjs.js??ref--8-oneOf-1-4!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--8-oneOf-1-5!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/111代码/111前端/uniapp/垃圾分类/pages/game/gameDetail/gameDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 99:
/*!********************************************************************************************!*\
  !*** D:/111代码/111前端/uniapp/垃圾分类/main.js?{"page":"pages%2Fgame%2FgameDetail%2FgameDetail"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _gameDetail = _interopRequireDefault(__webpack_require__(/*! ./pages/game/gameDetail/gameDetail.vue */ 100));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_gameDetail.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ })

},[[99,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/game/gameDetail/gameDetail.js.map