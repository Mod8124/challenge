export type Tid =
  | 'firstName'
  | 'lastName'
  | 'email'
  | 'address1'
  | 'city'
  | 'state'
  | 'zip'
  | 'phone'
  | 'jobTitle'
  | 'reason';

export interface Idata {
  id: Tid;
  placeholder?: string;
  required?: boolean;
  type: string;
  options?: [
    | 'Engineer - lead'
    | 'Engineer - mid level'
    | 'Engineer - junion'
    | 'Engineer - front end focused'
    | 'Engineer - backend focused'
    | 'Engineer - full stack',
  ];
}

export interface IdataBase {
  data: null | Idata[];
  isLoading: boolean;
  errors: string;
}
