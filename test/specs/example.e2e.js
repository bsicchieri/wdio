const ProgressBarPage = require('../pageobjects/progressBar.page')
const AjaxPage = require('../pageobjects/ajax.page')
const ShadowDomPage = require('../pageobjects/shadowDom.page')
const { expect, assert } = require('chai')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário abaixo Navegue até a url - 
    http://uitestingplayground.com/progressbar 
    e crie um teste que clique no botão Iniciar 
    e aguarde a barra de progresso atingir 75%. 
    Em seguida, o teste deve clicar em Parar, 
    5% é o limite de tolerância aceitável para passar no teste. */

    it('should stop the progress bar at 75 percent', async () => {
        await ProgressBarPage.open()

        expect(browser).toHaveUrl('http://uitestingplayground.com/progressbar')
        expect(browser).toHaveUrlContaining('progressbar')
        expect(browser).toHaveTitle('Progress Bar')
        await ProgressBarPage.chargeProgressBar()


        await expect(SecurePage.flashAlert).toBeExisting()
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!')

    })

    /* Crie um teste para o cenário de bug abaixo Navegue até o URL - 
    http://uitestingplayground.com/ajax , 
    clique no botão mais de uma vez 
    e verifique se a mensagem (Dados carregados com a solicitação AJAX get) 
    não é exibida mais de uma vez */

    it('should check message when click button more than once', async () => {
        await AjaxPage.open()

        expect(browser).toHaveUrl('http://uitestingplayground.com/ajax') 
        assert.equal('http://uitestingplayground.com/ajax',browser.getUrl())

        await AjaxPage.checkAjaxData()

        expect(AjaxPage.labelText).toBeExisting()
        assert.equal(true,AjaxPage.labelText.isExisting())  

        expect(AjaxPage.labelText).toHaveTextContaining(
            'Data loaded with AJAX get request.',{ignoreCase:true})
        assert.include(AjaxPage.labelText.getText(), 'Data loaded with AJAX get request.')

  
        

    })

    /* Crie um teste para o cenário de bug abaixo - 
    o botão copiar não funciona, 
    escreva um teste que comprove Navegue até o URL - 
    http://uitestingplayground.com/shadowdom */

    it('should verify that the copy button does not work', async () => {
        await ShadowDomPage.open()

        expect(browser).toHaveUrl('http://uitestingplayground.com/shadowdom')
        await ShadowDomPage.checkShadowDom()


    })
})


