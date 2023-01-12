const BasicAuthPage = require('../../pageobjects/herokuapp/basicAuth.page')
const BasicAuthData = require('../../../data/herokuapp/basicAuth.data')

describe('Wdio IU code challenge', () => {
    it('should allow login with correct creds', async () => {
        await BasicAuthPage.open(await BasicAuthData.username, await BasicAuthData.password)
        await BasicAuthPage.validateUrl(await BasicAuthData.url)
        await BasicAuthPage.validateSuccessMessage(await BasicAuthData.successMessage)
        // await expect(await this.successMessage).toHaveTextContaining(await BasicAuthData.successMessage)
    })
})