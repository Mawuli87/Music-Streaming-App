import LostPassword from '@views/auth/LostPassword';
import SignIn from '@views/auth/SignIn';
import SignUp from '@views/auth/SignUp';
import Verification from '@views/auth/Verification';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from 'src/navigation/AuthNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};

export default App;
