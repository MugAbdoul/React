import React, { Component } from "react";
import "./Todos.css";
class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
            status: "done",
        };
        this.changeStatus = this.changeStatus.bind(this);
    }

    changeStatus() {
        const status = this.state.status == "done" ? "edit" : "done";
        this.setState({ status: status });
    }

    handle = (evt) => {
        this.setState((curr) => ({
            ...curr,
            value: evt.target.value,
        }));
    };

    setValue = () => {
        this.props.setValue(this.props.id, this.state.value);
        this.changeStatus();
    };

    del = () => {
        this.props.del(this.props.id);
        this.changeStatus();
    };

    render() {
        return (
            <div className={`Todo ${this.state.status}`}>
                <input value={this.state.value} onChange={this.handle} />
                <div className="Todo-buttons">
                    {this.state.status == "done" && (
                        <>
                            <button
                                className="Todo-button"
                                onClick={this.changeStatus}
                            >
                                <i className="fa-solid fa-pen"></i>
                            </button>
                            <button
                                className="Todo-button red"
                                onClick={this.del}
                            >
                                <i className="fa-solid fa-trash"></i>
                            </button>
                        </>
                    )}
                    {this.state.status == "edit" && (
                        <button
                            className="Todo-button white"
                            onClick={this.setValue}
                        >
                            <i className="fa-regular fa-floppy-disk"></i>
                        </button>
                    )}
                </div>
            </div>
        );
    }
}

export default Todo;
