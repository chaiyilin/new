// if invalid, only return first error
export default (...validatorWithMessages) => (value, ...rest) => {
  for (const validatorWithMessage of validatorWithMessages) {
    const result = validatorWithMessage(value, ...rest);
    if (result !== true) {
      return result;
    }
  }
  return true;
};
