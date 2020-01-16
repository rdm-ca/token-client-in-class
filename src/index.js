import React from "react";
import { render } from "react-dom";

import Login from './login';
import DisplayPage from './display-page';

const App = () => (
    <div>
        <div>
            <Login />
        </div>
        <p></p>
        <hr style={{borderColor: "red", backgroundColor: 'red'}}/>
        <p></p>
        <div>
            <DisplayPage />
        </div>
    </div>
);

render(<App />, document.getElementById("root"));
