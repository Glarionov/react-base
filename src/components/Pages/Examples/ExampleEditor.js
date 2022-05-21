import React, {useState, useEffect, useMemo} from 'react';
import BasicEditorWrapper from "../shared/BasicResourceElements/BasicEditorWrapper";
import ExampleEditorExtraLayer from "./ExampleEditorExtraLayer";

export default function ExampleEditor(props) {

    let formElements = [
        {type: 'text', name: 'text', text: 'text'},
        {type: 'number', name: 'number', text: 'number'},
        {type: 'textarea', name: 'textarea', text: 'textarea'},
        {type: 'date', name: 'date', text: 'date'},
    ];

    let validationRules = {
        text: {max: 6, min: 2},
        textarea: ['required'],
        number: {max: 3}
    };

    return (
        <BasicEditorWrapper
            {...props} formElements={formElements} validationRules={validationRules}
            ExtraLayer={ExampleEditorExtraLayer}
        />
    );
}
