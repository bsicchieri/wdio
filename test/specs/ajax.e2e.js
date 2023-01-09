const AjaxPage = require('../pageobjects/ajax.page')
const AjaxPageData = require('../../data/ajax.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário de bug abaixo Navegue até o URL - 
    http://uitestingplayground.com/ajax , 
    clique no botão mais de uma vez 
    e verifique se a mensagem (Dados carregados com a solicitação AJAX get) 
    não é exibida mais de uma vez */

    it('should check message when click button more than once', async () => {
        await AjaxPage.open(await AjaxPageData.path)
        await assert.equal(AjaxPageData.url, await browser.getUrl())
        await AjaxPage.clickAjaxRequestThreeTimes()
        await assert.equal('Data loaded with AJAX get request.', await AjaxPage.getDataAjaxMessageText(1), 'Message displayed for the first time')
        await assert.equal('Data loaded with AJAX get request.', await AjaxPage.getDataAjaxMessageText(2), 'Message displayed for the second time')
        await assert.equal('Data loaded with AJAX get request.', await AjaxPage.getDataAjaxMessageText(3), 'Message displayed for the third time')
    })
})
