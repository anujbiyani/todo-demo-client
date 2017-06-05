import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import TodoListsComponent from './todo-lists/todo-lists-component';
import TodoListComponent from './todo-list/todo-list-component';

export interface Props {}
export interface State {}

class RouterComponent extends Component<Props, State> {
  render() {
    return (
      <Router sceneStyle={{ paddingTop: 65 }}>
        <Scene key='todoLists' component={TodoListsComponent} title='All To-do Lists' initial />
        <Scene key='todoList' component={TodoListComponent} />
      </Router>
    );
  }
}

export default RouterComponent;
