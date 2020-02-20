// Add to cart action
export const addToCart = (product) => {
    return {
        type: 'ADD_TO_CART',
        payload: product
    }
}

// Filter Products
export const filterItem = (filterData) => {
    return {
        type: 'FILTER_ITEM',
        payload: filterData
    }
}

// Update cart
export const updateCart = (productMeta) => {
    return {
        type: 'UPDATE_CART',
        payload: productMeta
    }
}