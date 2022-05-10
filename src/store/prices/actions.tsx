import { Dispatch } from 'redux';
import { TYPE, Action } from './types';
import data from './data.json';
import { IPrice } from './reducer';
import { IBalance } from '../../helper/calculate';

export const setPrice = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.SET_PRICE,
      payload: data,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const getPrice = () => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.GET_PRICE,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const depositPrice = (price: number) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.DEPOSIT_PRICE,
      payload: price,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};

export const withdrawPrice = (prices: IBalance[]) => (dispatch: Dispatch<Action>) => {
  dispatch({
    type: TYPE.PRICE_PENDING,
  });

  try {
    dispatch({
      type: TYPE.WITHDRAW_PRICE,
      payload: prices,
    });
  } catch (e: any) {
    dispatch({
      type: TYPE.PRICE_FAIL,
      payload: e.message,
    });
  }
};
