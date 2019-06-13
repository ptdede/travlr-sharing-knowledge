const inquirer = require('inquirer')
const chalk = require('chalk')

const questions = require('./_question')

module.exports = {
  init: async () => {
    const answer = await inquirer.prompt(questions);
    console.log(chalk.green('Your answer is ' + eval(answer.CALCULATE)));
  }
}
