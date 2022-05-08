import { IInventory } from './reducer';

export enum TYPE {
  GET_INVENTORY_PENDING = 'GET_INVENTORY_PENDING',
  GET_INVENTORY_SUCCESS = 'GET_INVENTORY_SUCCESS',
  GET_INVENTORY_FAIL = 'GET_INVENTORY_FAIL',
}

interface PENDING {
  type: TYPE.GET_INVENTORY_PENDING;
}

interface SUCCESS {
  type: TYPE.GET_INVENTORY_SUCCESS;
  payload: IInventory[];
}

interface FAIL {
  type: TYPE.GET_INVENTORY_FAIL;
  payload: string;
}

export type Action = PENDING | SUCCESS | FAIL;
