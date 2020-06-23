import { createSelector } from 'reselect';
//matches the string value from url param to the id of the shopping data
const COLLECTION_ID_MAP ={
  hats: 1,
  sneakers: 2,
  jackets: 3,
  womens: 4,
  mens: 5,
};

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

//curried function. returns whatever createSelector returns
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections.find(collection => collection.id === COLLECTION_ID_MAP[collectionUrlParam])
);
