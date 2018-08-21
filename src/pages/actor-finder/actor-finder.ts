import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Person } from '../../models/person';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';
import { ActorDetailsPage } from '../actor-details/actor-details';

/**
 * Generated class for the ActorFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actor-finder',
  templateUrl: 'actor-finder.html',
})
export class ActorFinderPage {

  personName:string;
  actors:Person[]=[];
  noofActors:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDBApi:MovieDbApiProvider) {
  }

  ionViewDidLoad() {
    console.log('actor finder page successfully loaded...');
  }

  onLookupActor(id:number){
    console.log('look up actor',id);
    this.navCtrl.push(ActorDetailsPage,{'id':id});
  }

  onFindActor(){
    this.actors = [];
    this.noofActors=0;

    if(!this.personName)
      return;

    this.movieDBApi.searchActorActress(this.personName).subscribe(data => {
      this.actors = data['results'] as Person[];
      this.noofActors = data['total_results'];
    });

  }

}
