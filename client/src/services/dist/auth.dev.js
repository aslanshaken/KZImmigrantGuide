"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneUser = exports.updateOneUser = exports.registerUser = exports.getOneUser = exports.getAllUsers = exports.removeToken = exports.verifyUser = exports.loginUser = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var loginUser = function loginUser(loginData) {
  var resp;
  return regeneratorRuntime.async(function loginUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/auth/login', {
            authentication: loginData
          }));

        case 3:
          resp = _context.sent;
          localStorage.setItem('authToken', resp.data.token);
          _apiConfig["default"].defaults.headers.common.authorization = "Bearer ".concat(resp.data.token);
          return _context.abrupt("return", resp.data.user);

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          throw _context.t0;

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.loginUser = loginUser;

var verifyUser = function verifyUser() {
  var token, resp;
  return regeneratorRuntime.async(function verifyUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          token = localStorage.getItem('authToken');

          if (!token) {
            _context2.next = 7;
            break;
          }

          _apiConfig["default"].defaults.headers.common.authorization = "Bearer ".concat(token);
          _context2.next = 5;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/auth/verify'));

        case 5:
          resp = _context2.sent;
          return _context2.abrupt("return", resp.data);

        case 7:
          return _context2.abrupt("return", null);

        case 8:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.verifyUser = verifyUser;

var removeToken = function removeToken() {
  _apiConfig["default"].defaults.headers.common.authorization = null;
}; /////////////////////////////////////////////////
////////////////////////////////////////////////
///////////////////////////////////////////////


exports.removeToken = removeToken;

var getAllUsers = function getAllUsers() {
  var resp;
  return regeneratorRuntime.async(function getAllUsers$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/users'));

        case 2:
          resp = _context3.sent;
          return _context3.abrupt("return", resp.data);

        case 4:
        case "end":
          return _context3.stop();
      }
    }
  });
};

exports.getAllUsers = getAllUsers;

var getOneUser = function getOneUser(id) {
  var resp;
  return regeneratorRuntime.async(function getOneUser$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/users/".concat(id)));

        case 2:
          resp = _context4.sent;
          return _context4.abrupt("return", resp.data);

        case 4:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getOneUser = getOneUser;

var registerUser = function registerUser(registerData, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function registerUser$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/users/', {
            user: registerData,
            image: imageInfo
          }));

        case 3:
          resp = _context5.sent;
          localStorage.setItem('authToken', resp.data.token);
          _apiConfig["default"].defaults.headers.common.authorization = "Bearer ".concat(resp.data.token);
          return _context5.abrupt("return", resp.data.user);

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          throw _context5.t0;

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

exports.registerUser = registerUser;

var updateOneUser = function updateOneUser(id, data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function updateOneUser$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/users/".concat(id), {
            user: data,
            image: imageInfo
          }));

        case 2:
          resp = _context6.sent;
          return _context6.abrupt("return", resp.data);

        case 4:
        case "end":
          return _context6.stop();
      }
    }
  });
};

exports.updateOneUser = updateOneUser;

var destroyOneUser = function destroyOneUser(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneUser$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/users/".concat(id)));

        case 2:
          resp = _context7.sent;
          return _context7.abrupt("return", resp);

        case 4:
        case "end":
          return _context7.stop();
      }
    }
  });
};

exports.destroyOneUser = destroyOneUser;