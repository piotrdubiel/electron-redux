import { ipcRenderer } from 'electron';

export default function replayActionRenderer(store, transit) {
  ipcRenderer.on('redux-action', (event, payload) => {
    store.dispatch(transit.fromJSON(payload));
  });
}
