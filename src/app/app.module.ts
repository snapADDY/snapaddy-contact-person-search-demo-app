import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CheckConnectionButtonComponent } from './components/check-connection-button/check-connection-button.component';
import { LeadResultListComponent } from './components/lead-result-list/lead-result-list.component';
import { LeadComponent } from './components/lead/lead.component';
import { SearchFormFooterComponent } from './components/search-form-footer/search-form-footer.component';
import { SearchFormInputRowComponent } from './components/search-form-input-row/search-form-input-row.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    LeadComponent,
    LeadResultListComponent,
    SearchFormComponent,
    SearchFormInputRowComponent,
    SearchFormFooterComponent,
    CheckConnectionButtonComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
