import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from '../../api/todo/AuthenticationService.js';

class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
    };

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.retrieveAllTodos(username).then((response) => {
      this.setState({
        todos: response.data,
      });
      console.log(response);
    });
  }

  updateTodoClicked(id) {
    console.log('update' + ' ' + id);
    this.props.history.push(`/todos/${id}`);
  }

  deleteTodoClicked(id) {
    let username = AuthenticationService.getLoggedInUserName();
    TodoDataService.deleteTodos(username, id)
  }

  refreshTodos() {
  }

  render() {
    return (
      <div>
        <h1>List Todos</h1>
        <div className='container'>
          <table className='table'>
            <thead>
              <tr>
                <th>description</th>
                <th>Is Completed?</th>
                <th>targetDate</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map((todo) => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.done.toString()}</td>
                  <td>{todo.targetDate.toString()}</td>
                  <td>
                    <button
                      className='btn btn-success'
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className='btn btn-warning'
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default ListTodoComponent;
