import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Person} from './entities/interfaces/person.interface';
import {TasksDialogComponent} from './entities/components/tasks-dialog/tasks-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TodoService} from './entities/services/todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'todoLists';

  public showPeople = true;
  public fromGroup: FormGroup;
  public people: Person[] = [];

  constructor(
    public dialogRef: MatDialog,
    public todoService: TodoService,
    // tslint:disable-next-line:variable-name
    private _fb: FormBuilder
  ) {
  }
  public ngOnInit(): void {
    this.todoService.getPeople();
    this.fromGroup = this._fb.group({
      name: this._fb.control('', Validators.required),
      birthDate: this._fb.control('', Validators.required),
    });
    this.todoService.people$.subscribe((people: Person[]) => this.people = people);
  }

  public addPerson(): void {
    this.todoService.savePeople(
      {
        name: this.fromGroup.value.name,
        birthDate: this.fromGroup.value.birthDate,
      }
    );
    this.fromGroup.value.name = '';
    this.fromGroup.setValue({name: ''});
  }

  public deletePerson(event: any): void {
    this.todoService.deletePerson(event.data.id);
  }

  public openTasksDialog(event: any): void {
    const person = this.people.find((per: Person) => per.id === event.data.id);
    this.dialogRef.open(TasksDialogComponent, {
      data: {
        person
      }
    });
  }

  public changeView(): void {
    this.showPeople = !this.showPeople;
  }

  public changePerson(event: any): void {
    this.todoService.editPeople(event.data);
  }
}
