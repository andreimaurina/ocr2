import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadCupomPage } from './cad-cupom';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    CadCupomPage,
  ],
  imports: [
    IonicPageModule.forChild(CadCupomPage),
    BrMaskerModule 
  ],
})
export class CadCupomPageModule {}
