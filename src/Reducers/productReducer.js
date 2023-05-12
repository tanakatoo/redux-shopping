import list from "../data.json"

const INITIAL_STATE = list.products

export default function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "get":
            return state[action.id]
        default:
            return state
    }

}