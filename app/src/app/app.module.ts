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
import { Camera } from '@ionic-native/camera/ngx';

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
    BrMaskerModule,
    IonicModule.forRoot(MyApp)
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
