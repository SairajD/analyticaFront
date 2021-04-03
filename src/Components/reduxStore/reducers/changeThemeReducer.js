const changeThemeReducer = (state = false, action) => {
    switch(action.type){
        case "changeTheme":
            return !state;
        default:
            return state;
    }
}

export default changeThemeReducer;