import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import isEmail from 'validator/lib/isEmail'
import isEmpty from 'validator/lib/isEmpty'
import isLength from 'validator/lib/isLength'
import negate from 'lodash.negate'
import formValidator from 'utils/validators/helpers/formValidator'
import composeValidatorWithMessages from 'utils/validators/helpers/composeValidatorWithMessages'
import validatorWithMessage from 'utils/validators/helpers/validatorWithMessage'

const FieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  grid-auto-flow: dense;
  align-items: center;

  input,
  button {
    grid-column: 1/2;
    width: 10em;
    margin: 0;
  }
`

const fullNameValidator = value => isLength(value, { min: 3, max: undefined })
const emailConfirmValidator = (value, values) => value === values.email
const inviteFormValidator = values =>
  formValidator({
    fullName: composeValidatorWithMessages(
      validatorWithMessage(negate(isEmpty), 'Full name is required'),
      validatorWithMessage(fullNameValidator, 'Full name needs to be at least 3 characters long')
    ),
    email: composeValidatorWithMessages(
      validatorWithMessage(negate(isEmpty), 'Email is required'),
      validatorWithMessage(isEmail, 'Email needs to be valid')
    ),
    emailConfirm: composeValidatorWithMessages(
      validatorWithMessage(negate(isEmpty), 'Confirm Email is required'),
      validatorWithMessage(emailConfirmValidator, 'Confirm email needs to match email')
    )
  })(values)

const InviteForm = () => (
  <div>
    <Formik initialValues={{ fullName: '', email: '' }} validate={values => inviteFormValidator(values)}>
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
        <form onSubmit={handleSubmit}>
          <FieldsWrapper>
            <input
              type="text"
              name="fullName"
              placeholder="Full Name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.fullName}
              required="required"
            />
            {errors.fullName && touched.fullName && errors.fullName}

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}

            <input
              type="email"
              name="emailConfirm"
              placeholder="Confirm Email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.emailConfirm && touched.emailConfirm && errors.emailConfirm}

            <button type="submit" disabled={isSubmitting}>
              Send
            </button>
          </FieldsWrapper>
        </form>
      )}
    </Formik>
  </div>
)

export default InviteForm
