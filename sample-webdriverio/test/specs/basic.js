const log = require('loglevel');
const { currentTest } = require('@zebrunner/javascript-agent-webdriverio');
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

  it('Google search', async () => {
    logger.info(`Opening ${url}`);
    await browser.url(url);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    logger.info(`Performing search with value: ${searchValue}`);
    await $("//input[@name='q']").setValue(searchValue);
    await browser.keys(Key.Enter);

    logger.info(`Verify first search result contains ${searchValue}`);
    currentTest.saveScreenshot(await browser.takeScreenshot());

    await expect($("//*[@id='search']//a")).toHaveTextContaining(searchValue);
  });

  afterEach(function () {
    currentTest.saveScreenshot(browser);
    logger.info(
      `Test ${this.currentTest.title} finished as ${this.currentTest.state}`
    );
  });
});
