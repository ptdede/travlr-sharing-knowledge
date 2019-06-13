const inquirer = require('inquirer')
const chalk = require('chalk')

const questions = require('./_question')

const calculation = require('../calculation/index')

module.exports = {
  init: async () => {
    const answer = await inquirer.prompt(questions);

    switch (answer.ACTIONS) {
        case 'CALCULATE':
          calculation.init()
          break;
        case 'SAY_HI':
          console.log(chalk.green("Well, Hello! :)"));
          break;
        default:
          console.log(chalk.red("Bye!"));
          break;
    }
  }
}