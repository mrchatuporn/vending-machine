import { combineReducers } from 'redux';
import inventoryReducer from './inventory/reducer';
import walletReducer from './wallet/reducer';

const reducers = combineReducers({
  inventory: inventoryReducer,
  wallet: walletReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
