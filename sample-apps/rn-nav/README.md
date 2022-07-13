# Nav

![https://img.shields.io/badge/library-react%20native-blue](https://img.shields.io/badge/library-react%20native-blue) ![https://img.shields.io/badge/library-expo-blue](https://img.shields.io/badge/library-expo-black) ![ios](https://img.shields.io/badge/OS-iOS-white) ![android](https://img.shields.io/badge/library-android-green) 

## Take Aways:


### Setting the Default Screen
When setting up a Navigator (like <Stack.Navigator>) and registering its screens (via <Stack.Screen>), you can decide which screen will be shown as a default when the app starts.

Out of the box, the top-most screen (i.e. the first child inside of <Stack.Navigator>) is used as the initial screen.

I.e., in the following example, the AllProducts screen would be shown as an initial screen when the app starts:
```js
<Stack.Navigator>
  <Stack.Screen name="AllProducts" component={AllProducts} /> // initial screen
  <Stack.Screen name="ProductDetails" component={ProductDetails} />
</Stack.Navigator>
```

You can therefore change the initial screen by changing the <Stack.Screen> order. Alternatively, there also is an initialRouteName prop that can be set on the navigator component (i.e., on <Stack.Navigator> in this case):
```js
<Stack.Navigator initialRouteName="ProductDetails">
  <Stack.Screen name="AllProducts" component={AllProducts} /> 
  <Stack.Screen name="ProductDetails" component={ProductDetails} /> // initial screen
</Stack.Navigator>

```

## Contact
<img src="https://avatars0.githubusercontent.com/u/17928947?v=4" alt="Github profile image" width="80px" height="80px" />

__Jon Christie__ 

GitHub: [mathcodes](https://github.com/mathcodes) 

[<code><img width="36px" src="https://img.icons8.com/color/48/000000/linkedin.png"/></code>](https://www.linkedin.com/jonchristie)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/twitter--v2.png"/></code>](https://twitter.com/jonpchristie)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/youtube-play.png"/></code>](https://www.youtube.com/channel/UC5GFnN-lv8Yuqc9O3b79k6g)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/facebook.png"/></code>](https://www.facebook.com/jonpchristie)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/instagram-new--v2.png"/></code>](https://www.instagram.com/fullstack11235)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/soundcloud.png"/></code>](https://soundcloud.com/jonchristie#/)       
[<code><img width="36" src="https://img.icons8.com/color/48/000000/spotify--v1.png"/></code>](https://open.spotify.com/artist/07S7aLfxH70VAX64g1WuFw?si=tlOj1OMBRLm-y4sY8Lox3Q)
