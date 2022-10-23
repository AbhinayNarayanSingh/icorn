import { user, varient, category, product, productAccessories, productImages, products, relatedProducts, bag, orders } from "../staticState"
import { OPEN_DIALOG_WORKER, CLOSE_DIALOG_WORKER } from "../constants"

export const initialState = {
    category: category,
    products: products,
    product: product,
    productImages: productImages,
    productAccessories: productAccessories,
    relatedProducts: relatedProducts,
    bag: bag,
    orders: orders,
    varients: varient,
    dialog: {},
    user : user,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_DIALOG_WORKER:
            return {
                ...state,
                dialog: {
                    open: true,
                    props: action.payload
                }
            }
        case CLOSE_DIALOG_WORKER:
            return {
                ...state,
                dialog: {
                    open: false
                }
            }

        default: {
            return { ...state }
        }
    }
}
export default rootReducer