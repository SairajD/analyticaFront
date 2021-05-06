const openCloseDrawerReducer = (state = false, action) => {
    switch(action.type){
        case "openDrawer":
            return true;
        case "closeDrawer":
            return false;
        default:
            return state;
    }
}

export default openCloseDrawerReducer;