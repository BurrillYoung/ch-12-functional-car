import { initialState } from "./initialState";

import {ON_BUY_NOW,ON_SCREEN_MODE,ON_DELETE_CART_ITEM,ON_SEARCH,SET_API_DATA} from './types';

export function reducer(state = initialState, action){
  
  switch(action.type){
    case SET_API_DATA:
      return {
        //takes everything in the state and lays it out into the new object. laying out. making a shallow copy.
        ...state, products: action.payload
      }
    case ON_BUY_NOW:
      const shoppingCartItems = [...state.shoppingCartItems];
      const id = action.payload;
      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === id
      );
      if (indexOfCartItem > -1) {
        shoppingCartItems[indexOfCartItem].quantity += 1;
      } else {
        shoppingCartItems.push({ quantity: 1, id });
      }

      return {
        ...state, shoppingCartItems
      };

    case ON_SCREEN_MODE:
      return {
        ...state, onScreenMode: action.payload
      };

    case ON_DELETE_CART_ITEM:
    {
      const shoppingCartItems = [...state.shoppingCartItems];
      const id = action.payload;
      const indexOfCartItem = shoppingCartItems.findIndex(
        (item) => item.id === id
      );
  
      shoppingCartItems.splice(indexOfCartItem, 1);
  
      console.log("<><><>", shoppingCartItems);
      return {
        ...state, shoppingCartItems
       }
    }
      // shoppingCartItems: deleteShoppingCartItems.splice(deleteIndexOfCartItem, 1)
     return {
      ...state, shoppingCartItems
     };
    case ON_SEARCH:
      const searchTerm = action.payload;
      const filterData = [...state.products].filter((product) => {
        return product.title.toLowerCase().includes(searchTerm.toLowerCase());
      });
     
      return{
        ...state, filtered: filterData
      }

    default:
      return state;
  }
  

}