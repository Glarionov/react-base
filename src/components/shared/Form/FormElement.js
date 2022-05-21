import React, { useState, useEffect } from 'react';
import FormWrapperInline from "./FormWrappers/FormWrapperInline";
import FormTextPart from "./FormUniqueParts/FormTextPart";
import FormTypes from "./FormTypes";

export default function FormElement(props) {
    return (
        <FormWrapperInline {...props}>
            {FormTypes[props.type]}
        </FormWrapperInline>
    );
}
