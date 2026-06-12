const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});