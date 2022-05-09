export enum TYPE {
  PENDING = 'MESSAGE_PENDING',
  FAIL = 'MESSAGE_FAIL',
  GET_MESSAGE = 'GET_MESSAGE',
  SET_MESSAGE = 'SET_MESSAGE',
  REMOVE_MESSAGE = 'REMOVE_MESSAGE',
}

interface PENDING {
  type: TYPE.PENDING;
}

interface FAIL {
  type: TYPE.FAIL;
  payload: string;
}

interface GET_MESSAGE {
  type: TYPE.GET_MESSAGE;
}

interface SET_MESSAGE {
  type: TYPE.SET_MESSAGE;
  payload: string;
}

interface REMOVE_MESSAGE {
  type: TYPE.REMOVE_MESSAGE;
}

export type Action = PENDING | FAIL | GET_MESSAGE | SET_MESSAGE | REMOVE_MESSAGE;
