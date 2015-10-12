import React, {PropTypes} from 'react';

export default class Input extends React.Component {
  static propTypes = {
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
  }
  static defaultProps = {
    placeholder: ''
  }
  handleSubmit = (e) => {
    console.log('handleSubmit');
    e.preventDefault();
    let text = this.refs.text.value.trim();
    console.log('  text: ', text);
    if (!text) return;
    this.props.onSubmit(text);
    this.refs.text.value = '';
  }
  render () {
    const {placeholder} = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type='text' ref='text' placeholder={placeholder} />
        <input type='submit' value='Add' />
      </form>
    );
  }
}
