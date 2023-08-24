import React, { Component } from "react";
import Todo from "./Todo";

class List extends Component {
    render() {
        return (
            <div className="List">
                {this.props.todos.map((el) => {
                    const { value, id } = el;
                    return (
                        <Todo
                            key={id}
                            id={id}
                            setValue={this.props.setValue}
                            value={value}
                            del={this.props.del}
                        />
                    );
                })}
            </div>
        );
    }
}

export default List;
