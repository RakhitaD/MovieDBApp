import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';
import { Movie } from '../../models/movie';
import { MovieCharacter } from '../../models/movieCharacter';
import { Observable } from '../../../node_modules/rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-movie-details',
  templateUrl: 'movie-details.html',
})
export class MovieDetailsPage {

  movieId:number;
  movie:Movie;
  movieCharacter$:Observable<MovieCharacter>;
  showCast:boolean = false;
  showCastText:string = 'SHOW CAST...';
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDbApi:MovieDbApiProvider) {
    this.movieId = this.navParams.get('id');

    this.movieDbApi.getMovie(this.movieId).subscribe(data => {
      this.movie = data as Movie;

      if(!this.movie)
        return;

      this.movieCharacter$ = this.movieDbApi.getMovieCredits(this.movie.id) as Observable<MovieCharacter>;

    });

  }

  ionViewDidLoad() {
    console.log('Movie details page loaded successfully.');
  }

  onShowCast(){
    this.showCast = !this.showCast;
    if(this.showCast)
      this.showCastText = 'HIDE CAST...'
    else
      this.showCastText = 'SHOW CAST...'
  }

}
