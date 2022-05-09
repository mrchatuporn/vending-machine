import { Dispatch } from 'redux';
import { TYPE, Action } from './types';

export const getMessage = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_MESSAGE,
    });
  } catch (e) {
    dispatch({
      type: TYPE.FAIL,
      payload: '',
    });
  }
};

export const setMessage = (message: string) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PENDING,
  });

  try {
    dispatch({
      type: TYPE.SET_MESSAGE,
      payload: message,
    });
  } catch (e) {
    dispatch({
      type: TYPE.FAIL,
      payload: '',
    });
  }
};

export const removeMessage = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PENDING,
  });

  try {
    dispatch({
      type: TYPE.REMOVE_MESSAGE,
    });
  } catch (e) {
    dispatch({
      type: TYPE.FAIL,
      payload: '',
    });
  }
};
