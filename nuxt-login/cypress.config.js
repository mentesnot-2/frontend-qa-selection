import { defineConfig } from "cypress";
import {installPlugin} from "@chromatic-com/cypress"

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      installPlugin(on,config)
    },
    experimentalStudio: true
  },
});
