import { Component } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';



@Component({
  selector: 'cps-search-form-footer',
  templateUrl: './search-form-footer.component.html',
  styleUrls: ['./search-form-footer.component.scss']
})
export class SearchFormFooterComponent {



  /**
   * Public FontAwesome reference to use in the template.
   */
  public readonly faCircleNotch = faCircleNotch;



  /**
   * Determines the color of the "Check XING" button
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  public get isConnectedToXing() {
    return this.contactPersonSearchService.isConnectedToXing;
  }



  /**
   * @returns `true` if {@link checkXingConnection} is currently in progress
   */
  public get isXingConnectionCheckInProgress() {
    return this.contactPersonSearchService.isXingConnectionCheckInProgress;
  }



  /**
   * Determines the color of the "Check LinkedIn" button
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  public get isConnectedToLinkedIn() {
    return this.contactPersonSearchService.isConnectedToLinkedIn;
  }



  /**
   * @returns `true` if {@link checkLinkedInConnection} is currently in progress
   */
  public get isLinkedInConnectionCheckInProgress() {
    return this.contactPersonSearchService.isLinkedInConnectionCheckInProgress;
  }



  /**
   * List of found leads. Used to en/disable the "clear results" button.
   */
  public get leads() {
    return this.contactPersonSearchService.leads;
  }



  /**
   * Shows a spinner within the "Search" button when this is true.
   */
  public get isSearchInProgress() {
    return this.contactPersonSearchService.isContactPersonSearchInProgress;
  }



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



  /**
   * Clear leads array.
   * @see {@link ContactPersonSearchService.clearResults}
   */
  public clearResults() {
    this.contactPersonSearchService.clearResults();
  }



  /**
   * Check if user is connected to XING.
   * @see {@link ContactPersonSearchService.checkXingConnection}
   * @returns `true` if he is, `false` otherwise
   */
  public checkXingConnection() {
    return this.contactPersonSearchService.checkXingConnection();
  }



  /**
   * Check if user is connected to LinkedIn.
   * @see {@link ContactPersonSearchService.checkLinkedInConnection}
   * @returns `true` if he is, `false` otherwise
   */
  public checkLinkedInConnection() {
    return this.contactPersonSearchService.checkLinkedInConnection();
  }



  /**
   * Start a contact person search.
   * @see {@link ContactPersonSearchService.search}
   */
  public startSearch() {
    this.contactPersonSearchService.search(this.contactPersonSearchService.searchModel)
  }



}