# Zebrunner WebdriverIO reporting agent

## sample-webdriverio

Your guide to run the first WebdriverIO test with reporting to Zebrunner.

## Preconditions

Before you can start configuring Zebrunner WebdriverIO reporting agent, you need to create a free Zebrunner workspace at https://zebrunner.com/

## Configuration

### _Step 1: Basic project setup_

Clone the Zebrunner's [samples](https://github.com/zebrunner/javascript-agent-samples) repository and navigate to the code directory as shown below:

```
git clone https://github.com/zebrunner/javascript-agent-samples.git
cd javascript-agent-samples/sample-webdriverio
```

### _Step 2: Configure credentials and reporting_

In Zebrunner:

- Navigate to "Account and profile" section by clicking on the User icon from the top right side;
- Click on "API Tokens" tab;
- Press "Token" button, create a token and copy it before closing the dialog (you won't be able to see the token later).

Define launch configuration (override defaults if needed) and copy content below to the list of reporters to the wdio.conf.js file.

#### **`wdio.conf.js`**

```
ZebrunnerReporter,
      {
        enabled: true,
        projectKey: 'DEF',
        server: {
          hostname: 'https://<workspace>.zebrunner.com/',
          accessToken: '<accessToken>',
        },
        launch: {
          displayName: 'Zebrunner Demo Launch',
          build: '2.41.2.2431-SNAPSHOT',
          environment: 'QA',
        },
      },
```

### _Step 3: Configure Selenium WebDriver_

In Zebrunner:

- Navigate to "Automation -> Launches" page by selecting the menu from left sidebar;
- Click on key icon from the top right side on Launches page;
  You will see 'Hub Access' popup where you can copy username and access key for remote Zebrunner Selenium Grid;
- Set copied values for variables `user` and `key`.

Configure desired capabilities and insert snippet below to wdio.conf.js file.

#### **`wdio.conf.js`**

```
protocol: 'https',
  hostname: 'engine.zebrunner.com',
  port: 443,
  path: '/wd/hub',
  user: '<username>',
  key: '<access_key>',

  capabilities: [
    {
      maxInstances: 1,
      platformName: 'linux',
      browserName: 'chrome',
      browserVersion: '109.0',
    },
  ],
```

### _Step 4: Execute the tests_

Please run the following command in the terminal.

```
npm install && npm run test
```

### _Step 5: View test results_

Congratulations! You have just completed a reporting setup for a test project!
Now you can go to the Launches page to see the results.

To learn more about advanced reporting capabilities, supported Selenium Grid providers, test cases mapping and more please go to the [documentation](https://zebrunner.com/documentation/reporting/webdriverio/).
