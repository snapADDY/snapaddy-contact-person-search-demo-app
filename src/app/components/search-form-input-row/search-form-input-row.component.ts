import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';

@Component({
  selector: 'cps-search-form-input-row',
  templateUrl: './search-form-input-row.component.html',
})
export class SearchFormInputRowComponent {



  /**
   * Label for the form input.
   */
  @Input() public label!: string;



  /**
   * Current value of the Form input.
   */
  @Input() public value!: string;



  /**
   * Emitted when the value changed.
   */
  @Output() public valueChange = new EventEmitter<string>();



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



  /**
   * Execute a contact person search
   */
  public startSearch(): void {
    this.contactPersonSearchService.search(this.contactPersonSearchService.searchModel);
  }



}