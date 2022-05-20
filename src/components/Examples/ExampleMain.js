import React from 'react';
import BasicResourceComponent from "../BasicResourceElements/BasicResourceComponent";

import ExampleSingle from "./ExampleSingle";
import ExampleEditor from "./ExampleEditor";

export default function ExampleMain() {
    return (
        <BasicResourceComponent
            ElementSingle={ExampleSingle}
            ElementEditor={ExampleEditor}
            name="example"
        />
    );
}
