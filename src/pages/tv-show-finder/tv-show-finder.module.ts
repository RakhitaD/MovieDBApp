import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TvShowFinderPage } from './tv-show-finder';

@NgModule({
  declarations: [
    TvShowFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(TvShowFinderPage),
  ],
})
export class TvShowFinderPageModule {}
