const initialState = {
    user: 'ty',
}
const LOGIN = 'LOGIN';
const reducer =(state = initialState, action) => {
    switch(action.type) {
        case LOGIN:
        return { ...state, user: action.payload};
        default:
        return state;
    }
}
export default reducer;
