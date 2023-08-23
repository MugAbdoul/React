import React, { Component } from "react";
import Key from "./Key";
import Gformat from "./GFormat";
import "./Lightout.css";

class Lightout extends Component {
    constructor(props) {
        super(props);
        this.state = { keys: Gformat, turnedOn: [0, 8, 17, 24], isOver: false };
        this.Handler = this.Handler.bind(this);
        this.reset = this.reset.bind(this);
    }

    getLeft(row, col) {
        return col === 0 ? null : this.getIndex([row, col - 1]);
    }

    getRight(row, col) {
        return col === 4 ? null : this.getIndex([row, col + 1]);
    }

    getUp(row, col) {
        return row === 0 ? null : this.getIndex([row - 1, col]);
    }

    getBottom(row, col) {
        return row === 4 ? null : this.getIndex([row + 1, col]);
    }

    getIndex(arr) {
        return arr[0] * 5 + arr[1];
    }

    toogle(index) {
        this.setState((prevState) => {
            const keys = prevState.keys.map((key, i) => {
                if (i === index) {
                    return [key[0], key[1], !key[2]];
                }
                return key;
            });

            const newArray = prevState.turnedOn.includes(index)
                ? prevState.turnedOn.filter((item) => item !== index)
                : [...prevState.turnedOn, index];

            return { keys: keys, turnedOn: newArray };
        });
    }

    Handler(index, row, col) {
        this.toogle(index);
        if (this.getLeft(row, col) != null) {
            this.toogle(this.getLeft(row, col));
        }
        if (this.getUp(row, col) != null) {
            this.toogle(this.getUp(row, col));
        }
        if (this.getRight(row, col) != null) {
            this.toogle(this.getRight(row, col));
        }
        if (this.getBottom(row, col) != null) {
            this.toogle(this.getBottom(row, col));
        }

        if (this.state.turnedOn.length === 0) {
            this.setState({ isOver: true });
        }
    }

    reset() {
        this.setState({
            keys: Gformat,
            turnedOn: [0, 8, 17, 24],
            isOver: false,
        });
    }

    render() {
        return (
            <div className="Lightout">
                {this.state.isOver && <p className="isOver">Game Is Over</p>}
                {this.state.isOver && (
                    <button onClick={this.reset}>Reset</button>
                )}
                {!this.state.isOver &&
                    this.state.keys.map((key, i) => (
                        <Key
                            row={key[0]}
                            col={key[1]}
                            status={key[2]}
                            key={`${key[0]}-${key[1]}`}
                            index={i}
                            Handler={this.Handler}
                        />
                    ))}
            </div>
        );
    }
}

export default Lightout;
