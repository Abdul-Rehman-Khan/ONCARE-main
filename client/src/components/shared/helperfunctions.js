export const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Email is required';
  }
  if (!/.+@.+\..+/.test(values.email)) {
    errors.email = 'Please provide a valid email';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  }

  if (values.hasOwnProperty('firstName') && !values.firstName) {
    errors.firstName = 'First name is required';
  }
  if (values.hasOwnProperty('lastName') && !values.lastName) {
    errors.lastName = 'Last name is required';
  }

  return errors;
};

export const getUserInitials = (firstName = '', lastName = '') => {
  return `${firstName.charAt(0)}${lastName.charAt(0)}`;
};
