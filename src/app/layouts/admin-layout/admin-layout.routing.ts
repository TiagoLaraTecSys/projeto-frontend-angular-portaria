import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NewRegisterComponent} from '../../pages/new-register/new-register.component';
import { RegistersComponent} from '../../pages/registers/registers.component';
import { UserManagementComponent } from '../../pages/user-management/user-management.component';


export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard',             component: DashboardComponent},
  {path: 'historicRegister',             component: RegistersComponent},
  {path: 'new-register',          component: NewRegisterComponent},
  {path: 'userManagement',       component: UserManagementComponent}
]