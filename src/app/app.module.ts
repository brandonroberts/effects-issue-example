import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {reducer} from './store/app.state';
import {PostEffects} from './store/app.effects';
import {PostService} from './service/post.service';
import {ConfigurationService, loadConfiguration} from './service/configuration.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducer),
    EffectsModule.forRoot([
      PostEffects
    ])
  ],
  providers: [
    ConfigurationService,
    PostService,
    {
      provide: APP_INITIALIZER,
      useFactory: loadConfiguration,
      deps: [ConfigurationService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
