import { category, product, products } from "../staticState"

export const initialState = {
    category: category,
    products: products,
    product: product
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