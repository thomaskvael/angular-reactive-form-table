import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

//import { ValidateUrl, emailDomain } from '../validator';
import { FormService } from '../../service/form.service';

@Component({
  selector: 'app-some-table',
  templateUrl: './some-table.component.html',
  styleUrls: ['./some-table.component.css'],
})
export class SomeTableComponent implements OnInit {
  myForm: FormGroup;

  constructor(private formService: FormService) {}

  ngOnInit() {
    this.myForm = this.formService.tableForm;
    console.log('myForm: ', this.myForm);
  }
}
