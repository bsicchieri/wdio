const AjaxPage = require('../pageobjects/ajax.page')
const AjaxData = require('../../data/ajax.data')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário de bug abaixo Navegue até o URL - 
    http://uitestingplayground.com/ajax , 
    clique no botão mais de uma vez 
    e verifique se a mensagem (Dados carregados com a solicitação AJAX get) 
    não é exibida mais de uma vez */

    it('should check message when click button more than once', async () => {
        await AjaxPage.open(await AjaxData.url)
        await AjaxPage.validateUrl(await AjaxData.url)
        await AjaxPage.clickBtnAjaxRequestTwoTimes()
        await AjaxPage.waitForSuccessAjaxMessages()
        await expect(await AjaxPage.successMessages).toBeElementsArrayOfSize(2)
        await expect(await AjaxPage.successMessages).toBeDisplayed()
        await expect(await AjaxPage.successMessages).toHaveText(await AjaxData.ajaxMessage)
    })
})
