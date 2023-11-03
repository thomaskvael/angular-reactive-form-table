import { Injectable } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { SomeTableDto } from '../model/some-table.model';

export interface TableFormArea {
  area: FormControl;
  rows: FormArray<FormGroup<TableFormRow>>;
}

export interface TableFormRow {
  area: FormControl;
  tableCounter: FormControl;
  tableTotal: FormControl;
  tableAdjustment: FormControl;
}

export interface TableRow {
  area: string;
  tableCounter: string;
  tableTotal: string;
  tableAdjustment: string;
}

export interface TableFormAreas {
  areas: FormArray<FormGroup<TableFormArea>>;
}

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private fb: FormBuilder) {}

  public groupTables(tableData: SomeTableDto[]): SomeTableDto[][] {
    const result: SomeTableDto[][] = tableData.reduce((accumulatedRows, row) => {
      accumulatedRows[row.area] = accumulatedRows[row.area] || [];
      accumulatedRows[row.area].push(row);
      return accumulatedRows;
    }, Object.create(null));
    return result;
  }

  public tableForm: FormGroup<TableFormAreas> = this.fb.group({
    areas: this.fb.array([
      this.fb.group({
        area: FormControl<string>,
        rows: this.fb.array([
          this.fb.group({
            area: FormControl<string>,
            tableCounter: FormControl<number>,
            tableTotal: FormControl<number>,
            tableAdjustment: FormControl<number>,
          }),
        ]),
      }),
    ]),
  });

  private tableAreaRowsForm(row: SomeTableDto): FormGroup<TableFormRow> {
    return this.fb.group({
      area: this.fb.control(row.area),
      tableCounter: this.fb.control(row.tableCounter, Validators.max(15)),
      tableTotal: this.fb.control(row.tableTotal, Validators.max(15)),
      tableAdjustment: this.fb.control(row.tableAdjustment, Validators.max(15)),
    });
  }


  private addTableAreas(rows: SomeTableDto[][], area) {
    const areaRows = rows[area].map((row: SomeTableDto) => {
      return this.tableAreaRowsForm(row);
    });

    this.tableForm.controls.areas.push(
      this.fb.group({
        area: area,
        rows: this.fb.array(areaRows)
      })
    );
  }


  public updateTableForm(rows: SomeTableDto[][]) {
    this.tableForm.controls.areas.clear();

    Object.keys(rows).map(area => {
      this.addTableAreas(rows, area);
    });

    return this.tableForm;
  }


  //Validator
  private onlyOneColumn(group: AbstractControl) {
    if (group instanceof FormGroup) {
      const groupControls = Object.keys(group.controls);
      groupControls.map(control => {
        return group.get([control]).touched;
      })
    }

    /*if (!control.value.startsWith('https') || !control.value.includes('.io')) {
      return { invalidUrl: true };
    }*/
    return null;
  }
}
