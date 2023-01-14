import React, { useReducer } from "react";
import AppState from "./AppState";
import reducer from "./Reducer";

const AppContext = ({ children }) => {
  const initialState = {
    isOpen: false
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppState.Provider value={{state, dispatch}}>
    {children}
    </AppState.Provider>;
};

export default AppContext;
