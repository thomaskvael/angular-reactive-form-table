import { FormControl, FormArray, AbstractControl } from '@angular/forms';

//export interface SomeTableForm {
//  areas: {
//    area: FormControl<string>;
//    rows: FormArray<SomeTableDto>[];
//  }[];
//}

export interface SomeTableDto {
  index: number;
  area: string;
  tableCounter: number;
  tableTotal: number;
  tableAdjustment: number;
}
