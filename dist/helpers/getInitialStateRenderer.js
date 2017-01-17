'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInitialStateRenderer;

var _electron = require('electron');

function getInitialStateRenderer(transit) {
  return transit.fromJSON(_electron.remote.getGlobal('reduxState'));
}