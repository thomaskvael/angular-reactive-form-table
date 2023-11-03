import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { SomeTableDto } from '../model/some-table.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get getTableData(): Observable<SomeTableDto[]> {
    return this.http.get<SomeTableDto[]>('/assets/mock-api.json');
  }
}
