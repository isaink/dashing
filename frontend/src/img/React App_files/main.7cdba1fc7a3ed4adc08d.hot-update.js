webpackHotUpdate("main",{

/***/ "./src/components/ProfilePage/providerProfile.js":
/*!*******************************************************!*\
  !*** ./src/components/ProfilePage/providerProfile.js ***!
  \*******************************************************/
/*! exports provided: ProviderProfile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProviderProfile", function() { return ProviderProfile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Css_profile_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../Css/profile.css */ "./src/Css/profile.css");
/* harmony import */ var _Css_profile_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Css_profile_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _img_habitacion_pared_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../img/habitacion-pared-salmon.jpg */ "./src/img/habitacion-pared-salmon.jpg");
/* harmony import */ var _img_habitacion_pared_salmon_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_img_habitacion_pared_salmon_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _img_location_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../img/location.png */ "./src/img/location.png");
/* harmony import */ var _img_location_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_img_location_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _img_check_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../img/check.png */ "./src/img/check.png");
/* harmony import */ var _img_check_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_img_check_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _img_notFound_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../img/notFound.jpg */ "./src/img/notFound.jpg");
/* harmony import */ var _img_notFound_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_img_notFound_jpg__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/isa/Desktop/Capstone/dashing/frontend/src/components/ProfilePage/providerProfile.js";

 // import pic from './../../img/pic_profile.png';
// import pic from './../../img/pic_profile.jpg';



 // import lines from './../../img/lines_porfolio.jpg';


var ProviderProfile = function ProviderProfile(props) {
  var renderProviderInfo = function renderProviderInfo() {
    if (props.providerInfo) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ctnr_profile",
        key: props.providerInfo.provider_id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg_intro_profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "intro_picture",
        src: _img_habitacion_pared_salmon_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
        className: "intro_pic",
        style: {
          width: "1418px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: props.providerInfo.avatar,
        alt: "avatar",
        className: "avatar_profile",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "prov_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "prov_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, props.providerInfo.providername, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg_name",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "contact_info",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, "Phone number: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, props.providerInfo.phone_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Email:"), props.providerInfo.email), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ctnr_porfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "loc",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "prov_boro",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "loc",
        src: _img_location_png__WEBPACK_IMPORTED_MODULE_3___default.a,
        style: {
          zIndex: '2',
          height: '20px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }), props.providerInfo.borough, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social_link",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, "Social media: "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "https://www.instagram.com/krystamariehair/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, " ", props.providerInfo.website_link, " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ctnr_services",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, props.providerInfo.services && props.providerInfo.services.map(function (service) {
        var skills = service.skills.map(function (skill) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
            alt: "intro_picture",
            src: _img_check_png__WEBPACK_IMPORTED_MODULE_4___default.a,
            style: {
              height: '10px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          }), '   ', " ", skill, " ", '   ');
        });
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "ctnr_skills",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "srv_name",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 75
          },
          __self: this
        }, service.servicesname)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "inner_skill",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 77
          },
          __self: this
        }, skills));
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "ctnr_porfolio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, props.providerInfo.portfolio ? props.providerInfo.portfolio.map(function (photo) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          className: "portfolio_img",
          src: photo['img'],
          alt: "not here",
          style: {
            height: '200px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89
          },
          __self: this
        });
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, "  ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        alt: "intro_picture",
        src: _img_notFound_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
        style: {
          objectFit: 'cover',
          height: '320px',
          transform: 'translateY(-20%)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }))));
    } else {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "providerInfo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        },
        __self: this
      }, "Collecting Info ... ");
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, renderProviderInfo());
};

/***/ })

})
//# sourceMappingURL=main.7cdba1fc7a3ed4adc08d.hot-update.js.map