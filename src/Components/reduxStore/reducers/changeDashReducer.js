const changeDashReducer = (state = "Home", action) => {
    switch(action.type){
        case "changeDash":
            return action.payload.data;
        default:
            return state;
    }
}

export default changeDashReducer;