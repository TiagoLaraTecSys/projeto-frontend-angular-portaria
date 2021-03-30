import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { NewRegisterComponent} from '../../pages/new-register/new-register.component';

export const AdminLayoutRoutes: Routes = [
  {path: 'dashboard',     component: DashboardComponent},
  {path: 'new-register',  component: NewRegisterComponent}
]