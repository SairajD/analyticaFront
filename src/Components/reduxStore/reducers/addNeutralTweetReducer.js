const addNeutralTweetReducer = (state = [], action) => {
    switch(action.type){
        case "addNeutrals":
            return [...state, ...action.payload.data];
        case "removeNeutrals":
            return [];        
        default:
            return state;
    }
}
//

export default addNeutralTweetReducer;