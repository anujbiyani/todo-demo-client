import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import App from './app';

export interface Props { }
export interface State { }

export default class TodoDemo extends Component<Props, State> {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('TodoDemo', () => TodoDemo);
