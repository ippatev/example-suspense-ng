import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SuspenseModule } from 'angular-suspense';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, SuspenseModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
