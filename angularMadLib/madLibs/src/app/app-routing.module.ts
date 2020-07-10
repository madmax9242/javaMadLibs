import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { WordsComponent } from './words/words.component';


const routes: Routes = [
  { path: 'stories', component: StoriesComponent },
  {path: 'input', component: WordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
