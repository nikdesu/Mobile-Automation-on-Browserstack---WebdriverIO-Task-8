import { config } from "./wdio.conf";

//
// ======
// Browserstack
// ======
//
config.services = (config.services ? config.services : []).concat([
  [
    "browserstack",
    {
      app: "bs://0860064147cbb054939d6f3512de182223128501",
      browserstackLocal: false,
    },
  ],
]);

export default config;
