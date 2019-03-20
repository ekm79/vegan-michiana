import axios from 'axios';

export const TOGGLE_LEADER_RAMA = 'TOGGLE_LEADER_RAMA';
export const TOGGLE_LEADER_NEKEISHA = 'TOGGLE_LEADER_NEKEISHA';
export const TOGGLE_LEADER_CRYSTAL = 'TOGGLE_LEADER_CRYSTAL';
export const TOGGLE_LEADER_TONIA = 'TOGGLE_LEADER_TONIA';
export const TOGGLE_MARCH = 'TOGGLE_MARCH';
export const TOGGLE_NOVEMBER = 'TOGGLE_NOVEMBER';
export const TOGGLE_DECEMBER = 'TOGGLE_DECEMBER';
export const TOGGLE_ADD = 'TOGGLE_ADD';
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';

export const GETTING_RESTAURANTS = 'GET_ALL_RESTAURANTS';
export const RECEIVED_RESTAURANTS = 'RECEIVED_RESTAURANTS';
export const GET_FAILED = 'GET_FAILED';

export const SEARCHING = 'SEARCHING';
export const SEARCH_RETURNED = 'SEARCH_RETURNED';
export const SEARCH_FAILED = 'SEARCH_FAILED';

export const SEARCHING_PRODUCTS = 'SEARCHING_PRODUCTS';
export const PRODUCT_SEARCH_RETURNED = 'PRODUCT_SEARCH_RETURNED';
export const LOCATION_SEARCHING = 'LOCATION_SEARCHING';
export const LOCATION_SEARCH_RETURNED = 'LOCATION_SEARCH_RETURNED';

export const GETTING_PRODUCTS = 'GETTING_PRODUCTS';
export const RECEIVED_PRODUCTS = 'RECEIVED_PRODUCTS';
export const GETTING_STORES = 'GETTING_STORES';
export const RECEIVED_STORES = 'RECEIVED_STORES';

export const ADDING_MENU_ITEM = 'ADDING_MENU_ITEM';
export const MENU_ITEM_ADDED = 'MENU_ITEM_ADDED';
export const ADD_FAILED = 'ADD_FAILED';
export const ADDING_RESTAURANT = 'ADDING_RESTAURANT';
export const RESTAURANT_ADDED = 'RESTAURANT_ADDED';
export const ADDING_PRODUCT = 'ADDING_PRODUCT';
export const PRODUCT_ADDED = 'PRODUCT_ADDED';

export const getRestaurants = () => {
    return(dispatch) =>{
        dispatch({type: GETTING_RESTAURANTS});
        axios.get(`http://localhost:2019/restaurants/all`)
          .then(({data}) => {
              dispatch({type: RECEIVED_RESTAURANTS, payload: data});
          })
          .catch(err => {
              console.log(err);
              dispatch({type: GET_FAILED, error: err})
          })
        }
}

export const getProducts = () => {
    return(dispatch) =>{
        dispatch({type: GETTING_PRODUCTS});
        axios.get(`http://localhost:2019/products/all`)
          .then(({data}) => {
              dispatch({type: RECEIVED_PRODUCTS, payload: data});
          })
          .catch(err => {
              console.log(err);
              dispatch({type: GET_FAILED, error: err})
          })
        }
}

export const getStores = () => {
    return(dispatch) =>{
        dispatch({type: GETTING_STORES});
        axios.get(`http://localhost:2019/stores/all`)
          .then(({data}) => {
              dispatch({type: RECEIVED_STORES, payload: data});
          })
          .catch(err => {
              console.log(err);
              dispatch({type: GET_FAILED, error: err})
          })
        }
}

export const searchData = (searchTerm) => {
    return(dispatch) => {
        dispatch({type: SEARCHING});
        axios.get(`http://localhost:2019/search/restaurants/${searchTerm}`)
            .then(({data}) => {
                console.log(data);
                dispatch({type: SEARCH_RETURNED, payload: data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: SEARCH_FAILED, error: err})
            })
    }
}

export const searchProducts = (searchTerm) => {
    return(dispatch) => {
        dispatch({type: SEARCHING_PRODUCTS});
        axios.get(`http://localhost:2019/search/products/${searchTerm}`)
            .then(({data}) => {
                console.log(data);
                dispatch({type: PRODUCT_SEARCH_RETURNED, payload: data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: SEARCH_FAILED, error: err})
            })
    }
}

export const searchByLocation = (searchTerm) => {
    return(dispatch) => {
        dispatch({type: LOCATION_SEARCHING});
        axios.get(`http://localhost:2019/search/restaurants/location/${searchTerm}`)
            .then(({data}) => {
                console.log(data);
                dispatch({type: LOCATION_SEARCH_RETURNED, payload: data});
            })
            .catch(err => {
                console.log(err);
                dispatch({type: SEARCH_FAILED, error: err})
            })
    }
}

export const addRestaurant = (restaurant) => {
    return(dispatch) => {
        dispatch({type: ADDING_RESTAURANT});
        axios.post(`http://localhost:2019/restaurants/add`, restaurant)
        .then(({data}) => {
            console.log(data);
            dispatch({type: RESTAURANT_ADDED, payload: data});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: ADD_FAILED, error:err})
        })
    }
}

export const addProduct = (product, storeid) => {
    return(dispatch) => {
        let newProduct = {"productname": product}
        dispatch({type: ADDING_PRODUCT});
        axios.post(`http://localhost:2019/products/stores/${storeid}`, newProduct)
        .then(({data}) => {
            console.log(data);
            dispatch({type: PRODUCT_ADDED, payload: data});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: ADD_FAILED, error:err})
        })
    }
}

export const addMenuItem = (menuitem) => {
    return(dispatch) => {
        dispatch({type: ADDING_MENU_ITEM});
        axios.post(`http://localhost:2019/restaurants/menuitem/add`, menuitem)
        .then(({data}) => {
            console.log(data);
            dispatch({type: MENU_ITEM_ADDED, payload: data});
        })
        .catch(err => {
            console.log(err);
            dispatch({type: ADD_FAILED, error:err})
        })
    }
}

export const toggleLeaderRama = () => {
    return {
        type: TOGGLE_LEADER_RAMA
    }
}

export const toggleLeaderNekeisha = () => {
    return {
        type: TOGGLE_LEADER_NEKEISHA
    }
}

export const toggleLeaderTonia = () => {
    return {
        type: TOGGLE_LEADER_TONIA
    }
}

export const toggleLeaderCrystal = () => {
    return {
        type: TOGGLE_LEADER_CRYSTAL
    }
}

export const toggleMarch = () => {
    return {
        type: TOGGLE_MARCH
    }
}

export const toggleNovember = () => {
    return {
        type: TOGGLE_NOVEMBER
    }
}

export const toggleDecember = () => {
    return {
        type: TOGGLE_DECEMBER
    }
}

export const toggleAdd = () => {
    return {
        type: TOGGLE_ADD
    }
}

export const toggleDropdown = () => {
    return {
        type: TOGGLE_DROPDOWN
    }
}
