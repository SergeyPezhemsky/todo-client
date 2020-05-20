import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Person} from '../../interfaces/person.interface';
import {DialogData} from '../../interfaces/dialog-data.interface';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TodoService} from '../../services/todo.service';
import {filter, find, map} from 'rxjs/operators';
import {Tasks} from '../../interfaces/tasks.interface';

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
    public todoService: TodoService,
    // tslint:disable-next-line:variable-name
    private _fb: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.fromGroup = this._fb.group({
      name: this._fb.control('', Validators.required),
      timeOfEnd: this._fb.control('', Validators.required),
      priority: this._fb.control('', Validators.required),
    });
    this.todoService.people$
      .subscribe((people: Person[]) => this.data.person =
        people.filter((data: Person) => data.id === this.data.person.id)[0]);
  }

  public addTask(): void {
    this.todoService.addTask(this.data.person.id, {
      name: this.fromGroup.value.name,
      timeOfEnd: this.fromGroup.value.timeOfEnd,
      // tslint:disable-next-line:radix
      priority: parseInt(this.fromGroup.value.priority)
    });
  }

  public changeView(): void {
    this.showMore = !this.showMore;
  }

  public deleteTask(task: Tasks): void {
    this.todoService.deleteTask(this.data.person.id, task.id);
  }

}
