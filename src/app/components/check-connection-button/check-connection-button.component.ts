import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'cps-check-connection-button',
  templateUrl: './check-connection-button.component.html'
})
export class CheckConnectionButtonComponent implements OnChanges, OnInit, OnDestroy {



  /**
   * Public FontAwesome reference to use in the template.
   */
  public readonly faCircleNotch = faCircleNotch;



  /**
   * The label of this button.
   */
  @Input() public label!: string;



  /**
   * Used to determine the color of the button:
   * - `false` = red
   * - `true` = green
   * - `undefined` = grey
   */
  @Input() public isConnected?: boolean = undefined;



  /**
   * Emitted when we should check if the user is logged in to a social network.
   */
  @Output() public readonly checkConnection = new EventEmitter<void>();



  /**
   * Used to show a spinner while we're checking if the user is connected to a social network.
   */
  public isLoading = false;



  /**
   * Reference to the {@link checkConnection} event subscription.
   * Used to update the {@link isLoading} property.
   */
  private loadingSubscription?: Subscription;



  public ngOnInit(): void {
    this.loadingSubscription = this.checkConnection.subscribe(() => this.isLoading = true);
  }



  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['isConnected']) {
      this.isConnected = changes['isConnected']?.currentValue;
      this.isLoading = false;
    }
  }



  public ngOnDestroy(): void {
    this.loadingSubscription?.unsubscribe();
  }



}