import { Action, TYPE } from './types';

interface IState {
  wallet: number;
  loading: boolean;
  error: string | null;
}

const initialState = {
  wallet: 0,
  loading: false,
  error: null,
};

const walletReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.GET_WALLET_PENDING:
      return {
        loading: true,
        wallet: state.wallet,
        error: null,
      };
    case TYPE.GET_WALLET_SUCCESS:
      return {
        loading: false,
        wallet: state.wallet,
        error: null,
      };
    case TYPE.GET_WALLET_FAIL:
      return {
        loading: false,
        wallet: state.wallet,
        error: action.payload,
      };
    case TYPE.SET_WALLET_PENDING:
      return {
        loading: true,
        wallet: state.wallet,
        error: null,
      };
    case TYPE.SET_WALLET_SUCCESS:
      return {
        loading: false,
        wallet: state.wallet + action.payload,
        error: null,
      };
    case TYPE.SET_WALLET_FAIL:
      return {
        loading: false,
        wallet: state.wallet,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default walletReducer;
