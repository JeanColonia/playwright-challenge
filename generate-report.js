const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  output: 'reports/cucumber-report.html',  
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true, 
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chromium",
    Platform: process.platform,
    Parallel: "Scenarios",
    Executed: "Remote",
  },
  embeddedVideos: true
};

reporter.generate(options);