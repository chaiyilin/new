//validate whole form, return {fieldName:errorMessage,...} obj
//the keys in values and validators should match
export default validators => values => {
  let errors = {}
  for (let [fieldName, value] of Object.entries(values)) {
    const validator = validators[fieldName]
    if (validator) {
      const result = validator(value, values)
      if (result !== true) {
        errors[fieldName] = validator(value, values)
      }
    }
  }
  return errors
}
