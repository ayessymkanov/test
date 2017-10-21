import React from 'react'
import styled from 'styled-components'
import Container from './Layout'
import ItemsToDisplay from './ItemsToDisplay'

const Nav = styled.nav`
  height: 50px;
  border-bottom: 1px solid #ccc;
  `

const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export default () => {
  return (
    <Nav>
      <Container>
        <NavContent>
          <ItemsToDisplay />
        </NavContent>
      </Container>
    </Nav>
  )
}