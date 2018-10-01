import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjetosService} from '../../providers/projetos-service/projetos-service';


@IonicPage()
@Component({
  selector: 'page-projeto',
  templateUrl: 'projeto.html',
})
export class ProjetoPage {
  codigoProjeto: number;
  nomeProjeto: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public projetosService: ProjetosService) {
    this.codigoProjeto = navParams.get('codigo');
    let projetos = projetosService.getProjetos();
    for(let i=0; i<projetos.length; i++)
    {
      if(projetos[i].codigo ==this.codigoProjeto){
        this.nomeProjeto = projetos[i].nome;
        break;
      }
    }
  }

  alterar(){
    this.projetosService.editProjeto(this.codigoProjeto, this.nomeProjeto);
    this.navCtrl.pop();
  }
  excluir(){
    this.projetosService.deleteProjeto(this.codigoProjeto, this.nomeProjeto);
    this.navCtrl.pop();
  }
 

}
