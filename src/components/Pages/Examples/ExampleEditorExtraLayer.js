import React, { useState, useEffect } from 'react';
import FormBuilder from "../../shared/Form/FormBuilder";

export default function ExampleEditorExtraLayer(props) {

    const [editingValue, setEditingValue] = useState('');

    const handleEdit = (event) => {
        let value = event.target.value;
        setEditingValue(value);
        props.handleEdit(event);
    }

    return (
        <React.Fragment>
            <FormBuilder
                {...props}
                handleEdit={handleEdit}
            />
            <div className="row mt-4 offset-2">
                Current editing value: {editingValue}
            </div>
            {props.message}
        </React.Fragment>
    );
}
