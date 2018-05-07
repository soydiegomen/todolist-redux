import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

class AddTodo extends Component {

  render() {
    let input;
    let dispatch = this.props.dispatch;

    return (
      <div>
        <form
          onSubmit={function (e) {
            e.preventDefault()
            if (!input.value.trim()) {
              return
            }
            
            dispatch(addTodo(input.value));
            input.value = '';
          }}
        >
          <input ref= {function (node) { input = node; }} />
          <button type="submit">
            Add Todo
          </button>
        </form>
      </div>
    );
  }
}

export default connect()(AddTodo);
