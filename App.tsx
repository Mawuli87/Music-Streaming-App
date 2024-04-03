import AppCotnainer from '@components/AppCotnainer';
import {clearAsyncStorage} from '@utils/asyncStorage';
import {Provider} from 'react-redux';
import AppNavigator from 'src/navigation/AppNavigator';

import store from 'src/store';

const App = () => {
  // clearAsyncStorage().then(() => {
  //   console.log('logged out');
  // });
  return (
    <Provider store={store}>
      <AppCotnainer>
        <AppNavigator />
      </AppCotnainer>
    </Provider>
  );
};

export default App;
