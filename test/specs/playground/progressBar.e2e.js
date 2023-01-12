const ProgressBarPage = require('../pageobjects/playground/progressBar.page')
const ProgressBarData = require('../../../data/playground/progressBar.data')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário abaixo Navegue até a url - 
    http://uitestingplayground.com/progressbar 
    e crie um teste que clique no botão Iniciar 
    e aguarde a barra de progresso atingir 75%. 
    Em seguida, o teste deve clicar em Parar, 
    5% é o limite de tolerância aceitável para passar no teste. */

    it('should stop the progress bar at 75 percent', async () => {
        await ProgressBarPage.open(await ProgressBarData.url)
        await ProgressBarPage.validateUrl(await ProgressBarData.url)
        await ProgressBarPage.clickOnStartButton()
        await ProgressBarPage.waitForPercentage(await ProgressBarData.percent)
        await ProgressBarPage.clickOnStopButton()
        await ProgressBarPage.validateFinalPercentage(await ProgressBarPage.progressBar.getText(), await ProgressBarData.minPercentNumber, await ProgressBarData.maxPercentNumber)
        // await expect(await ProgressBarPage.parsePercentage(await ProgressBarPage.progressBar.getText())) >= (await ProgressBarData.minPercentNumber)
        // await expect(await ProgressBarPage.parsePercentage(await ProgressBarPage.progressBar.getText())) <= (await ProgressBarData.maxPercentNumber)
    })
})