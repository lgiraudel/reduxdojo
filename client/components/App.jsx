import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            this.props.dispatch({type: 'ADD_TODO', text: this.refs.newTodo.value});
            this.refs.newTodo.value = '';
        }
    }

    handleTodoClick(index) {
        this.props.dispatch({type: 'TOGGLE_TODO', index: index});
    }
}

function filter(state) {
    return {
        todos: state
    }
}

export default connect(filter)(App);
