import FormWrapperInline from "./FormWrappers/FormWrapperInline";
import FormCheckboxPart from "./FormUniqueParts/FormCheckboxPart";

export default function FormCheckbox(props) {
    return (
        <FormWrapperInline {...props}>
            <FormCheckboxPart />
        </FormWrapperInline>
    );
}
