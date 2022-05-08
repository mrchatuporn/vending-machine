import { Action, TYPE } from './types';

export interface IInventory {
  id: number;
  name: string;
  code: string;
  color: string;
  quantity: number;
  price: number;
}

interface IState {
  inventories: IInventory[];
  loading: boolean;
  error: string | null;
}

const initialState = {
  inventories: [],
  loading: false,
  error: null,
};

const inventoryReducer = (state: IState = initialState, action: Action): IState => {
  switch (action.type) {
    case TYPE.GET_INVENTORY_PENDING:
      return {
        loading: true,
        inventories: [],
        error: null,
      };
    case TYPE.GET_INVENTORY_SUCCESS:
      return {
        loading: false,
        inventories: action.payload,
        error: null,
      };
    case TYPE.GET_INVENTORY_FAIL:
      return {
        loading: false,
        inventories: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
