"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledSlider = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

require("slick-carousel/slick/slick.css");

require("slick-carousel/slick/slick-theme.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  .slick-slide {\n    background-color: teal;\n  }\n  .slick-slide div {\n    outline: none;\n    background-color: orange;\n    width: 60%;\n    margin: 0 auto;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: tomato !important;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Box = _styledComponents["default"].div(_templateObject());

var StyledSlider = (0, _styledComponents["default"])(_reactSlick["default"])(_templateObject2());
exports.StyledSlider = StyledSlider;