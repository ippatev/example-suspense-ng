import { Injectable } from '@angular/core';
import { Suspense } from 'angular-suspense';
import { Observable, of, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

type result = Observable<string>;

@Injectable()
export class HelloWorldService {
  private time = 5000;

  constructor(private suspense: Suspense) {}

  getMsg(): result {
    return this.suspense.use(of('Hello World!').pipe(delay(this.time)));
  }
}
