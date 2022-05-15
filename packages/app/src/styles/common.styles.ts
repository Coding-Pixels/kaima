import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

export const PageSubTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 40px;
  margin: 0;
`

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 24px;
`
export const StyledLink = styled(Link)`
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
