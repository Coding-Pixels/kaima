import React, { useState, useContext, SyntheticEvent } from 'react'
import { Link, Navigate } from 'react-router-dom'
import styled from '@emotion/styled'
import { AppContext, Button, InputField, PageHeader } from '../../components'
import {
  auth,
  createUserWithEmailAndPassword,
  updateProfile,
  db,
  doc,
  setDoc,
} from '../../config/firebase'

const PageSubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 40px;
  margin: 0;
`

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`
const StyledLink = styled(Link)`
  margin-top: 8px;
  margin-bottom: 8px;
  color: #000000;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 16px;

  &:focus {
    outline: solid 2px #626367;
    border-radius: 4px;
  }
`
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
