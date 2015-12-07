import React, { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [{text: 'Buy some milk'}, {text: 'Prepare dojo'}, {text: 'Annoy the cat'}]
        };
    }

    render() {
        return (
            <div className='container'>
                <h1>My Todo List</h1>
                <ul>
                    {this.state.todos.map((todo, i) =>
                        <li key={i}>{todo.text}</li>
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
            this.setState({
                todos: this.state.todos.concat([{text: this.refs.newTodo.value}])
            });
            this.refs.newTodo.value = '';
        }
    }
}

export default App;
