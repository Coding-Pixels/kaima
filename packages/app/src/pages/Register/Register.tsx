import React from 'react'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'
import { AppContainer, Button, InputField, PageHeader } from '../../components'

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
          <Button />
          <StyledLink to="/sign-in">Returning User? Sign-in</StyledLink>
        </StyledForm>
      </div>
    </AppContainer>
  )
}

export default Register
