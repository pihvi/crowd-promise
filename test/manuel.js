var corwdBaseURL = process.env.CROWD_BASE_URL || 'https://url.to.your.crowd.example.com'
var crowdAppName = process.env.CROWD_APP_NAME || 'this-apps-crowd-name'
var crowdAppPwd = process.env.CROWD_APP_PASSWORD || 'this-apps-crowd-password'

var CrowdPromise = require('../crowd-promise')
var crowd = new CrowdPromise(corwdBaseURL, crowdAppName, crowdAppPwd)

var username = process.env.CROWD_USERNAME || 'john'
var password = process.env.CROWD_USER_PASSWORD || 'password1'

var withErrorHandling = true
var withJustHappyPath = true

if (withErrorHandling) {
  console.log('Starting authentication with callback-full..')
  callbackFullSolution()
  console.log('Starting authentication with promise-full..')
  promiseFullSolution()
}
if (withJustHappyPath) {
  console.log('Starting authentication with callback-happy..')
  callbackHappyPath()
  console.log('Starting authentication with promise-happy..')
  promiseHappyPath()
}
console.log('Missiles away!')

function callbackFullSolution() {
  crowd.authenticate(username, password, function(err, res) {
    if (err) console.log('Callback-full error:', err)
    else console.log('Callback-full result:', res.email)
  })
}

function promiseFullSolution() {
  var promise = crowd.authenticate(username, password)
  promise.then(function(res) {
    console.log('Promise-full result:', res.email)
  }, function(err) {
    console.log('Promise-full error:', err)
  })
}

function callbackHappyPath() {
  crowd.authenticate(username, password, function(err, res) {
    console.log('Callback-happy result:', res.email)
  })
}

function promiseHappyPath() {
  crowd.authenticate(username, password).then(function(res) {
    console.log('Promise-happy result:', res.email)
  })
}
