

import { 
    ADDING_MENU_ITEM,
    MENU_ITEM_ADDED,
    ADD_FAILED,
    ADDING_RESTAURANT,
    RESTAURANT_ADDED,
    ADDING_PRODUCT,
    PRODUCT_ADDED
 } from './../Actions';

const initialState = {
    restaurants: [],
    products: [],
    addingRestaurants: false,
    addedRestaurants: false,
    addingMenuItem: false,
    menuItemAdded: false,
    addingProduct: false,
    productAdded: false,
    error: null
}

export const POSTReducers = (state = initialState, {type, payload}) => {
    switch(type){
        case ADDING_MENU_ITEM:
            return {...state, addingMenuItem: true}
        case MENU_ITEM_ADDED:
            return {...state, addingMenuItem: false, menuItemAdded: true, restaurants: payload}
        case ADDING_RESTAURANT:
            return {...state, addingRestaurants: true}
        case RESTAURANT_ADDED:
            return {...state, addingRestaurants: false, addedRestaurants: true, products: payload}
        case ADD_FAILED:
            return {...state, addingRestaurants: false, addingMenuItem: false, error: payload}
        case ADDING_PRODUCT:
            return {...state, addingProduct: true}
        case PRODUCT_ADDED:
            return {...state, addingProduct: false, productAdded: true, restaurants: payload}
    
        default:
            return state;
    }
}
