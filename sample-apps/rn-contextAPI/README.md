

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
