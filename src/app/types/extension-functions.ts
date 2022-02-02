import { Lead } from './lead';
import { LeadSearchOptions } from './lead-search-options';



/**
 * Tell Typescript about global functions that were added by the browser extension.
 *
 * You can call these functions like so:
 *
 * ```ts
 * let isConnectedToXING = false;
 * if(window.snapADDY?.isConnected) {
 *   isConnectedToXing = await window.snapADDY.isConnected('xing');
 * }
 * ```
 */
declare global {
  interface Window {
    snapADDY?: {

      isConnected?: (socialNetwork: 'xing' | 'linkedin') => Promise<boolean>;

      searchLeads?: (socialNetwork: 'xing' | 'linkedin', params: LeadSearchOptions) => Promise<Array<Lead>>;

      getProfileInformation(profileLink: string): Promise<Lead>;

    }
  }
}