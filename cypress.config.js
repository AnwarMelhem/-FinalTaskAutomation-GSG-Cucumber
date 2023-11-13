const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
   
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      
      return require("./cypress/plugins")(on, config);
    },
    env: {
      snapshotOnly: true,
      download_dir: "./cypress/downloads",
      allureReuseAfterSpec: true,
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com",
    allureResultsPath: "allure-results",
    allure:true,
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
