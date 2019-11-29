import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { BrMaskerModule } from 'brmasker-ionic-3';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CupomProvider } from '../providers/cupom/cupom';
import { ListaCupomPage } from '../pages/lista-cupom/lista-cupom';
import { CadCupomPage } from '../pages/cad-cupom/cad-cupom';
import { PaginaTesteUrlPage } from '../pages/pagina-teste-url/pagina-teste-url';
import { Camera } from '@ionic-native/camera';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireStorageModule } from 'angularfire2/storage';

export const configF= {
  apiKey: "AIzaSyAaFHUxxNdPfGMjBcOJb6ygZ0QiSzMcnqc",
  authDomain: "ocr-2019-bb841.firebaseapp.com",
  databaseURL: "https://ocr-2019-bb841.firebaseio.com",
  projectId: "ocr-2019-bb841",
  storageBucket: "ocr-2019-bb841.appspot.com",
  messagingSenderId: "559785322830",
  appId: "1:559785322830:web:561502e7e6d4ccb0db961f",
  measurementId: "G-E7XKPFZ5X9"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListaCupomPage,
    CadCupomPage,
    PaginaTesteUrlPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrMaskerModule,
    AngularFireModule.initializeApp(configF),
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListaCupomPage,
    CadCupomPage,
    PaginaTesteUrlPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CupomProvider
  ]
})
export class AppModule {}
