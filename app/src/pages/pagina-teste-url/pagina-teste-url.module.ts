import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PaginaTesteUrlPage } from './pagina-teste-url';

@NgModule({
  declarations: [
    PaginaTesteUrlPage,
  ],
  imports: [
    IonicPageModule.forChild(PaginaTesteUrlPage),
  ],
})
export class PaginaTesteUrlPageModule {}
