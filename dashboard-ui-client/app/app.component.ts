import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav class="navbar navbar-default navbar-static-top">
      <ul class="nav navbar-nav">
        <li class="active">
          <a routerLink="/home" routerLinkActive="active">Home</a>
        </li>
        <li>
          <a routerLink="/jobs" routerLinkActive="active">Jobs</a>
        </li>
        <li>
          <a routerLink="/executions" routerLinkActive="active">Executions</a>
        </li>
        <li>
          <a routerLink="/files" routerLinkActive="active">Files</a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>
  `,
  //styleUrls: ['app.component.css'],
})
export class AppComponent {
  title = 'Spring Batch Admin';
}
