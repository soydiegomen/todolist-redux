import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodoList extends Component {
  //render({ todos, toggleTodo }) {
  render() {
    let todos = this.props.todos;
    let toggleTodo = this.props.toggleTodo;
    //console.log('this.props.toggleTodo', this.props.toggleTodo);
    return (
      <ul>
        {todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            onClick={() => toggleTodo(todo.id)}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList;
