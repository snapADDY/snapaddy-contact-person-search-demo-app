import { Component } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';
import { Lead } from '../../types/lead';



@Component({
  selector: 'cps-lead-result-list',
  templateUrl: './lead-result-list.component.html',
  styleUrls: ['./lead-result-list.component.scss']
})
export class LeadResultListComponent {



  /**
   * Public FontAwesome reference to use in the template.
   */
  public readonly faCircleNotch = faCircleNotch;



  /**
   * Used to show the "Loading" placeholder
   */
  public get isLoading(): boolean {
    return this.contactPersonSearchService.isContactPersonSearchInProgress;
  }



  /**
   * List of {@link Lead leads} that should be displayed.
   */
  public get leads(): Array<Lead> | null {
    return this.contactPersonSearchService.leads;
  }



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



}