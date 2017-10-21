import React from 'react'
import Container from './Layout'
import Cards from './Cards'
import Navigation from './Navigation'

export default () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Cards />
      </Container>
    </div>
  )
}