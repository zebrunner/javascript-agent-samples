const { ZebrunnerReporterAPI } = require("@zebrunner/javascript-agent-nightwatch");
const { Zebrunner } = require("@zebrunner/javascript-agent-nightwatch");

describe('Basic reporting test', function () {

    const URL = 'https://www.google.com/';

    beforeEach((browser) => {
        ZebrunnerReporterAPI.startTest(browser);
    });

    afterEach((browser) => {
        ZebrunnerReporterAPI.finishTest(browser);
    });

    after((browser) => {
        browser.end();
    });

    it('Google search should be passed', (browser) => {
        Zebrunner.testCaseKey('ZTP-3010', 'ZTP-3679');

        const searchValue = 'Zebrunner';
        performGoogleSearch(browser, searchValue);

        browser.assert.urlContains(`search?q=${searchValue}`);
        browser.assert.textContains(
            {
                selector: '//*[@id="search"]//a',
                locateStrategy: 'xpath'
            },
            searchValue);
    });

    it('Google search should be failed', (browser) => {
        Zebrunner.testCaseKey('ZTP-3011', 'ZTP-3680');

        const searchValue = 'Nightwatch';
        performGoogleSearch(browser, searchValue);

        browser.verify.urlContains(`search?q=${searchValue}`);
        browser.verify.textEquals(
            {
                selector: '//*[@id="search"]//a',
                locateStrategy: 'xpath'
            },
            searchValue);
    });

    function performGoogleSearch(browser, searchValue) {
        browser.navigateTo(URL)
            .waitForElementVisible("*[name=q]")
            .takeScreenshot()
            .sendKeys("*[name=q]", [searchValue, browser.Keys.ENTER])
            .waitForElementVisible("#rso")
            .takeScreenshot();
    }
});
