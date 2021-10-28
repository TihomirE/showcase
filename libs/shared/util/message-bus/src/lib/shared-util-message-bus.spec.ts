import { sharedUtilMessageBus } from './shared-util-message-bus';

describe('sharedUtilMessageBus', () => {
  it('should work', () => {
    expect(sharedUtilMessageBus()).toEqual('shared-util-message-bus');
  });
});
