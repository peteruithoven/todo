import test from 'tape';
import Test from 'legit-tests';
import React from 'react';
import ToDoItem from '../../src/components/ToDoItem.js';

const COMPONENT = 'ToDoItem > ';

const defaultData = {
  text: 'Dishes',
  completed: false
}

test(COMPONENT+' completed style > default', (assert) => {
  Test(<ToDoItem text='Dishes' />)
  .find('div')
  .element('div',(div) => {
    var actual = div.getAttribute('class');
    var expected = '';
    assert.equal(actual, expected, 'should have empty class');
    assert.end();
  })
})
test(COMPONENT+' completed style > not completed', (assert) => {
  Test(<ToDoItem text='Dishes' completed={false} />)
  .find('div')
  .element('div',(div) => {
    var actual = div.getAttribute('class');
    var expected = '';
    assert.equal(actual, expected, 'should have empty class');
    assert.end();
  })
})
test(COMPONENT+' completed style > completed', (assert) => {
  Test(<ToDoItem text='Dishes' completed={true} />)
  .find('div')
  .element('div',(div) => {
    var actual = div.getAttribute('class');
    var expected = 'completed';
    assert.equal(actual, expected, 'should have completed class');
    assert.end();
  })
})

test(COMPONENT+' text', (assert) => {
  Test(<ToDoItem {...defaultData} />)
  .find('.text')
  .element((textElem) => {
    assert.notEqual(textElem, null, 'should contain text element');
    var actual = textElem.textContent;
    var expected = defaultData.text;
    assert.equal(actual, expected, 'should contain given text');
    assert.end();
  })
})
