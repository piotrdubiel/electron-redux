import { remote } from 'electron';
import transit from 'transit-immutable-js';
import getInitialStateRenderer from '../getInitialStateRenderer';

jest.unmock('../getInitialStateRenderer');

describe('getInitialStateRenderer', () => {
  it('should return the initial state', () => {
    remote.getGlobal.mockImplementation(() => ({ reducer: 1231 }));

    expect(getInitialStateRenderer(transit)).toBe(transit.toJSON({ reducer: 1231 }));
  });
});
