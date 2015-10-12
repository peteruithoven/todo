import test from 'tape';
import rootReducer from '../src/reducers/index.js';
import * as actions from '../src/actions/index.js';

test('rootReducer initial state', (assert) => {
	const actual = rootReducer(undefined, {});
	const expected = [];
	assert.deepEqual(actual, expected, 'should be an empty array');
	assert.end();
})

test('rootReducer when given ADD_TODO action', (assert) => {
	const actual = rootReducer([], actions.addTodo('dishes', false));
	const expected = [{id: 0, text: 'dishes', completed: false}];
	assert.deepEqual(actual, expected, 'should add a todo item');
	assert.end();
})
