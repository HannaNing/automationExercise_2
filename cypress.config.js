const { defineConfig } = require('cypress')
const { allureCypress } = require('allure-cypress/reporter')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureCypress(on)
    },
    projectId: 'automationExercise',
    specPattern: './cypress/test',
    baseUrl: 'https://automationexercise.com/',
  },
  defaultCommandTimeout: 10000,
})
