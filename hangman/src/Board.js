import React, { Component } from "react";
import "./assetes/board.css";
class Board extends Component {
    render() {
        return (
            <div className={`Board${this.props.wrong == 6 ? " animate" : ""}`}>
                <div className="tree">
                    <div className="tree_body"></div>
                    <div className="tree_bottom"></div>
                    <div className="tree_right"></div>
                    <div className="tree_tie"></div>
                </div>
                {this.props.wrong >= 1 && <div className="pr_head"></div>}
                {this.props.wrong >= 2 && <div className="pr_body"></div>}
                {this.props.wrong >= 3 && <div className="pr_la"></div>}
                {this.props.wrong >= 4 && <div className="pr_ra"></div>}
                {this.props.wrong >= 5 && <div className="pr_ll"></div>}
                {this.props.wrong >= 6 && <div className="pr_rl"></div>}
            </div>
        );
    }
}

export default Board;
