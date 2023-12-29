import formsPage from "../../pageobjects/forms.page";
import { faker } from "@faker-js/faker";

describe("Input field", () => {
  const randWord = {
    words: faker.lorem.words(),
  };
  it("Should input any data, and show it", async () => {
    await formsPage.footer.btnForms.click();
    await formsPage.forms.inputField.addValue(randWord.words);
    await expect(formsPage.forms.inputResult).toHaveText(randWord.words);
  });
});
