import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './app.reducer';
import Router from './router';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Router />
      </View>
    </Provider>
  );
};

export default App;
