const PlaygroundPage = require('./playground.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowDomPage extends PlaygroundPage {
    /**
     * define selectors using getter methods
     */
    get inputGuidGenerator () {
        return $('guid-generator').shadow$('#editField');
    }

    get btnGenerate () {
        return $('guid-generator').shadow$('#buttonGenerate');
    }

    get btnCopy () {
        return $('guid-generator').shadow$('#buttonCopy');
    }

    // clickOnCopyBtn

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async generateAndCopyGuid () {
        await this.btnGenerate.click();
        await this.btnCopy.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open (path) {
        return super.open(`${path}`);
    }
}

module.exports = new ShadowDomPage();