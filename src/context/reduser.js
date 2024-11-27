export const initialState = JSON.parse(localStorage.getItem("storage")) || {
  count: 0,
  wishlist: [],
  bool: false,
  cart: [],
  token: null,
};
export const reducer = (state, action) => {
  let result = state;
  switch (action.type) {
    case "ADD__WISHLIST":
      let index = state.wishlist.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (index < 0) {
        result = { ...state, wishlist: [...state.wishlist, action.payload] };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      } else {
        result = {
          ...state,
          wishlist: state.wishlist.filter(
            (pro) => pro.id !== action.payload.id
          ),
        };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      }
    case "ADD__CART":
      let cartIindex = state.cart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      if (cartIindex < 0) {
        result = {
          ...state,
          cart: [...state.cart, { ...action.payload, amount: 1 }],
        };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      } else {
        result = {
          ...state,
          cart: state.cart.map((pro, inx) =>
            cartIindex === inx ? { ...pro, amount: pro.amount + 1 } : pro
          ),
        };
        localStorage.setItem("storage", JSON.stringify(result));
        return result;
      }
    case "DEC__CART":
      let decIindex = state.cart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      result = {
        ...state,
        cart: state.cart.map((pro, inx) =>
          decIindex === inx ? { ...pro, amount: pro.amount - 1 } : pro
        ),
      };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;
    case "DEL__CART":
      let delIindex = state.cart.findIndex(
        (pro) => pro.id === action.payload.id
      );
      result = {
        ...state,
        cart: state.cart.filter((pro) => pro.id !== action.payload.id),
      };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;

    case "CLEAR__CART":
      result = { ...state, cart: [] };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;
    case "ADD__TOKEN":
      result = { ...state, token: action.payload };
      localStorage.setItem("storage", JSON.stringify(result));
      return result;

    default:
      return state;
  }
};
