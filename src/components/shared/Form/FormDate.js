import FormWrapperInline from "./FormWrappers/FormWrapperInline";
import FormDatePart from "./FormUniqueParts/FormDatePart";

export default function FormDate(props) {
    return (
        <FormWrapperInline {...props}>
            <FormDatePart />
        </FormWrapperInline>
    );
}
