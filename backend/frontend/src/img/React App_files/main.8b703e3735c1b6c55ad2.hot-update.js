webpackHotUpdate("main",{

/***/ "./src/components/HomePage/Barber.js":
/*!*******************************************!*\
  !*** ./src/components/HomePage/Barber.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _ComboBox_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ComboBox.js */ "./src/components/HomePage/ComboBox.js");
/* harmony import */ var _Redux_Actions_comboBoxAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../Redux_Actions/comboBoxAction */ "./src/Redux_Actions/comboBoxAction.js");
/* harmony import */ var _Redux_Actions_providerAction__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../Redux_Actions/providerAction */ "./src/Redux_Actions/providerAction.js");
/* harmony import */ var _Css_provider_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../Css/provider.css */ "./src/components/Css/provider.css");
/* harmony import */ var _Css_provider_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Css_provider_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _photo_assets_barber_jpeg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../photo_assets/barber.jpeg */ "./src/photo_assets/barber.jpeg");
/* harmony import */ var _photo_assets_barber_jpeg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_photo_assets_barber_jpeg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _img_barber1_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../img/barber1.png */ "./src/img/barber1.png");
/* harmony import */ var _img_barber1_png__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_img_barber1_png__WEBPACK_IMPORTED_MODULE_14__);





var _jsxFileName = "/Users/isa/Desktop/Capstone/dashing/frontend/src/components/HomePage/Barber.js";












var Barber =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Barber, _React$Component);

  function Barber() {
    var _getPrototypeOf2;

    var _this;

    Object(_Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Barber);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Barber)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      skills: [],
      locations: [],
      serviceId: 3
    };

    _this.getSkillsForService = function () {
      axios__WEBPACK_IMPORTED_MODULE_6___default.a.get("/services/skills/3").then(function (res) {
        _this.setState({
          skills: res.data.data
        });
      }).catch(function (err) {
        console.log('GET SKILLS ERR', err);
      });
    };

    _this.renderProviders = function () {
      if (_this.props.barberProviders) {
        var providerObj = {};
        var providerArr = [];

        _this.props.barberProviders.forEach(function (provider) {
          if (!providerObj[provider.user_id]) {
            providerObj[provider.user_id] = true;
            providerArr.push(provider);
          }
        });

        return providerArr.map(function (barberP) {
          return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            key: barberP.user_id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Link"], {
            to: "/singleProviderProfile/".concat(barberP.user_id),
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "box",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "content",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
            alt: "avatar",
            className: "hvrbox-layer_bottom",
            src: barberP.avatar,
            style: {
              height: "150px"
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "hvrbox-layer_top",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            className: "hvrbox-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 69
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
            id: "ih-fade-down ih-delay-sm",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 70
            },
            __self: this
          }, barberP.provider), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
            style: {
              zIndex: '4',
              textAlign: 'center'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          }, barberP.borough, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          }), barberP.email, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 75
            },
            __self: this
          }), barberP.phone_number, " ", react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("br", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 76
            },
            __self: this
          }), barberP.website_link)))))));
        });
      } else {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          className: "lds-heart",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        }));
      }
    };

    return _this;
  }

  Object(_Users_isa_Desktop_Capstone_dashing_frontend_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Barber, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.fetchProvidersByService();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (!prevProps.barberProviders && this.props.barberProviders) {
        this.getSkillsForService();
      }
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ctnr_prov",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ctnr_box",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "img_intro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("img", {
        alt: "intro",
        src: _img_barber1_png__WEBPACK_IMPORTED_MODULE_14___default.a,
        width: "1200px",
        height: "100%",
        style: {
          objectFit: "cover",
          display: ' block',
          paddingRight: '900px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "inner_ctnr_providers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "ctnr_nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "Barber"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("span", {
        className: "dropdown",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_ComboBox_js__WEBPACK_IMPORTED_MODULE_9__["ComboBox"], {
        fetchSkillList: this.state.skills,
        getProvidersByService: this.props.getProvidersByService,
        fetchProvidersByService: this.props.fetchProvidersByService,
        serviceId: this.state.service_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "providers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        className: "prov",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      }, this.renderProviders()))))));
    }
  }]);

  return Barber;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    barberProviders: state.providersByService[3]
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchProvidersByService: function fetchProvidersByService() {
      return dispatch(Object(_Redux_Actions_providerAction__WEBPACK_IMPORTED_MODULE_11__["fetchProvidersByService"])(3));
    },
    fetchProBySvcAndBoro: function fetchProBySvcAndBoro(borough) {
      return dispatch(Object(_Redux_Actions_providerAction__WEBPACK_IMPORTED_MODULE_11__["fetchProvidersByService"])(3, borough));
    },
    getProvidersBySkill: function getProvidersBySkill(skill_id) {
      return dispatch(Object(_Redux_Actions_comboBoxAction__WEBPACK_IMPORTED_MODULE_10__["getProvidersBySkill"])(3, skill_id));
    },
    getProvidersByService: function getProvidersByService(skill_id, borough) {
      return dispatch(Object(_Redux_Actions_comboBoxAction__WEBPACK_IMPORTED_MODULE_10__["getProvidersByService"])(3, skill_id, borough));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Barber));

/***/ })

})
//# sourceMappingURL=main.8b703e3735c1b6c55ad2.hot-update.js.map