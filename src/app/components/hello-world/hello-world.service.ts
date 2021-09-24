import { Injectable } from '@angular/core';
import { Suspense } from 'angular-suspense';
import { Observable, of, timer } from 'rxjs';
import { delay } from 'rxjs/operators';
import { AppService } from 'src/app/app.service';

type result = Observable<string>;

@Injectable()
export class HelloWorldService {
  constructor(private suspense: Suspense, private appService: AppService) {}

  getPosts(): result {
    return this.suspense.use(this.appService.getPosts());
  }
}
