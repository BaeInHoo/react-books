import { createActions, handleActions } from "redux-actions";
import { call, put, select, takeLatest } from "redux-saga/effects";
import BookService from "../../services/BookService";
import { BooksState, BookType } from "../../types";



const initialState: BooksState = {
  books: null,
  loading: false,
  error: null,
};

const prefix = "react-books/books";

export const {pending, success, fail} = createActions("PENDING", "SUCCESS", "FAIL", {prefix});

const reducer = handleActions<BooksState, BookType>({
  PENDING: (state) => ({ ...state, loading: true, error: null }),
  SUCCESS: (state, action) => ({
    books: action.payload,
    loading: false,
    error: null,
  }),
  FAIL: (state, action: any) => ({
    ...state,
    loading: false,
    error: action.payload,
  }),
}, initialState, {prefix});

export default reducer;

// saga

export const { getBooks } = createActions("GET_BOOKS", {
  prefix,
});

function* getBooksSaga() {
  try {
    yield put(pending());
    const token: string = yield select((state) => state.auth.token);
    const books: BookType[] = yield call(BookService.getBooks, token);
    yield put(success(books));
  } catch (err) {
    yield put(fail(new Error('UNKNOWN_ERROR')))
  }
}

export function* booksSaga() {
  yield takeLatest(`${prefix}/GET_BOOKS`, getBooksSaga);
}