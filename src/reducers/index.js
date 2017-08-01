import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

//any key provided on our global reducers ends up as a key on our global state

export default rootReducer;
