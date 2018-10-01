import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ProjetosPage } from '../pages/projetos/projetos';
import {ProjetoPage} from '../pages/projeto/projeto';
import {TarefasPage} from '../pages/tarefas/tarefas';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProjetosService} from '../providers/projetos-service/projetos-service';
import { TarefasService } from '../providers/tarefas-service/tarefas-service';

@NgModule({
  declarations: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProjetosPage,
    ProjetoPage,
    TabsPage,
    TarefasPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProjetosService,
    TarefasService
  ]
})
export class AppModule {}
