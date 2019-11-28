const name = 'self';

export const CHANGE_INPUT_VALUE = 'CHANGE_INPUT_VALUE';

export const ADD = 'ADD';

export const DELETE = 'DELETE';

export function changeInputValue(value) {
  return {
    type: CHANGE_INPUT_VALUE,
    value,
    name
  };
}

export function addItem() {
  return {
    type: ADD,
    name
  };
}

export function deleteItem(value) {
  return {
    type: DELETE,
    value,
    name
  };
}
