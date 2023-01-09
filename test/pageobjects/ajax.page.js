

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class AjaxPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnTriggeringAjax () {
        return $('#ajaxButton');
    }

    async getDataAjaxMessage(index) {
        return (await $(`#content .bg-success:nth-child(${index})`))
    }

    async getDataAjaxMessageText(index) {
        await (await this.getDataAjaxMessage(index)).waitForDisplayed({ timeout: 45000 })
        return (await this.getDataAjaxMessage(index)).getText()
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async clickAjaxRequestThreeTimes () {
        await this.btnTriggeringAjax.click();
        await this.btnTriggeringAjax.click();
        await this.btnTriggeringAjax.click();
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('ajax');
    }
}

module.exports = new AjaxPage();