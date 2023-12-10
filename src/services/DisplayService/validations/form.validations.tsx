import { object, string, ObjectSchema } from 'yup';
import {
  IformOneValidations,
  IformTwoValidations,
  IformThreeValidations,
} from './interface.validations';

export const formOneValidations: ObjectSchema<IformOneValidations> = object().shape({
  firstName: string().required('FirstName is required'),
  lastName: string().required('LastName is required'),
  email: string().required('Email is required').email('This is not email'),
  phone: string().required('Phone is required'),
});

export const formTwoValidations: ObjectSchema<IformTwoValidations> = object().shape({
  addressOne: string().optional(),
  city: string().optional(),
  state: string().optional(),
  zip: string().optional(),
});

export const formThreeValidations: ObjectSchema<IformThreeValidations> = object().shape({
  jobTitle: string<
    | 'Engineer - lead'
    | 'Engineer - mid level'
    | 'Engineer - junion'
    | 'Engineer - front end focused'
    | 'Engineer - backend focused'
    | 'Engineer - full stack'
  >().optional(),
  reason: string().optional(),
});
