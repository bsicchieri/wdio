const Page = require('./page');

class ShadowDomPage extends Page {
    get inputGuidGenerator () {
        return $('guid-generator').shadow$('#editField')
    }

    get btnGenerate () {
        return $('guid-generator').shadow$('#buttonGenerate')
    }

    get btnCopy () {
        return $('guid-generator').shadow$('#buttonCopy')
    }

    async generateAndCopyGuid () {
        await this.btnGenerate.click()
        await this.btnCopy.click()
    }

    async pasteClipboardValue () {
        await this.inputGuidGenerator.clearValue()
        await this.inputGuidGenerator.click()
        await browser.keys(['Control', 'v'])
    } 
}

module.exports = new ShadowDomPage();