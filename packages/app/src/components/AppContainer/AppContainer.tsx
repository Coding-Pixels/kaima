import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
`

type Props = {
  children: ReactNode
}

function AppContainer({ children }: Props) {
  return <Container>{children}</Container>
}

export default AppContainer
