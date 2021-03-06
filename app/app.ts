import { Component, ViewChild } from '@angular/core';
import { Facebook } from 'ionic-native';
import { Nav, Platform, MenuController, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { HomePage } from './pages/home/home'
import { AboutPage } from './pages/about/about';
import { LoginPage } from './pages/login/login';
import { Data } from './providers/data/data';


@Component({
  templateUrl: 'build/app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  homePage: any = HomePage;
  aboutPage: any = AboutPage;

  constructor(public platform: Platform, public dataService: Data, public menu: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //StatusBar.styleDefault();
    });
  }

  openPage(page): void {

  }

  logout(): void {

  }
}

ionicBootstrap(MyApp, [Data]);
