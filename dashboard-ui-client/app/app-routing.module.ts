import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { DashboardComponent }   from './dashboard.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'jobs', redirectTo: '/', pathMatch: 'full' },
  { path: 'executions', redirectTo: '/', pathMatch: 'full' },
  { path: 'files', redirectTo: '/', pathMatch: 'full' },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
