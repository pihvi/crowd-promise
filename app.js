var corwdBaseURL = process.env.CROWD_BASE_URL || 'https://url.to.your.crowd.example.com'
var crowdAppName = process.env.CROWD_APP_NAME || 'this-apps-crowd-name'
var crowdAppPwd = process.env.CROWD_APP_PASSWORD || 'this-apps-crowd-password'

var CrowdClient = require('./crowd-client')
var crowd = new CrowdClient(corwdBaseURL, crowdAppName, crowdAppPwd)

var username = 'johdoe'
var password = 'password1'

crowd.authenticate(username, password, function(err, res) {
  if (err) console.log(err)
  console.log(res)
})
