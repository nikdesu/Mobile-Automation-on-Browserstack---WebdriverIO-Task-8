import { join } from "path";
import config from "./wdio.shared.ci.browserstack.conf";

// ============
// Specs
// ============
config.specs = ["../test/specs/*/*.ts"];

// ============
// Credentials
// ============
config.user = process.env.BROWSERSTACK_USERNAME || "nikdesu_KVZ3kL";
config.key = process.env.BROWSERSTACK_ACCESS_KEY || "Z4mcB3rE5isQA7LqGAQc";
config.hostname = "hub.browserstack.com";

// ============
// Capabilities
// ============
config.capabilities = [
  {
    "bstack:options": {
      networkLogs: true,
      debug: false,
      deviceName: "Google Pixel 3a",
      osVersion: "9.0",
    },
  },
];
exports.config = config;
