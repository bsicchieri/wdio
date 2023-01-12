const Page = require('../page');

class ProgressBarPage extends Page {
    get btnStart () {
        return $('#startButton')
    }

    get btnStop () {
        return $('#stopButton')
    }

    get progress () {
        return $('.progress')
    }

    get progressBar () {
        return $('#progressBar')
    }

    async clickOnStartButton () {
        await this.btnStart.click()
    }

    async waitForPercentage (percentage) {
        await this.progress.waitUntil(async function () {
            return (await this.getText()) === percentage
        }, {
            timeout: 50000
        })
    }

    async clickOnStopButton () {
        await this.btnStop.click()
    }

    async parsePercentage (currentPercentage) {
        return parseFloat(currentPercentage)
    }

    async validateFinalPercentage (currentPercentage, minPercentNumber, maxPercentNumber) {
        await expect(await this.parsePercentage(currentPercentage)) >= (minPercentNumber)
        await expect(await this.parsePercentage(currentPercentage)) <= (maxPercentNumber)
    }
}

module.exports = new ProgressBarPage()
