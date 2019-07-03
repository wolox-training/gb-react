import { DATA } from '@constants/data';

/**
 * See the @@BOOKS? That's the namespace.
 * We use it to ensure an action type belongs to only one store branch. Also,
 * we can filter the actions shown by redux dev tools to see only the actions
 * related to @@BOOKS for easier debugging.
 */
export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  ADD_TO_CART: '@@BOOK/ADD_TO_CART',
  ADD_ITEM_QUANTITY: '@@BOOK/ADD_ITEM_QUANTITY',
  REMOVE_ITEM_FROM_CART: '@@BOOK/REMOVE_ITEM_FROM_CART',
  SEARCH_ITEM: '@@BOOK/SEARCH_ITEM'
};

const actionsCreators = {
  getBooks: () => ({
    type: actions.GET_BOOKS,
    payload: DATA
  }),
  addToCart: item => ({
    type: actions.ADD_TO_CART,
    payload: item
  }),
  addItem: itemId => ({
    type: actions.ADD_ITEM_QUANTITY,
    payload: itemId
  }),
  removeItem: item => ({
    type: actions.REMOVE_ITEM_FROM_CART,
    payload: item
  }),
  searchBook: value => ({
    type: actions.SEARCH_ITEM,
    payload: value
  })
};

export default actionsCreators;
