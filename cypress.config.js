const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    projectId: 'automationExercise',
    specPattern: './cypress/test',
    baseUrl: 'https://automationexercise.com/',
  },
  defaultCommandTimeout: 10000,
})
