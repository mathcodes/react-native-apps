import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './favorites';
// We can then create a store by calling configureStore like this and to configure store we pass an object where we add a reducer key which holds an empty object as a value for the moment.
export const store = configureStore({
  //  Reducers are the different slices of state, so of data, and actions that can change that data that are used by redux to then construct an overall `store of data and actions`
  reducer: {
    favoriteMeals: favoritesReducer
  }
});

  
//  we export this store here and now as a next step just as with the context, we have to provide it to this App.js ((-))
  