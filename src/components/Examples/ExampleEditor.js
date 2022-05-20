import React, { useState, useEffect } from 'react';
import AsyncSelect from 'react-select/async';
import RequestHelper from "../../Helpers/RequestHelper";

export default function ExampleEditor(props) {
    const [message, setMessage] = useState('');
    const [editingProps, setEditingProps] = useState({

    });

    useEffect(
        () => {
            save();
        },[props.isSaving]
    );

    /**
     * Validates data and sends save request
     */
    const save = () => {
        if (props.isSaving) {

            let errorMessages = [];

            //validate here
            if (errorMessages.length) {
                props.handleSavingFail(errorMessages.join(', '));
            } else {
                let newValues = editingProps;
                props.saveResource(newValues);
            }
        } else {
            setMessage('');
        }
    }

    return (
        <React.Fragment>

        </React.Fragment>
    );
}
