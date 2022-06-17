import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealsList';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);
// And for this we have to import it

// from the Components Meal List folder,

// and then the Meals List file,

// and we can get rid of these unused imports here

// which we don't need anymore,

// and now we pass these Displayed Meals here to Meals List,
    return <MealsList items={displayedMeals} />
} 


export default MealsOverviewScreen;


