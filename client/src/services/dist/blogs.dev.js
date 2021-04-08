"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneBlog = exports.updateOneBlog = exports.postNewBlog = exports.getOneBlog = exports.getAllBlogs = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllBlogs = function getAllBlogs() {
  var resp;
  return regeneratorRuntime.async(function getAllBlogs$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/blogs'));

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

exports.getAllBlogs = getAllBlogs;

var getOneBlog = function getOneBlog(id) {
  var resp;
  return regeneratorRuntime.async(function getOneBlog$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/blogs/".concat(id)));

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

exports.getOneBlog = getOneBlog;

var postNewBlog = function postNewBlog(data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function postNewBlog$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/blogs', {
            blog: data,
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

exports.postNewBlog = postNewBlog;

var updateOneBlog = function updateOneBlog(id, data, imageInfo) {
  var resp;
  return regeneratorRuntime.async(function updateOneBlog$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/blogs/".concat(id), {
            blog: data,
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

exports.updateOneBlog = updateOneBlog;

var destroyOneBlog = function destroyOneBlog(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneBlog$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/blogs/".concat(id)));

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

exports.destroyOneBlog = destroyOneBlog;