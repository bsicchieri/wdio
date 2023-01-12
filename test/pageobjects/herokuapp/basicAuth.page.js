const Page = require('../page');

class BasicAuth extends Page {

    get successMessage () {
        return $('div.example p')
    }

    async open (username, password) {
        await super.open(`https://${username}:${password}@the-internet.herokuapp.com/basic_auth`)
    }

    async validateSuccessMessage (message) {
        await expect(await this.successMessage).toHaveTextContaining(message)
    }
}

module.exports = new BasicAuth()