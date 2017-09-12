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
    
    it('should send default HTTP status code 405 if method is not allowed', () => {
      const instance = filter(['POST']);
      const req = { method: 'GET'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.notCalled);
      assert.ok(sendStatusSpy.calledOnce);
      assert.ok(sendStatusSpy.calledWithExactly(405));
    });

    it('should send HTTP status code passed to param if defined and if method is not allowed', () => {
      const instance = filter(['POST'], 400);
      const req = { method: 'GET'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.notCalled);
      assert.ok(sendStatusSpy.calledOnce);
      assert.ok(sendStatusSpy.calledWithExactly(400));
    });

    it('should reject all requests if whitelist is empty', () => {
      const instance = filter([]);
      const req = { method: 'GET'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.notCalled);
      assert.ok(sendStatusSpy.calledOnce);
    });

    it('should reject all requests if whitelist is undefined', () => {
      const instance = filter();
      const req = { method: 'GET'  };
      const res = { sendStatus: sendStatusSpy };
      instance(req, res, nextSpy);
      assert.ok(nextSpy.notCalled);
      assert.ok(sendStatusSpy.calledOnce);
    });
  });
});
