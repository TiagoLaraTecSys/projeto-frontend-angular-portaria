import { Component, OnInit } from '@angular/core';
import { Logger } from '../../services/logger.service';
import { MyIcons } from '../../assets/icons/myicons';
import { MatIconRegistry } from '@angular/material/icon';

import { DomSanitizer } from '@angular/platform-browser';
//objeto com as informações da página que se quer navegar pelas opções do leftMenu
export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  icon_name: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title:'Início',  icon: MyIcons.HOME_ICON, icon_name:'homeicon', class:''},
  { path: '/historicRegister', title:'Registro de Entradas', icon: MyIcons.REGISTER_ICON ,icon_name:'registersicon', class:''},
  { path: '/new-register' , title:'Nova Entrada', icon: MyIcons.NEW_REGISTER_ICON,icon_name:'newregistericon', class:''},
  { path: '/userManagement', title: 'Gerenciamento de Usuários', icon:MyIcons.USER_MANAGAMENT_ICON,icon_name:'usermanag', class:''}
]
@Component({
  moduleId: module.id,
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  count = 0;
  constructor(private myIcons: MyIcons, private logger: Logger, private iconRegistry: MatIconRegistry, private sanitizer: DomSanitizer) { 

  }
  //Variávei que irá receber o array de objetos RouteInfos
  public menuItems: any[];
  ngOnInit() {
    
    //Logo que inicializar o componente, menuItems recebe valores da variável ROUTES
    this.menuItems = ROUTES.filter(menuItem => menuItem)
    this.menuItems.forEach(items => {
      this.iconRegistry.addSvgIconLiteral(items.icon_name,
        this.sanitizer.bypassSecurityTrustHtml(items.icon))
    })
    
    // Declara os ícones para o angular material
    
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
