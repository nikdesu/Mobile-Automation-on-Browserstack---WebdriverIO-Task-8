import LoginSignUpPage from "./LoginSignUp.page";

class SignUp extends LoginSignUpPage {
  inputs = {
    get emailInput() {
      return $("~input-email");
    },
    get pwdInput() {
      return $("~input-password");
    },
    get pwdRepeat() {
      return $("~input-repeat-password");
    },
  };
  messages = {
    get signUpSuccess() {
      return $('//android.widget.TextView[@resource-id="android:id/alertTitle"]');
    },
  };
  buttons = {
    get signUpBtn() {
      return $("~button-SIGN UP");
    },
  };
}
export default new SignUp();
