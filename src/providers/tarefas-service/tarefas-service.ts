import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class TarefasService{


  tarefas = [
    { codigo: 1, projeto: 1, descricao: 'Elaborar resumos',
      data: new Date(2018, 9, 29), prioridade: 1 },
    { codigo: 2, projeto: 1, descricao: 'Fechar diário',
      data: new Date(2018, 9, 17), prioridade: 2 },
    { codigo: 3, projeto: 2, descricao: 'Gravar vídeo de apresentação',
      data: new Date(2018, 9, 10), prioridade: 1 },
    { codigo: 4, projeto: 3, descricao: 'Planejar campanha',
      data: new Date(2018, 8, 2), prioridade: 3}
  ];
  ultimoCodigo = 4

  constructor() {
    /**public http: HttpClient
    console.log('Hello TarefasServiceProvider Provider');*/ 
  }

  getTarefas(): any[] {
    return this.tarefas;
  }
}
