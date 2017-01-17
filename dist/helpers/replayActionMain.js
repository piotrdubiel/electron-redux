'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = replayActionMain;

var _electron = require('electron');

function replayActionMain(store, transit) {
  // we have to do this to ease remote-loading of the initial state :(
  global.reduxState = transit.toJSON(store.getState());
  store.subscribe(function () {
    global.reduxState = transit.toJSON(store.getState());
  });

  _electron.ipcMain.on('redux-action', function (event, payload) {
    store.dispatch(transit.fromJSON(payload));
  });
}