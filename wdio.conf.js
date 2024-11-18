export const config = {
  // runner: "local",
  // port: 4723,
  user: "juliano_quites",
  key: "d8364c85-2e11-42ef-a7fb-46eef4477436",
  hostname: "ondemand.us-west-1.saucelabs.com",
  port: 443,
  baseUrl: "wd/hub",

  specs: ["./test/specs/**/*.js"],
  maxInstances: 1,

  capabilities: [
    {
      platformName: "iOS",
      "appium:app": "storage:filename=LojaEBAC.ipa", // The filename of the mobile app
      "appium:deviceName": "iPhone XR",
      "appium:automationName": "XCUITest",
      "appium:disableIdLocatorAutocompletion": true,
      "sauce:options": {
        build: "appium-build-EBAC-MODULO-29",
        name: "Teste iOS",
        deviceOrientation: "PORTRAIT",
        appiumVersion: "latest",
      },
    },
  ],
  logLevel: "info",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: "mocha",

  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false,
      },
    ],
  ],

  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async function (
    test,
    context,
    { error, result, duration, passed, retries }
  ) {
    await browser.takeScreenshot();
  },
};
