const { defineConfig } = require("cypress");



module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    experimentalStudio: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: [
      "cypress/integration/webUI/*.js",
      "cypress/integration/examples/*.js",
    ],
  },

  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },
});
