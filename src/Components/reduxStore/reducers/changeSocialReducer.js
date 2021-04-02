const changeSocialReducer = (state = "Twitter", action) => {
    switch(action.type){
        case "changeSocial":
            return action.payload.data;
        default:
            return state;
    }
}

export default changeSocialReducer;