// And in here I wanna create and manage my auth-context.

// So my app wide auth state.

import AsyncStorage from '@react-native-async-storage/async-storage';

import { createContext, useEffect, useState } from 'react';

// so we call createContext to create our AuthContext which we will export to use in other parts of the app to use the context
export const AuthContext = createContext({
  // here we store our data: 
  token: '',
  isAuthenticated: false, // helper variable that is a helper function that checks if the user is authenticated or not (BOOLEAN)
  authenticate: (token) => {}, // method used to change the state which changes whether the user has logged in or not
  logout: () => {}, // method used to logout the user (clear auth status, erase token and so on)
});
// we can add our function here the AuthContextProvider function
// which will be responsible for managing the actual
// auth-context state and which will be used
// s a wrapper around our app components that wanna interact with the context. so we also default export it
function AuthContextProvider({ children }) {
     // lets manage this token as its a clear indicate of the user's status
    const [authToken, setAuthToken] = useState();
  // now we add a function that gets triggered upon login or signup successfully
  // we expect a token as an argument so we add it above to get better auto-completion
  function authenticate(token) {
    // call setAuthToken and set this equal to this token that we're getting.
    setAuthToken(token);
    // and we also set isAuthenticated to true
    AsyncStorage.setItem('token', token);
  }

  function logout() {
    // clear the token and set it to null
    setAuthToken(null);
    AsyncStorage.removeItem('token');
  }
  // now we can contruct our value object that will be passed to the context users
  const value = {
    token: authToken, // here we can set the token key which is defined up in authToken and set it equal to the authToken state
    isAuthenticated: !!authToken,// And the isAuthenticated helper property here is simply set equal to NOT NOT authToken which converts a truthy or falsey value into true or false
    // Now, we also wanna make these two functions available. So here I will add authenticate and point at my authenticate function and add logout and point at my logout function here. THIS ALLOWS US TO USE THESE FUNCTIONS IN OUR APP as they are exposed to the context
    authenticate: authenticate, 
    logout: logout,
  };
  // This component function here will get the children prop because we will return AuthContext.Provider here and wrap this around our children like this.
  // And then we can manage the auth related state here in this function.

  //NOW after createing const value we can use it in our app components like this:
  // And then here we can set the value prop on the AuthContext.Provider and set this equal to this value object. 
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;

//Now to truly expose it, we of course now need to wrap our AuthContext.Provider function here our component around the root component of our application. And therefore here in App.js I will actually wrap my entire navigation container with AuthContextProvider. (^)(^)
