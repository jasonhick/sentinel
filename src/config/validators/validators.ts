const validators = {
  required: {
    key: 'required',
    style: 'error',
    defaultMessage: '{0} is required'
  },
  minLength: {
    key: 'minLength',
    style: 'error',
    defaultMessage: '{0} should be more than {1} characters'
  },
  maxLength: {
    key: 'maxLength',
    style: 'error',
    defaultMessage: '{0} should be less than {1} characters'
  }
};

export default validators;
