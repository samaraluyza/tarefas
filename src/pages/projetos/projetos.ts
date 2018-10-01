import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProjetosService} from '../../providers/projetos-service/projetos-service';

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

  }

  selecionaProjeto(codigo){
    
  }
}
