
///// global user id set at 2 === guest 
///// Admin User id ==== 1 

const defaultState = {
    menuItems: [], 
    user_id: 2, 
    cart: [], 
    favorites: [],
    user_info: [], 
    removed: false, 
    total: "", 
    subtotal: "", 
    revenue: [],
    number_of_orders: [], 
    quantity: [], 
    itemSales: [] 

}

function reducer (state=defaultState, action) {
    switch (action.type) {
        case "LOGIN": 
            return {...state,
                 user_id: action.payload}
      
        case "LOGOUT": 
            return {...state, user_id: 2}
      
        case "GET_USER_INFO": 
        
            return {...state, user_info: action.payload}
      
        case "ADD_TO_CART":
                let addedItem = state.menuItems.find(item => item.id === action.payload)

                let existingItem= state.cart.find(item=> item.id === action.payload)
                
                if (!existingItem)  {
                    
                    addedItem.quantity = 1;
                    return {
                        ...state, cart: [...state.cart, addedItem]
                    }
                } else { 
                    
                    existingItem.quantity += 1 
                    return {
                        ...state, 
                        cart: [...state.cart]
                    }
                }
                
        case "REMOVE_FROM_CART":    
        let itemToRemove= state.cart.find(item=> item.id === action.payload)
                if(itemToRemove.quantity === 1 ) {
                    return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
                } else {
                    itemToRemove.quantity -= 1 
                    
                    return{...state,  
                        cart: [...state.cart]}
                }
          
        case "SET_MENU_ARRAY":    
        
                return {...state, menuItems: action.payload}
          
        case "SET_FAVORITES":     
                return {...state, favorites: action.payload !== undefined ? action.payload: [] } 

        case "REMOVE_FROM_FAVORITES":    
                
                return {...state, favorites: state.favorites.filter(item => item.id !== action.payload) }
          
        case "ADD_TO_FAVORITES":    

                return {...state, favorites: [...state.favorites, action.payload] }
          
        case "SET_TOTAL":     
                return {...state, total: action.payload }
          
        case "SET_SUBTOTAL": 
                return {...state, subtotal: action.payload }
          
        case "SET_REVENUE":
                return {...state, revenue: action.payload}
          
        case "SET_NUMBER_OF_ORDERS":
                return {...state, number_of_orders: action.payload}
          
        case "SET_QUANTITY":
                return {...state, quantity: action.payload}
          
        case "SET_SALES_BY_ITEM":
                return {...state, itemSales: action.payload}
          
        default:
            return state 
    }
} 

export default reducer