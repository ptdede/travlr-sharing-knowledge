const inquirer = require('inquirer')
const chalk = require('chalk')

const questions = require('./_question')

module.exports = {
  init: async () => {
    const answer = await inquirer.prompt(questions);
    try {
      console.log(chalk.green('Your answer is ' + eval(answer.CALCULATE)));
    } catch (err) {
      console.log(chalk.red('Invalid input! Not an expression => ' + answer.CALCULATE));
    }
  }
}
