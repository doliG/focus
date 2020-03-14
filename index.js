const exec = require("child_process").exec;
const settings = require("./settings.json");

function closeApp() {
  for (app of settings.apps) {
    terminateApp(app);
  }
}

function terminateApp(app) {
  const command = `osascript -e 'quit app "${app}"'`;
  exec(command);
}

closeApp();

process.exit();
