import SHOP_DATA from './shopping-data';

const INITIAL_STATE = {
  collections: SHOP_DATA,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  // since we have no actions we can return the default
  switch(action.type) {
    default:
      return state;
  }
};

export default shopReducer;
