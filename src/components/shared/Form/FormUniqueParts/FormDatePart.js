export default function FormDatePart(props) {
    return (
        <input type="date" className="form-control" name={props.name} value={props.value} onChange={props.handleEdit} />
    );
}
