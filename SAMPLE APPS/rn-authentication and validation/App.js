import { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import { Colors } from './constants/styles';
import AuthContextProvider, { AuthContext } from './store/auth-context';
import IconButton from './components/ui/IconButton';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
}
// in order to allow users to reach authenticated user pages, we need to store the data somewhere in the app (that tells us the user is authenticated/logged in)
// redux and react context are good ways to do this, lets use REACT CONTEXT

// So to protect our screens we only render this navigation if the user is authenticated

// LOGOUT BUTTON creationg
function AuthenticatedStack() {
  // to make the logout button work, we setup more context
  const authCtx = useContext(AuthContext);

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.primary500 },
        headerTintColor: 'white',
        contentStyle: { backgroundColor: Colors.primary100 },
      }}
    >
      {/* Here we will add a LOGOUT button to the header by using the option prop and setting this to an object where we add headerRight and render the button to be part of the header */}
      <Stack.Screen 
        name="Welcome" 
        component={WelcomeScreen} 
        options={{
        // within this IconButton component we will pass in the onPress prop and set it to the logoutHandler function, and the icon prop and set it to the exit icon
          headerRight: ({tintColor}) => 
            <IconButton 
              icon="exit" 
              color={tintColor} 
              size={24} 
              onPress={authCtx.logout}
            />
      }} />
    </Stack.Navigator>
  );
}

// THis is our ROOT APP COMPONENT, which we initially only render the AuthStack component
// After the changes we made below, we can render different screens based on the auth status which protects screens against unauthenticated users
function Navigation() {
  const authCtx = useContext(AuthContext)
  return (
  // Now to truly expose it, wrap the entire Navigation container with AuthContextProvider (must also be imported)
  // So we want to use state to decide which stack(component) to render, AuthStack or AuthenticatedStack(which holds the screens only for authenticated users). TO do this we want to use context in the top of this component's body, but first we need to move the AuthContextProvider and wrap it around the Navigation component in the App component below.
      <NavigationContainer>
        {/* Here we can wrap AuthStack in curly braces to render it dynamically 
        And we want to checkl if authCtx is NOT authenticated in which case we will use out AuthStack 
        Or if it IS TRUE, we use our authenticated stack */}        
        { !authCtx.isAuthenticated && <AuthStack />}
        { authCtx.isAuthenticated && <AuthenticatedStack />}
      </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <AuthContextProvider>
        <Navigation />
      </AuthContextProvider>
    </>
  );
}
