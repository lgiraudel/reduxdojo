function reducers(state = [], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat(action.todo);
        case 'TOGGLE_TODO':
            const todoToToggle = state[action.index];

            return [
                 ...state.slice(0, action.index),
                 {
                     text: todoToToggle.text,
                     done: !todoToToggle.done
                 },
                 ...state.slice(action.index + 1)
             ];
        case 'RECEIVE_TODOS':
            return [
                ...action.todos
            ];
        default:
            return state;
    }
}

export default reducers;
