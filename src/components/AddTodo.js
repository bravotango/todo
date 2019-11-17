import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <div class="input-group mb-3">
          <input
            required
            type="text"
            name="title"
            placeholder="Add Todo..."
            style={{ flex: "1", padding: "12px 20px", boxSizing: "border-box" }}
            value={this.state.title}
            onChange={this.onChange}
          ></input>
          <div class="input-group-append">
            <input
              type="submit"
              value="Submit"
              className="btn btn-outline-secondary"
            ></input>
          </div>
        </div>
      </form>
    );
  }
}
//PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default AddTodo;
