import { combineReducers } from 'redux';
import todos from './todos';
import self from './self';

// reducer过滤器
function createFilteredReducer(reducerFunction, reducerPredicate) {
  return (state, action) => {
    const isInitializationCall = state === undefined;
    const shouldRunWrappedReducer = reducerPredicate(action) || isInitializationCall;
    return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
  };
}

const rootReducer = combineReducers({
  todos: createFilteredReducer(todos, (action) => action.name === 'todos'),
  self: createFilteredReducer(self, (action) => action.name === 'self')
});

export default rootReducer;
