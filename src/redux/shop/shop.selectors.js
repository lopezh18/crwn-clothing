import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

//curried function. returns whatever createSelector returns
export const selectCollection = collectionUrlParam => createSelector(
  [selectCollections],
  collections => collections[collectionUrlParam]
);
