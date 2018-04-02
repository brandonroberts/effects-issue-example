import {ConfigurationService} from './configuration.service';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Post} from '../model/post.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PostService {
  private url: string;

  constructor(private httpClient: HttpClient, private configurationService: ConfigurationService) {
    this.url = this.configurationService.get('apiBaseUrl');
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`${this.url}/posts`);
  }
}
