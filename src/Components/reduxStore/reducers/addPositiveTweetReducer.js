const addPositiveTweetReducer = (state = [], action) => {
    switch(action.type){
        case "addPositives":
            return [...state, ...action.payload.data];
        case "removePositives":
            return [];
        default:
            return state;
    }
}

export default addPositiveTweetReducer;