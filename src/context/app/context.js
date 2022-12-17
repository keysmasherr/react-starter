import * as React from "react";
import { severity } from "../../config/constants";
import { actions } from "./actions";

const AppContext = React.createContext();

const reducerHelpers = {
  
  [actions.SHOW_SNACKBAR]: (state, action) => ({
    ...state,
    snackbar: {
      open: true,
      message: action.data.message,
      severity: action.data?.severity,
      action: {
        code: action.data?.action?.code || "default",
        content: action.data?.action?.content,
      },
    },
  }),
  [actions.HIDE_SNACKBAR]: (state, action) => ({
    ...state,
    snackbar: {
      open: false,
      message: "",
      severity: severity.INFO,
      action: { code: "default", content: null },
    },
  }),

  [actions.SET_ERRORS]: (state, action) => ({
    ...state,
    errors: action.errors,
  }),
  [actions.SET_SNACKBAR]: (state, action) => ({
    ...state,
    snackbar: action.snackbar,
  }),
};

const appReducer = (state, action) => {
  console.log(action, "here");
  console.log(state);
  return reducerHelpers[action.type](state, action);
};

const AppProvider = ({ children }) => {
  const initialState = {
    snackbar: {
      open: false,
      message: "",
      severity: severity.INFO,
      action: { code: "default", content: null },
    },
  };

  const [state, dispatch] = React.useReducer(appReducer, initialState);

  const value = { state, dispatch };
  return (
    <AppContext.Provider value={value}>{children}</AppContext.Provider>
  );
};

const useApp = () => {
  const context = React.useContext(AppContext);
  if (context === undefined) {
    throw new Error("useApp must be used within a AppProvider");
  }
  return context;
};

export { AppProvider, useApp };
