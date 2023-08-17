import React, { Component } from "react";
import Board from "./Board";
import Score from "./Score";
import Keyboard from "./Keyboard";
import Inputs from "./Inputs";
import "./assetes/hangman.css";
import Button from "./Button";
import data from "./data";

class Hangman extends Component {
    static defaultProps = {
        data: data,
    };

    constructor(props) {
        super(props);
        this.state = {
            word: [],
            wrong: 0,
            right: 0,
            inputsArr: [],
            usedKey: [],
            isOVer: false,
        };

        this.setNewKey = this.setNewKey.bind(this);
        this.reset = this.reset.bind(this);
    }

    componentDidMount() {
        this.RandWord();
    }

    RandWord() {
        const randomIndex = Math.floor(Math.random() * this.props.data.length);
        const randomWord = this.props.data[randomIndex];
        const randomWordLen = randomWord.length;
        const newArray = new Array(randomWordLen).fill("_");
        this.setState({ word: randomWord.split(""), inputsArr: newArray });
    }

    reset() {
        this.setState({
            word: [],
            wrong: 0,
            right: 0,
            inputsArr: [],
            usedKey: [],
            isOVer: false,
        });
        this.RandWord();
    }

    setNewKey(key) {
        this.setState((currState) => {
            const index = currState.word.indexOf(key);
            if (index !== -1) {
                let newArr = currState.inputsArr;
                newArr[index] = key;
                return {
                    inputsArr: newArr,
                    usedKey: [...currState.usedKey, key],
                    right: currState.right + 1,
                    isOVer:
                        currState.right == currState.word.length - 1
                            ? true
                            : false,
                };
            } else {
                if (currState.wrong == 5) {
                    return { wrong: 6, isOVer: true };
                } else {
                    return { wrong: currState.wrong + 1 };
                }
            }
        });
    }

    render() {
        return (
            <div className="hangman">
                <Score wrong={this.state.wrong} reset={this.reset} />
                <Board wrong={this.state.wrong} />
                <Inputs word={this.state.inputsArr} />
                <Keyboard
                    usedKey={this.state.usedKey}
                    setNewKey={this.setNewKey}
                    isOver={this.state.isOVer}
                />
                <Button reset={this.reset} />
            </div>
        );
    }
}

export default Hangman;
