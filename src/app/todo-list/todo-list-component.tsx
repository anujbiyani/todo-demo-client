import React, { Component } from 'react';
import { ListView, ListViewDataSource, StyleSheet, Text, TextStyle, View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import * as todoListActions from './todo-list.actions';
import { TodoList } from './todo-list';
import { TodoItem } from '../todo-item/todo-item';
import { getSelectedTodoList } from '../todo-lists/todo-lists.reducer';

export interface Props {
  todoLists: TodoList[];
  selectedTodoList: number;
}

export interface State { }

class TodoListComponent extends Component<Props, State> {
  private dataSource: ListViewDataSource;

  componentWillMount(): void {
    this.createDateSource(this.props);
  }

  componentWillReceiveProps(nextProps): void {
    this.createDateSource(nextProps);
  }

  render() {
    return (
      <ListView dataSource={this.dataSource}
                renderRow={this.renderRow}>
      </ListView>
    );
  }

  private renderRow({ id, name, done }: TodoItem) {
    const { text, container, completed } = styles;

    return (
      <View key={id}
            style={container}>
        <Text style={text}>{name}</Text>
        <Text style={completed}>Completed: {done ? 'yes' : 'no'}</Text>
      </View>
    );
  }

  private createDateSource({ todoLists, selectedTodoList }: Props) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    let todoItems = getSelectedTodoList(todoLists, selectedTodoList).items;

    this.dataSource = ds.cloneWithRows(todoItems);
  }
}

const styles: any = StyleSheet.create({
  text: {
    fontSize: 15,
    flex: 2,
    paddingLeft: 20
  } as TextStyle,

  completed: {
    flex: 1
  } as TextStyle,

  container: {
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    height: 45,
    zIndex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch'
  } as ViewStyle
});

const mapStateToProps = state => {
  return {
    todoLists: state.todoLists,
    selectedTodoList: state.todoList.selectedTodoList
  };
};

export default connect(mapStateToProps, todoListActions)(TodoListComponent);
