'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.default = filter;

/**
  filter - rejects all methods not in whitelist
  calls next() callback if req.method is included in whitelist

  @param {Array<String>} whitelist array of allowed HTTP methods
  @param {Number} statusCode optional status code override (defaults to 405)
*/
function filter(whitelist, statusCode) {
  return (req, res, next) => {
    if (whitelist && whitelist.includes(req.method)) next();
    else res.sendStatus(statusCode || 405);
  };
}
