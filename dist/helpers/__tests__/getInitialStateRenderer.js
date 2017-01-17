'use strict';

var _electron = require('electron');

var _transitImmutableJs = require('transit-immutable-js');

var _transitImmutableJs2 = _interopRequireDefault(_transitImmutableJs);

var _getInitialStateRenderer = require('../getInitialStateRenderer');

var _getInitialStateRenderer2 = _interopRequireDefault(_getInitialStateRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../getInitialStateRenderer');

describe('getInitialStateRenderer', function () {
  it('should return the initial state', function () {
    _electron.remote.getGlobal.mockImplementation(function () {
      return { reducer: 1231 };
    });

    expect((0, _getInitialStateRenderer2.default)(_transitImmutableJs2.default)).toBe(_transitImmutableJs2.default.toJSON({ reducer: 1231 }));
  });
});