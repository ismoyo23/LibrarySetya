import {combineReducers} from 'redux';
// =============================================
// import from reducers auth
import auth from './auth';
import register from './register';
import booksGet from './books/booksGet';
import borrowGet from './borrow/borrowGet';
// export combine reducers
export default combineReducers({
  // =========================================//
  // export auth //
  auth,
  register,

  // =========================================//
  // export books //
  booksGet,
  // =========================================//
  // export borrow //
  borrowGet,
});
