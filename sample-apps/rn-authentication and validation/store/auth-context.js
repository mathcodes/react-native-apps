// HEre we manage our app-wide auth context
import { createContext, useState } from 'react';

// To do that we call createContext (provided by react) and pass it the values we want to pass to our context.
export const AuthContext = createContext({
  token: '',
  isAuthenticated: false, // helper variable to check if the user is authenticated
  authenticate: (token) => {}, // methods for changing the state of the context
  logout: () => {}, // methods for changing the state of the context
});

// now we can add the function responsible for changing the state of the context and will be used as a wrapper for our components that we want to have access to the context.
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(); // manage state here. initially undefined

  // function called when the user logs in
  function authenticate(token) {
    setAuthToken(token);
  }
  // also adding a logout function to clear the token
  function logout() {
    setAuthToken(null);
  }
  //construct our value object here which will be passed to all context users
  const value = {
    token: authToken, // set token to the value of the authToken state
    isAuthenticated: !!authToken, // set isAuthenticated to true if the token is not null
    authenticate: authenticate, // make these functions available here
    logout: logout, // make these functions available here
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
