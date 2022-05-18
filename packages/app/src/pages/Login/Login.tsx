import React, { SyntheticEvent, useState } from 'react'
import { Button, PageHeader, InputField } from '../../components'
import { auth, signInWithEmailAndPassword } from '../../config/firebase'
import { PageSubTitle } from '../../styles/common.styles'
import useForm from '../../hooks/useForm'

function Login() {
  const { data, errors, handleChange, validateField, isFormValid, submitForm } =
    useForm()
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    submitForm()

    const email = data.email
    const password = data.password
    console.log(isFormValid)
    signInWithEmailAndPassword(auth, email, password).catch((err) => {
      setError(err.message)
    })
  }
  return (
    <div>
      <PageHeader>Ka&apos;ima</PageHeader>
      <PageSubTitle>User login</PageSubTitle>
      <form onSubmit={handleSubmit}>
        <InputField
          value={data.email}
          type="text"
          name="email"
          placeholder="Your email"
          labelString="Email"
          onChange={handleChange}
          onBlur={() =>
            validateField({
              isRequired: true,
              validationExpression:
                '^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$',
              errorMessage: 'The email address entered is invalid',
              value: data.email,
              name: 'email',
            })
          }
          error={errors.email}
        />
        <InputField
          value={data.password}
          type="password"
          name="password"
          placeholder="Your password"
          labelString="Password"
          onChange={handleChange}
          onBlur={() =>
            validateField({
              isRequired: true,
              validationExpression:
                '^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$',
              errorMessage: 'Your password does not match the criteria',
              value: data.password,
              name: 'password',
            })
          }
          error={errors.password}
        />
        <Button />
        {error && <div>{error}</div>}
      </form>
    </div>
  )
}

export default Login
