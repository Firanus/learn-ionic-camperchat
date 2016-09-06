import { Component } from '@angular/core';
import { Platform, NavController, MenuController, AlertController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { HomePage } from '../home/home';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/login/login.html',
})
export class LoginPage {

  constructor(public nav: NavController, public platform: Platform, public menu: MenuController, public dataService: Data, public alertCtrl: AlertController) {

    this.menu.enable(false);

  }

  login(): void {
    this.getProfile();
  }

  getProfile(): void {
    this.menu.enable(true);
    this.nav.setRoot(HomePage);
  }

}
