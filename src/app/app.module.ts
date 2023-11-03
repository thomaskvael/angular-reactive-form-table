import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SomeTableComponent } from './components/some-table/some-table.component';
import { TablesComponent } from './components/tables/tables.component';
import { FormService } from './service/form.service';
import { ApiService } from './service/api.service';
import { TableFacade } from './facade/table.facade.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, SomeTableComponent, TablesComponent],
  providers: [FormService, ApiService, TableFacade],
  bootstrap: [AppComponent],
})
export class AppModule {}
