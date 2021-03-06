import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  max-width: 100%;
  width: 960px;
  min-height: 100vh;
  margin: 0 auto;

  font: 16px/1.5 'Helvetica', 'Helvetica Neue', Arial, sans-serif;
`

export default ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}