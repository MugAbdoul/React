import React, { Component } from "react";
import Input from "./Input";
import "./assetes/input.css";

class Inputs extends Component {
    render() {
        return (
            <div className="inputs">
                {this.props.word.map((l, index) => (
                    <Input key={index} value={l} />
                ))}
            </div>
        );
    }
}

export default Inputs;
