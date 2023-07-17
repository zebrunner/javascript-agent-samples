const log = require('loglevel');
const { currentTest, zebrunner } = require('@zebrunner/javascript-agent-webdriverio');
const { Key } = require('webdriverio');

describe('Basic reporting test', () => {
  const logger = log.getLogger('LOGGER');
  const url = 'https://www.google.com/';
  const searchValue = 'Zebrunner';

  before(function () {
    logger.warn('This log message will not be submitted into Zebrunner');
    browser.maximizeWindow();
  });

  beforeEach(function () {
    logger.info(`Test ${this.currentTest.title} started`);
  });

  it('Google search should be passed', async () => {
    zebrunner.testCaseKey('ZPT-3010', 'ZPT-3679');

    logger.info(`Opening ${url}`);
    await browser.url(url);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    logger.info(`Performing search with value: ${searchValue}`);
    await $("//*[@name='q']").setValue(searchValue);
    await browser.keys(Key.Enter);

    logger.info(`Verify first search result contains ${searchValue}`);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    await expect($("//*[@id='search']//a")).toHaveTextContaining(searchValue);
  });

  it('Google search should be failed', async () => {
    zebrunner.testCaseKey('ZPT-3011', 'ZPT-3680');

    logger.info(`Opening ${url}`);
    await browser.url(url);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    logger.info(`Performing search with value: ${searchValue}`);
    await $("//*[@name='q']").setValue(searchValue);
    await browser.keys(Key.Enter);

    logger.info(`Verify first search result equals ${searchValue}`);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    await expect($("//*[@id='search']//a")).toHaveText(searchValue);
  });

  afterEach(function () {
    currentTest.saveScreenshot(browser);
    logger.info(
      `Test ${this.currentTest.title} finished as ${this.currentTest.state}`
    );
  });
});
