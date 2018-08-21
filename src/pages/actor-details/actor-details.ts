import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';
import { Person } from '../../models/person';
import { take } from '../../../node_modules/rxjs/operators';

/**
 * Generated class for the ActorDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actor-details',
  templateUrl: 'actor-details.html',
})
export class ActorDetailsPage {

  actor:Person;
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDBApi:MovieDbApiProvider) {
    let id = this.navParams.get('id');
    if(!id)
      return;
    
    this.movieDBApi.getActorActress(id).pipe(take(1)).subscribe(data => {
      this.actor =  data as Person;
    });
  }

  ionViewDidLoad() {
    console.log('actor details page loaded successfully...');
  }

  setGenderText(gender:number){
    return gender === 1?'Female':'Male';
  }

  onShowFilmography(){
    //this.navCtrl.push()
    let id = this.navParams.get('id');
    if(!id)
      return;

    this.movieDBApi.getIndividualMovieCredit(id).subscribe(data => {
      console.log(data);
    })
  }

}
