import formsPage from "../../pageobjects/forms.page";

describe("Dropdown menu functionality", () => {
  it("DP menu", async () => {
    await formsPage.footer.btnForms.click();
    await formsPage.forms.dropDownMenu.click();
    await formsPage.dropDownItems.WDIOAwesome.click()
    await formsPage.forms.dropDownMenu.click();
    await formsPage.dropDownItems.AppiumAwesome.click();
    await formsPage.forms.dropDownMenu.click();
    await formsPage.dropDownItems.AppAwesome.click();   
  });
});
