import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TvShow } from '../../models/tvshow';
import { MovieDbApiProvider } from '../../providers/movie-db-api/movie-db-api';

/**
 * Generated class for the TvShowFinderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tv-show-finder',
  templateUrl: 'tv-show-finder.html',
})
export class TvShowFinderPage {

  tvTitle:string;
  tvShows:TvShow[]=[];
  noofTVShows:number=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,private movieDBApi:MovieDbApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TvShowFinderPage');
  }

  onLoadTvShow(){

  }

  onFindTVShow(){
    this.tvShows = [];
    this.noofTVShows=0;

    if(!this.tvTitle)
      return;

    this.movieDBApi.searchTvShow(this.tvTitle).subscribe(data => {
      this.tvShows = data['results'] as TvShow[];
      this.noofTVShows = data['total_results'];
    });
  }
}
