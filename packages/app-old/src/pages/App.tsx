import React from 'react'
import styled from '@emotion/styled'
import Logo from '../assets/logo.svg'

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <Container>
      <img src={Logo} alt="logo" />
      <div>App Component - Built with Vite</div>
      <div>Testing out the pre-commit hook - Take 4</div>
    </Container>
  )
}

export default App
