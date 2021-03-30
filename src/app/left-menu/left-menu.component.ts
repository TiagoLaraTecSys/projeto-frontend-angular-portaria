import { Component, OnInit } from '@angular/core';
import { Logger } from '../../services/logger.service';

//objeto com as informações da página que se quer navegar pelas opções do leftMenu
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title:'Início',  icon: 'nc-bank', class:''},
  { path: '/historicRegister', title:'Registro de Entradas', icon: 'nc-as', class:''},
  { path: '/new-register' , title:'Nova Entrada', icon: 'nc-as', class:''},
  { path: '/userManagement', title: 'Gerenciamento de Usuários', icon:'nc-as', class:''}
]
@Component({
  moduleId: module.id,
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  count = 0;
  constructor(private logger: Logger) { }
  //Variávei que irá receber o array de objetos RouteInfos
  public menuItems: any[];
  ngOnInit() {
    //Logo que inicializar o componente, menuItems recebe valores da variável ROUTES
    this.menuItems = ROUTES.filter(menuItem => menuItem)
  }

  message= 'I\'m read only';
  canEdit = false;

 onLogMe(){
    this.logger.writeCount(this.count);
    this.count++;
  }

  onEditClick(){
    this.canEdit = !this.canEdit;

    this.message = this.canEdit ? "You can edit me!" : "I'm read only!"
  }
}