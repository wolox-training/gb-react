import { DATA as fakeBooks } from '../../constants/data';

import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: fakeBooks
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state, originalData: [...action.payload], books: [...action.payload] };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected, action.payload] };
    case actions.ADD_ITEM_QUANTITY: // TODO to implement the logic
      return { ...state, books: [...state.books, action.payload.itemId] };
    case actions.REMOVE_ITEM_FROM_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected.filter(each => each.id !== action.payload.id)] };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return {
        ...state,
        books: [...state.originalData.filter(each => each.name.toLowerCase().includes(action.payload))]
      };
    default:
      return state;
  }
}

export default reducer;
