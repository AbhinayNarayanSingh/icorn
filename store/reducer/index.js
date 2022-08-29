import { category } from "../staticState"

export const initialState = {
    category: category
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "value":
            return {
                ...state,
                status: true
            }

        default: {
            return { ...state }
        }
    }
}
export default rootReducer