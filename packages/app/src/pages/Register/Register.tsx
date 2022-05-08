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
  const { data, errors, handleChange, validateField } = useForm()
  const [error, setError] = useState(null)

  console.log('errors', errors)
  if (AppContext) {
    const { currentUser } = useContext(AppContext)
    if (currentUser) {
      return <Navigate to="/dashboard" />
    }
  }
  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
    const target = e.target as typeof e.target & {
      name: { value: string }
      email: { value: string }
      password: { value: string }
    }

    const name = target.name.value
    const email = target.email.value
    const password = target.password.value

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
        />
        <InputField
          value={data.password}
          type="password"
          name="password"
          placeholder="Your password"
          labelString="Password"
          onChange={handleChange}
        />
        <Button />
        <StyledLink to="/sign-in">Returning User? Sign-in</StyledLink>
        {error && <div>{error}</div>}
      </StyledForm>
    </div>
  )
}

export default Register
