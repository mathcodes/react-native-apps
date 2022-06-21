import { createSlice } from '@reduxjs/toolkit'; // createSlice used for defining some state, some data, and some Actions that should be able to change that data

// call this createSlice function here and we pass our object to it
// This function will then return an object which I'll name favoritesSlice
const favoritesSlice = createSlice({
  //  we then have to set a name. Favorites could be the name. This is up to you. It's an identifier you can use. And then an initialState. And for this I'll set an initialState which is our object where I have some ids and my ids here should be an empty array. So that's my initialState. I have ids with empty array.
  name: 'favorites',
  initialState: {
    ids: []
  },
  // with Redux we have a separation and we now simply have a reducers key here in our slice object. And reducers are functions that are used to change our state.
  reducers: {
    // Therefore, we can add functions here in this object methods and I'll name my first `method addFavorite` and use this arrow functions in text here to define it, and every method that you define as a reducer will automatically get the latest state as an input. 
    // Redux will be calling this (' (state) => ') method for you and will give you the latest (state) snapshot. Therefore, we should accept it as a parameter.
    //  And with just Redux, without Redux Toolkit you should do this in a immutable way. When using Redux Toolkit you can mutate your state in immutable way because Redux Toolkit will take care about that under the hood. 

    // So now with that here we got our `addFavorite` method. And now here we wanna update our `state.ids` array. And in this case, if we add a favorite, `push()` a new ID onto this array. 

    // Now it would be nice if we would get this ID as part of this method ... We can by accepting a second parameter here, an `action` parameter, which can hold an extra `payload` which we can pass along when invoking this method later. 
    addFavorite:  (state, action) => {
      // We can get access to this payload by using `action.payload`. We use this key because `action is our object` created and provided by Redux and it `uses a payload property` to transport any extra data we might attach to this function in the future:
      // ```js
      // addFavorite:  (state, action) => {
      //   state.ids.push();
      // },
      // ```

      //  when we invoke this, or when we `dispatch` this action, as it's called, that we set an` ID property` on this payload object:
      // ```js
      (action.payload.id);
      // ```
      //  And you will see how to set that property in a couple of minutes. 

      // So therefore now we could expect to get this ID on our action payload. And we push this ID to our array of ids. 
      state.ids.push(action.payload.id);
    },
    //  The second function which I wanna add is the removeFavorite function which also is an a function here for me and gets this latest state snapshot --- In these functions we can then change the state.
    removeFavorite: (state) => {
      // And here when removing our favorite we also get such an action with such a payload and therefore then we could update our ids by using the built-in `splice` method:
      // ```js
      // state.ids.splice()
      // ```
      //  `splice` `can be used to remove our item from an array`. And we now need to find the index of the item that we wanna remove and that could be done with `(state.ids.indexOf()`, passing `(action.payload.id)` to indexOf to` get the indexOf the item that should be removed`
      // Take a breath and read that again ;)
      // Then to splice as a second argument, we provide the number of items that we wanna remove, 1.
      state.ids.splice(state.ids.indexOf(action.payload.id), 1)
    }
  }
})
 






// That's what we wanna do here. So now that's the logic we have here in our favoritesSlice. Now we need to export and expose a couple of things. For example, we want to export favoritesSlice. So this constant here dot reducer. This is an internal thing but we will be able to then merge this reducer into our store later. That's why we have to export it here. Besides that we should also export two actions as it's called. To be precise, these two actions so that we can dispatch these actions and invoke these methods from different places of our app. For this I will export a constant named addFavorite, though this name is up to you. Which points at favoritesSlice.actions which is a property provided by the Redux Toolkit library, dot addFavorite. So which points at this method here. And then I will repeat the same thing here with export const removeFavorite by pointing at favoritesSlice actions removeFavorite. These are the things we should export here. And now as a last step before we can start using Redux in the different parts of the app, we have to go back to store JS and here we should import our favoritesReducer which is that default export from this favorites file in which we just worked. And in this reducer object here in our configured store function, we should add any key of our choice, For example, favoriteMeals and then point at this favoritesReducer like this. And then we will be able to tap into this reducer from different parts of our app later. So that's the second step. Now let's see how we can use all of that.
 



 
// And with just Redux, without Redux Toolkit you should do this in a immutable way. When using Redux Toolkit you can mutate your state in immutable way because Redux Toolkit will take care about that under the hood. That's just a side note in case you have worked with just Redux in the past. With Redux Toolkit, mutating state is okay. If this doesn't tell you anything you might wanna dive into the official Redux stocks first. So now with that here we got our addFavorite method. And now here we wanna update our state ids array. And in this case, if we add a favorite, push a new ID onto this array. Now it would be nice if we would get this ID as part of this method and indeed we can accept a second parameter here, an action parameter, which can hold an extra payload which we can pass along when invoking this method later. We can get access to this payload by using action payload. We use this key because action is our object created and provided by Redux and it uses a payload property to transport any extra data we might attach to this function in the future. That's why we have to access action payload here. And then we could expect that in the future when we invoke this, or when we dispatch this action as it's called that we set an ID property on this payload object. And you will see how to set that property in a couple of minutes. So therefore now we could expect to get this ID on our action payload. And we push this ID to our array of ids. And here when removing our favorite we also get such an action with such a payload and therefore then we could update our ids by using the built-in splice method which can be used to remove our item from an array. And we now need to find the index of the item that we wanna remove and that could be done with state ids indexOf, passing action.payload.id to indexOf to get the indexOf the item that should be removed, and then two splice as a second argument. We provide the number of items that we wanna remove in this case and we only wanna remove that one item which has this ID. That's what we wanna do here. So now that's the logic we have here in our favoritesSlice. Now we need to export and expose a couple of things. For example, we want to export favoritesSlice. So this constant here dot reducer. This is an internal thing but we will be able to then merge this reducer into our store later. That's why we have to export it here. Besides that we should also export two actions as it's called. To be precise, these two actions so that we can dispatch these actions and invoke these methods from different places of our app. For this I will export a constant named addFavorite, though this name is up to you. Which points at favoritesSlice.actions which is a property provided by the Redux Toolkit library, dot addFavorite. So which points at this method here. And then I will repeat the same thing here with export const removeFavorite by pointing at favoritesSlice actions removeFavorite. These are the things we should export here. And now as a last step before we can start using Redux in the different parts of the app, we have to go back to store JS and here we should import our favoritesReducer which is that default export from this favorites file in which we just worked. And in this reducer object here in our configured store function, we should add any key of our choice, For example, favoriteMeals and then point at this favoritesReducer like this. And then we will be able to tap into this reducer from different parts of our app later. So that's the second step. Now let's see how we can use all of that.