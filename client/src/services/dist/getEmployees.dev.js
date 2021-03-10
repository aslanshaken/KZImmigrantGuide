"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.destroyOneJobForEmployee = exports.updateOneJobForEmployee = exports.postNewJobForEmployee = exports.getOneJobForEmployee = exports.getAllJobsForEmployee = void 0;

var _apiConfig = _interopRequireDefault(require("./api-config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getAllJobsForEmployee = function getAllJobsForEmployee() {
  var resp;
  return regeneratorRuntime.async(function getAllJobsForEmployee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get('/get_employees'));

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

exports.getAllJobsForEmployee = getAllJobsForEmployee;

var getOneJobForEmployee = function getOneJobForEmployee(id) {
  var resp;
  return regeneratorRuntime.async(function getOneJobForEmployee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].get("/get_employees/".concat(id)));

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

exports.getOneJobForEmployee = getOneJobForEmployee;

var postNewJobForEmployee = function postNewJobForEmployee(Data) {
  var resp;
  return regeneratorRuntime.async(function postNewJobForEmployee$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].post('/get_employees', {
            get_employee: Data
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

exports.postNewJobForEmployee = postNewJobForEmployee;

var updateOneJobForEmployee = function updateOneJobForEmployee(id, Data) {
  var resp;
  return regeneratorRuntime.async(function updateOneJobForEmployee$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"].put("/get_employees/".concat(id), {
            get_employee: Data
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

exports.updateOneJobForEmployee = updateOneJobForEmployee;

var destroyOneJobForEmployee = function destroyOneJobForEmployee(id) {
  var resp;
  return regeneratorRuntime.async(function destroyOneJobForEmployee$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(_apiConfig["default"]["delete"]("/get_employees/".concat(id)));

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

exports.destroyOneJobForEmployee = destroyOneJobForEmployee;