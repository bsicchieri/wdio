const HerokuappPage = require('./herokuapp.page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends HerokuappPage {
    /**
     * define selectors using getter methods
     */
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

module.exports = new SecurePage();