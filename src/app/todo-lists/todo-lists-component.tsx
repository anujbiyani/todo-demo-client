import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
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
    const { container, touchable, text } = styles;

    return todoLists.map(todoList =>
      <View key={todoList.id}
            style={container}>
        <TouchableOpacity style={touchable} onPress={() => this.navigateToList(todoList.id)}>
          <Text style={text}>
            {todoList.name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  private navigateToList(id: number) {
    console.log(id);
  }
}

const styles: any = StyleSheet.create({
  text: {
    fontSize: 15,
  } as TextStyle,

  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 45,
    zIndex: 1
  } as ViewStyle,

  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    flex: 1
  } as ViewStyle
});
