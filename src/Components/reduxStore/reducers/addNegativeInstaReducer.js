const addNegativeInstaReducer = (state = [], action) => {
    switch(action.type){
        case "addInstaNegatives":
            return [...state, ...action.payload.data];
        case "removeInstaNegatives":
            return [];        
        default:
            return state;
    }
}
//

export default addNegativeInstaReducer;