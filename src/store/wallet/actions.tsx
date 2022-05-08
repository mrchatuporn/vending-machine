import { Dispatch } from 'redux';
import { TYPE, Action } from './types';

export const getWallet = () => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.GET_WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_WALLET_SUCCESS,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.GET_WALLET_FAIL,
      payload: e.message,
    });
  }
};

export const setWallet = (price: number) => async (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.SET_WALLET_PENDING,
  });

  try {
    dispatch({
      type: TYPE.SET_WALLET_SUCCESS,
      payload: price,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.SET_WALLET_FAIL,
      payload: e.message,
    });
  }
};
