const {Command, flags} = require('cli-engine-command')

class RootCommand extends Command {
  async run () {
    console.dir(this.flags)
  }
}

RootCommand.flags = {
  foo: flags.string({char: 'f'})
}

module.exports = RootCommand
