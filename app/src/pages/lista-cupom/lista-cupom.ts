import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ActionSheetController } from 'ionic-angular';
import { CupomProvider } from '../../providers/cupom/cupom';
import { CadCupomPage } from '../cad-cupom/cad-cupom';
import { PaginaTesteUrlPage } from '../pagina-teste-url/pagina-teste-url';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@IonicPage()
@Component({
  selector: 'page-lista-cupom',
  templateUrl: 'lista-cupom.html',
})
export class ListaCupomPage {

  cupons=[];
  listaPadrao = [];
  foto: any;

  constructor(
    public navCtrl: NavController,
    public provedor: CupomProvider, 
    public alertCtrl: AlertController,
    private actionSheetController: ActionSheetController,
    private camera: Camera
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

  async abrirEscolhaImagem() {
    const actionSheet = await this.actionSheetController.create({
      title: 'Selecione uma opção',
      buttons: [{
        text: 'Camera',
        icon: 'camera',
        handler: () => {
          console.log('Camera clicked');
          this.tirarFoto();
        }
      }, {
        text: 'Galeria',
        icon: 'image',
        handler: () => {
          console.log('Galeria clicked');
          this.buscaGaleria();
        }
      }]
    });
    await actionSheet.present();
  }

  tirarFoto(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }

  buscaGaleria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    }
    
    this.camera.getPicture(options).then((imageData) => {
      this.foto = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
     // Handle error
    });
  }
}
