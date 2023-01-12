const Page = require('../page');

class LoginPage extends Page {
    get inputUsername () {
        return $('#username');
    }

    get inputPassword () {
        return $('#password');
    }

    get btnLogin() {
        return $('//*[@type="submit"]')
    }

    get flashAlert () {
        return $('#flash');
    }

    async login(username, password){
        await this.inputUsername.setValue(username)
        await this.inputPassword.setValue(password)
        await this.btnLogin.click()
    }
}

module.exports = new LoginPage()