import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import {DashboardModule} from './pages/dashboard/dashboard.module';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {PagesComponent} from './pages/pages.component';
import {SmartTableComponent} from './pages/tasks/smart-table.component';


const routes: Routes = [{
  path: 'auth',
  component: NbAuthComponent,
  children: [
    {
      path: '',
      component: NbLoginComponent,
    },
    {
      path: 'login',
      component: NbLoginComponent,
    },
    {
      path: 'register',
      component: NbRegisterComponent,
    },
    {
      path: 'logout',
      component: NbLogoutComponent,
    },
    {
      path: 'request-password',
      component: NbRequestPasswordComponent,
    },
    {
      path: 'reset-password',
      component: NbResetPasswordComponent,
    },
  ],
}, {
  path: 'dashboard',
  component: DashboardComponent,
}, {
  path: 'pages',
  // component: PagesComponent,
  loadChildren: () => import('./pages/pages.module')
    .then(m => m.PagesModule),
  // children : [
  //   {
  //     path: 'tasks',
  //     component: SmartTableComponent,
  //   }
  // ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
