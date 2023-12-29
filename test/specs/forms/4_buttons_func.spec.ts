import formsPage from "../../pageobjects/forms.page"

describe('Buttons functionality', () => {
    it('Button should do somthing when user press it', async () => {
     await formsPage.footer.btnForms.click();
     await formsPage.forms.buttonAct.click();
     await expect(formsPage.messages.msgBtnAct).toHaveText('This button is active')
    })
})
