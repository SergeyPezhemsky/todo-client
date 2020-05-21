import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Tasks} from '../interfaces/tasks.interface';
import {ApiService} from './api.service';
import {Person} from '../interfaces/person.interface';

@Injectable()
export class TodoService {

  private people$$: BehaviorSubject<Person[]> = new BehaviorSubject([]);
  public people$: Observable<Person[]> = this.people$$.asObservable();

  constructor(
    // tslint:disable-next-line:variable-name
    private _api: ApiService
  ) {
  }

  public getPeople(): void {
    this._api.get('')
      .toPromise()
      .then((people: Person[]) => {
        this.people$$.next(people);
      });
  }

  public savePeople(person: any): void {
    this._api.post('', person)
      .toPromise()
      .then((people: Person[]) => {
        this.people$$.next(people);
    });
  }

  public deletePerson(id: string): void {
    this._api.delete(id)
      .toPromise()
      .then((people: Person[]) => {
      this.people$$.next(people);
    });
  }

  public addTask(peopleId: string, task: any): void {
    this._api.put('addItem/' + peopleId, task)
      .toPromise()
      .then((people: Person[]) => {
        this.people$$.next(people);
      });
  }

  public deleteTask(peopleId: string, taskId: string): void {
    this._api.get('deleteToDOItem/' + peopleId + '/' + taskId)
      .toPromise()
      .then((people: Person[]) => {
        this.people$$.next(people);
      });
  }

  public editPeople(person: any): void {
    this._api.put(person.id, person)
      .toPromise()
      .then();
  }
}
