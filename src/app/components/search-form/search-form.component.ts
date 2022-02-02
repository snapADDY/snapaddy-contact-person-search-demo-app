import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lead, LeadSearchOptions } from '../../types/index';

@Component({
  selector: 'cps-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {



  /**
   * Determines the color of the "Check XING" button
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  @Input() public isConnectedToXING?: boolean = undefined;



  /**
   * Determines the color of the "Check LinkedIn" button
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  @Input() public isConnectedToLinkedIn?: boolean = undefined;



  /**
   * List of found {@link Lead leads}. Used to en/disable the "clear results" button in the SearchFormFooterComponent.
   */
  @Input() public leads!: Array<Lead> | null;



  /**
   * Emitted when the contact person search should start.
   */
  @Output() public readonly startSearch = new EventEmitter<LeadSearchOptions>();



  /**
   * Emitted when we should check if the user is logged in to the given social network.
   */
  @Output() public readonly checkConnection = new EventEmitter<'xing' | 'linkedin'>();



  /**
   * Emitted when the list of leads should be cleared.
   */
  @Output() public readonly clearResults = new EventEmitter<void>();



  /**
   * The {@link LeadSearchOptions} used to hold information for the SearchForm.
   */
  public searchModel: LeadSearchOptions = {
    firstName: '',
    lastName: '',
    organization: 'snapADDY',
    position: ''
  };



}