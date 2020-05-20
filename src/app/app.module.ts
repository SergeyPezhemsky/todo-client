import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {DxButtonModule, DxTextBoxModule} from 'devextreme-angular';
import {ReactiveFormsModule} from '@angular/forms';
import { TasksDialogComponent } from './entities/components/tasks-dialog/tasks-dialog.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

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
    NoopAnimationsModule
  ],
  providers: [
    TasksDialogComponent
  ],
  bootstrap: [AppComponent],
  exports: [
    MatDialogModule,
  ]
})
export class AppModule { }
