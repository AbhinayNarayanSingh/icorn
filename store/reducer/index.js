import { category, product, productAccessories, productImages, productPrice, products, relatedProducts, bag } from "../staticState"

export const initialState = {
    category: category,
    products: products,
    product: product,
    productImages: productImages,
    productPrice: productPrice,
    productAccessories: productAccessories,
    relatedProducts: relatedProducts,
    bag: bag,
    dialog: {
        open: false,
        type: "warning",
        key: "CONFIRM_MSG_DIALOGE"
    },
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