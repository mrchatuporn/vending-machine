import { combineReducers } from 'redux';
import inventoryReducer from './inventory/reducer';
import walletReducer from './wallet/reducer';
import messageReducer from './message/reducer';

const reducers = combineReducers({
  inventory: inventoryReducer,
  wallet: walletReducer,
  message: messageReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
