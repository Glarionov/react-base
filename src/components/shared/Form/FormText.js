import FormWrapperInline from "./FormWrappers/FormWrapperInline";
import FormTextPart from "./FormUniqueParts/FormTextPart";

export default function FormText(props) {
    return (
        <FormWrapperInline {...props}>
            <FormTextPart />
        </FormWrapperInline>
    );
}
