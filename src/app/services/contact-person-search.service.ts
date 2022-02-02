import { Injectable } from '@angular/core';
import { Lead, LeadSearchOptions } from '../types/index';



@Injectable({ providedIn: 'root' })
export class ContactPersonSearchService {



  /**
   * The {@link LeadSearchOptions} used to hold information for the SearchForm.
   */
  public searchModel: LeadSearchOptions = {
    firstName: '',
    lastName: '',
    organization: 'snapADDY',
    position: '',
    keywords: ''
  };



  /**
   * Array of {@link Lead leads} found by the snapADDY contact person search.
   */
  public leads: Array<Lead> | null = null;



  /**
   * `true` while the contact person search is in progress.
   */
  public isContactPersonSearchInProgress = false;



  /**
   * whether the the user is connected to XING or not.
   */
  public isConnectedToXing: boolean | undefined = undefined;



  /**
   * `true` while the connection check for XING is in progress.
   */
  public isXingConnectionCheckInProgress = false;



  /**
   * whether the the user is connected to LinkedIn or not.
   */
  public isConnectedToLinkedIn: boolean | undefined = undefined;



  /**
   * `true` while the connection check for LinkedIn is in progress.
   */
  public isLinkedInConnectionCheckInProgress = false;



  /**
   * Search for leads in XING / LinkedIn using the given {@link LeadSearchOptions}.
   */
  public async search(options: LeadSearchOptions): Promise<typeof this["leads"]> {
    if (window.snapADDY?.searchLeads) {
      this.isContactPersonSearchInProgress = true;

      const xingPromise = window.snapADDY.searchLeads('xing', options);
      const linkedinPromise = window.snapADDY.searchLeads('linkedin', options);

      const [xingLeads, linkedInLeads] = await Promise
        .all([xingPromise, linkedinPromise])
        .finally(() => this.isContactPersonSearchInProgress = false);

      this.leads = [...xingLeads, ...linkedInLeads];
    }

    console.info(this.leads);

    return this.leads;
  }



  /**
   * Reset the {@link leads} array by setting it to `null`.
   */
  public clearResults(): void {
    this.leads = null;
  }



  /**
   * Check if the user is connected to LinkedIn.
   */
  public async checkLinkedInConnection() {
    this.isLinkedInConnectionCheckInProgress = true;
    if (window.snapADDY?.isConnected) {
      this.isConnectedToLinkedIn = await window.snapADDY.isConnected('linkedin');
    }
    this.isLinkedInConnectionCheckInProgress = false;
    return !!this.isConnectedToLinkedIn;
  }



  /**
   * Check if the user is connected to XING.
   */
  public async checkXingConnection() {
    this.isXingConnectionCheckInProgress = true;
    if (window.snapADDY?.isConnected) {
      this.isConnectedToXing = await window.snapADDY.isConnected('xing');
    }
    this.isXingConnectionCheckInProgress = false;
    return !!this.isConnectedToXing;
  }



  /**
   * Execute an additional request for the given lead to retrieve more information directly from
   * their profile page.
   *
   * **Warning:** This will trigger a profile page visit!
   */
  public async loadProfileInformation(lead: Lead): Promise<Lead> {

    if (window.snapADDY?.getProfileInformation) {
      const response = await window.snapADDY.getProfileInformation(lead.linkedin || lead.xing);
      Object.assign(lead, response);
    }

    return lead;
  }



}