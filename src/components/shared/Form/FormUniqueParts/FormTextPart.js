import React from "react";

export default function FormTextPart(props) {
    return (
        <input type="text" className="form-control" name={props.name}
               value={props.value}
               onChange={props.handleEdit}
        />
    );
}
