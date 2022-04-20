import React from 'react'
import styled from '@emotion/styled'
import { AppContainer, InputField, PageHeader } from '../../components'

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
function Register() {
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <AppContainer>
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
          <InputField
            type="password"
            name="retype-password"
            placeholder="Re-type your password"
            labelString="Re-type password"
          />
          <button type="submit">Create new user</button>
        </StyledForm>
      </div>
    </AppContainer>
  )
}

export default Register
