const { ZebrunnerConfigurator } = require("@zebrunner/javascript-agent-nightwatch");

module.exports = {

  src_folders: ['test'],

  page_objects_path: [],
  custom_commands_path: ['nightwatch/commands'],
  custom_assertions_path: [],
  plugins: [],

  globals_path: 'nightwatch/globals.js',

  ////////////////////////////////////////////////////////////////////////////////////////
  // Replace the following block with your Zebrunner configuration
  reporterOptions: {
    zebrunnerConfig: {
      enabled: true,
      projectKey: 'DEF',
      server: {
        hostname: 'https://<workspace>.zebrunner.com/',
        accessToken: '<accessToken>',
      },
      launch: {
        displayName: "Nightwatch Demo Launch",
        build: '2.41.2.2431-SNAPSHOT',
        environment: 'QA',
      },
    }
  },
  ////////////////////////////////////////////////////////////////////////////////////////

  webdriver: {},

  test_workers: {
    enabled: true
  },
  live_output: true,
  parallel_process_delay: 2000,

  test_settings: {

    default: {
      disable_error_log: false,
      launch_url: 'http://localhost',

      screenshots: {
        enabled: true,
        path: 'screens',
        on_failure: true,
        on_error: true,
      },

      desiredCapabilities: {
        browserName: "chrome",
        "goog:chromeOptions": {
          w3c: true,
          args: ["start-maximized"],
        },
      },

      webdriver: {
        start_process: true,
        server_path: ''
      },
    },

    ////////////////////////////////////////////////////////////////////////////////////////
    // Replace the following block with obtained Zebrunner Selenium Grid information and desired capabilities
    zebrunner: ZebrunnerConfigurator.configureLauncher({
      selenium: {
        host: 'engine.zebrunner.com',
        port: 443,
      },

      username: '<username>',
      access_key: '<access_key>',

      webdriver: {
        start_process: false,
      },
      desiredCapabilities: {
        platformName: 'linux',
        browserName: 'chrome',
        browserVersion: '109.0',
        'enableVideo': true
      },
    }),
    ////////////////////////////////////////////////////////////////////////////////////////
  },

};
