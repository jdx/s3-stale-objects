function run () {
}
require('yargs')
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'welcome ter yargs!', {
    name: {
      default: 'default name',
      describe: 'the name to say hello to'
    }
  }, run })
  .help()
  .argv

const AWS = require('aws-sdk')
const S3 = new AWS.S3()
