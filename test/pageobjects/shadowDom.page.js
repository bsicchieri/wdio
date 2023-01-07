

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShadowDomPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputGuidGenerator () {
        return $('#editField');
    }

    get btnGenerate () {
        return $('#buttonGenerate');
    }

    get btnCopy () {
        return $('#buttonCopy');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async checkShadowDom () {
        await this.btnGenerate.click();
        await this.btnCopy.click();
        // pegar o valor do input guid
        // comparar os valores
        // mensagem de erro
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('shadowdom');
    }
}

module.exports = new ShadowDomPage();