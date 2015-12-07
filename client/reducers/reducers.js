function reducers(state = [{text: 'Buy some milk'}, {text: 'Prepare dojo'}, {text: 'Annoy the cat'}], action) {
    switch (action.type) {
        case 'ADD_TODO':
            return state.concat({
                text: action.text
            });
        default:
            return state;
    }
}

export default reducers;
