"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneCommunity = exports.updateOneCommunity = exports.postNewCommunity = exports.getOneCommunity = exports.getAllCommunities = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllCommunities = function getAllCommunities() {
  var resp;
  return regeneratorRuntime.async(function getAllCommunities$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/communities'));

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

exports.getAllCommunities = getAllCommunities;

var getOneCommunity = function getOneCommunity(id) {
  var resp;
  return regeneratorRuntime.async(function getOneCommunity$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/communities/".concat(id)));

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

exports.getOneCommunity = getOneCommunity;

var postNewCommunity = function postNewCommunity(data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function postNewCommunity$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/communities', {
            community: data,
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

exports.postNewCommunity = postNewCommunity;

var updateOneCommunity = function updateOneCommunity(id, data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function updateOneCommunity$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/communities/".concat(id), {
            community: data,
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

exports.updateOneCommunity = updateOneCommunity;

var destroyOneCommunity = function destroyOneCommunity(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneCommunity$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/communities/".concat(id)));

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

exports.destroyOneCommunity = destroyOneCommunity;