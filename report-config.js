const fse = require('fs-extra')
const { addAttach } = require('jest-html-reporters/helper')
const PlaywrightEnvironment = require('jest-playwright-preset/lib/PlaywrightEnvironment')
  .default

class CustomEnvironment extends PlaywrightEnvironment {
  async handleTestEvent(event) {
    if (event.name === 'test_done' && event.test.errors.length > 0) {
      const testDescription = event.test.parent.name.replace(/\W/g, '-')
      const testName = event.test.name.replace(/\W/g, '-')

      await fse.ensureDir('screenshots')
      const filePath = `screenshots/${testDescription}_${testName}.png`
      const data = await this.global.page.screenshot({
        path: filePath,
        fullPage: true
      })
      await addAttach(data, 'Evidencia', this.global)
    }
  }
}

module.exports = CustomEnvironment
