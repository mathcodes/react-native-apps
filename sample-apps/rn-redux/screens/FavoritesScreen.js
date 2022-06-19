import { Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';

function FavoritesScreen() {
// And to get our Favorited Meals,
c
// we again can use the useContext hook,

// which is imported from React,

// to tap into our Favorites context

// where we manage these meal IDs.
  const favoriteMealsContext = useContext(FavoritesContext); 
    
  const favoriteMeals = MEALS.filter((meal) => 
  favoriteMealsContext.ids.includes(meal.id)
  );

  return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen; aka.aka ATAKSsww
