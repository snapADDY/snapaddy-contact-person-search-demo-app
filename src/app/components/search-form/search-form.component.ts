import { Component } from '@angular/core';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';
import { LeadSearchOptions } from '../../types/lead-search-options';

@Component({
  selector: 'cps-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {



  /**
   * The {@link LeadSearchOptions} form model.
   */
  public get searchModel(): LeadSearchOptions {
    return this.contactPersonSearchService.searchModel;
  }



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



}