import React, { Component } from 'react';
import { ListView, ListViewDataSource, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';

import { TodoList } from '../todo-list/todo-list';
import * as todoListsActions from './todo-lists.actions';

export interface Props {
  todoLists: TodoList[];
  setTodoLists: any;
}

export interface State { }

class TodoListsComponent extends Component<Props, State> {
  private dataSource: ListViewDataSource;

  private static navigateToList(id: number) {
    console.log(id);
  }

  componentWillMount(): void {
    this.createDataSource(this.props);

    fetch('http://localhost:3000/lists', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => {
      return response.json();
    }).then((responseJson) => {
      this.props.setTodoLists(responseJson);
    }).catch((error) => console.log(error));
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  render() {
    return (
      <ListView dataSource={this.dataSource}
                renderRow={this.renderRow}>
      </ListView>
    );
  }

  private createDataSource({ todoLists }: Props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(todoLists);
  }

  private renderRow({ id, name }: TodoList) {
    const { container, touchable, text } = styles;

    return (
      <View key={id}
            style={container}>
        <TouchableOpacity style={touchable} onPress={() => TodoListsComponent.navigateToList(id)}>
          <Text style={text}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    todoLists: state.todoLists
  };
};

export default connect(mapStateToProps, todoListsActions)(TodoListsComponent);

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
