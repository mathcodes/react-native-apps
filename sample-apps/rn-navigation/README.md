# React Native Navigation

As with many of my repos, this is a learning-based solo project to enhance my React and React-Native skills. Feel free to contribute and enjoy the notes and snippets below. Be sure to check out the sample apps in [THIS](https://github.com/mathcodes/react-native-goals-app/tree/main/sample-apps) directory.

## Usage and Installation
Here are the dependencies you'll be installing with the first command:
```json
"dependencies": {
  "@react-navigation/native": "^6.0.10",
  "@react-navigation/native-stack": "^6.6.2",
  "expo": "~44.0.0",
  "expo-status-bar": "~1.2.0",
  "react": "17.0.1",
  "react-dom": "17.0.1",
  "react-native": "0.64.3",
  "react-native-safe-area-context": "3.3.2",
  "react-native-screens": "~3.10.1",
  "react-native-web": "0.17.1"
},
```
Each app will run on your own smart phone using the expo app, or on the Android or iOS emulators after running each of the following commands:
```
yarn
```
```
yarn start
```
You should something similar to the following in your terminal explaining how to launch the app on your device or emulator:

<img src="../assets/terminal.png" width="70%" />

# Key Takeaways from building this app

## NavigationContainer:

```js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      {/* Rest of your app code */}
    </NavigationContainer>
  );
};

export default App;
```

<img src="./assets/ss1.png" width="20%"/>

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