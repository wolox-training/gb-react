import { DATA as fakeBooks } from '../../constants/data';

import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: fakeBooks
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS:
      return {
        ...state,
        originalData: [...action.payload],
        books: [...action.payload]
      };
    case actions.ADD_TO_CART: {
      const addedBook = { ...action.payload, amount: 1 };
      return {
        ...state,
        bookSelected: [...state.bookSelected, addedBook]
      };
    }
    case actions.ADD_ITEM_QUANTITY: {
      const bookIndex = state.bookSelected.findIndex(b => b.id === action.payload.id);
      const book = { ...state.bookSelected[bookIndex] };
      const updatedBookSelected = { ...book, amount: book.amount + 1 };
      const newBooksSelected = [...state.bookSelected];
      newBooksSelected[bookIndex] = updatedBookSelected;
      return {
        ...state,
        bookSelected: newBooksSelected
      };
    }
    case actions.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        bookSelected: [...state.bookSelected.filter(each => each.id !== action.payload.id)]
      };
    case actions.SEARCH_ITEM:
      return {
        ...state,
        books: [...state.originalData.filter(each => each.name.toLowerCase().includes(action.payload))]
      };
    default:
      return state;
  }
}

export default reducer;
