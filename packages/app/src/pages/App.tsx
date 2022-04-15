import React from 'react'
import styled from '@emotion/styled'

const Container = styled.div`
  display: grid;
  height: 100vh;
  justify-content: center;
  align-items: center;
`
function App() {
  return (
    <Container>
      <div>App Component - Built with Vite</div>
      <div>Testing out the pre-commit hook</div>
    </Container>
  )
}

export default App
