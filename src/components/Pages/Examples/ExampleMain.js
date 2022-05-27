import React from 'react';
import BasicResourceMain from "../shared/BasicResource/BasicResourceMain";

import ExampleSingle from "./ExampleSingle";
import ExampleEditor from "./ExampleEditor";
import ExampleEditorExtraLayer from "./ExampleEditorExtraLayer";
import {formElements, validationRules} from "./ExampleFormElements";

export default function ExampleMain() {

    /**
     * Remove "disableInitialLoad" property in you real components
     */

    return (
        <BasicResourceMain
            ElementSingle={ExampleSingle}
            // ElementEditor={ExampleEditor}
            EditorExtraLayer={ExampleEditorExtraLayer}
            formElements={formElements}
            validationRules={validationRules}
            name="example"

            disableInitialLoad={true}
        />
    );
}
