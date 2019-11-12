import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ListaCupomPage } from '../pages/lista-cupom/lista-cupom';
import * as firebase from 'Firebase';

export const config = {
  apiKey: "AIzaSyAaFHUxxNdPfGMjBcOJb6ygZ0QiSzMcnqc",
  authDomain: "ocr-2019-bb841.firebaseapp.com",
  databaseURL: "https://ocr-2019-bb841.firebaseio.com",
  projectId: "ocr-2019-bb841",
  storageBucket: "ocr-2019-bb841.appspot.com",
  messagingSenderId: "559785322830",
  appId: "1:559785322830:web:561502e7e6d4ccb0db961f",
  measurementId: "G-E7XKPFZ5X9"
};
firebase.initializeApp(config);

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ListaCupomPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

