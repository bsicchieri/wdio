const ProgressBarPage = require('../pageobjects/progressBar.page')
const ProgressBarData = require('../../data/progressBar.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário abaixo Navegue até a url - 
    http://uitestingplayground.com/progressbar 
    e crie um teste que clique no botão Iniciar 
    e aguarde a barra de progresso atingir 75%. 
    Em seguida, o teste deve clicar em Parar, 
    5% é o limite de tolerância aceitável para passar no teste. */

    it('should stop the progress bar at 75 percent', async () => {
        await ProgressBarPage.open(await ProgressBarData.path)
        await assert.equal(await ProgressBarData.url, await browser.getUrl())
        await ProgressBarPage.btnStart.click()
        await ProgressBarPage.waitForPercentage(await ProgressBarData.percent)
        await ProgressBarPage.btnStop.click()
    })
})