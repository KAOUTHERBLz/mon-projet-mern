//importation

const { FAIL_PRODUCT, LOAD_PRODUCT, ONE_PRODUCT, SUCC_PRODUCT } = require("../ActionType/product");


//initialState
const initialState = {
    listProducts: [],
    errors: null,
    load: false,
    productToGet: {},
};


// pure function
const productReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case LOAD_PRODUCT:
            return { ...state, load: true };
        case SUCC_PRODUCT:
            return { ...state, load: false, listProducts: payload.listProducts };
        case ONE_PRODUCT:
            return { ...state, productToGet: payload.productToGet, load: false };
        case FAIL_PRODUCT:
            return { ...state, load: false, errors: payload };
        default:
            return state;
    }
};
export default productReducer;