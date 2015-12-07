import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/actions';

class App extends Component {
    render() {
        return (
            <div className='container'>
                <h1>My Todo List</h1>
                <ul>
                    {this.props.todos.map((todo, i) =>
                        <li key={i}
                            style={{
                                textDecoration: todo.done ? 'line-through' : ''
                            }}
                            onClick={() => this.handleTodoClick(i)}
                        >{todo.text}</li>
                    )}
                </ul>
                <div className='form-group'>
                    <label htmlFor='new-todo'>New todo:</label>
                    <input id='new-todo' className='form-control' ref='newTodo' onKeyDown={e => this.handleKeyDown(e)}/>
                </div>
            </div>
        );
    }

    handleKeyDown(event) {
        if (event.keyCode === 13) {
            this.props.dispatch(addTodo(this.refs.newTodo.value));
            this.refs.newTodo.value = '';
        }
    }

    handleTodoClick(index) {
        this.props.dispatch(toggleTodo(index));
    }
}

function filter(state) {
    return {
        todos: state
    }
}

export default connect(filter)(App);
