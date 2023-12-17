import { object, string, ObjectSchema, addMethod } from 'yup';
import {
  IformOneValidations,
  IformTwoValidations,
  IformThreeValidations,
  IForm,
} from './interface.validations';

function isValidUSPhoneNumber(phoneNumber: string) {
  const phoneRegex = /^(1-?)?(\([2-9][0-9]{2}\)|[2-9][0-9]{2})-?[2-9][0-9]{2}-?[0-9]{4}$/;
  return phoneRegex.test(phoneNumber);
}

// custom method to validate phone numbers
addMethod(string, 'isPhone', function (errorMessage) {
  return this.test(`test-phone`, errorMessage, function (value) {
    const { path, createError } = this;

    return (value && isValidUSPhoneNumber(value)) || createError({ path, message: errorMessage });
  });
});

export const formOneValidations: ObjectSchema<IformOneValidations> = object().shape({
  firstName: string().required('FirstName is required'),
  lastName: string().required('LastName is required'),
  email: string().required('Email is required').email('Are you sure this is an email?'),
});

export const formTwoValidations: ObjectSchema<IformTwoValidations> = object().shape({
  address1: string().optional(),
  city: string().optional(),
  state: string().optional(),
  zip: string().optional(),
});

export const formThreeValidations: ObjectSchema<IformThreeValidations> = object().shape({
  phone: string().required('Phone is required').isPhone('Not a phone number'),
  jobTitle: string().optional(),
  reason: string().optional(),
});

export const formValidation: ObjectSchema<IForm> = object()
  .concat(formOneValidations)
  .concat(formTwoValidations)
  .concat(formThreeValidations);
