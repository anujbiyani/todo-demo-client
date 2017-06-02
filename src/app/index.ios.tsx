import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './header/header';
import TodoListsComponent from './todo-lists/todo-lists-component';

export interface Props { }
export interface State { }

export default class TodoDemo extends Component<Props, State> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header text='To-Do Lists' />
        <TodoListsComponent />
      </View>
    );
  }
}

AppRegistry.registerComponent('TodoDemo', () => TodoDemo);
