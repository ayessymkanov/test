import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Container from './Layout'
import Cards from './Cards'
import Navigation from './Navigation'
import Login from './Login'

export default () => {
  return (
    <div>
      <Navigation />
      <Container>
        <Router>
          <div>
            <Route path='/login' component={Login} />
            <Route exact path='/' component={Cards} />
          </div>
        </Router>
      </Container>
    </div>
  )
}