import React, {useRef} from "react";

export default function FormFilePart(props) {
    let fileInput = useRef();

    const handleEdit = () => {
        let file = fileInput.current.files[0];
        let name = file.name;
        props.handleEdit(props.name, file);
    }

    return (
        <input type="file" ref={fileInput} className="form-control" name={props.name}
               onChange={handleEdit}
        />
    );
}
