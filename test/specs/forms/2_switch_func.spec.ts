import formsPage from "../../pageobjects/forms.page"

describe('Switch', () => {
    it('Switch should work', async () => {
     await formsPage.footer.btnForms.click();
     await formsPage.forms.switch.click();
     await expect(formsPage.forms.switchText).toHaveText("Click to turn the switch OFF");
     await formsPage.forms.switch.click();
     await expect(formsPage.forms.switchText).toHaveText("Click to turn the switch ON");
    })
})
