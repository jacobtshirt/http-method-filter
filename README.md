[![Build Status](https://travis-ci.org/jacobtshirt/http-method-filter.svg?branch=master)](https://travis-ci.org/jacobtshirt/http-method-filter)
# http-method-filter



HTTP Method filter middleware for expressjs

Usage:

```
import httpFilter from 'http-method-filter';
import express from 'express';

const app = express();

// Entire express app
app.use(httpFilter(['POST']));
app.use('*', httpFilter(['POST']));

// For specific route
app.get('/api/path', httpFilter(['POST']), (req, res, next) => {

});

// With express router
router.all('/api/path', httpFilter(['POST']));
router.get('/api/path', httpFilter(['POST']), (req, res, next) => {

});
```
