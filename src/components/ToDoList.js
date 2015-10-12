import React, {PropTypes} from 'react';
import ToDoItem from '../components/ToDoItem.js';

export default class ToDoList extends React.Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool
    }))
  }
  static defaultProps = {
    todos: []
  }
  render () {
    const {todos} = this.props;
    return (
      <div>
        {todos.map((todo) => {
          return <ToDoItem text={todo.text} completed={todo.completed} />
        })}
      </div>
    );
  }
}
