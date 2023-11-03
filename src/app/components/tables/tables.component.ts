import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { TableFacade } from 'src/app/facade/table.facade.service';
import { TableFormAreas } from 'src/app/service/form.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss'],
})
export class TablesComponent {
  constructor(
    private tableFacade: TableFacade
  ) { }

  public tableForm = this.tableFacade.myForm;
  public tableForm$: Observable<FormGroup<TableFormAreas>> = this.tableFacade.tableForm$;


  // Hacky recursive loop from Stackoverflow
  private getDirtyValues(form: any) {
    let dirtyValues = {};

    Object.keys(form.controls)
        .forEach(key => {
            const currentControl = form.controls[key];

            if (currentControl.dirty) {
                if (currentControl.controls)
                    dirtyValues[key] = this.getDirtyValues(currentControl);
                else
                    dirtyValues[key] = currentControl.value;
            }
        });

    return dirtyValues;
  }

  public submitTableForm() {
    console.log('SUBMIT');
    console.log(this.tableForm.controls);
    console.log('CHANGES');
    console.log(this.getDirtyValues(this.tableForm));
  }
}
