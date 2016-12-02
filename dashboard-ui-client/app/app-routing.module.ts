import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent }   from './job-list.component';
import { ExecutionListComponent }   from './execution-list.component';
import { FileListComponent }   from './file-list.component';

const routes: Routes = [
  { path: 'home', redirectTo: '/', pathMatch: 'full' },
  { path: 'jobs', component: JobListComponent },
  { path: 'executions', component: ExecutionListComponent },
  { path: 'files', component: FileListComponent },
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
