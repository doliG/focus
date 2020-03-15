const UNSUPPORTED_OS = require("./errors").UNSUPPORTED_OS;
const execSync = require("child_process").execSync;

function isRunningFactory() {
  switch (process.platform) {
    case "linux":
    case "darwin":
      return macAndLinuxHandler;
    default:
      throw Error(UNSUPPORTED_OS);
  }
}

function macAndLinuxHandler(processName) {
  try {
    execSync(`pgrep ${processName}`);
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = isRunningFactory;
