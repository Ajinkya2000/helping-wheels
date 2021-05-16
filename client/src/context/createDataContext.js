import React, { useReducer } from "react";

const createDataContext = (
  reducer,
  actions,
  defaultValue,
  displayName = null
) => {
  const Context = React.createContext();
  Context.displayName = displayName;

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultValue);

    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};

export default createDataContext;
