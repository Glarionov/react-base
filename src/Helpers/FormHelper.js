export default class FormHelper {
    static getDefaultValue(type) {
        switch (type) {
            case 'checkbox': return false;
            default: return '';
        }
    }

    static getDefaultValues(elements) {
        let result = {};
        for (let elementsKey in elements) {
            let element = elements[elementsKey];
            result[element.name] = FormHelper.getDefaultValue(element.type);
        }
        return result;
    }

    static validateFormValue (currentMessages = {}, validationRules,  name, value) {
        if (validationRules.hasOwnProperty(name)) {
            if (!currentMessages.hasOwnProperty(name)) {
                currentMessages[name] = {};
            }

            let currentValidationRules = validationRules[name];
            for (const ruleName in currentValidationRules) {
                let ruleValue = currentValidationRules[ruleName];

                let newErrorText = '';

                switch (ruleName) {
                    case 'max':
                        if (value.length > ruleValue) {
                            newErrorText = `${ruleValue} characters maximum`;
                        }
                        break;
                    case 'min':
                        if (value.length < ruleValue) {
                            newErrorText = `${ruleValue} characters minimum`;
                        }
                        break;
                }

                if (newErrorText) {
                    currentMessages[name][ruleName] = newErrorText;
                } else {
                    delete currentMessages[name][ruleName];
                }
            }
        }

        return currentMessages;
    }
}