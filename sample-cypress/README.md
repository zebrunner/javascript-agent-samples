# Zebrunner Cypress reporting agent sample

## sample-cypress

Your guide to run the first Cypress test with reporting to Zebrunner.

## Prerequisites

Before configuring Zebrunner Cypress reporting agent, you need to create a free Zebrunner workspace at https://zebrunner.com/

## Configuration

### _Step 1: Basic project setup_

Clone the Zebrunner's [samples](https://github.com/zebrunner/javascript-agent-samples) repository and navigate to the code directory as shown below:

```
git clone https://github.com/zebrunner/javascript-agent-samples.git
cd javascript-agent-samples/sample-cypress
```

### _Step 2: Configure credentials and reporting_

In Zebrunner:

- Navigate to "Account and profile" section by clicking on the User icon from the top right side;
- Click on "API Access" tab;
- Press "Token" button, create a token and copy it before closing the dialog (you won't be able to see the token later).

Define launch configuration (override defaults if needed) and copy content below to the list of reporters to the `cypress.json` file

#### **`cypress.json`**

```js
"reporterOptions": {
       "reportingServerHostname": "https://<workspace>.zebrunner.com/",
       "reportingServerAccessToken": "<accessToken>",
       "reportingProjectKey": "<project_key>",
       "reportingRunEnvironment": "DEMO",
       "reportingRunBuild": "2.41.2.2431-SNAPSHOT",
       "reportingRunDisplayName": "Zebrunner Demo Launch"
   }
```

### _Step 3: Execute the tests_

Please run the following command in the terminal

```
npm install && npx cypress run --headed --spec cypress/integration/basic.cy.js
```

### _Step 4: View test results_

Congratulations! You have just completed reporting setup for a test project!
Now you can go to the Launches page to see the results.

Note: Video will be available only for tests launched via launcher!

To learn more about advanced reporting capabilities, test cases mapping and more please go to the [documentation](https://zebrunner.com/documentation/reporting/cypress/).
