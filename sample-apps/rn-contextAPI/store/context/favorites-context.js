import { createContext, useState } from 'react';

//  ^^*^^
export const FavoritesContext = createContext({
  ids: [],
  // adds new id
  addFavorite: (id) => {},
  // takes id and does something with it
  removeFavorite: (id) => {}
});


// a good way to manage context is by creating a functional component so we can return this FavoritesContextProvider and wrap it around our app, all the components, so they will be able to interact with this context.
function FavoritesContextProvider({children}) {
  // Now in this favoritesContextProvider component, I then also want to add all the logic that we need to manage this context; So the actual implementations of these methods and the logic we need for managing an array of IDs.

  // Since we are in a functional component, we will use 'useState'

  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  function addFavorite(id) {
    // update the state based ont he previous state as we are adding an id to it
    // Now in React, when updating state based on the previous state snapshot, you should pass a function to your state updating function, and that function will receive the previous state snapshot. So the currentFavIds, for example, and should then return the new state snapshot. So in this case, I wanna return a new array, where I use the spread operator to get all my current 'currentFavIds' into; And then add this newly received ID passed into the function as a last item. 
    
    // So I'm creating a new array, which then is returned as a new state snapshot:
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  }

  function removeFavorite(id) {
    // In removeFavorite, I also expect to receive an ID of the favorite that should be removed. And I will also call setFavoriteMailIds, and we will also update this state based on the previous state snapshot. We also get our currentFavIds there, but then I wanna return a filtered version of that array because I wanna filter out the ID that we received as a parameter here. So, therefore my new state is my old state, filter, and I go through all my meal IDs that are stored in this favoriteMealIds array. And if mealId is not equal to id, I want to keep it, but if it would be equal, this would return, false, and therefore the item would be filtered out. 
    
    // So this line of code will filter out the meal ID that we got here as a parameter.
    setFavoriteMealIds((currentFavIds) => 
      currentFavIds.filter((mealId) => mealId !== id)
    );
  }
  // (*)
  const value = {
    ids: favoriteMealIds,
    // the VALUE (right of colon) addFavorite is referring the the function above getting an id passed into it.
    addFavorite: addFavorite,
    removeFavorite:removeFavorite 
  }


  return (
    // So now with that, we got this value and now we can pass this to our context provider, by setting the value prop, which is expected by that provider, equal to our value constant. So now this value here, simply refers to this value constant here above (*);
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
    // So since we are passing an object into your context provider as a value, all components wrapped by this context provider will be able to access (tap into this) context and either call these functions or read the IDs.
  )
}

export default FavoritesContextProvider;