import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieDetailsPage } from '../movie-details/movie-details';
import { take } from 'rxjs/operators';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';
import { Observable } from '../../../node_modules/rxjs/Observable';

/**
 * Generated class for the UpcomingMoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-upcoming-movie',
  templateUrl: 'upcoming-movie.html',
})
export class UpcomingMoviePage {
  upcoming$:Observable<Movie>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDBApi:MovieDbApiProvider) {
    this.upcoming$ = this.movieDBApi.getUpcomingMovies().pipe(take(1)) as Observable<Movie>;
  }

  ionViewDidLoad() {
    console.log('upcoming movies page loaded successfully...');
  }

  onShowMovie(id:number){
    this.navCtrl.push(MovieDetailsPage,{'id':id});
  }

  getMovieYear(movie:Movie){
    if(movie.release_date)
      return movie.release_date.split('-')[0].toString();
  }

}
