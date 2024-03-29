const { ZebrunnerReporter, ZebrunnerReporterAPI } = require('@zebrunner/javascript-agent-nightwatch');
const config = require('../nightwatch.conf')
let zbrReporter;

module.exports = {

    before: async () => {
        zbrReporter = new ZebrunnerReporter(config);
        await zbrReporter.startLaunch();
    },

    after: async () => {
        await zbrReporter.finishLaunch();
    },

    beforeEach: (browser, done) => {
        ZebrunnerReporterAPI.startTestSession(browser);
        done();
    },

    afterEach: (browser, done) => {
        ZebrunnerReporterAPI.finishTestSession(browser);
        done();
    },
};
