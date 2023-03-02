const log = require('loglevel');
const {
  currentTest,
  currentLaunch,
} = require('@zebrunner/javascript-agent-webdriverio');

describe('Advanced reporting test', () => {
  const logger = log.getLogger('LOGGER');

  before(function () {
    // will be attached to the entire run
    currentLaunch.attachArtifactReference(
      'Zebrunner',
      'https://zebrunner.com/'
    );
    currentLaunch.attachLabel('framework', 'WDIO');
    browser.maximizeWindow();
  });

  beforeEach(function () {
    logger.info(`Test ${this.currentTest.title} satrted`);
  });

  it('Tracking test maintainer', async () => {
    await browser.url(
      'https://zebrunner.com/documentation/reporting/webdriverio/#tracking-test-maintainer'
    );
    currentTest.setMaintainer('Deve Loper');
    logger.info('Example shows how to attach a maintainer for a specific test');
    logger.info(
      'NOTE: The maintainer username should be a valid Zebrunner username, otherwise it will be set to anonymous'
    );
  });

  it('Attaching labels to test and launch', async () => {
    await browser.url(
      'https://zebrunner.com/documentation/reporting/webdriverio/#attaching-labels-to-test-and-launch'
    );
    // will be attached to this test only
    currentTest.attachLabel('feature', 'login');
    logger.info(
      'Example shows how to add labels using annotation for a specific test'
    );

    // will be attached to the entire run
    currentLaunch.attachLabel('platform', 'LINUX');
    logger.info(
      'Example shows how to add labels using annotation for a specific launch'
    );
  });

  it('Attaching artifact references to test and launch', async () => {
    await browser.url(
      'https://zebrunner.com/documentation/reporting/webdriverio/#attaching-artifact-references-to-test-and-launch'
    );
    // will be attached to this test only
    currentTest.attachArtifactReference(
      'Zebrunner documentation',
      'https://zebrunner.com/documentation/'
    );
    logger.info('Example shows how to attach reference for a specific test');
    await browser.pause(3000);
    // will be attached to the entire run
    currentLaunch.attachArtifactReference(
      'Zebrunner WebdriverIO reporting agent',
      'https://zebrunner.com/documentation/reporting/webdriverio/'
    );
    logger.info('Example shows how to attach reference for a specific launch');
  });

  it('Reverting test registration', async () => {
    if (new Date().getDay() === 1) {
      currentTest.revertRegistration();
      logger.info('Example shows how to revert test registration at runtime.');
    }
    await browser.url(
      'https://zebrunner.com/documentation/reporting/webdriverio/#reverting-test-registration'
    );
    logger.info('This test will not reported on Monday.');
  });

  afterEach(function () {
    logger.info(`Test  ${this.currentTest.title} finished`);
  });
});
