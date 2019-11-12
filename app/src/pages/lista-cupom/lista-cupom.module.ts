import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaCupomPage } from './lista-cupom';

@NgModule({
  declarations: [
    ListaCupomPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaCupomPage),
  ],
})
export class ListaCupomPageModule {}
