import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from "rxjs/operators/map";

/*
  Generated class for the MovieDbApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieDbApiProvider {

  apiKey = 'dee8e767a3d5ee763cb51103def6fd83';
  constructor(public http: HttpClient) {
    console.log('Hello MovieDbApiProvider Provider');
  }

  searchMovie(movieTitle){

    let searchApiPath = 'https://api.themoviedb.org/3/search/movie?api_key='+this.apiKey+'&query='+movieTitle;
    return this.http.get(searchApiPath);

  }

  searchTvShow(tvTitle){
    let searchTvApiPath = 'https://api.themoviedb.org/3/search/tv?api_key='+this.apiKey+'&query='+tvTitle;
    return this.http.get(searchTvApiPath);
  }

  getMovieGenres(){
    let genreApiPath = 'https://api.themoviedb.org/3/genre/movie/list?api_key='+this.apiKey+'&language=en-US';
    return this.http.get(genreApiPath).pipe(
      map(data =>  data['genres'])
    );
  }

  getNowShowingNearMe(){
    console.log('fetching now showing movies....');
    let nowShowingApiPath ='https://api.themoviedb.org/3/movie/now_playing?api_key='+
    this.apiKey+'&language=en-US';

    return this.http.get(nowShowingApiPath).pipe(
      map(data => data['results'])
    );
  }

  getUpcomingMovies() {
    console.log('fetching upcoming movies...');
    let upcomingMovieApiPath = '';
  }

  getMovie(id:number){
    console.log('fetching a single movie with id :'+id);
    let getMovieApiPath ='https://api.themoviedb.org/3/movie/'+id+'?api_key='+this.apiKey+'&language=en-US';

    return this.http.get(getMovieApiPath).pipe(
      map(data => data)
    );
  }

  getMovieCredits(id:number){
    let getMovieCreditApi ='https://api.themoviedb.org/3/movie/'+id+'/credits?api_key='+this.apiKey;

    return this.http.get(getMovieCreditApi).pipe(
      map(data => data['cast'])
    );
  }

  

}
