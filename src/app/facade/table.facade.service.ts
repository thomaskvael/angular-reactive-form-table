import { Observable, map, tap } from "rxjs";
import { ApiService } from "../service/api.service";
import { FormService, TableFormAreas } from "../service/form.service";
import { FormGroup } from "@angular/forms";
import { Injectable } from "@angular/core";

@Injectable()
export class TableFacade {
  constructor(
    private apiService: ApiService,
    private formService: FormService
  ) {}

  public myForm: FormGroup = this.formService.tableForm;
  public tableForm$: Observable<FormGroup<TableFormAreas>> = this.apiService.getTableData.pipe(
    map((tableData) => this.formService.groupTables(tableData)),
    map(groupedTables => this.formService.updateTableForm(groupedTables))
  );
}
