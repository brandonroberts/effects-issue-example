import {Post} from '../model/post.model';
import {ALL_ACTION_TYPES, LOAD_POSTS_SUCCESS} from './app.actions';

export interface AppState {
  posts: Post[];
}

export const reducer = function (state = {posts: []}, action: ALL_ACTION_TYPES): AppState {
  switch (action.type) {
    case LOAD_POSTS_SUCCESS:
      return {posts: action.payload};
    default:
      return state;
  }
};
