import fetch from 'isomorphic-fetch';

export function addTodo(text) {
    return function(dispatch) {
        return fetch('/todos', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ text: text, done: false })
        }).then(res => res.json())
        .then(json => dispatch({type: 'ADD_TODO', todo: json}));
    };
}

export function toggleTodo(index) {
    return {type: 'TOGGLE_TODO', index: index};
}

export function fetchTodos() {
    return function(dispatch) {
        return fetch('/todos', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(json => dispatch({type: 'RECEIVE_TODOS', todos: json}));
    };
}
