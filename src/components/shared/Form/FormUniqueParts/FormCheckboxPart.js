export default function FormCheckboxPart(props) {
    return (
        <input type="checkbox" className="form-check-input" name={props.name} value={props.value} onChange={props.handleEdit} />
    );
}
