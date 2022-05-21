import React, { useState, useEffect } from 'react';
import FormElement from "./FormElement";

export default function FormBuilder(props) {
    return (
        <React.Fragment>
            {props.formElements && props.formElements.map((formElement, formElementIndex) => {
                return (
                    <FormElement key={formElementIndex} type={formElement.type} text={formElement.text}
                                 value={props.editingProps[formElement.name]} name={[formElement.name]}
                                 handleEdit={props.handleEdit}
                                 editingPropsMessages={props.editingPropsMessages[formElement.name] ?? {}}
                    />
                )
            })}
        </React.Fragment>
    );
}
