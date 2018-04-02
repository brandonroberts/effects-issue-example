import {Action} from '@ngrx/store';
import {Post} from '../model/post.model';

export const LOAD_POSTS = '[Load Posts]';
export const LOAD_POSTS_SUCCESS = '[Load Posts Success]';

export class LoadPostsAction implements Action {
  readonly type = LOAD_POSTS;
}

export class LoadPostsSuccessAction implements Action {
  readonly type = LOAD_POSTS_SUCCESS;
  constructor(public payload: Post[]) {}
}

export type ALL_ACTION_TYPES = LoadPostsAction | LoadPostsSuccessAction;
