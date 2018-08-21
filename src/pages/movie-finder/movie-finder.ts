import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';

@IonicPage()
@Component({
  selector: 'page-movie-finder',
  templateUrl: 'movie-finder.html',
})
export class MovieFinderPage {
  
  movieTitle:string;
  movies:Movie[]=[];
  noofMovies:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDBApi:MovieDbApiProvider) {
  }

  ionViewDidLoad() {
    console.log('movie finder page successfully loaded...');
  }

  onMovieLoad(){

  }

  onFindMovie(){
    this.movies = [];
    this.noofMovies=0;

    if(!this.movieTitle)
      return;

    this.movieDBApi.searchMovie(this.movieTitle).subscribe(data => {
      this.movies = data['results'] as Movie[];
      this.noofMovies = data['total_results'];
    });

  }
}
