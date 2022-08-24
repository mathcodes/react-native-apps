import { useContext, useState } from 'react';
import { Alert } from 'react-native';

import AuthContent from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/ui/LoadingOverlay';
import { AuthContext } from '../store/auth-context';
import { createUser } from '../util/auth';

function SignupScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const authCtx = useContext(AuthContext);

  // here we want to add async await since createUser returns a promise because it is an async function
  /// and await createUser
  async function signupHandler({ email, password }) {
    // here we use useState to manage some loading state bound above with default false
    // so once we submit form we can set this to true
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert(
        'Authentication failed',
        'Could not create user, please check your input and try again later.'
      );
      // once we are done creating user we can set back to false
      setIsAuthenticating(false);
    }
  }

   // now lets ue the loading state to is if isAuthenticating is true
  if (isAuthenticating) {
    // return LoadingOverlay component which wants a message prop, so set it to any string of your choice
    return <LoadingOverlay message="Jon creates the user..." />;
  }
  // return AuthContent component which wants an onAuthenticate prop, so set it to the signupHandler function
  return <AuthContent onAuthenticate={signupHandler} />;
}

export default SignupScreen;
