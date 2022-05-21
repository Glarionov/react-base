export default function FormWrapperInline(props) {
    let Child = props.children;

    let ErrorMessage = <></>
    if (props.editingPropsMessages) {
        ErrorMessage =
            Object.entries(props.editingPropsMessages).map(
                ([messageIndex, message]) =>
                    (<div key={messageIndex} className="row mt-1">
                        <small className="offset-md-2 offset-lg-1 text-danger text-sm-start">
                            {message}
                        </small>
                    </div>)
        );
    }

    return (
        <div className="form-group row mt-3">
            <label className="col-12 col-md-2 col-lg-1">{props.text}</label>
            <div className="col-12 col-md-10 col-lg-9 col-xl-8">
                <Child {...props} />
            </div>
            {ErrorMessage}
        </div>
    );
}
