"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseUrl = process.env.NODE_ENV === 'production' ? 'https://kz-immigrant-api.herokuapp.com/' : 'http://localhost:3000';

var api = _axios["default"].create({
  baseURL: baseUrl
});

var _default = api;
exports["default"] = _default;