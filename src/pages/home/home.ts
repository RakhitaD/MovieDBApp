import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { TvShow } from '../../models/tvshow';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  movieTitle:string;
  tvTitle:string;
  movies:Movie[]=[];
  tvShows:TvShow[]=[];
  noofMovies:number=0;
  noofTVShows:number=0;
  selection:string;
  categorySelected:string='';
  nowShowingMovies:Movie[]=[];
  nowShowing$;

  constructor(public navCtrl: NavController,private movieDBApi:MovieDbApiProvider) {

    // this.movieDBApi.getNowShowingNearMe().subscribe(data => {
    //   this.nowShowingMovies = [];
    //   this.nowShowingMovies = data as Movie[];
    //   console.log(this.nowShowingMovies);
    // });

    this.nowShowing$ = this.movieDBApi.getNowShowingNearMe();
  }


  onFindMovieandTv(){
    this.movies = [];
    this.noofMovies=0;
    this.tvShows = [];
    this.noofTVShows=0;

    if(!this.movieTitle)
      return;

    let movieSearch:boolean=true;
    let tvSearch:boolean=false;
    if(this.categorySelected.indexOf('movies')>-1) {
      movieSearch = true;
      tvSearch=false;
    }
    else{
      tvSearch=true;
      movieSearch=false;
    }


    if(movieSearch){
      this.movieDBApi.searchMovie(this.movieTitle).subscribe(data => {
        this.movies = data['results'] as Movie[];
        this.noofMovies = data['total_results'];
      });
    }

    if(tvSearch){
      this.movieDBApi.searchTvShow(this.movieTitle).subscribe(data => {
        this.tvShows = data['results'] as TvShow[];
        this.noofTVShows = data['total_results'];
      });
    }

    
  }

  onMovieLoad(){

  }

}
