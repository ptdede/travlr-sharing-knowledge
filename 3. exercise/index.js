const header = require('./header')
const welcome = require('./src/screen/welcome/index')

function startApplication () {
  header.initHeader()
  welcome.init()
}

startApplication()
