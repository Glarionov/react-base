import React, {useState, useEffect, useMemo} from 'react';
// import AsyncSelect from 'react-select/async';
// import RequestHelper from "../../../Helpers/RequestHelper";
// import FormText from "../../shared/Form/FormText";
// import FormTextArea from "../../shared/Form/FormTextArea";
// import FormDate from "../../shared/Form/FormDate";
// import FormCheckbox from "../../shared/Form/FormCheckbox";
// import FormElement from "../../shared/Form/FormElement";
// import FormBuilder from "../../shared/Form/FormBuilder";
import FormHelper from "../../../../Helpers/FormHelper";
import DefaultEditorExtraLayer from "./DefaultEditorExtraLayer";

export default function BasicEditorWrapper(props) {
    const [message, setMessage] = useState('');
    const [editingPropsMessages, setEditingPropsMessages] = useState({});
    const [editingProps, setEditingProps] = useState(FormHelper.getDefaultValues(props.formElements));

    useEffect(
        () => {
            save();
        },[props.isSaving]
    );

    const handleEdit = (event) => {
        let target = event.target;
        let value = target.value;
        let name = target.name;

        if (props.hasOwnProperty('validationRules')) {
            setEditingPropsMessages(
                prevState => {
                    return FormHelper.validateFormValue(prevState, props.validationRules, name, value);
                }
            );
        }

        setEditingProps(
            prevState => {
                return {...prevState, [name]: value}
            }
        )

        event.preventDefault();
    }


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

    let ExtraLayer = DefaultEditorExtraLayer;
    if (props.hasOwnProperty('ExtraLayer')) {
        ExtraLayer = props.ExtraLayer;
    }

    return (
        <ExtraLayer
            handleEdit={handleEdit.bind(this)}
            editingProps={editingProps} formElements={props.formElements}
            editingPropsMessages={editingPropsMessages}
            message={message}
            {...props}
        />
    );
}
