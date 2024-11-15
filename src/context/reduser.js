export const initialState = {
  wishlist: [],
};
export const reduser = (state, actions) => {
  switch (actions.type) {
    case "ADD__WISHLIST":
      let index = state.wishlist.findIndex(
        (pro) => pro.id === actions.payload.id
      );
      if (index < 0) {
        return { ...state, wishlist: [...state.wishlist, actions.payload] };
      } else {
        return state;
      }
    default:
      return state;
  }
};
