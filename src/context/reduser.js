export const initialState = JSON.parse(localStorage.getItem("storage")) || {
  count: 0,
  wishlist: [],
  bool: false,
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

    default:
      return state;
  }
};
