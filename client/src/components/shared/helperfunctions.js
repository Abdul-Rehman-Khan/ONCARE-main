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

// Format dat

const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const formatDate = (isoString) => {
  const date = new Date(isoString);

  const month = MONTHS[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });

  return `${month} ${day}, ${year} - ${time}`;
};
