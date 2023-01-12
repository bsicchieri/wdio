const AddRemoveElementsPage = require('../../pageobjects/herokuapp/addRemoveElements.page')
const AddRemoveElementsData = require('../../../data/herokuapp/addRemoveElements.data')

describe('Wdio IU code challenge', () => {
    it('should wait until the delete button exists', async () => {
        await AddRemoveElementsPage.open(await AddRemoveElementsData.url)
        await AddRemoveElementsPage.validateUrl(await AddRemoveElementsData.url)
        await AddRemoveElementsPage.clickBtnAddElement()
        await AddRemoveElementsPage.clickBtnAddElement()
        await AddRemoveElementsPage.validateElements(await AddRemoveElementsPage.btnDelete, 2)
        await AddRemoveElementsPage.clickBtnDelete(1)
        await AddRemoveElementsPage.clickBtnDelete(0)
        await AddRemoveElementsPage.validateElements(await AddRemoveElementsPage.btnDelete, 0)
    })
})
