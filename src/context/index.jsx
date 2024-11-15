import { createContext, useContext, useReducer } from "react";
const Context = createContext();
export const StateProvider = ({ reduser, initilalState, children }) => {
  return (
    <Context.Provider value={useReducer(reduser, initilalState)}>
      {children}
    </Context.Provider>
  );
};
export const useStateValue = () => useContext(Context);
