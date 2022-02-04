import { Component, Input } from '@angular/core';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';
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



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



  /**
   * Load profile information for the current {@link Lead}.
   */
  public loadProfile(): void {
    this.contactPersonSearchService.loadProfileInformation(this.lead)
  }



}