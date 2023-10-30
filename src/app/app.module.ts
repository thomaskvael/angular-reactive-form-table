import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SomeTableComponent } from './components/some-table/some-table.component';
import { TablesComponent } from './components/tables/tables.component';
import { FormService } from './service/form.service';
import { ApiService } from './service/api.service';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [AppComponent, SomeTableComponent, TablesComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
