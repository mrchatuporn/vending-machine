import { Dispatch } from 'redux';
import { TYPE, Action } from './types';
import data from './data.json';

export const getInventory = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.GET_INVENTORY_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_INVENTORY_SUCCESS,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: TYPE.GET_INVENTORY_FAIL,
      payload: '',
    });
  }
};
