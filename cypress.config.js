const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
   
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // implement node event listeners here
      return require("./cypress/plugins")(on, config);
    },
    env: {
      snapshotOnly: true
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com"
  },
});
