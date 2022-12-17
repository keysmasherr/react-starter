import * as React from "react";
import { actions } from "./actions";

const AuthContext = React.createContext();

const reducerHelpers = {
  [actions.PERSIST_SIGNUP_INFO]: (state, action) => ({
    ...state,
    signupInfo: {
      email: action.data.email,
      password: action.data.password,
      planId: action.data.planId
    }
  })
};

const authReducer = (state, action) => {
  return reducerHelpers[action.type](state, action);
};

const AuthProvider = ({ children }) => {
  const initialState = {
    signupInfo: {
      email: "",
      password: "",
    },
    userInfo: {

    },
  };

  const [state, dispatch] = React.useReducer(authReducer, initialState);
  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = React.useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
