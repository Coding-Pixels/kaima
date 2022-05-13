import React, { ChangeEvent } from 'react'
import styled from '@emotion/styled'

const StyledInput = styled.input`
  font-family: 'EB Garamond', serif;
  font-weight: 400;
  font-size: 24px;
  height: 48px;
  width: 560px;
  margin-bottom: 8px;
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
  margin-top: 12px;
  margin-bottom: 12px;
`
const ErrorText = styled.div`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #de7676;
`

type Props = {
  value: string
  type: string
  name: string
  placeholder?: string
  labelString?: string
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
  onBlur?: () => void
  error?: string | null
}

function InputField({
  type,
  name,
  placeholder,
  labelString,
  value,
  onChange,
  onBlur,
  error,
}: Props) {
  return (
    <InputContainer>
      <StyledLabel htmlFor={name}>{labelString}</StyledLabel>
      <StyledInput
        type={type}
        value={value}
        name={name}
        placeholder={placeholder || ''}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </InputContainer>
  )
}

export default InputField
