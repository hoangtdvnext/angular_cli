import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewsComponentComponent } from './news-component/news-component.component';
import { NewsComponentDirective } from './news-component.directive';
import { NewsComponentPipe } from './news-component.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponentComponent,
    NewsComponentDirective,
    NewsComponentPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
