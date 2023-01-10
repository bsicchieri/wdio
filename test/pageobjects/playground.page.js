module.exports = class PlaygroundPage {
    /*
    constructor() {
        this.title = 'My Page'
    }
    */

    /*
        async open (path) {
        await browser.url(`http://uitestingplayground.com/${path}`)
    }
    */

    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`http://uitestingplayground.com/${path}`)
    }
}
