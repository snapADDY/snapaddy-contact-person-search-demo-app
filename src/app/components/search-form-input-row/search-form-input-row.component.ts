import { Component, EventEmitter, Input, Output } from '@angular/core';

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



  /**
   * Emitted when the user presses "Enter" within the input field.
   */
  @Output() public startSearch = new EventEmitter<void>();



}