import React from "react"
import Main from "../Main/Main";
import TourList from "../TourData/TourList";
import "./App.css"

const App = () => {
    return (
        <React.Fragment>
            <center>
                <Main />
                <TourList />
            </center>
        </React.Fragment>
    );
}

export default App