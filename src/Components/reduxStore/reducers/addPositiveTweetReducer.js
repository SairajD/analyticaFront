const addPositiveTweetReducer = (state = [], action) => {
    switch(action.type){
        case "addPositives":
            return action.payload.data;
        
        default:
            return state;
    }
}

export default addPositiveTweetReducer;