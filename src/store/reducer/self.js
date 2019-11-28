// import { deepClone } from '../../utils';
// import { message } from 'antd';
import { CHANGE_INPUT_VALUE, ADD, DELETE } from '../actions/self';

const initState = {
  value: '',
  list: ['你是猪吗', '大臭猪']
};

export default (state = initState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ADD:
      newState.list = [newState.value, ...newState.list];
      newState.value = '';
      return newState;
    case CHANGE_INPUT_VALUE:
      newState.value = action.value;
      return newState;
    case DELETE:
      newState.list.splice(action.value, 1);
      return newState;
    default: return newState;
  }
};
