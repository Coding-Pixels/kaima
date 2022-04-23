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

function Register() {
  const [error, setError] = useState(null)
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
          type="text"
          name="name"
          placeholder="Your name"
          labelString="Name"
        />
        <InputField
          type="text"
          name="email"
          placeholder="Your email"
          labelString="Email"
        />
        <InputField
          type="password"
          name="password"
          placeholder="Your password"
          labelString="Password"
        />
        <Button />
        <StyledLink to="/sign-in">Returning User? Sign-in</StyledLink>
        {error && <div>{error}</div>}
      </StyledForm>
    </div>
  )
}

export default Register
