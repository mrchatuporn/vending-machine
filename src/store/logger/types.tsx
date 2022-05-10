import { ILogger } from './reducer';

export enum TYPE {
  PENDING = 'LOGGER_PENDING',
  FAIL = 'LOGGER_FAIL',
  GET_LOGGER = 'GET_LOGGER',
  SET_LOGGER = 'SET_LOGGER',
}

interface PENDING {
  type: TYPE.PENDING;
}

interface FAIL {
  type: TYPE.FAIL;
  payload: string;
}

interface GET_LOGGER {
  type: TYPE.GET_LOGGER;
}

interface SET_LOGGER {
  type: TYPE.SET_LOGGER;
  payload: ILogger;
}

export type Action = PENDING | FAIL | GET_LOGGER | SET_LOGGER;
