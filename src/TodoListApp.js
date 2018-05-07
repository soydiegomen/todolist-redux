import React, { Component } from 'react';
import firebase from 'firebase';

import TodoList from './components/TodoList';
import Link from './components/Link';
import Footer from './components/Footer';
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'
import './App.css';

class TodoListApp extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pseudogram - Aplicación de prueba</h1>
        </header>
        <div className="App-intro">
          <AddTodo />
          <VisibleTodoList />
          <Footer />
        </div>
      </div>
    );
  }
}

export default TodoListApp;
