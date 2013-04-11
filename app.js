var corwdBaseURL = process.env.CROWD_BASE_URL || 'https://url.to.your.crowd.example.com'
var crowdAppName = process.env.CROWD_APP_NAME || 'this-apps-crowd-name'
var crowdAppPwd = process.env.CROWD_APP_PASSWORD || 'this-apps-crowd-password'

var CrowdClient = require('./crowd-client')
var crowd = new CrowdClient(corwdBaseURL, crowdAppName, crowdAppPwd)

var username = process.env.CROWD_USERNAME || 'john'
var password = process.env.CROWD_USER_PASSWORD || 'password1'

console.log('Starting authentication with callback..')
crowd.authenticate(username, password, function(err, res) {
  if (err) console.log('Callback error:', err)
  else console.log('Callback result:', res)
})

console.log('Starting authentication with promise..')
var promise = crowd.authenticate(username, password)
promise.then(function(res) {
  console.log('Promise result:', res)
}, function(err) {
  console.log('Promise error:', err)
})

console.log('Missiles away!')
