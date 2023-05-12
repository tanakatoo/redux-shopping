import list from "../data.json"

const INITIAL_STATE = []

export default function cartReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "add":
            //find id in cart 
            if (state.find(ele => ele.id === action.id)) {
                //found in cart, return array with updated quantity
                return state.map(ele => {
                    if (ele.id === action.id) {
                        return { ...ele, qty: ele.qty + 1 }
                    } else {
                        return ele
                    }
                })

            } else {
                //it is not in cart add to array
                const newObj = { id: action.id, qty: 1 }
                return [...state, newObj]
            }

        case "remove":
            const newArr = state.map(ele => {
                if (ele.id === action.id) {
                    if (ele.qty === 1) {
                        return null
                    }
                    return { ...ele, qty: ele.qty - 1 }
                } else {
                    return ele
                }
            })
            return newArr.filter(ele => ele !== null)
        default:
            return state
    }
}