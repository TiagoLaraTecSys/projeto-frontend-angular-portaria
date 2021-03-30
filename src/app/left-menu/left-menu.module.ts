import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { RouterModule} from '@angular/router';
import { LeftMenuComponent } from './left-menu.component';

@NgModule({
  imports: [ RouterModule, CommonModule],

  declarations: [ LeftMenuComponent ],

  exports: [ LeftMenuComponent ]
})
export class LeftMenuModule{}