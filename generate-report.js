const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json', // Archivo JSON generado por Cucumber.js
  output: 'reports/cucumber-report.html',  // Ruta donde se generará el HTML
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  launchReport: true, // Abre el reporte automáticamente en el navegador
  metadata: {
    "App Version": "1.0.0",
    "Test Environment": "STAGING",
    Browser: "Chromium",
    Platform: process.platform,
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);