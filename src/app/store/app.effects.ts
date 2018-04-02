import {Injectable} from '@angular/core';
import {PostService} from '../service/post.service';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {LOAD_POSTS, LoadPostsSuccessAction} from './app.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class PostEffects {

  constructor(private postService: PostService, private actions: Actions) {
  }

  @Effect()
  loadPosts: Observable<Action> = this.actions
    .ofType(LOAD_POSTS)
    .switchMap(() => this.postService.getPosts()
      .map(response => new LoadPostsSuccessAction(response)));
}
