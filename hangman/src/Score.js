import React, { Component } from "react";
import "./assetes/score.css";

class Score extends Component {
    render() {
        return (
            <div className="score">
                <div className="score_container">
                    <p>
                        You've made{" "}
                        <span
                            className={`score_highlight ${
                                this.props.wrong > 2 ? "bad" : ""
                            }`}
                        >
                            {this.props.wrong}/6
                        </span>{" "}
                        wrongs
                    </p>
                </div>
            </div>
        );
    }
}

export default Score;
