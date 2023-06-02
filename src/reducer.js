export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
       basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    // console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      // logic for adding to basket
      return {
        ...state,
        basket: [...state.basket, action.item],

      };
    case 'EMPTY_BASKET':
      return {
        ...state,
        basket: [],
      };
    case "REMOVE_FROM_BASKET":
      //logic for removing item from basket...     
      //clone the basket
      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
        
      );
      // we check to see if product exists
      if (index >= 0) {
        //if exists in basket, remove it // 
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};
export default reducer;
