A node.js module for authenticating user against Atlassian Crowd wrapped in a Promise.

## Usage ##

[![Greenkeeper badge](https://badges.greenkeeper.io/pihvi/crowd-promise.svg)](https://greenkeeper.io/)
```javascript
  var CrowdPromise = require('crowd-promise')
  var crowd = new CrowdPromise(corwdBaseURL, crowdAppName, crowdAppPwd)

  var authPromise = crowd.authenticate(username, password)

  authPromise.then(function(res) {
    console.log('User email:', res.email)
  }, function(err) {
    console.log('Authentication error:', err)
  })
```

## License ##
Apache 2.0
