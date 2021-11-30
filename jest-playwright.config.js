let openBrowser = process.env.HEADLESS.trim()

openBrowser == "true" ? openBrowser = true : openBrowser = false

module.exports = {
    browsers: [process.env.BROWSER.trim()],
    exitOnPageError: false,
    launchOptions: {
      headless: openBrowser
    }
  }