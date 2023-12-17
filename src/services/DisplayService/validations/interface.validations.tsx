declare module 'yup' {
  interface StringSchema {
    isPhone(message: string): StringSchema;
  }
}

export interface IformOneValidations {
  firstName: string;
  lastName: string;
  email: string;
}

export interface IformTwoValidations {
  address1?: string;
  city?: string;
  state?: string;
  zip?: string;
}

export interface IformThreeValidations {
  phone?: string;
  jobTitle?: string;
  reason?: string;
}

export interface IForm extends IformOneValidations, IformTwoValidations, IformThreeValidations {}
