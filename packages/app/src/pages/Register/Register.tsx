import React from 'react'
import styled from '@emotion/styled'
import { AppContainer, PageHeader } from '../../components'

const PageSubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 40px;
  margin: 0;
`
function Register() {
  return (
    <AppContainer>
      <div>
        <PageHeader>Ka&apos;ima</PageHeader>
        <PageSubTitle>Register New User</PageSubTitle>
      </div>
    </AppContainer>
  )
}

export default Register
