import React, { ReactNode } from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`

type Props = {
  children: ReactNode
}

function AppContainer({ children }: Props) {
  return <Container>{children}</Container>
}

export default AppContainer
