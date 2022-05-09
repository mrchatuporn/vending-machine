import { Dispatch } from 'redux';
import { TYPE, Action } from './types';
import data from './data.json';

export const getInventory = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_INVENTORY,
      payload: data,
    });
  } catch (e) {
    dispatch({
      type: TYPE.FAIL,
      payload: '',
    });
  }
};

export const reduceInventory = (code: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PENDING,
  });

  try {
    dispatch({
      type: TYPE.REDUCE_INVENTORY,
      payload: code,
    });
  } catch (e) {
    dispatch({
      type: TYPE.FAIL,
      payload: '',
    });
  }
};
