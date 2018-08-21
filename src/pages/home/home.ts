import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Movie } from '../../models/movie';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';
import { take } from 'rxjs/operators';
import { MovieDetailsPage } from '../movie-details/movie-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nowShowingMovies:Movie[]=[];
  nowShowing$;
  constructor(public navCtrl: NavController,private movieDBApi:MovieDbApiProvider) {

    this.nowShowing$ = this.movieDBApi.getNowShowingNearMe().pipe(take(1));
  }

  onShowMovie(id:number){
    this.navCtrl.push(MovieDetailsPage,{'id':id});
  }

  getMovieYear(movie:Movie){
    if(movie.release_date)
      return movie.release_date.split('-')[0].toString();
  }

}
