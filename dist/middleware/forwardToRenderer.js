'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _electron = require('electron');

var _validateAction = require('../helpers/validateAction');

var _validateAction2 = _interopRequireDefault(_validateAction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var forwardToRenderer = function forwardToRenderer(transit) {
  return function () {
    return function (next) {
      return function (action) {
        if (!(0, _validateAction2.default)(action)) return next(action);

        // change scope to avoid endless-loop
        var rendererAction = _extends({}, action, {
          meta: _extends({}, action.meta, {
            scope: 'local'
          })
        });

        var openWindows = _electron.BrowserWindow.getAllWindows();
        openWindows.forEach(function (_ref) {
          var webContents = _ref.webContents;

          webContents.send('redux-action', transit.toJSON(rendererAction));
        });

        return next(action);
      };
    };
  };
};

exports.default = forwardToRenderer;