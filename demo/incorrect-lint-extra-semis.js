const NAME = 'demo-name' ;;

const VERSION = '0.1.0'

function * getIterator () {
  yield NAME
  yield VERSION
}

module.exports = {
  NAME,
  VERSION,
  getIterator,
}
