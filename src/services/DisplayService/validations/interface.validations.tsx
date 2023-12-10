export interface IformOneValidations {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

export interface IformTwoValidations {
  addressOne?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface IformThreeValidations {
  jobTitle:
    | 'Engineer - lead'
    | 'Engineer - mid level'
    | 'Engineer - junion'
    | 'Engineer - front end focused'
    | 'Engineer - backend focused'
    | 'Engineer - full stack';
  reason: string;
}
