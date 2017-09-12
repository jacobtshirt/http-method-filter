[![Build Status](https://travis-ci.org/jacobtshirt/http-method-filter.svg?branch=master)](https://travis-ci.org/jacobtshirt/http-method-filter)
# http-method-filter



HTTP Method filter middleware for Express

Whitelist HTTP methods for an app or route.

All other HTTP methods will be rejected.

httpMethodFilter(whitelist[, statusCode])
* *whitelist* - array of allowed HTTP methods
* *statusCode* - `Default: 405` set the HTTP status code of the response



Usage:

```
import httpFilter from 'http-method-filter';
import express from 'express';

const app = express();

// Entire express app
app.use(httpFilter(['POST']));
app.use('*', httpFilter(['POST']));

// For specific route
app.get('/api/path', httpFilter(['GET']), (req, res, next) => {

});

// With express router
router.all('/api/path', httpFilter(['POST', 'GET']));
router.route('/')
  .all(httpFilter(['POST', 'GET']))
  .get(...)
// With status code
router.route('/')
  .all(httpFilter(['POST', 'GET'], 500))
  .get(...)
```
