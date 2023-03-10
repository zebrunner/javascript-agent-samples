const { ZebrunnerReporterAPI } = require("@zebrunner/javascript-agent-nightwatch");

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
        const searchValue = 'Zebrunner';
        performGoogleSearch(searchValue);

        browser.assert.urlContains(`search?q=${searchValue}`);
        browser.assert.textContains(
            {
                selector: '//*[@id="search"]//a',
                locateStrategy: 'xpath'
            },
            searchValue);
    });

    it('Google search should be failed', (browser) => {
        const searchValue = 'Nightwatch';
        performGoogleSearch(searchValue);

        browser.verify.urlContains(`search?q=${searchValue}`);
        browser.verify.textEquals(
            {
                selector: '//*[@id="search"]//a',
                locateStrategy: 'xpath'
            },
            searchValue);
    });

    function performGoogleSearch(searchValue) {
        browser.navigateTo(URL)
            .waitForElementVisible("input[name=q]")
            .sendKeys("input[name=q]", [searchValue, browser.Keys.ENTER])
            .waitForElementVisible("#rso");
    }
});
