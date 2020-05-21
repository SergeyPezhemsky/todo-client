import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DxButtonModule, DxDataGridModule, DxTextBoxModule} from 'devextreme-angular';
import {ReactiveFormsModule} from '@angular/forms';
import { TasksDialogComponent } from './entities/components/tasks-dialog/tasks-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {ApiService} from './entities/services/api.service';
import {TodoService} from './entities/services/todo.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksDialogComponent
  ],
  imports: [
    BrowserModule,
    DxTextBoxModule,
    DxButtonModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    DxDataGridModule
  ],
  providers: [
    TasksDialogComponent,
    ApiService,
    TodoService,
    HttpClient,
  ],
  bootstrap: [AppComponent],
  exports: [
    MatDialogModule,
  ]
})
export class AppModule { }
