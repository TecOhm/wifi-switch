export const initialState= {
    user:null,
    hideGroup:false,
};

export const actionTypes = {
    SET_USER:"SET_USER",
    TOGGLE_HIDDEN:"TOGGLE_HIDDEN"
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            };
        case actionTypes.TOGGLE_HIDDEN:
            return {
                ...state,
                hideGroup: action.hideGroup
            };
        default:
            return state;
    }
};

export default reducer;