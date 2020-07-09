import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoriesComponent } from './stories/stories.component';
import { WordsComponent } from './words/words.component';

@NgModule({
  declarations: [
    AppComponent,
    StoriesComponent,
    WordsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
