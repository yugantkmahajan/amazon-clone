export const initialState = {
  basket: [],
  user: null
};

//Selector  we create here
export const getBasketTotal = (basket) => 
    basket?.reduce((amount, item) => item.price + amount, 0);
//?(optional chainning) we use because it will handle the error and not terminate the function if error occurs
//reduce is a function to tally the amount it iterate over the all the items and insert the item price into amount and the default value of amount is 0
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
          const index = state.basket.findIndex(
            (basketItem)=> basketItem.id=== action.id
          );
          let newBasket = [...state.basket];
          
          if (index>=0){
            newBasket.splice(index, 1);
          }else
          {
            console.warn(`Cant remove product (id${action.id}) as its not  in basket!`)
          }
          return{
            ...state,
            basket:newBasket
          }

          case "SET_USER":
            return {
              ...state,
              user: action.user
            }
    default:
      return state
      
  }
};

export default reducer;