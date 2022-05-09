export enum TYPE {
  WALLET_PENDING = 'WALLET_PENDING',
  WALLET_FAIL = 'WALLET_FAIL',
  GET_WALLET = 'GET_WALLET',
  DEPOSIT_WALLET = 'DEPOSIT_WALLET',
  REDUCE_WALLET = 'REDUCE_WALLET',
}

interface WALLET_PENDING {
  type: TYPE.WALLET_PENDING;
}

interface WALLET_FAIL {
  type: TYPE.WALLET_FAIL;
  payload: string;
}

interface GET_WALLET {
  type: TYPE.GET_WALLET;
}

interface DEPOSIT_WALLET {
  type: TYPE.DEPOSIT_WALLET;
  payload: number;
}

interface REDUCE_WALLET {
  type: TYPE.REDUCE_WALLET;
  payload: number;
}

export type Action = WALLET_PENDING | WALLET_FAIL | GET_WALLET | DEPOSIT_WALLET | REDUCE_WALLET;
