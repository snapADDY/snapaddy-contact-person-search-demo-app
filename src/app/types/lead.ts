/**
 * An object, representing a social network lead.
 */
export interface Lead {
  image: string;
  firstName: string;
  lastName: string;
  organization: string;
  position: string;
  xing: string;
  linkedin: string,
  city: string;
  companySize: string;
  country: string;
  email: string;
  fax: string;
  gender: -1 | 0 | 1;
  industry: string;
  meta: unknown;
  mobile: string;
  note: string;
  phone: string;
  poBox: string;
  revenue: string;
  state: string;
  street: string;
  street2: string;
  title: string;
  vat: string;
  website: string;
  zip: string;
}