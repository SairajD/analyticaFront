const addUserReducer = (state = "", action) => {
    switch(action.type){
        case "addUser":
            return action.payload.data;      
        default:
            return state;
    }
}
//

export default addUserReducer;