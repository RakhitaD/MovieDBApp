import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MovieDbApiProvider } from '../providers/movie-db-api/movie-db-api';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { MovieDetailsPage } from '../pages/movie-details/movie-details';
import { MovieFinderPage } from '../pages/movie-finder/movie-finder';
import { TvShowFinderPage } from '../pages/tv-show-finder/tv-show-finder';
import { ActorDetailsPage } from '../pages/actor-details/actor-details';
import { ActorFinderPage } from '../pages/actor-finder/actor-finder';
import { UpcomingMoviePage } from '../pages/upcoming-movie/upcoming-movie';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailsPage,
    MovieFinderPage,
    TvShowFinderPage,
    ActorDetailsPage,
    ActorFinderPage,
    UpcomingMoviePage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MovieDetailsPage,
    MovieFinderPage,
    TvShowFinderPage,
    ActorDetailsPage,
    ActorFinderPage,
    UpcomingMoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieDbApiProvider
  ]
})
export class AppModule {}
