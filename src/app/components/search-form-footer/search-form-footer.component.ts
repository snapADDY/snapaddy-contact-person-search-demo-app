import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Lead } from '../../types/index';

@Component({
  selector: 'cps-search-form-footer',
  templateUrl: './search-form-footer.component.html',
  styleUrls: ['./search-form-footer.component.scss']
})
export class SearchFormFooterComponent implements OnInit, OnChanges, OnDestroy {



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
  @Input() public isConnectedToXING?: boolean = undefined;



  /**
   * Determines the color of the "Check LinkedIn" button
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  @Input() public isConnectedToLinkedIn?: boolean = undefined;



  /**
   * List of found leads. Used to en/disable the "clear results" button.
   */
  @Input() public leads?: Array<Lead> | null = null;



  /**
   * Emitted when we should check if the user is logged in to the given social network.
   */
  @Output() public readonly checkConnection = new EventEmitter<'xing' | 'linkedin'>();



  /**
   * Emitted when the contact person search should start.
   */
  @Output() public readonly startSearch = new EventEmitter<void>();



  /**
   * Emitted when the list of leads should be cleared.
   */
  @Output() public readonly clearResults = new EventEmitter<void>();



  /**
   * Shows a spinner within the "Search" button when this is true.
   */
  public isLoading: boolean = false;



  /**
   * Reference to the {@link startSearch} event subscription.
   * Used to update the {@link isLoading} property.
   */
  private loadingSubscription?: Subscription;



  public ngOnInit(): void {
    // Start loading (show spinner) when startSearch was called
    this.loadingSubscription = this.startSearch.subscribe(() => this.isLoading = true);
  }



  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['leads']) {
      this.isLoading = false;
    }
  }



  public ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }



}