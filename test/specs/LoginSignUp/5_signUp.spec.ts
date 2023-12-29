import signUpPage from "../../pageobjects/signUp.page";
import { faker } from "@faker-js/faker";

describe("Valid sign up", () => {
  const randCreds = {
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
  it("Sign up", async () => {
    await signUpPage.footer.btnLogin.click();
    await signUpPage.tabs.btnSignUp.click();
    await signUpPage.inputs.emailInput.addValue(randCreds.email);
    await signUpPage.inputs.pwdInput.addValue(randCreds.password);
    await signUpPage.inputs.pwdRepeat.addValue(randCreds.password);
    await signUpPage.buttons.signUpBtn.click();
    await expect(signUpPage.messages.signUpSuccess).toHaveText("Signed Up!");
  });
});
