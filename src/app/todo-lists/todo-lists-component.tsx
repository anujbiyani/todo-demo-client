import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { TodoList } from '../todo-list/todo-list';

export interface Props { }
export interface State {
  todoLists: TodoList[];
}

export default class TodoListsComponent extends Component<Props, State> {
  state = { todoLists: [] };

  componentWillMount(): void {
    fetch('http://localhost:3000/lists', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      this.setState({ todoLists: responseJson });
    }).catch((error) => console.log(error));
  }

  render() {
    return (
      <ScrollView>
        {this.renderTodoLists()}
      </ScrollView>
    );
  }

  private renderTodoLists() {
    const { todoLists } = this.state;
    const { container, text } = styles;

    return todoLists.map(todoList =>
      <View key={todoList.id}
            style={container}>
        <Text style={text}>
          {todoList.name}
        </Text>
      </View>
    );
  }
}

const styles: any = StyleSheet.create({
  text: {
    fontSize: 15
  } as TextStyle,

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    zIndex: 1
  } as ViewStyle
});
