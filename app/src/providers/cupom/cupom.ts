// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import firebase from "firebase";

@Injectable()
export class CupomProvider {

  cupons = [];

  constructor(
    // public http: HttpClient
    ) {
  }

  listarPorId(idt){
    return firebase.firestore().collection("cupons").doc(idt).get()
    .then(doc =>
      doc.data()
    );
  }

  listar(){
    return firebase.firestore().collection("cupons").get().then((querySnapshot) => {
      let cupons = [];
      querySnapshot.forEach((doc) => {
        cupons.push({
          id: doc.id,
          ticket: doc.data().ticket
        });
      });
      return cupons;
    });
  }

  adicionar(cupom, id = null){
    if (id != null) {
      return firebase.firestore().collection("cupons").doc(id).update(cupom);
    }else{
      return firebase.firestore().collection("cupons").add(JSON.parse(JSON.stringify(cupom)));
    }
  }

  remover(id){
    return firebase.firestore().collection("cupons").doc(id).delete();
  }

  listarImagensBase(){
    return firebase.firestore().collection("imagens").get().then((querySnapshot) => {
      let testes = [];
      querySnapshot.forEach((doc) => {
        testes.push({
          id: doc.id,
          ticket: doc.data().ticket
        });
      });
      return testes;
    });
  }

  buscarTexto(nomeImagem){
    return firebase.firestore().collection("imagens").doc(nomeImagem).get()
    .then(doc => 
      doc.data()
    );
  }

}
