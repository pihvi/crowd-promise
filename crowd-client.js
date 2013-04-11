var AtlassianCrowd = require('atlassian-crowd')

module.exports = function(baseUri, name, password) {
  var api = new AtlassianCrowd({
    crowd: {
      base: baseUri
    },
    application: {
      name: name,
      password: password
    }
  })

  this.authenticate = function(user, password, callback) {
    api.user.authenticate(user, password, function(err, res) {
      callback(err, res)
    })
  }
}
