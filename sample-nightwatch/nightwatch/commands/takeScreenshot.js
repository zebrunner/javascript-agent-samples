const { CurrentTest } = require("@zebrunner/javascript-agent-nightwatch");

module.exports = {
  command() {
    return this.perform(() => {
      CurrentTest.saveScreenshot(this);
    });
  },
};
