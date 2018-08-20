import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MovieFinderPage } from './movie-finder';

@NgModule({
  declarations: [
    MovieFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(MovieFinderPage),
  ],
})
export class MovieFinderPageModule {}
