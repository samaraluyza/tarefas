import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TarefasService} from '../../providers/tarefas-service/tarefas-service'
import {ProjetosService} from '../../providers/projetos-service/projetos-service'

@IonicPage()
@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html',
})
export class TarefasPage {

  tarefas: any[];
  projetos: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
  public tarefasService: TarefasService, public projetosService: ProjetosService) 
  
  {
    this.projetos = projetosService.getProjetos();
    this.tarefas = tarefasService.getTarefas();
  }

  nomeProjeto(c):string {
    for(let i=0; i<this.projetos.length; i++)
      if(this.projetos[i].codigo == c)
        return this.projetos[i].nome;
    return "Projeto não encontrado";
  }

  selecionaTarefa(c) { }
}
