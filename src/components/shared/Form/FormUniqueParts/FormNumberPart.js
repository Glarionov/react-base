import React from "react";

export default function FormNumberPart(props) {
    return (
        <input type="number" className="form-control" name={props.name}
               value={props.value}
               onChange={props.handleEdit}
        />
    );
}
