import { Component } from '@angular/core';
import { Lead, LeadSearchOptions } from './types/index';


@Component({
  selector: 'cps-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  /**
   * Array of {@link Lead leads} found by the snapADDY contact person search.
   */
  public leads: Array<Lead> | null = null;



  /**
   * whether the the user is connected to XING or not.
   */
  public isConnectedToXING: boolean | undefined = undefined;



  /**
   * whether the the user is connected to LinkedIn or not.
   */
  public isConnectedToLinkedIn: boolean | undefined = undefined;



  /**
   * Search for leads in XING / LinkedIn using the given {@link LeadSearchOptions}.
   */
  public async search(options: LeadSearchOptions) {
    const { firstName, lastName, organization, position } = options;

    if (window.snapADDY?.searchLeads) {
      const [xingLeads, linkedInLeads] = await Promise.all([
        window.snapADDY.searchLeads('xing', { firstName, lastName, organization, position }),
        window.snapADDY.searchLeads('linkedin', { firstName, lastName, organization, position })
      ]);

      this.leads = [...xingLeads, ...linkedInLeads];
    }
  }



  /**
   * Check if the user is connected to the given social network.
   */
  public async checkConnection(socialNetwork: 'xing' | 'linkedin') {
    let isConnected = false;

    if (window.snapADDY?.isConnected) {
      isConnected = await window.snapADDY?.isConnected(socialNetwork);
    }

    if (socialNetwork === 'xing') {
      this.isConnectedToXING = isConnected;
    }

    if (socialNetwork === 'linkedin') {
      this.isConnectedToLinkedIn = isConnected;
    }
  }



  /**
   * Execute an additional request for the given lead to retrieve more information directly from
   * their profile page.
   *
   * **Warning:** This will trigger a profile page visit!
   */
  public async loadProfileInformation(lead: Lead) {
    if (window.snapADDY?.getProfileInformation) {
      const response = await window.snapADDY.getProfileInformation(lead.linkedin || lead.xing);
      Object.assign(lead, response);
    }
  }



}
