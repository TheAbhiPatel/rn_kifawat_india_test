import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackRoutes from './src/routes/StackRoutes';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
