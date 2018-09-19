export default (validator, message) => (value, ...rest) => {
  if (rest.length > 0) {
    return validator(value, ...rest) ? true : message;
  }
  return validator(value) ? true : message;
};
