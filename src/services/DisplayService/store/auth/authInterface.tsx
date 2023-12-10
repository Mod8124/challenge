interface Iaddress2 {
  city: string;
  state: string;
  zip: string;
}

export interface Iauth {
  firstName: string;
  lastName: string;
  email: string;
  address1: string;
  address2: Iaddress2[];
  phone: string;
  jobTitle: string;
  reason: string;
}
