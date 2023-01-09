const ShadowDomPage = require('../pageobjects/shadowDom.page')
const { assert } = require('chai')
const { Key } = require('webdriverio')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário de bug abaixo - 
    o botão copiar não funciona, 
    escreva um teste que comprove Navegue até o URL - 
    http://uitestingplayground.com/shadowdom */

    it('should verify that the copy button does not work', async () => {
        await ShadowDomPage.open()

        //expect(browser).toHaveUrl('http://uitestingplayground.com/shadowdom')
        await ShadowDomPage.generateAndCopyGuid()
        let clipboardText = await ShadowDomPage.inputGuidGenerator.getValue()
        await ShadowDomPage.inputGuidGenerator.clearValue()
        await ShadowDomPage.inputGuidGenerator.click()
        await browser.keys(['Control', 'v'])
        await assert.notEqual(clipboardText, await ShadowDomPage.inputGuidGenerator.getValue())
    })
})

