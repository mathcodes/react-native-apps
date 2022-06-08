For backgroundColor:

```js    
"icon": "./assets/icon.png",
"backgroundColor": "#ffffff",
"splash": {
```

What I will do instead though is, I will add a background color with help of a view:
```js
<View style={styles.buttonOuterContainer}>
  <Pressable 
  // style prop can also take a function which is automatically called by react when pressable is pressed
  //  'pressed' is a react native property which part of the object and passed into the arrow function 
    style={({pressed}) => pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer} 
    onPress={pressHandler} 
    android_ripple={{ color: '#000' }}
  >
    <Text style={styles.buttonText}>
      {children}
    </Text>
  </Pressable>
</View>
```

Now, how can we fetch and handle the user input with good old state Because again, it is just a React component:

`StartGameScreen.js`:
```js
import { useState } from 'react';

...

  // Now with bind this to the TextInput, I mean that I wanna set the value prop on TextInput and set this equal to enteredNumber. I do this so that we can change the state from anywhere in this app.
  const [enteredNumber, setEnteredNumber] = useState('');

...
  return (
    <View style={styles.inputContainer}>
      <TextInput 
        style={styles.numberInput} 
        maxLength={2} 
        keyboardType='number-pad'
        autoCapitalize='none'
        autoCorrect={false}
        //  when the Reset button is clicked to reset it to an empty string and such state changes are then reflected in TextInput. That's why I'm setting the value prop to the state.
        value={enteredNumber}
      />

...

```

## confirmInputHandler

The second step of course is to connect this Confirm button. For this, I'll add another function here which I'll name confirmInputHandler. And the idea here is that we then 
- check the current state that we have, 
- check if it's a number and if it's greater or equal than one and smaller or equal than 99 
- only wanna allow numbers in that range

- then we proceed to the next screen if it's valid and we show an alert, otherwise.


Now let's first connect this to the Button though. And for this, our PrimaryButton should expose a prop that does allow us to pass in a function:
```js

```
