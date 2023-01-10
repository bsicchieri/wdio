const LoginPage = require('../pageobjects/login.page')
const LoginData = require('../../data/login.data')
const SecurePage = require('../pageobjects/secure.page')
const SecureData = require('../../data/secure.data')
const { assert } = require('chai')

describe('Wdio IU code challenge', () => {
    it('should allow access with correct creds', async () => {
        await LoginPage.open(await LoginData.path)
        await assert.equal(await LoginData.url, await browser.getUrl())
        await LoginPage.login(await LoginData.username, await LoginData.password)
        await assert.equal(await SecureData.url, await browser.getUrl())
        await assert.equal(await SecureData.successMessageLogin, await SecurePage.flashAlert.getText())
    })

    it('should logout the user', async () => {
        await assert.equal(await SecureData.url, await browser.getUrl())
        await SecurePage.logout()
        await assert.equal(await LoginData.url, await browser.getUrl())
        await assert.equal(await LoginData.successMessageLogout, await LoginPage.flashAlert.getText())
    })
})
