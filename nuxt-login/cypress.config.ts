import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    // `chromeWebSecurity` should be placed here
    chromeWebSecurity: false,

    // The setupNodeEvents function remains the same
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    experimentalStudio: true,
  },
});
