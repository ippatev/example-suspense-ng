import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class AppService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http
      .get('https://jsonpsdslaceholder.typicode.com/posts')
      .pipe(delay(1000));
  }
}
