import assert from 'assert';
import sinon from 'sinon';
import filter from '../';

describe('Filter Spec', () => {
  describe('#filter', () => {
    const nextSpy = sinon.spy();
    const sendStatusSpy = sinon.spy();
    afterEach(() => {
      nextSpy.reset();
      sendStatusSpy.reset();
    })
    it('should call next function if method is allowed', () => {
      const instance = filter(['POST']);
      const req = { method: 'POST'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.calledOnce);
      assert.ok(sendStatusSpy.notCalled);
    });
    it('should send HTTP status code 406 if method is not allowed', () => {
      const instance = filter(['POST']);
      const req = { method: 'GET'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.notCalled);
      assert.ok(sendStatusSpy.calledOnce);
      assert.ok(sendStatusSpy.calledWithExactly(405));
    });
  });
});
