import React, { Component } from "react";
import Todo from "./Todo";
class Form extends Component {
    constructor(props) {
        super();
        this.state = {
            value: "",
        };
    }
    change = (evt) => {
        this.setState({ value: evt.target.value });
    };

    handle = (evt) => {
        evt.preventDefault();
        if (this.state.value.length !== 0) {
            this.props.add(this.state.value);
        }
        this.setState({ value: "" });
    };

    render() {
        return (
            <form className="Form" onSubmit={this.handle}>
                <label htmlFor="todo">New Todo</label>
                <div className="form-control">
                    <input
                        id="todo"
                        type="text"
                        name="todo"
                        value={this.state.value}
                        placeholder="New Todo"
                        onChange={this.change}
                    />
                    <input type="submit" value={"ADD TODO"} />
                </div>
            </form>
        );
    }
}

export default Form;
