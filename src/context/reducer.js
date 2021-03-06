export const initialState = {
    user: null || JSON.parse(localStorage.getItem('user'))
};

export const actionTypes = {
    SET_USER: "SET_USER",
};

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.SET_USER:
            localStorage.setItem('user', JSON.stringify(action.user));
            return {
                ...state,
                user: action.user,
            };
        case actionTypes.LOGOUT_USER:
            localStorage.removeItem('user');
            return {
                ...state,
                user: null
            };
        default:
            return state;
    };
};

export default reducer;