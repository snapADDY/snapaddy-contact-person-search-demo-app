import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Lead } from '../../types/index';

@Component({
  selector: 'cps-lead-result-list',
  templateUrl: './lead-result-list.component.html',
  styleUrls: ['./lead-result-list.component.scss']
})
export class LeadResultListComponent {



  /**
   * Used to show the "Loading" placeholder
   */
  @Input() public isLoading: boolean = false;



  /**
   * List of {@link Lead leads} that should be displayed.
   */
  @Input() public leads!: Array<Lead> | null;



  /**
   * Emitted when additional information for this lead should be loaded.
   */
  @Output() public readonly loadProfile = new EventEmitter<Lead>();



}