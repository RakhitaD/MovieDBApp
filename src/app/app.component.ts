import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MovieFinderPage } from '../pages/movie-finder/movie-finder';
import { TvShowFinderPage } from '../pages/tv-show-finder/tv-show-finder';
import { ActorFinderPage } from '../pages/actor-finder/actor-finder';
import { UpcomingMoviePage } from '../pages/upcoming-movie/upcoming-movie';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Now Showing', component: HomePage },
      { title: 'Upcoming Movies', component: UpcomingMoviePage },
      { title: 'Find a Movie', component: MovieFinderPage },
      { title: 'Find a TV Show', component: TvShowFinderPage },
      { title: 'Look-up Actor/Actress', component: ActorFinderPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
