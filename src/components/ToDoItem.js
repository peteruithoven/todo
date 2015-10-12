import React, {PropTypes} from 'react';

export default class ToDoItem extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool
  }
  static defaultProps = {
    text: '',
    completed: false
  }
  render () {
    const {text, completed} = this.props;
    const className = (completed)? 'completed' : '';
    return (
      <div className={className}>
        <p className="text">{text}</p>
      </div>
    );
  }
}
