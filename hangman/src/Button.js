import React, { Component } from "react";
import "./assetes/button.css";
class Button extends Component {
    render() {
        return (
            <div className="Button" onClick={this.props.reset}>
                Reset
            </div>
        );
    }
}

export default Button;
