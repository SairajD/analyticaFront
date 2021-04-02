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