import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class ApiService {

  public environment = 'http://localhost:5001/api/people/';

  constructor(
    private http: HttpClient,
  ) {
  }

  public get<T>(url: string): Observable<any> {
    return this.http.get(`${this.environment}${url}`);
  }

  public post<T>(url: string, body: any): Observable<any> {
    return this.http.post(`${this.environment}${url}`, body);
  }
}
