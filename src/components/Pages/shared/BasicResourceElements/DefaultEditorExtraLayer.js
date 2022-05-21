import React, { useState, useEffect } from 'react';
import FormBuilder from "../../../shared/Form/FormBuilder";

export default function DefaultEditorExtraLayer(props) {
    return (
        <React.Fragment>
            <FormBuilder
                {...props}
            />
            {props.message}
        </React.Fragment>
    );
}
