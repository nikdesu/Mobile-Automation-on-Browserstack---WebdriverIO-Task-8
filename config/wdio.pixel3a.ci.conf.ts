import { join } from "path";
import config from "./wdio.shared.android.ci.conf";

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
