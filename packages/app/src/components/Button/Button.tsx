import React from 'react'
import styled from '@emotion/styled'

const StyledButton = styled.button`
  border: none;
  padding: 16px 64px 16px 64px;
  background-color: #fdd10d;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;

  &:hover {
    background-color: #000000;
    color: #ffffff;
  }

  &:focus {
    outline: 2px solid #626367;
    border-radius: 4px;
  }
`

function Button() {
  return (
    <div>
      <StyledButton type="submit">Sign up</StyledButton>
    </div>
  )
}

export default Button
