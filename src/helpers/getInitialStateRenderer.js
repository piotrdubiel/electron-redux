import { remote } from 'electron';

export default function getInitialStateRenderer(transit) {
  return transit.fromJSON(remote.getGlobal('reduxState'));
}
