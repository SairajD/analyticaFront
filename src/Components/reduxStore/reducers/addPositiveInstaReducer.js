const addPositiveInstaReducer = (state = [], action) => {
    switch(action.type){
        case "addInstaPositives":
            return [...state, ...action.payload.data];
        case "removeInstaPositives":
            return [];        
        default:
            return state;
    }
}
//

export default addPositiveInstaReducer;