const Page = require('../page');

class SecurePage extends Page {
    get flashAlert () {
        return $('#flash');
    }

    get btnLogout () {
        return $('//*[@href="/logout"]')
    }

    async logout() {
        await this.btnLogout.click()
    }
}

module.exports = new SecurePage()