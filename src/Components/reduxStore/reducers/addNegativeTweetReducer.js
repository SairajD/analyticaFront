const addNegativeTweetReducer = (state = [], action) => {
    switch(action.type){
        case "addNegatives":
            return action.payload.data;
        
        default:
            return state;
    }
}

export default addNegativeTweetReducer;