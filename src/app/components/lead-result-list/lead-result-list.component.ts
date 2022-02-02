import { Component } from '@angular/core';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ContactPersonSearchService } from '../../services/contact-person-search.service';



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
  public get isLoading() {
    return this.contactPersonSearchService.isContactPersonSearchInProgress;
  }



  /**
   * List of {@link Lead leads} that should be displayed.
   */
  public get leads() {
    return this.contactPersonSearchService.leads;
  }



  constructor(private contactPersonSearchService: ContactPersonSearchService) { }



}