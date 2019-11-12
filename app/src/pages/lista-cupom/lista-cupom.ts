import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CupomProvider } from '../../providers/cupom/cupom';
import { CadCupomPage } from '../cad-cupom/cad-cupom';
import { PaginaTesteUrlPage } from '../pagina-teste-url/pagina-teste-url';

@IonicPage()
@Component({
  selector: 'page-lista-cupom',
  templateUrl: 'lista-cupom.html',
})
export class ListaCupomPage {

  cupons=[];
  listaPadrao = [];

  constructor(
    public navCtrl: NavController,
    public provedor: CupomProvider, 
    public alertCtrl: AlertController
    ) {
  }
  
  ionViewWillEnter(){
    this.listar();
  }

  listar() {
    this.provedor.listar().then(
      data => {
        this.cupons = data; 
      }
    )
  } 
 
  novoCupom(){
    this.navCtrl.push(CadCupomPage);
  }

  editarCupom(id){
    this.navCtrl.push(CadCupomPage,{id : id});
  }

  testarUrl(){
    this.navCtrl.push(PaginaTesteUrlPage);
  } 

  excluir(id) {
    this.provedor.remover(id).then(
      () => {
        this.listar();
      }
    );
  }

  filtrarItens(event) {
    var pesquisado = event.target.value;
    this.provedor.listar()
    .then(
      data => this.listaPadrao = data
    );
    this.cupons = this.listaPadrao.filter((v) => {
      if(v.ticket && pesquisado) {
        if (v.ticket.toLowerCase().indexOf(pesquisado.toLowerCase()) > -1){
          return true;
        }
      }else{
        return this.cupons;
      }
    });
  }

  mostrarImagem(){

  }

}
