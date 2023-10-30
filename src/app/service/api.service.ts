import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import * as MOCK_GET from '../mock/mock-api.ts';
import { SomeTableDto } from '../model/some-table.model.ts';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public get getTableData(): Observable<SomeTableDto[]> {
    return this.http
      .get<SomeTableDto[]>(MOCK_GET)
      .pipe(catchError((_error) => of(null)));
  }
}
