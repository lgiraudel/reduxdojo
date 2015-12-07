function reducers(state = [{text: 'Buy some milk', done: false,}, {text: 'Prepare dojo', done: true}, {text: 'Annoy the cat', done: true}], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                text: action.text,
                done: false
            });
        case 'TOGGLE_TODO':
            const todoToToggle = state[action.index];

            return [
                 ...state.slice(0, action.index),
                 {
                     text: todoToToggle.text,
                     done: !todoToToggle.done
                 },
                 ...state.slice(action.index + 1)
         ]
        default:
            return state;
    }
}

export default reducers;
