import FormTextPart from "./FormUniqueParts/FormTextPart";
import FormTextAreaPart from "./FormUniqueParts/FormTextAreaPart";
import FormDatePart from "./FormUniqueParts/FormDatePart";
import FormCheckboxPart from "./FormUniqueParts/FormCheckboxPart";
import FormNumberPart from "./FormUniqueParts/FormNumberPart";
//
// const TEXT_FORM_ELEMENT = 'TEXT_FORM_ELEMENT';
// const TEXTAREA_FORM_ELEMENT = 'TEXTAREA_FORM_ELEMENT';
// const DATE_FORM_ELEMENT = 'TEXT_FORM_ELEMENT';
// const CHECKBOX_FORM_ELEMENT = 'TEXT_FORM_ELEMENT';
//
// let FormTypes = {
//     [TEXT_FORM_ELEMENT]: FormTextPart,
//     [TEXT_FORM_ELEMENT]: FormTextPart,
//     [TEXT_FORM_ELEMENT]: FormTextPart,
//     [TEXT_FORM_ELEMENT]: FormTextPart,
// }

export default class FormTypes {
    static text = FormTextPart;
    static textarea = FormTextAreaPart;
    static date = FormDatePart;
    static checkbox = FormCheckboxPart;
    static number = FormNumberPart;
}
