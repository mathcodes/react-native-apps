# Snippet Walkthrough

#### Terminal
Get the React Native Starter Code running on your device:
```bash
expo init myapp
cd myapp
yarn
yarn start
```

Adding Context to make state accessible every w/o prop drilling
```bash
mkdir store/
mkdir store/context/
cd store/context/
```


Create context using createContext
```bash
 
```
So let's add context and Redux. And of course, we only need one of the two for managing app wide state typically, and therefore, I will show both approaches after each other. And I will start with the context API. For this, in this project folder, with the meals app. And by the way, you find the latest snapshot attached, so that we can start from the same starting point. But in this meal app, in this project folder, I won't start by adding a store folder. It doesn't have to be named store, but it's a common convention to choose store as the name for the folder, that holds the app wide state related logic. Now, in this store folder, I will add a context sub folder and I will add a Redux sub folder, which we need later. We will start in the context sub folder. And in there, I'll add a In favorites-context.js, manage favorites context

 Now, for this, we now, first of all, need to 
 ```bash
 create a context
 ```
 
 And this is done with help of the `createContext` function that is exposed by React. We can call this function to create a context object, and here I then create the favoritesContext, and I name it favoritesContext with an uppercase character because we will use this or a property of that object as it turns out as a component later on. 
 
 So in JS hex code, and therefore we should start with an upper case character here. Now to create context, we can pass an initial context value. And even though we don't really need the value here, I will add a it, because that will help us with auto completion in other parts of the app here in the IDE. And then here in this context, I wanna manage the IDs of my favorite meals and that should be an array. And I then want to have a function addFavorite, that allows us to add a new ID. Now here I will just creates the dummy definition of this function, not the actual function. And therefore I'll just add an arrow function, where I get an ID and have an empty body, because I'm just adding this for better auto completion. We will add the actual implementation of this function a little bit later. Now our context also should have a removeFavorite function which also takes an ID and then will do something later. That's the context object, and that should actually be exported, so that we can use it in other files later; Because we will need it in other files to tap into this context and use it. Now with that, we also want to create a functional component in this context file. At least, that is how I typically manage context. I will name it, favoritesContextProvider; The name is up to you though. And I will export this as a default here. Now in there, I will receive props and I will pull out the children prop, with object destructuring. And then in there, we wanna return our favoritesContext, so this object here dot provider. And between the opening and closing text, we have our children. So that this component, this overall favoritesContextProvider component, can later be wrapped around our app, around other components that should be able to interact with this context. That's why I choose this approach. Now in this favoritesContextProvider component, I then also want to add all the logic that we need to manage this context; So the actual implementations of these methods and the logic we need for managing an array of IDs. We'll do this in the next lecture. Before we go there though, we will use this favoritesContextProvider component in App.js, and we should wrap all the components that need to work with context. Now, since we're managing some app wide state, many components or very different components in very different places of the app, need access to this context. For example, we will need access in the mealDetail screen but also this favorite screen, which is managed with the drawer navigator. To expose our context to both, I will simply go here, and wrap my entire navigation container with all the navigators and screens inside of it, with my favoriteContextProvider component. So, we have the opening tag here and the closing tag after the closing navigation container tag. And this favoritesContextProvider component, must be imported from our store folder and there the context folder and there the favorites context file. we must import it into App.js, to have that component available there. And with that, we set up our context shell but right now it won't work and it actually even gives us an error. And we will take care about that, and about the actual logic that should go into that context, in the next lecture.



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



```bash
 
```



