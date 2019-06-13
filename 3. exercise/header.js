const chalk = require("chalk")
const figlet = require("figlet")

module.exports = {
  initHeader: () => {
      console.log(
          chalk.green(
              figlet.textSync("MY FIRST APP")
          )
      );
  }
}
