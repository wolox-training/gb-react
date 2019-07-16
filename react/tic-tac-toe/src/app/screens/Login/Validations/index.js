// eslint-disable-next-line no-useless-escape
const VALID_EMAIL = /^\w+([\.-]?\w+)*@\wolox.com/;

exports.isRequired = value => value ? value : 'Required field';

exports.hasLenght = value => value.lenght > 8 ? value : 'Value lenght has to be greater than 8 characters';

exports.isValidEmail = value =>
  value
    ? VALID_EMAIL.test(value)
    : 'Email needs to be a valid domain (@wolox.com)';
