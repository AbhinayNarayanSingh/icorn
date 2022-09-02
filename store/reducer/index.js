import { category, product, productAccessories, productImages, productPrice, products, productVariants } from "../staticState"

export const initialState = {
    category: category,
    products: products,
    product: product,
    productVariants: productVariants,
    productImages: productImages,
    productPrice: productPrice,
    productAccessories: productAccessories,
    bag: [[], []]

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