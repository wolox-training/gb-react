// eslint-disable-next-line no-useless-escape
const VALID_EMAIL = /^\w+([\.-]?\w+)*@wolox.com/;

export const isRequired = value => value ? undefined : 'Required field';

export const hasLength = value =>
  value.length < 8 ? 'Value length has to be greater than 8 characters' : undefined;

export const isValidEmail = value =>
  VALID_EMAIL.test(value) ? undefined : 'Domain needs to be @wolox.com';