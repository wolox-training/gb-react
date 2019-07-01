import { actions } from './actions';

const initialState = {
  books: [],
  bookSelected: [],
  originalData: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.GET_BOOKS: // TODO to implement the logic
      return { ...state, books: [...state.books] };
    case actions.ADD_TO_CART: // TODO to implement the logic
      return { ...state, bookSelected: [...state.bookSelected, actions.payload.itemId]};
    case actions.ADD_ITEM: // TODO to implement the logic
      return { ...state, books: [ ...state.books, actions.payload.itemId] };
    case actions.REMOVE_ITEM: // TODO to implement the logic
      return { ...state, books: [...state.books.filter(each => each.id !== actions.payload.itemId)] };
    case actions.SEARCH_ITEM: // TODO to implement the logic
      return { ...state, item: [...state.books.filter(each => each.name === actions.payload.itemId)]};
    default:
      return state;
  }
}

export default reducer;
