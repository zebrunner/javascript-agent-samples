const fs = require('fs');
const { ZebrunnerReporterAPI, CurrentLaunch, CurrentTest } = require("@zebrunner/javascript-agent-nightwatch");

describe('Advanced reporting test', () => {

    beforeEach((browser) => {
        ZebrunnerReporterAPI.startTest(browser);
    });

    afterEach((browser) => {
        ZebrunnerReporterAPI.finishTest(browser);
    });

    after((browser) => {
        browser.end();
    });

    it('Tracking test maintainer', (browser) => {
        console.log('Example shows how to attach a maintainer for a specific test');
        console.log('NOTE: The maintainer username should be a valid Zebrunner username, otherwise it will be set to anonymous');

        browser.navigateTo('https://github.com/zebrunner/javascript-agent-nightwatch#tracking-test-maintainer');

        CurrentTest.setMaintainer(browser, 'hpotter');
    });

    it('Attaching labels to test and test run', (browser) => {
        browser.navigateTo('https://github.com/zebrunner/javascript-agent-nightwatch#attaching-labels-to-test-and-test-run');

        console.log('Example shows how to add labels for a specific test');
        CurrentTest.attachLabel(browser, 'feature', 'labels');

        console.log('Example shows how to add labels for a whole test run');
        CurrentLaunch.attachLabel('configuration', 'chrome', 'linux');
    });

    it('Attaching artifact references to test and test run', (browser) => {
        browser.navigateTo('https://github.com/zebrunner/javascript-agent-nightwatch#attaching-artifact-references-to-test-and-test-run');

        console.log('Example shows how to attach a reference for a specific test');
        CurrentTest.attachArtifactReference(browser, 'Github Nightwatch agent', 'https://github.com/zebrunner/javascript-agent-nightwatch');

        console.log('Example shows how to attach a reference for a whole test run');
        CurrentLaunch.attachArtifactReference('Zebrunner documentation', 'https://zebrunner.com/documentation/');
    });

    it('Attaching artifacts to test and test run', (browser) => {
        browser.navigateTo('https://github.com/zebrunner/javascript-agent-nightwatch#attaching-artifacts-to-test-and-test-run');

        console.log('Example shows how to attach an artifact for a specific test from file');
        CurrentTest.uploadArtifactFromFile(browser, "README", "./README.md");

        console.log('Example shows how to attach an artifact from buffer for a whole test run');
        const buffer = fs.readFileSync("./package.json")
        CurrentLaunch.uploadArtifactBuffer('File artifact', 'application/json', buffer);
    });

    it('Reverting test registration', (browser) => {
        browser.navigateTo('https://github.com/zebrunner/javascript-agent-nightwatch#reverting-test-registration');

        console.log('Example shows how to revert test registration at runtime');

        if (new Date().getDay() === 1) {
            console.log('This test will not be reported on Monday');
            CurrentTest.revertRegistration(browser);
        }
    });

});
