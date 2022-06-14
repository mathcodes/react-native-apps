import { createContext } from 'react';

const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {}
});


// a good way to manage context is by creating a functional component so we can return this FavoritesContextProvider and wrap it around our app, all the components, so they will be able to interact with this context.
function FavoritesContextProvider({children}) {
  return <FavoritesContext.Provider>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider;