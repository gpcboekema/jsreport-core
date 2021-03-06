var Reporter = require('./lib/reporter.js')
var path = require('path')

module.exports = function (options, defaults) {
  options = options || {}

  options.parentModuleDirectory = options.parentModuleDirectory || path.dirname(module.parent.filename)

  return new Reporter(options, defaults)
}

module.exports.Reporter = Reporter

module.exports.tests = {
  documentStore: () => require('./test/store/common.js'),
  blobStorage: () => require('./test/blobStorage/common.js')
}
