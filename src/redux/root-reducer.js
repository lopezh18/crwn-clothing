import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
// will get local storage object on our window browser
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

// key is where we want to start storing the reducer
// whitelist is the array of reducers we want to store
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

// we are exporting by default a modified version of our root reducer with a persist config on top of it. Now our root reducer has persistence capabilities
export default persistReducer(persistConfig, rootReducer);
