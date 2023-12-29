import Footer from "./footer";

class Forms extends Footer{
    forms = {
        get inputField() {
            return $('~text-input');
        },
        get inputResult() {
            return $('~input-text-result')
        },
        get switch() {
            return $('~switch')
        },
        get switchText() {
            return $('~switch-text')
        },
        get dropDownMenu() {
            return $('~Dropdown')
        },
        get buttonAct() {
            return $('~button-Active')
        },
        get buttonInAct() {
            return $('~button-Inactive')
        }
    };

    dropDownItems = {
        get WDIOAwesome() {
            return $('//android.widget.CheckedTextView[2]')
        },
        get AppiumAwesome() {
            return $('//android.widget.CheckedTextView[3]')
        },
        get AppAwesome() {
            return $('//android.widget.CheckedTextView[4]')
        },
        get textChoice() {
            return $('//android.view.ViewGroup[3]')
        }
    };

    messages = {
        get msgBtnAct() {
            return $('//android.widget.TextView[@resource-id="android:id/message"]')
        }
    };
}

export default new Forms();
