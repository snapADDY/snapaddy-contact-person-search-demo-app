import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'cps-check-connection-button',
  templateUrl: './check-connection-button.component.html'
})
export class CheckConnectionButtonComponent {



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
   * Used to show a spinner while we're checking if the user is connected to a social network.
   */
  @Input() public isLoading = false;



  /**
   * Emitted when we should check if the user is logged in to a social network.
   */
  @Output() public readonly checkConnection = new EventEmitter<void>();



}