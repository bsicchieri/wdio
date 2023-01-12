const LoginPage = require('../../pageobjects/herokuapp/login.page')
const LoginData = require('../../../data/herokuapp/login.data')
const SecurePage = require('../../pageobjects/herokuapp/secure.page')
const SecureData = require('../../../data/herokuapp/secure.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    it('should allow access with correct creds', async () => {
        await LoginPage.open(await LoginData.url)
        await LoginPage.validateUrl(await LoginData.url)
        await LoginPage.login(await LoginData.username, await LoginData.password)
        await SecurePage.validateUrl(await SecureData.url)
        await expect(await SecurePage.flashAlert).toHaveTextContaining(await SecureData.successMessageLogin)
    })

    it('should logout the user', async () => {
        await SecurePage.validateUrl(await SecureData.url)
        await SecurePage.logout()
        await LoginPage.validateUrl(await LoginData.url)
        await expect(await LoginPage.flashAlert).toHaveTextContaining(await LoginData.successMessageLogout)
    })
})
