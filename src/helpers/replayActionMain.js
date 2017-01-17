import { ipcMain } from 'electron';

export default function replayActionMain(store, transit) {
  // we have to do this to ease remote-loading of the initial state :(
  global.reduxState = transit.toJSON(store.getState());
  store.subscribe(() => {
    global.reduxState = transit.toJSON(store.getState());
  });

  ipcMain.on('redux-action', (event, payload) => {
    store.dispatch(transit.fromJSON(payload));
  });
}
