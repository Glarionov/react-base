import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import routes from "./routes";

export default function Body(props) {
    return (
        <main className="container">
            <Router>
                <Routes>
                    {Object.entries(routes).map(
                        ([routeKey, route]) => {
                            let Component = route[1];
                            return <Route key={routeKey} path={"/" + route[0]} element={<Component {...props} />}/>
                        })
                    }
                </Routes>
            </Router>
        </main>
    );
}
