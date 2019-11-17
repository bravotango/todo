import React, { Component } from "react";
import "./TodoItem.css";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      display: "flex",
      justifyContent: "space-between",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title, completed } = this.props.todo;
    return (
      <div style={this.getStyle()} className="todoItem">
        <div>
          <input
            className="checkmark"
            type="checkbox"
            checked={completed}
            onChange={this.props.toggleComplete.bind(this, id)}
          />
        </div>
        <div style={{ flexGrow: "1" }}>{title}</div>
        <div>
          <div
            onClick={this.props.delTodo.bind(this, id)}
            style={btnStyle}
            className="badge m-2 badge-danger"
          >
            x
          </div>
        </div>
      </div>
    );
  }
}

//PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  toggleComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px 8px",
  cursor: "pointer"
};
export default TodoItem;
