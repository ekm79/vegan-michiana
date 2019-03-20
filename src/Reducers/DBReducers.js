import { RECEIVED_RESTAURANTS, 
    GETTING_RESTAURANTS,
    GET_FAILED,
    SEARCHING,
    SEARCH_RETURNED,
    SEARCH_FAILED,
    SEARCHING_PRODUCTS,
    PRODUCT_SEARCH_RETURNED,
    LOCATION_SEARCHING,
    LOCATION_SEARCH_RETURNED,
    GETTING_PRODUCTS, 
    RECEIVED_PRODUCTS,
    RECEIVED_STORES,
    GETTING_STORES } from './../Actions';

const initialState = {
    restaurants: [],
    products: [],
    stores: [],
    gettingRestaurants: false,
    receivedRestaurants: false,
    gettingStores: false,
    receivedStores: false,
    searching: false,
    searchReturned: false,
    searchResults: [],
    error: null
}

export const dbReducers = (state = initialState, {type, payload}) => {
    switch(type){
        case GETTING_RESTAURANTS:
            return {...state, gettingRestaurants: true}
        case RECEIVED_RESTAURANTS:
            return {...state, gettingRestaurants: false, receivedRestaurants: true, restaurants: payload}
        case GETTING_PRODUCTS:
            return {...state, gettingProducts: true}
        case RECEIVED_PRODUCTS:
            return {...state, gettingProducts: false, receivedProducts: true, products: payload}
            case GETTING_STORES:
            return {...state, gettingStores: true}
        case RECEIVED_STORES:
            return {...state, gettingStores: false, receivedStores: true, stores: payload}
       
         case GET_FAILED:
            return {...state, gettingRestaurants: false, gettingProducts: false, gettingStores: false, error: payload}
        case SEARCHING:
            return {...state, searching: true}
        case SEARCH_RETURNED:
            return {...state, searching: false, searchReturned: true, restaurants: payload}
        case SEARCH_FAILED:
            return {...state, searching: false, error: payload}
        case SEARCHING_PRODUCTS:
            return {...state, searching: true}
        case PRODUCT_SEARCH_RETURNED:
            return {...state, searching: false, searchReturned: true, products: payload}
        case LOCATION_SEARCHING:
            return {...state, searching: true}
        case LOCATION_SEARCH_RETURNED:
            return {...state, searching: false, searchReturned: true, restaurants: payload}
        default:
            return state;
    }
}
