import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UpcomingMoviePage } from './upcoming-movie';

@NgModule({
  declarations: [
    UpcomingMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(UpcomingMoviePage),
  ],
})
export class UpcomingMoviePageModule {}
