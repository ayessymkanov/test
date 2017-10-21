import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import { signIn } from '../actions/creators'
import Layout from './Layout'

const Form = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  max-width: 100%;
`

const TextInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
`

const SubmitButton = styled.button`
  width: 100%;
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
`

class Component extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  } 
  handleChange = e => {
    e.preventDefault()
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  onSubmit = e => {
    e.preventDefault()
    this.props.signIn({ login: this.state.login, password: this.state.password })
  }
  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        <TextInput 
          type='text' 
          placeholder='Login'
          onChange={this.handleChange}
          value={this.state.login}
          name='login' />
        <TextInput 
          type='password' 
          placeholder='Password'
          onChange={this.handleChange}
          value={this.state.password}
          name='password' />
        <SubmitButton>Login</SubmitButton>
      </Form>
    )
  }
}

const mapStateToProps = ({ signedIn }) => {
  return { signedIn }
}

export default connect(mapStateToProps, { signIn })(Component)