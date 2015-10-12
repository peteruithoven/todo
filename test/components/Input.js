import test from 'tape';
import Test from 'legit-tests';
import React from 'react';
import Input from '../../src/components/Input.js';
import Sinon from 'sinon';
const COMPONENT = 'Input > ';

function setup(props) {
  const submitHandler = Sinon.spy();
  return {
    submitHandler,
    input: Test(<Input onSubmit={submitHandler} {...props} />)
  }
}

test(COMPONENT+' without placeholder', (assert) => {
  const {input} = setup();
  input.find('input')
  .element((inputs) => {
    inputs
      .filter((input) => input.getAttribute('type') == 'text')
      .map((input) => {
        var actual = input.getAttribute('placeholder');
        var expected = '';
        assert.equal(actual, expected, 'should not create placeholder');
        assert.end();
      })
  })
})
test(COMPONENT+' with placeholder', (assert) => {
  const {input} = setup({placeholder:'ToDo?'});
  input.find('input')
  .element((inputs) => {
    inputs
      .filter((input) => input.getAttribute('type') == 'text')
      .map((input) => {
        var actual = input.getAttribute('placeholder');
        var expected = 'ToDo?';
        assert.equal(actual, expected, 'should create placeholder');
        assert.end();
      })
  })
})
test(COMPONENT+' when submitted with text', (assert) => {
  const {input, submitHandler} = setup();
  input.find('input')
  .element((inputs) => {
    inputs
      .filter((input) => input.getAttribute('type') == 'text')
      .map((input) => input.value = 'Dishes')
  })
  .find('form')
  .simulate({method: 'submit', element: 'form'})
  .test(function() {
    assert.ok(submitHandler.calledWith('Dishes'), 'should call handler with text');
    assert.end();
  })
});
test(COMPONENT+' when submitted without text', (assert) => {
  const {input, submitHandler} = setup();
  input.find('form')
  .simulate({method: 'submit', element: 'form'})
  .test(function() {
    var actual = submitHandler.called;
    var expected = false;
    assert.equal(actual, expected, 'should not call handler');
    assert.end();
  })
})
