import { deepClone } from '../../utils';
import { ADD_TODOS, GET_LIST, CHANGE_INPUT_VALUE } from '../actions/todos';

const defaultState = {
  value: '123',
  dataList: []
};

export default (state = defaultState, action) => {
  // Reducer里只能接收state，不能改变state
  // 不能在Reducer中进行数据请求，因为Reducer必须是纯函数
  const newState = deepClone(state);
  switch (action.type) {
    case ADD_TODOS:
      newState.dataList = [action.value, ...newState.dataList];
      return newState;
    case GET_LIST:
      newState.dataList = action.data.result;
      return newState;
    case CHANGE_INPUT_VALUE:
      newState.value = action.value;
      return newState;
    default: return newState;
  }
};
