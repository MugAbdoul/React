import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import List from "./List";
import Form from "./Form";
import "./Todos.css";

class Todos extends Component {
    /* static defaultProps = {
        todos: [
            { value: "Welcome to this App", id: uuidv4() },
            { value: "Second One", id: uuidv4() },
        ],
    }; */

    constructor(props) {
        super(props);
        this.state = {
            todos: [],
        };
    }

    setValue = (id, value) => {
        this.setState((curr) => {
            let newTodos = [...curr.todos];
            newTodos.map((el) => (el.value = el.id == id ? value : el.value));
            return { todos: newTodos };
        });
    };

    deleteTodo = (id) => {
        this.setState((prevState) => ({
            todos: [...prevState.todos.filter((el) => el.id !== id)],
        }));
    };

    addTodo = (value) => {
        this.setState((curr) => ({
            todos: [{ value: value, id: uuidv4() }, ...curr.todos],
        }));
    };

    render() {
        return (
            <div className="Todos">
                <div className="Todos-wr">
                    <h2>TODO LIST</h2>
                    <p>A simple React Todo simple app</p>
                </div>
                <List
                    todos={this.state.todos}
                    setValue={this.setValue}
                    del={this.deleteTodo}
                />
                <div className="Todos-wr">
                    <Form add={this.addTodo} />
                </div>
            </div>
        );
    }
}

export default Todos;
