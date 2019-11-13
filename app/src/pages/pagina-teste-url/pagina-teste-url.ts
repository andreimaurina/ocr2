import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CupomProvider } from '../../providers/cupom/cupom';

@IonicPage()
@Component({
  selector: 'page-pagina-teste-url',
  templateUrl: 'pagina-teste-url.html',
})
export class PaginaTesteUrlPage {

  testes = [];
  image: any = [];
  valores = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public provedor: CupomProvider
    ) {
  }

  ionViewWillEnter(){
    this.listarImagens();
  }

  listarImagens(){
    this.provedor.listarImagensBase().then(
      data => { 
        this.testes = data; 
      }
    )
  }

  processar(id){
    this.provedor.buscarTexto(id).then(
      data => { 
        console.log(data.teste.toString().split(","));
        this.image = data.teste.toString().split(",");
        let indiceTicket = this.image.indexOf("Ticket") +1;
        let indicebalanceiroIni = this.image.indexOf("Balanceiro") +1; 
        let indicebalanceiroFim = this.image.indexOf("Bruto") -2;
        let nomeBalanceiro = "";

        for(let x = indicebalanceiroIni; x <= indicebalanceiroFim; x++ ){
          if(nomeBalanceiro == ""){
            nomeBalanceiro = this.image[x];
          }else{
            if (this.image[x] != "Produto"){
              nomeBalanceiro = nomeBalanceiro + " " + this.image[x];
            }else{
              break;
            }
          }
        }

        let indicePesoBruto = this.image.indexOf("Bruto") +1;
        let pesoBruto = "";
        for(let x = indicePesoBruto; x < indicePesoBruto+2; x++ ){
          if(pesoBruto == ""){
            pesoBruto = this.image[x];
          }else{
            pesoBruto = pesoBruto + "." + this.image[x];
          }
        }

        let indicePesoLiquido = this.image.indexOf("Liquido") +1;
        let pesoLiquido = "";
        for(let x = indicePesoLiquido; x < indicePesoLiquido+2; x++ ){
          if(pesoLiquido == ""){
            pesoLiquido = this.image[x];
          }else{
            pesoLiquido = pesoLiquido + "." + this.image[x];
          }
        }

        let indiceTara = this.image.indexOf("Tara") +1; 
        let tara = "";
        if ((this.image[indiceTara] == "Liquido" || this.image[indiceTara] == "Líquido") || (this.image[indiceTara + 1] == "Liquido" || this.image[indiceTara + 1] == "Líquido")){
          indiceTara = this.image.indexOf("Bruto") +5; 
        }  
        for(let x = indiceTara; x < indiceTara+2; x++ ){
          if(tara == ""){
            tara = this.image[x];
          }else{
            tara = tara + "." + this.image[x];
          } 
        }
 
        let indiceVeiculo = this.image.indexOf("Veículo");
        let veiculo = "";
        if(indiceVeiculo == -1){
          indiceVeiculo = this.image.indexOf("Veiculo") + 1; 
        }else{
          indiceVeiculo = indiceVeiculo + 1;
        }
        if (this.image[indiceVeiculo].length == 3){
          veiculo = this.image[indiceVeiculo] + this.image[indiceVeiculo + 1];
        }else{
          veiculo = this.image[indiceVeiculo];
        }

        let indiceDataEntrada = this.image.indexOf("Bruto") +3;
        let indiceHoraEntrada = this.image.indexOf("Bruto") +4;

        this.valores.push({
          id: id,
          ticket: this.image[indiceTicket],
          balanceiro: nomeBalanceiro,
          pesoBruto: pesoBruto,
          pesoLiquido: pesoLiquido,
          tara: tara,
          veiculo: veiculo,
          dataEntrada: this.image[indiceDataEntrada],
          horaEntrada: this.image[indiceHoraEntrada] 
        })
        console.log(this.valores);
      }
    )    
  } 

}
