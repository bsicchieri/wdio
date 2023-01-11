const PlaygroundPage = require('./playground.page');

class ProgressBarPage extends PlaygroundPage {
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

    async waitForPercentage (percentage) {
        await this.progress.waitUntil(async function () {
            return (await this.getText()) === percentage
        }, {
            timeout: 50000
        })
    }

    async parsePercentage (currentPercentage) {
        return parseFloat(currentPercentage)
    }
}

module.exports = new ProgressBarPage();
