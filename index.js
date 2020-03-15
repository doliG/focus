const settings = require("./settings.json");
const isRunning = require("./isRunning")();
const closeApp = require("./close")();

const openApps = settings.apps.filter(isRunning);
openApps.forEach(closeApp);
console.log("Closed apps:", openApps.join(", "));

process.exit();
