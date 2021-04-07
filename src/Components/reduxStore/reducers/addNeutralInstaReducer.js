const addNeutralInstaReducer = (state = [], action) => {
    switch(action.type){
        case "addInstaNeutrals":
            return [...state, ...action.payload.data];
        case "removeInstaNeutrals":
            return [];        
        default:
            return state;
    }
}
//

export default addNeutralInstaReducer;