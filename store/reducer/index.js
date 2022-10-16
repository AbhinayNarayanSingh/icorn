import { user, varient, category, product, productAccessories, productImages, products, relatedProducts, bag, orders } from "../staticState"

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
    dialog: {
        open: false,
        type: "warning",
        key: "CONFIRM_MSG_DIALOGE"
    },
    user : user,
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "value":
            return {
                ...state,
                status: true
            }

        case "close_dialoge":
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