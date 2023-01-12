const Page = require('../page');

class AjaxPage extends Page {
    get btnTriggeringAjax () {
        return $('#ajaxButton')
    }

    get successMessages () {
        return $$("#content p")
    }

    async clickBtnAjaxRequestTwoTimes () {
        await this.btnTriggeringAjax.doubleClick()
    }

    async waitForSuccessAjaxMessages () {
        await browser.waitUntil(
            async () => (await this.successMessages.length) === 2, 
            { timeout: 40000 }
        )
    }
}

module.exports = new AjaxPage()