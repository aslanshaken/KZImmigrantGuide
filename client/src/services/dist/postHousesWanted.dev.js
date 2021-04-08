"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneHouseWanted = exports.updateOneHouseWanted = exports.postNewHouseWanted = exports.getOneHouseWanted = exports.getAllHousesWanted = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllHousesWanted = function getAllHousesWanted() {
  var resp;
  return regeneratorRuntime.async(function getAllHousesWanted$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/post_house_wanteds'));

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

exports.getAllHousesWanted = getAllHousesWanted;

var getOneHouseWanted = function getOneHouseWanted(id) {
  var resp;
  return regeneratorRuntime.async(function getOneHouseWanted$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/post_house_wanteds/".concat(id)));

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

exports.getOneHouseWanted = getOneHouseWanted;

var postNewHouseWanted = function postNewHouseWanted(data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function postNewHouseWanted$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/post_house_wanteds', {
            post_house_wanted: data,
            image: imageInfo
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

exports.postNewHouseWanted = postNewHouseWanted;

var updateOneHouseWanted = function updateOneHouseWanted(id, data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function updateOneHouseWanted$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/post_house_wanteds/".concat(id), {
            post_house_wanted: data,
            image: imageInfo
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

exports.updateOneHouseWanted = updateOneHouseWanted;

var destroyOneHouseWanted = function destroyOneHouseWanted(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneHouseWanted$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/post_house_wanteds/".concat(id)));

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

exports.destroyOneHouseWanted = destroyOneHouseWanted;