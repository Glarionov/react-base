import React, {useRef} from "react";
import Select from 'react-select'

export default function FormSelectPart(props) {
    return (
        <Select name={props.name} onChange={props.handleEdit} options={props.options} />
    );
}
