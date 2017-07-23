import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpService, ApiService, StorageService} from './services';
import {HttpModule} from '@angular/http';
import { HeroesPageComponent } from './components';
import {RouterModule} from '@angular/router';
import {routes} from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HeroesPageComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [HttpService, ApiService, StorageService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
