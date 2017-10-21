import React from 'react'
import styled from 'styled-components'
import Container from './Layout'

const Nav = styled.nav`
  height: 50px;
  border-bottom: 1px solid #ccc;
  `

const NavContent = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Select = styled.select`

`

export default () => {
  return (
    <Nav>
      <Container>
        <NavContent>
          <Select>
            <option>5 items</option>
            <option>10 items</option>
            <option>20 items</option>
          </Select>
        </NavContent>
      </Container>
    </Nav>
  )
}