import Footer from './footer';

export default class LoginSignUpPage extends Footer {
    tabs = {
        get btnLogin() {
            return $('~button-login-container');
        },
        get btnSignUp() {
            return $('~button-sign-up-container');
        },
    };
}