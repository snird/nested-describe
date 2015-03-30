#nested-describe
> Helper to create nested describe statements for test suites

## Install

```shell
npm install nested-describe --save-dev
```

## Usage

`testfile.js`
```js

var nestedDescribe = require('nested-describe');

nestedDescribe('api.routes.helpers', function() {

  it('should carry out a helper function', function () {

  });

});


nestedDescribe(['api', 'routes', 'helpers'], function() {

  it('should carry out a helper function', function () {

  });

});

```

will yield

```js

  api
    routes
      helpers
        ✓ should carry out a helper function (1ms)

  1 passing (1ms)

```
