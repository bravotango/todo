import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";
import About from "./components/pages/About";

import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?limit=25")
      .then(res => this.setState({ todos: res.data }));
  }
  //Delete Todo
  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  //Add Todo
  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  //Toggle Complete
  toggleComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
    console.log(id);
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header></Header>
            <Route
              exact
              path="/"
              render={props => (
                <React.Fragment>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    <div style={{ flexGrow: "1" }}>
                      <AddTodo addTodo={this.addTodo}></AddTodo>
                    </div>
                    <div style={{ marginTop: "20px", flexGrow: "1" }}>
                      <Todos
                        delTodo={this.delTodo}
                        todos={this.state.todos}
                        toggleComplete={this.toggleComplete}
                      ></Todos>
                    </div>
                  </div>
                </React.Fragment>
              )}
            />

            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
