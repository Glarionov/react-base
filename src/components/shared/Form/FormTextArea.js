import FormWrapperInline from "./FormWrappers/FormWrapperInline";
import FormTextAreaPart from "./FormUniqueParts/FormTextAreaPart";

export default function FormText(props) {
    return (
        <FormWrapperInline {...props}>
            <FormTextAreaPart />
        </FormWrapperInline>
    );
}
