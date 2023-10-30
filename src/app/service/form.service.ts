import { Injectable } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SomeTableDto } from '../model/some-table.model';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  public groupTables(tableData: SomeTableDto[]) {
    const result: any[] = tableData.reduce((accumulatedRows, row) => {
      accumulatedRows[row.area] = accumulatedRows[row.area] || [];
      accumulatedRows[row.area].push(row);
      return accumulatedRows;
    }, Object.create(null));
    console.log('Result: ', result);
    return result;
  }

  public tableForm: FormGroup = this.fb.group({
    areas: this.fb.array([
      this.fb.group({
        area: FormControl,
        rows: this.fb.array([
          this.fb.group({
            area: FormControl,
            tableCounter: FormControl,
            tableTotal: FormControl,
            tableAdjustment: FormControl,
          }),
        ]),
      }),
    ]),
  });
}
