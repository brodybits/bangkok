const { green, red } = require('chalk')

const runESLint = require('run-eslint-async')

const spawn = require('cross-spawn')

const { error, info } = console

module.exports = function main (files, baseConfig) {
  return runESLint(files, baseConfig)
    .catch((e) => {
      error(red('LINT ERROR'))
      error(e)
      return Promise.reject(e)
    })
    .then(() => {
      info(green('LINT OK'))
    })
    .then(() => {
      info('check Prettier formatting...')
      // FUTURE TBD replace this with a cleaner API call:
      const { status } = spawn.sync('npx', ['prettier', '--check'].concat(files), { stdio: 'inherit', stderr:'inherit'})
      if (status !== 0) {
        error(red('FORMATTING ERROR'))
        return Promise.reject('FORMATTING ERROR')
      }
      info(green('FORMATTING OK'))
    })
}
