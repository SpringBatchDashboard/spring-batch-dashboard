import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { AppComponent }  from './app.component';
import { JobListComponent }   from './job-list.component';
import { ExecutionListComponent }   from './execution-list.component';
import { FileListComponent }   from './file-list.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports:      [
      BrowserModule,
      FormsModule,
      AppRoutingModule
    ],
    declarations: [
      AppComponent,
      JobListComponent,
      ExecutionListComponent,
      FileListComponent
    ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
