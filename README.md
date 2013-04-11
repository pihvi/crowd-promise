A node.js module for authenticating user against Atlassian Crowd wrapped in a Promise.

## Usage ##
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
