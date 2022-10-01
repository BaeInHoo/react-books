import { RouterState } from "connected-react-router";
import { Reducer } from "react";
import { AnyAction } from "redux";

export type LoginReqType = {
  email: string;
  password: string;
};

export interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

export interface BooksState {
  books: BookType[] | null;
  loading: boolean;
  error: Error | null;
}

export interface RootState {
  auth: AuthState;
  books:
  router: Reducer<RouterState<unknown>, AnyAction>
}

export interface BookType {

}