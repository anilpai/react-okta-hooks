import React, { createContext, useReducer } from 'react'
import AuthManager from './AuthManager'

export const AuthContext = createContext();

const UPDATE_STATUS = 'UPDATE_STATUS'
const UPDATE_ERROR = 'UPDATE_ERROR'

export const updateStatus = (payload) => ({ type: UPDATE_STATUS, payload })

export const updateError = payload => ({ type: UPDATE_ERROR, payload })

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_STATUS:
      return {
        ...state,
        loading: false,
        authenticated: action.payload.authenticated,
        user: action.payload.user
      };

    case UPDATE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
    default:
      return state;
  }
};


const AuthProvider = ({ config, children }) => {
  AuthManager.init(config);

  return (
    <AuthContext.Provider
      value={useReducer(reducer, {
        loading: true,
        authenticated: false,
        error: ""
      })}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider