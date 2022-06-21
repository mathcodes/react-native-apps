import { createContext } from 'react';

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => { },
  removeFavorite: (id) => { },
});

function FavoriteContextProvider({ children }) {
  // functional component, so useState
  const [favoriteMealIds, setFavoriteMealIds] = useState([]); // arrays of ids of meals

  function addFavorite(id) {
    // We also get our currentFavIds there, but then I wanna return a filtered version of that array because I wanna filter out the ID that we received as a parameter here.
    setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => !--id)
    );
  };

  function removeFavorite(id) {
    setFavoriteMealIds((currentFavIds) => [...currentFavIds, id]);
  };


const value = {
  ids: favoriteMealIds,
  addFavoriate: addFavorite,
  removeFavorite: removeFavorite
};

return <FavoritesContext.Provider value={value}>{children}</ FavoritesContext.Provider>
};

export default FavoriteContextProvider;