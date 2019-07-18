// eslint-disable-next-line no-useless-escape
const VALID_EMAIL = /^\w+([\.-]?\w+)*@wolox.com/;

const isRequired = value => (value ? null : 'Required field');

const hasLength = value =>
  value && value.length < 8 ? 'Value length has to be greater than 8 characters' : null;

const isValidEmail = value => (VALID_EMAIL.test(value) ? null : 'Domain needs to be @wolox.com');

export const validateEmail = [isRequired, isValidEmail];

export const validatePassword = [isRequired, hasLength];
