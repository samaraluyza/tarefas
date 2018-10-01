import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProjetosService {

  projetos = [
    {codigo: 1, nome: 'TCC'},
    {codigo: 2, nome: 'Aplicações Híbridas'},
    {codigo: 3, nome: 'Gestão de Serviços'},
    {codigo: 3, nome: 'Integração de Sistemas'},
  ];

  ultimoCodigo = 3;

  constructor() {
    /**public http: HttpClient
    console.log('Hello ProjetosServiceProvider Provider'); */
  }

  getProjetos() {
    return this.projetos;
  }
  
  editProjeto(c: number, n:string){
    for(let i=0; i<this.projetos.length; i++) {
      if(this.projetos[i].codigo == c) {
        this.projetos[i].nome = n;
        break;
      }
    }
  }

  deleteProjeto(c: number, n:string){
    for(let i=0; i<this.projetos.length; i++) {
      if(this.projetos[i].codigo == c) {
        this.projetos.splice(i, 1)
        break;
      }
    }
  }

}
