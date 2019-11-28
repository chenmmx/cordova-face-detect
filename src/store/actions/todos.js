import testService from '../../services/test/test';

const name = 'todos';

export const ADD_TODOS = 'ADD_TODOS';
export const GET_LIST = 'GET_LIST';
export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';
export const DELETE_TODOS = 'DELETE_TODOS';


export function addTodos(value) {
  return {
    type: ADD_TODOS,
    value,
    name
  };
}

export function changeInputValue(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
    name
  };
}

export function deleteTodos(value) {
  return {
    type: DELETE_TODOS,
    value,
    name
  };
}

export function getListAction(data) {
  return {
    type: GET_LIST,
    data,
    name
  };
}

export function getList() {
  return async (dispatch) => {
    const result = await testService.getPersonList();
    const action = getListAction(result.data);
    dispatch(action);
  };
}
