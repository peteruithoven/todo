import test from 'tape';
import Test from 'legit-tests';
import React from 'react';
import ToDoList from '../../src/components/ToDoList.js';
import ToDoItem from '../../src/components/ToDoItem.js';

const COMPONENT = 'ToDoList > ';

const defaultData = [
  {
    text: 'Dishes',
    id: 0
  },
  {
    text: 'Wash',
    completed: true,
    id: 1
  },
]

test(COMPONENT+'when given two todos', (assert) => {
  Test(<ToDoList todos={defaultData} />)
  .find(ToDoItem)
  .element((items) => {
    var actual = items.length;
    var expected = defaultData.length;
    assert.equal(actual, expected, 'should create two ToDoItem\'s');
    assert.end();
  })
})
