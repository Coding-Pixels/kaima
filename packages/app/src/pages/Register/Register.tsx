import React, { useState, useContext, SyntheticEvent } from 'react'
import { Navigate } from 'react-router-dom'
import { AppContext, Button, InputField, PageHeader } from '../../components'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  doc,
  setDoc,
} from '../../config/firebase'
import {
  PageSubTitle,
  StyledForm,
  StyledLink,
} from '../../styles/common.styles'
import useForm from '../../hooks/useForm'
// import registerForm from './formData.register.json';

function Register() {
  const { data, errors, handleChange, validateField, isFormValid, submitForm } =
    useForm()
  const [error, setError] = useState<string | null>(null)

  if (AppContext) {
    const { currentUser } = useContext(AppContext)
    if (currentUser) {
      return <Navigate to="/dashboard" />
    }
  }
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    submitForm()
    if (isFormValid) {
      console.log(data)

      const name = data.name
      const email = data.email
      const password = data.password

      createUserWithEmailAndPassword(auth, email, password)
        .then(async (result) => {
          updateProfile(result.user, {
            displayName: name,
          })
          await setDoc(doc(db, 'userData', result.user.uid), {
            list: [],
          })
        })
        .catch((err) => {
          console.log(err)
          setError(err.message)
        })
      console.log('We should submit the form now')
    } else {
      setError('We cannot submit the form as there is an error')
    }
  }

  return (
    <div>
      <PageHeader>Ka&apos;ima</PageHeader>
      <PageSubTitle>Register New User</PageSubTitle>
      <StyledForm onSubmit={handleSubmit}>
        <InputField
          value={data.name}
          type="text"
          name="name"
          placeholder="Your name"
          labelString="Name"
          onChange={handleChange}
          onBlur={() =>
            validateField({
              isRequired: true,
              validationExpression: '^[a-zA-Z ]{2,30}$',
              errorMessage:
                'You are not allowed to use special characters or numbers in your name',
              value: data.name,
              name: 'name',
            })
          }
          error={errors.name}
        />
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
        <StyledLink to="/sign-in">Returning User? Sign-in</StyledLink>
        {error && <div>{error}</div>}
      </StyledForm>
    </div>
  )
}

export default Register
