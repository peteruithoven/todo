import React, {PropTypes} from 'react';
import ReactDom from 'react-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import ToDoList from '../components/ToDoList.js';
import Input from '../components/Input.js';

import * as Actions from '../actions/index.js';

@connect((state) => ({state}))
export default class ToDoApp extends React.Component {
  componentWillMount() {
    const {dispatch} = this.props;
    this.actions = bindActionCreators(Actions, dispatch)
  }
  handleSubmit = (text) => {
    this.actions.addTodo(text);
  }
  render () {
    const todos = this.props.state;
    return (
      <div>
        <Input onSubmit={this.handleSubmit} placeholder='ToDo?' />
        <ToDoList todos={todos} />
      </div>
    );
  }
}
