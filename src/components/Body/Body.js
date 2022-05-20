import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import ExampleMain from "../Examples/ExampleMain";

export default function Body(props) {

    let routes = {
        'example': {path: 'example', component: ExampleMain},
    }

    return (
        <Router>
            <Routes>
                {Object.entries(routes).map(
                    ([routeKey, route]) => {
                        let Component = route.component;
                        return <Route key={routeKey} path={"/" + route.path} element={<Component {...props} />}/>
                    })
                }
            </Routes>
        </Router>
    );
}
