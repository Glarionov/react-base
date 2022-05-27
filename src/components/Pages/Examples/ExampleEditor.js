import React, {useState, useEffect, useMemo} from 'react';
import BasicEditorWrapper from "../shared/BasicResource/BasicEditorWrapper";

export default function ExampleEditor(props) {
    /**
     * This class actually does nothing more than just calling BasicEditorWrapper
     * It's here just for a stub, as you can add here you own editor's logic
     */
    return (
        <BasicEditorWrapper
            {...props}
        />
    );
}
