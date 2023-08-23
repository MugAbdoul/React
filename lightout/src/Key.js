import React, { Component } from "react";
import "./Lightout.css";

class Key extends Component {
    static defaultProps = {
        status: "off",
    };

    constructor(props) {
        super(props);
        this.BtnHandler = this.BtnHandler.bind(this);
    }

    BtnHandler() {
        const { index, row, col } = this.props;
        this.props.Handler(index, row, col);
    }

    render() {
        const { status } = this.props;
        return (
            <button
                className={`Key ${status ? "on" : "off"}`}
                onClick={this.BtnHandler}
            ></button>
        );
    }
}

export default Key;
