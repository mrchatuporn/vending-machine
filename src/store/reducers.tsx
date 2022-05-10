import { combineReducers } from 'redux';
import inventoryReducer from './inventory/reducer';
import walletReducer from './wallet/reducer';
import messageReducer from './message/reducer';
import pricesReducer from './prices/reducer';
import loggerReducer from './logger/reducer';

const reducers = combineReducers({
  inventory: inventoryReducer,
  wallet: walletReducer,
  message: messageReducer,
  prices: pricesReducer,
  logger: loggerReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
