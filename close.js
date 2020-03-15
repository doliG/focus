const UNSUPPORTED_OS = require("./errors").UNSUPPORTED_OS;
const execSync = require("child_process").execSync;

function closeFactory() {
  switch (process.platform) {
    case "darwin":
      return macHandler;
    default:
      throw Error(UNSUPPORTED_OS);
  }
}

function macHandler(app) {
  const command = `osascript -e 'quit app "${app}"'`;
  execSync(command);
}

module.exports = closeFactory;
