import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

//import { ValidateUrl, emailDomain } from '../validator';
import { FormService, TableFormArea, TableFormAreas } from '../../service/form.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-some-table',
  templateUrl: './some-table.component.html',
  styleUrls: ['./some-table.component.css'],
})
export class SomeTableComponent{
  //myForm: FormGroup;
  public myForm: FormGroup = this.formService.tableForm;



  @Input() tableForm!: FormGroup<TableFormAreas>;
  @Input() areaIndex: number;
  //@Input() areaForm: FormArray<FormGroup<TableFormArea>>;

  constructor(private formService: FormService) {}
}
