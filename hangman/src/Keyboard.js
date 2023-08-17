import React, { Component } from "react";
import Key from "./Key";
import "./assetes/keyboard.css";

class Keyboard extends Component {
    static defaultProps = {
        row1: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        row2: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        row3: ["Z", "X", "C", "V", "B", "N", "M"],
    };

    constructor(props) {
        super(props);
        this.buttonClickedHandle = this.buttonClickedHandle.bind(this);
    }

    buttonClickedHandle(e) {
        this.props.setNewKey(e.target.textContent);
    }

    render() {
        return (
            <div className="keyboard">
                <div className="row">
                    {this.props.row1.map((l) => (
                        <Key
                            key={l}
                            value={l}
                            disable={
                                this.props.usedKey.includes(l) ||
                                this.props.isOver
                            }
                            handleButton={this.buttonClickedHandle}
                        />
                    ))}
                </div>
                <div className="row">
                    {this.props.row2.map((l) => (
                        <Key
                            key={l}
                            value={l}
                            disable={
                                this.props.usedKey.includes(l) ||
                                this.props.isOver
                            }
                            handleButton={this.buttonClickedHandle}
                        />
                    ))}
                </div>
                <div className="row">
                    {this.props.row3.map((l) => (
                        <Key
                            key={l}
                            value={l}
                            disable={
                                this.props.usedKey.includes(l) ||
                                this.props.isOver
                            }
                            handleButton={this.buttonClickedHandle}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Keyboard;
