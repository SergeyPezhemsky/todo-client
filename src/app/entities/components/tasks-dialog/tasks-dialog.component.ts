import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Person} from '../../interfaces/person.interface';
import {DialogData} from '../../interfaces/dialog-data.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-tasks-dialog',
  templateUrl: './tasks-dialog.component.html',
  styleUrls: ['./tasks-dialog.component.css']
})
export class TasksDialogComponent implements OnInit {

  public fromGroup: FormGroup;
  public showMore = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    // tslint:disable-next-line:variable-name
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.fromGroup = this._fb.group({
      name: this._fb.control('', Validators.required),
      timeOfEnd: this._fb.control('', Validators.required),
      priority: this._fb.control('', Validators.required),
    });
  }

  public addTask(): void {
    alert(1);
  }

  public changeView(): void {
    this.showMore = !this.showMore;
  }

  public deleteTask(): void {

  }

}
