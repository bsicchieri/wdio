

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProgressBarPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnStart () {
        return $('#startButton');
    }

    get btnStop () {
        return $('#stopButton');
    }

    get progressBar () {
        return $('#progressBar');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async chargeProgressBar () {
        await this.btnStart.click();
        // verificar 75%
        await this.btnStop.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('progressbar');
    }
}

module.exports = new ProgressBarPage();
