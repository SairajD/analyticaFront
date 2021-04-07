const addCharacterReducer = (state = [], action) => {
    switch(action.type){
        case "addCharacter":
            return action.payload.data;      
        default:
            return state;
    }
}
//

export default addCharacterReducer;