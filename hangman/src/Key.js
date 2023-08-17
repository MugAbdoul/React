import React, { Component } from "react";
import "./assetes/keyboard.css";
class Key extends Component {
    render() {
        return (
            <button
                className={`Key${this.props.disable ? " disable" : ""}`}
                disabled={this.props.disable}
                onClick={this.props.handleButton}
            >
                {this.props.value}
            </button>
        );
    }
}

export default Key;
