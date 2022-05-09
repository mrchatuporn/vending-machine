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
    case TYPE.PENDING:
      return { ...state, loading: true };
    case TYPE.FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case TYPE.GET_INVENTORY:
      return { ...state, loading: false, inventories: action.payload };
    case TYPE.REDUCE_INVENTORY:
      return {
        ...state,
        loading: false,
        inventories: state.inventories.map(inventory =>
          inventory.code === action.payload ? { ...inventory, quantity: inventory.quantity - 1 } : inventory
        ),
      };
    default:
      return state;
  }
};

export default inventoryReducer;
