import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SuspenseModule } from 'angular-suspense';
import { HelloWorldComponent } from './components/hello-world/hello-world.component';
import { AppService } from './app.service';

@NgModule({
  declarations: [AppComponent, HelloWorldComponent],
  imports: [BrowserModule, SuspenseModule, HttpClientModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
