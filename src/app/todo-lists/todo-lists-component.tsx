import React, { Component } from 'react';
import { ListView, ListViewDataSource, StyleSheet, Text, TextStyle, TouchableOpacity, View, ViewStyle } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { TodoList } from '../todo-list/todo-list';
import { setTodoLists } from './todo-lists.actions';
import { selectTodoList } from '../todo-list/todo-list.actions';
import { bindActionCreators } from 'redux';
import { getSelectedTodoList } from './todo-lists.reducer';

export interface Props {
  todoLists: TodoList[];
  setTodoLists: any;
  selectTodoList: any;
}

export interface State { }

class TodoListsComponent extends Component<Props, State> {
  private dataSource: ListViewDataSource;

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
    this.renderRow = this.renderRow.bind(this);
  }

  private renderRow({ id, name }: TodoList) {
    const { container, touchable, text } = styles;

    return (
      <View key={id}
            style={container}>
        <TouchableOpacity style={touchable} onPress={() => this.navigateToList(id)}>
          <Text style={text}>
            {name}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  private navigateToList(id: number) {
    this.props.selectTodoList(id);

    Actions.todoList({ title: getSelectedTodoList(this.props.todoLists, id).name });
  }
}

const mapStateToProps = state => {
  return {
    todoLists: state.todoLists
  };
};

function mapDispatchToProps(dispatch) {
  return {
    setTodoLists: bindActionCreators(setTodoLists, dispatch),
    selectTodoList: bindActionCreators(selectTodoList, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoListsComponent);

const styles: any = StyleSheet.create({
  text: {
    fontSize: 15
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
