const Page = require('../page');

class AddRemoveElements extends Page {
    get btnAddElement () {
        return $('.example button')
    }

    get btnDelete () {
        return $$('#elements .added-manually')
    }

    async clickBtnAddElement () {
        await this.btnAddElement.waitForDisplayed()
        await this.btnAddElement.click()
    }

    async clickBtnDelete (index) {
        await this.btnDelete[index].waitForDisplayed()
        await this.btnDelete[index].click()
    }

    async validateElements (element, index) {
        await expect(element).toBeElementsArrayOfSize(index)
    }
}

module.exports = new AddRemoveElements()