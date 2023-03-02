const {
  ZebrunnerReporter,
  ZebrunnerService,
} = require('@zebrunner/javascript-agent-webdriverio');

exports.config = {
  reporterSyncInterval: 60 * 1000,
  runner: 'local',

  specs: ['./test/specs/**/*.js'],
  maxInstances: 10,
  // replace the following block with your Selenium WebDriver configuration
  //----------------------- Selenium WebDriver configuration-----------------------
  protocol: 'https',
  hostname: 'engine.zebrunner.com',
  port: 443,
  path: '/wd/hub',
  user: 'user',
  key: 'key',

  capabilities: [
    {
      maxInstances: 1,
      platformName: 'linux',
      browserName: 'chrome',
      browserVersion: '109.0',
      'zebrunner:options.enableVideo': true,
    },
  ],
  //----------------------- Selenium WebDriver configuration -----------------------
  logLevel: 'info',
  bail: 0,
  baseUrl: 'http://localhost',
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 1,
  services: [[ZebrunnerService]],
  framework: 'mocha',
  reporters: [
    [
      // replace the following block with your ZebrunnerReporter configuration
      //----------------------- Zebrunner Reporter configuration -----------------------
      ZebrunnerReporter,
      {
        enabled: true,
        projectKey: 'DEF',
        server: {
          hostname: 'https://mycompany.zebrunner.com/',
          accessToken: 'accessToken',
        },
        launch: {
          displayName: 'Zebrunner Demo Launch',
          build: '2.41.2.2431-SNAPSHOT',
          environment: 'QA',
        },
      },
      //----------------------- Zebrunner Reporter configuration -----------------------
    ],
    'spec',
  ],
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000,
  },
};
