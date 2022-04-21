import React from 'react'
import styled from '@emotion/styled'

const StyledInput = styled.input`
  font-family: 'EB Garamond', serif;
  font-weight: 400;
  font-size: 24px;
  height: 48px;
  width: 560px;
  margin-bottom: 24px;
  padding: 12px;
  border: none;

  &:focus {
    outline: 2px solid #626367;
    border-radius: 4px;
  }
`
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`
const StyledLabel = styled.label`
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 12px;
`

type Props = {
  type: string
  name: string
  placeholder?: string
  labelString?: string
}

function InputField({ type, name, placeholder, labelString }: Props) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{labelString}</StyledLabel>
      <StyledInput type={type} name={name} placeholder={placeholder || ''} />
    </InputContainer>
  )
}

export default InputField
