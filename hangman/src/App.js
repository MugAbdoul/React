import React, { Component } from "react";
import "./assetes/App.css";
import Hangman from "./Hangman";

class App extends Component {
    render() {
        return (
            <section className="App">
                <div className="App_container">
                    <Hangman />
                </div>
            </section>
        );
    }
}

export default App;
