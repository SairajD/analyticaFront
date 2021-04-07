const addNegativeTweetReducer = (state = [], action) => {
    switch(action.type){
        case "addNegatives":
            return [...state, ...action.payload.data];
        case "removeNegatives":
            return [];        
        default:
            return state;
    }
}
//

export default addNegativeTweetReducer;