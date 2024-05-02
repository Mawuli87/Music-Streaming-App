import AppCotnainer from '@components/AppCotnainer';
import {clearAsyncStorage} from '@utils/asyncStorage';
import {Provider} from 'react-redux';
import AppNavigator from 'src/navigation/AppNavigator';
import {QueryClient, QueryClientProvider} from 'react-query';

import store from 'src/store';

const queryClient = new QueryClient();

const App = () => {
  // clearAsyncStorage().then(() => {
  //   console.log('logged out');
  // });
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <AppCotnainer>
          <AppNavigator />
        </AppCotnainer>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
