import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './app.reducer';
import Header from './header/header';
import TodoListsComponent from './todo-lists/todo-lists-component';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header text='To-Do Lists' />
        <TodoListsComponent />
      </View>
    </Provider>
  );
};

export default App;
