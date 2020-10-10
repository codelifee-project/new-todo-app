import React, { Component } from 'react';
import TodoDataService from '../../api/todo/TodoDataService.js';
import AuthenticationService from './AuthenticationService.js';

class ListTodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        /*  {
          id: 1,
          description: 'Learn to Dance',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 2,
          description: 'Become an Expert at React',
          done: false,
          targetDate: new Date(),
        },
        {
          id: 3,
          description: 'Visit India',
          done: false,
          targetDate: new Date(),
        }, */
      ],
    };
<<<<<<< HEAD
=======

    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
>>>>>>> e5c2f63... Created Todo Component and Handle Routing
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
    // let username = AuthenticationService.getLoggedInUserName();
    // // console.log(id + ' ' + username);
    // TodoDataService.deleteTodos(username, id).then((response) => {
    //   this.setState({ message: `Delete of todo ${id} Successful` });
    //   this.refreshTodos();
    // });
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
<<<<<<< HEAD
=======
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
>>>>>>> e5c2f63... Created Todo Component and Handle Routing
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
