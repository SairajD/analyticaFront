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