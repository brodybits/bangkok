# Bangkok

An ES code linting tool that uses both ESLint and Prettier to check for cleanup
needed, designed to work with community-maintained ESLint and Prettier plugins.

## CLI usage

```console
bangkok pattern1*/**/*.js pattern2*/**/*.js ...
```

## API usage

**Sample:**

```js
const meow = require('meow')

const bangkok = require('bangkok')

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

const baseESLintConfig = {
  parserOptions: {
    ecmaVersion: 2020
  },
  env: {
    node: true
  }
}

bangkok(files, baseESLintConfig)
  .catch(() => {
    process.exit(1)
  })
```
