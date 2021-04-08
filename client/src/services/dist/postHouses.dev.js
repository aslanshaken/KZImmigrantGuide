"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneHouseForRent = exports.updateOneHouseForRent = exports.postNewHouseForRent = exports.getOneHouseForRent = exports.getAllHousesForRent = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllHousesForRent = function getAllHousesForRent() {
  var resp;
  return regeneratorRuntime.async(function getAllHousesForRent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/post_houses'));

        case 2:
          resp = _context.sent;
          return _context.abrupt("return", resp.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
};

exports.getAllHousesForRent = getAllHousesForRent;

var getOneHouseForRent = function getOneHouseForRent(id) {
  var resp;
  return regeneratorRuntime.async(function getOneHouseForRent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/post_houses/".concat(id)));

        case 2:
          resp = _context2.sent;
          return _context2.abrupt("return", resp.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
};

exports.getOneHouseForRent = getOneHouseForRent;

var postNewHouseForRent = function postNewHouseForRent(data, imagesInfo) {
  var resp;
  return regeneratorRuntime.async(function postNewHouseForRent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/post_houses', {
            post_house: data,
            images: imagesInfo
          }));

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

exports.postNewHouseForRent = postNewHouseForRent;

var updateOneHouseForRent = function updateOneHouseForRent(id, data, imagesInfo) {
  var resp;
  return regeneratorRuntime.async(function updateOneHouseForRent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/post_houses/".concat(id), {
            post_house: data,
            images: imagesInfo
          }));

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

exports.updateOneHouseForRent = updateOneHouseForRent;

var destroyOneHouseForRent = function destroyOneHouseForRent(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneHouseForRent$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/post_houses/".concat(id)));

        case 2:
          resp = _context5.sent;
          return _context5.abrupt("return", resp);

        case 4:
        case "end":
          return _context5.stop();
      }
    }
  });
};

exports.destroyOneHouseForRent = destroyOneHouseForRent;