const ShadowDomPage = require('../pageobjects/shadowDom.page')
const ShadowDomData = require('../../data/shadowDom.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário de bug abaixo - 
    o botão copiar não funciona, 
    escreva um teste que comprove Navegue até o URL - 
    http://uitestingplayground.com/shadowdom */

    it('should verify that the copy button does not work', async () => {
        await ShadowDomPage.open(await ShadowDomData.path)
        await assert.equal(await ShadowDomData.url, await browser.getUrl())
        await ShadowDomPage.generateAndCopyGuid()
        let clipboardText = await ShadowDomPage.inputGuidGenerator.getValue()
        await ShadowDomPage.inputGuidGenerator.clearValue()
        await ShadowDomPage.inputGuidGenerator.click()
        await browser.keys(['Control', 'v'])
        await assert.notEqual(clipboardText, await ShadowDomPage.inputGuidGenerator.getValue())
    })
})

