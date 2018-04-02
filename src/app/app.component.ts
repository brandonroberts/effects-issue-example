import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Post} from './model/post.model';
import {Store} from '@ngrx/store';
import {AppState} from './store/app.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  posts: Observable<Post[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.posts = this.store.select('posts');
  }
}
