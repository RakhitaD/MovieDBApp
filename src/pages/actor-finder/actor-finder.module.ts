import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActorFinderPage } from './actor-finder';

@NgModule({
  declarations: [
    ActorFinderPage,
  ],
  imports: [
    IonicPageModule.forChild(ActorFinderPage),
  ],
})
export class ActorFinderPageModule {}
