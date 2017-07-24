import { BrowserModule } from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { AppComponent } from './app.component';
import {HttpService, ApiService, StorageService} from './services';
import {HttpModule} from '@angular/http';
import { HeroesPageComponent } from './components';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import { CardComponent } from './components/card/card.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesPageComponent,
    CardComponent,
    SpinnerComponent,
    ModalComponent
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
