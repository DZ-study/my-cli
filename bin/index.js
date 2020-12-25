const { program } = require('commander')
const fs = require('fs')
const path = require('path')



program
  .version('0.1.0')
  .command('init <name> [branch]')
  .description('初始化模板')
  .action((name, branch) => {
    console.log(name, 'Hello world')
  })

program.parse(process.argv)

