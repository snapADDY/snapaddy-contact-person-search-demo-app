import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Lead } from '../../types/lead';

@Component({
  selector: 'cps-lead',
  templateUrl: './lead.component.html'
})
export class LeadComponent {



  /**
   * Public FontAwesome reference to use in the template.
   */
  public readonly faUser = faUser;



  /**
   * Reference to the Lead that should be displayed.
   */
  @Input() public lead!: Lead;



  /**
   * Emitted when additional information for this lead should be loaded.
   */
  @Output() public readonly loadProfile = new EventEmitter<void>();



}