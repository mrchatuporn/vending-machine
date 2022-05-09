import { IInventory } from './reducer';

export enum TYPE {
  PENDING = 'INVENTORY_PENDING',
  FAIL = 'INVENTORY_FAIL',
  GET_INVENTORY = 'GET_INVENTORY',
  REDUCE_INVENTORY = 'REDUCE_INVENTORY',
}

interface PENDING {
  type: TYPE.PENDING;
}

interface FAIL {
  type: TYPE.FAIL;
  payload: string;
}

interface GET_INVENTORY {
  type: TYPE.GET_INVENTORY;
  payload: IInventory[];
}

interface REDUCE_INVENTORY {
  type: TYPE.REDUCE_INVENTORY;
  payload: string;
}

export type Action = PENDING | FAIL | GET_INVENTORY | REDUCE_INVENTORY;
