const meow = require('meow')

const bangkok = require('.')

const cliName = process.argv[1].split('/').slice(-1)

const cli = meow(`
  Usage
  $ ${cliName} files
`)

const files = cli.input

if (files.length === 0) {
  console.error('ERROR: need some files')
  cli.showHelp()
}

console.log(`INFO: checking files: ${files}`)

const baseConfig = {
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    node: true
  }
}

bangkok(files, baseConfig)
  .catch(() => {
    process.exit(1)
  })
