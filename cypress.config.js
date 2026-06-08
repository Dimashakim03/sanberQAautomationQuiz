const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: '[opensource-demo.orangehrmlive.com](https://opensource-demo.orangehrmlive.com/web/index.php)',
    viewportWidth: 1366,
    viewportHeight: 768,
    video: false,
    setupNodeEvents(on, config) {
      return config;
    }
  }
});
