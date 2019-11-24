import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CupomProvider } from '../../providers/cupom/cupom';

@IonicPage()
@Component({
  selector: 'page-cad-cupom',
  templateUrl: 'cad-cupom.html',
})
export class CadCupomPage { 

  cupom: Cupom;
  id = null;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public provedor: CupomProvider
    ) {
    this.id = this.navParams.data.id; 
    if (!this.id) {
      this.cupom = new Cupom();
    } else {
      this.chamaPorId(this.id);
    }
  }

  // chamaPorId(id){
  //   this.provedor.listarPorId(id).then(
  //     data => {
  //       this.cupom = data;
  //     } 
  //   );
  // }

  chamaPorId(id){
    this.provedor.listarPorId(id).then(
      data => {
        this.cupom = ({
          ticket: data.ticket,
          balanceiro: data.balanceiro,
          pesoBruto: data.pesoBruto,
          pesoLiquido: data.pesoLiquido,
          tara: data.tara,
          veiculo: data.veiculo,
          dataEntrada: data.dataEntrada,
          horaEntrada: data.horaEntrada
        });
      }
    );
  }
    
  chamaGravar(){
    this.provedor.adicionar(this.cupom,this.id);
    this.navCtrl.pop();
  }

}

export class Cupom {
  ticket: number;
  balanceiro: String;
  pesoBruto: number;
  pesoLiquido: number;
  tara: number;
  veiculo: String;
  dataEntrada: String;
  horaEntrada: String
}