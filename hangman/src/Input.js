import React, { Component } from "react";
import "./assetes/input.css";
class Input extends Component {
    render() {
        return <div className="input">{this.props.value.toUpperCase()}</div>;
    }
}

export default Input;
