import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { FormService } from 'src/app/service/form.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  constructor(
    private apiService: ApiService,
    private formService: FormService
  ) {}

  public myForm: FormGroup;
  public tableForm$ = this.apiService.getTableData.pipe(
    map((tableData) => this.formService.groupTables(tableData))
  );

  ngOnInit() {}
}
