export default function FormTextAreaPart(props) {
    return (
        <textarea className="form-control" name={props.name} value={props.value} onChange={props.handleEdit} />
    );
}
