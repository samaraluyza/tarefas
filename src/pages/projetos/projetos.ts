import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjetosService} from '../../providers/projetos-service/projetos-service';
import {ProjetoPage} from '../projeto/projeto';

@IonicPage()
@Component({
  selector: 'page-projetos',
  templateUrl: 'projetos.html',
})
export class ProjetosPage {

  projetos: any[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public projetoService: ProjetosService
              ) {
                this.projetos = projetoService.getProjetos();
  }

  novoProjeto(){
    this.navCtrl.push(ProjetoPage, {codigo: this.projetoService.ultimoCodigo+1, novo: true})
  }

  selecionaProjeto(c){
    let codigoNumero = parseInt(c);
    this.navCtrl.push(ProjetoPage, {codigo: codigoNumero, novo:false})
  }
  incluir(){}
}
