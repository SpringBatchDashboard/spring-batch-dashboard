import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/jobs" routerLinkActive="active">Jobs</a>
      <a routerLink="/executions" routerLinkActive="active">Executions</a>
      <a routerLink="/files" routerLinkActive="active">Files</a>

    </nav>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Spring Batch Admin';
}
