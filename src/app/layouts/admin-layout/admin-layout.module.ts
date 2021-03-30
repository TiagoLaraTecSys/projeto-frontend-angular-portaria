import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';

import {  AdminLayoutRoutes } from './admin-layout.routing';

import {  DashboardComponent }    from '../../pages/dashboard/dashboard.component';
import {  NewRegisterComponent }  from '../../pages/new-register/new-register.component';
import { RegistersComponent }     from '../../pages/registers/registers.component';
import { UserManagementComponent }         from '../../pages/user-management/user-management.component';

import {  NgbModule  } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    NewRegisterComponent,
    RegistersComponent,
    UserManagementComponent
  ]
})

export class AdminLayoutModule {}