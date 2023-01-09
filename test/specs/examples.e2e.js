

describe('examples', () => {
    it.skip('examples', async () => {
        /* ShadowDom */
        
        const button = await $('>>>.dropdown-item:not([hidden])')
        console.log(await button.getText()) // outputs: "Open downloads folder" 
        
        /* Selector Chaining */
        await $('.row .entry:nth-child(2)').$('button*=Add').click()
    })
})



