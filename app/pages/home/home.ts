import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
import { LoginPage } from '../../pages/login/login';
import { Data } from '../../providers/data/data';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  chatMessage: string = '';
  messages: any = [];

  constructor(public dataService: Data, public alertCtrl: AlertController) {

  }

  sendMessage(): void {
    
  }
}
