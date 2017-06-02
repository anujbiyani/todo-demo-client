import React from 'react';
import { View } from 'react-native';
import Header from './header/header';
import TodoListsComponent from './todo-lists/todo-lists-component';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header text='To-Do Lists' />
      <TodoListsComponent />
    </View>
  );
};

export default App;
