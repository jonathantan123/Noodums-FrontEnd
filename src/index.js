import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore } from "redux"
import { Provider } from "react-redux"



const defaultState = {
    menuItems: [], 
    allOrders:[],
    user_id: 1, 
    cart: [], 
    favorites: [],
    user_info: [], 
    removed: false, 
    total: "" 
}
const store = createStore(reducer)

function reducer (state=defaultState, action) {
    switch (action.type) {
        case "LOGIN": 
            return {...state,
                 user_id: action.payload}
            break; 

        case "LOGOUT": 
            return {...state, user_id: 1}
            break; 

        case "GET_USER_INFO": 
        debugger 
        
            return {...state, user_info: action.payload}
            break; 

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
                break;
                
        case "REMOVE_FROM_CART":    
        let itemToRemove= state.cart.find(item=> item.id === action.payload)
                if(itemToRemove.quantity === 1 ) {
                    return {...state, cart: state.cart.filter((item) => item.id !== action.payload)}
                } else {
                    itemToRemove.quantity -= 1 
                    
                    return{...state,  
                        cart: [...state.cart]}
                }
                break; 

        case "SET_MENU_ARRAY":    
        
                return {...state, menuItems: action.payload}
                break; 

        case "ADD_TO_FAVORITES":     
                return {...state, favorites: action.payload !== undefined ? action.payload: [] }
                break; 

        case "SET_TOTAL":     
                debugger
                return {...state, total: action.payload }
                break; 

        default:
            return state 
            break;
    }
} 


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App/>
        </Router> 
    </Provider>,
document.getElementById('root'));

 