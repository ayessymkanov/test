import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 100%;
  width: 960px;
  margin: 0 auto;
`

export default ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  )
}