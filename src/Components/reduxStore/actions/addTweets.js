export const addNegatives = (obj) => {
    return {
        type: "addNegatives",
        payload: {
            data: obj
        }
    }
}

export const addPositives = (obj) => {
    return {
        type: "addPositives",
        payload: {
            data: obj
        }
    }
}

export const addInstaNegatives = (obj) => {
    return {
        type: "addInstaNegatives",
        payload: {
            data: obj
        }
    }
}

export const addInstaPositives = (obj) => {
    return {
        type: "addInstaPositives",
        payload: {
            data: obj
        }
    }
}

export const removeNegatives = () => {
    return {
        type: "removeNegatives",
    }
}

export const removePositives = () => {
    return {
        type: "removePositives",
    }
}

export const removeInstaNegatives = () => {
    return {
        type: "removeInstaNegatives",
    }
}

export const removeInstaPositives = () => {
    return {
        type: "removeInstaPositives",
    }
}

export const dashLoc = (obj) => {
    return {
        type: "changeDash",
        payload: {
            data: obj
        }
    }
}

export const socialLoc = (obj) => {
    return {
        type: "changeSocial",
        payload: {
            data: obj
        }
    }
}

export const darkLight = (obj) => {
    return {
        type: "changeTheme",
    }
}