import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './HeadercComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
import LoginComponent from './LoginComponent';
import ListTodoComponent from './ListTodosComponent';
import FooterComponent from './FooterComponent';
import LogoutComponent from './LogoutComponent';
import WelcomeComponent from './WelcomeComponent';
import ErrorComponent from './ErrorComponent';
import TodoComponent from './TodoComponent';
import AuthenticationService from '../../api/todo/AuthenticationService';

class TodoApp extends Component {
  render() {
    return (
      <div className='TodoApp'>
        <Router>
          <HeaderComponent />
          <Switch>
            {!AuthenticationService.isUserLoggedIn && (
              <Route path='/' exact component={LoginComponent} />
            )}
            {!AuthenticationService.isUserLoggedIn && (
              <Route path='/login' component={LoginComponent} />
            )}
            <AuthenticatedRoute
              path='/welcome/:name'
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path='/todos/:id' component={TodoComponent} />
            <AuthenticatedRoute path='/todos' component={ListTodoComponent} />
            <AuthenticatedRoute path='/logout' component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
      </div>
    );
  }
}

export default TodoApp;
