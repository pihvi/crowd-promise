var AtlassianCrowd = require('atlassian-crowd')
var Q = require('q')

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
    if (callback) {
      apicall(user, password, callback)
    } else {
      var deferred = Q.defer()
      apicall(user, password, function(err, res) {
        if (err) {
          deferred.reject(err)
        } else {
          deferred.resolve(res)
        }
      })
      return deferred.promise
    }
  }

  function apicall(user, password, callback) {
    api.user.authenticate(user, password, function(err, res) {
      callback(err, res)
    })
  }
}
