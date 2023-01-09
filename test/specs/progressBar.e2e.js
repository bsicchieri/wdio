const ProgressBarPage = require('../pageobjects/progressBar.page')

describe('Wdio IU code challenge', () => {
    /* Crie um teste para o cenário abaixo Navegue até a url - 
    http://uitestingplayground.com/progressbar 
    e crie um teste que clique no botão Iniciar 
    e aguarde a barra de progresso atingir 75%. 
    Em seguida, o teste deve clicar em Parar, 
    5% é o limite de tolerância aceitável para passar no teste. */

    it('should stop the progress bar at 75 percent', async () => {
        await ProgressBarPage.open()
        await ProgressBarPage.btnStart.click()
        await ProgressBarPage.progress.waitUntil(async function () {
            return (await this.getText()) === '75%'
        }, {
            timeout: 50000
        })
        await ProgressBarPage.btnStop.click()
    })
})