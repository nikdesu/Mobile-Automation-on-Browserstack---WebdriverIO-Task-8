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
      deviceName: "Google Pixel 7 Pro",
      osVersion: "13.0",
    },
  },
];
exports.config = config;
