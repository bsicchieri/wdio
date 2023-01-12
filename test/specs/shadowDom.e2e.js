const ShadowDomPage = require('../pageobjects/shadowDom.page')
const ShadowDomData = require('../../data/shadowDom.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário de bug abaixo - 
    o botão copiar não funciona, 
    escreva um teste que comprove Navegue até o URL - 
    http://uitestingplayground.com/shadowdom */

    it('should verify that the copy button does not work', async () => {
        await ShadowDomPage.open(await ShadowDomData.url)
        await ShadowDomPage.validateUrl(await ShadowDomData.url)
        await ShadowDomPage.generateAndCopyGuid()
        let clipboardText = await ShadowDomPage.inputGuidGenerator.getValue()
        await ShadowDomPage.pasteClipboardValue()
        await assert.notEqual(clipboardText, await ShadowDomPage.inputGuidGenerator.getValue())
    })
})

